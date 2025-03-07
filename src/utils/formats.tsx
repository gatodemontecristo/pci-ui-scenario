import { ValueFormatterParams, ValueGetterParams } from "ag-grid-community";

export const dateFormaterMMDDYYYY = (
  dateValue: ValueFormatterParams<any, any>
) => {
  if (!dateValue.value) return "";
  const date = new Date(dateValue.value);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

export const phaFormatter = (phaValue: ValueGetterParams<any, any>): string => {
  switch (phaValue.data.pha) {
    case "Y":
      return "Yes";
    case "N":
      return "No";
    default:
      return "";
  }
};

export const decimalFormatter = (
  decimal: ValueGetterParams<any, any>,
  type: string
) => {
  const value = decimal.data[type];
  return value ? parseFloat(value) : null;
};

export const dateValueGetter = (dateValue: ValueGetterParams<any, any>) => {
  const value = dateValue.data?.discovery_date;
  return value ? new Date(value) : null;
};
