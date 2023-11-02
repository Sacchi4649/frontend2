import { Select, Form } from "antd";

import useDropdown from "./DropdownHooks";

const { Option } = Select;

interface DropdownProps {
  label: string;
  name: string;
  placeholder?: string;
  endpoint: string;
  disabled?: boolean;
  optionName: {
    label: string;
    value: string;
    isLabelAndValue?: boolean;
  };
  mode?: "multiple" | "tags";
  isGetDataFirst?: boolean;
  initialList?: object[];
  firstOption?: {
    label: string;
    value: any;
    isLabelAndValue?: boolean;
  };
  defaultValue?: any;
  rules?: any[];
  isQueryParams?: boolean;
  isDeleteHeaderUsername?: boolean;
  onSelect?: (data: any) => void;
  isResetList?: boolean;
  keyOfData: string;
}

const Dropdown = ({
  label: labelDropdown,
  name,
  placeholder,
  endpoint,
  disabled,
  optionName,
  mode,
  isGetDataFirst = false,
  initialList,
  firstOption,
  defaultValue,
  rules,
  isQueryParams = true,
  onSelect,
  isResetList = false,
  keyOfData,
}: DropdownProps) => {
  const {
    dataSource,
    loading,
    onFocus,
    getOnPopupScroll,
    notFoundContent,
    onSearch,
    onClearSearch,
  } = useDropdown(
    endpoint,
    isGetDataFirst,
    isQueryParams,
    keyOfData,
    initialList
  );
  const { label, value, isLabelAndValue } = optionName;

  const onSelectedData = (val: string | number) => {
    const selectedData = dataSource.find((data: any) => data[value] === val);
    onSelect && onSelect(selectedData);
  };

  return (
    <Form.Item label={labelDropdown} name={name} rules={rules}>
      <Select
        placeholder={placeholder}
        loading={loading}
        onPopupScroll={({ target }: any) => getOnPopupScroll(target)}
        onFocus={() => onFocus(isResetList)}
        showSearch
        optionFilterProp="children"
        disabled={disabled}
        allowClear
        mode={mode}
        notFoundContent={notFoundContent}
        onSearch={onSearch}
        onClear={onClearSearch}
        defaultValue={defaultValue}
        onSelect={onSelectedData}
      >
        {firstOption && (
          <Option key={firstOption?.value} value={firstOption?.value}>
            {firstOption?.isLabelAndValue && `${firstOption?.value} - `}{" "}
            {firstOption?.label}
          </Option>
        )}
        {dataSource.map((data: any, idx: number) => (
          <Option key={`${idx}`} value={data[value]}>
            {isLabelAndValue && `${data[value]} - `} {data[label]}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default Dropdown;
