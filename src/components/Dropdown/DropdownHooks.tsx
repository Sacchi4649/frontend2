import { useState, useEffect } from "react";
import { Spin, Empty } from "antd";
import Message from "../../utils/message";
import { fetcher } from "../../hooks/useAxios";

const useDropdown = (
  endpoint: string,
  isGetDataFirst: boolean,
  isQueryParams: boolean,
  keyOfData: string,
  initialList?: object[]
) => {
  const [dataSource, setDataSource] = useState<object[]>([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    nextPage: null,
    prevPage: null,
    search__icontains: "",
  });

  const { errorMessage } = Message();

  useEffect(() => {
    initialList && setDataSource(initialList);
    isGetDataFirst && fetchData();
  }, []);

  const fetchData = async (
    fetchParams?: any,
    isSearch?: boolean
  ): Promise<void> => {
    setLoading(true);
    const newParams = fetchParams || params;

    const request = {
      method: "get",
      params: isQueryParams && newParams,
    };

    try {
      const response = await fetcher(endpoint, request);
      if (response) {
        const { data } = response;
        const { per_page, page, total_data } = data?.pagination || {};
        const newData = isSearch
          ? keyOfData && data[keyOfData]
          : [...dataSource, ...data[keyOfData]];
        console.log(response?.data[keyOfData]);
        setDataSource(newData);
        setParams({
          ...newParams,
          limit: per_page,
          page,
          total_data,
        });
      }
    } catch (error) {
      setLoading(false);
      errorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  const onFocus = (isResetList: boolean): void => {
    const isEmptyData = dataSource.length === 0;

    if (isEmptyData || isResetList) {
      const newParams = {
        limit: 10,
        page: 1,
        search__icontains: "",
      };

      fetchData(newParams, true);
    }
  };

  const getOnPopupScroll = (target: any): void => {
    const endOfScroll =
      target.offsetHeight + target.scrollTop >= target.scrollHeight;
    const isNextPage = !!params.nextPage;

    if (endOfScroll && isNextPage) {
      const newParams = { ...params, page: params.page + 1 };
      setParams(newParams);
      fetchData(newParams);
    }
  };

  const notFoundContent = loading ? (
    <Spin className="u-flex u-justify-center u-m2" />
  ) : (
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  );

  const onSearch = (value: string) => {
    const newParams = { ...params, page: 1, search__icontains: value };

    fetchData(newParams, true);
  };

  const onClearSearch = () => {
    const searchParams = {
      limit: 10,
      page: 1,
    };

    fetchData(searchParams, true);
  };

  return {
    dataSource,
    loading,
    onFocus,
    getOnPopupScroll,
    notFoundContent,
    onSearch,
    onClearSearch,
  };
};

export default useDropdown;
