export const removeDuplicatesArray = (array: any[], key: string) => {
  return array.reduce((arr, item) => {
    const removed = arr.filter((i: any) => i[key] !== item[key]);
    return [...removed, item];
  }, []);
};
