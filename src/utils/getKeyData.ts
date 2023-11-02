export const getKeyData = (data: any[], page: number, limit: number) => {
  return data?.map((result: any, index: number) => {
    result.key = index + ((page - 1) * limit + 1);
    return result;
  });
};
