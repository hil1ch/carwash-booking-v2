export const trimValue = (value: string | undefined) => value?.trim();

export const normalizedSearchValue = (searchValue: string) => {
  return searchValue.trim().replace(/\s+/g, " ").toLocaleLowerCase();
};
