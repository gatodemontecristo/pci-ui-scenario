import { SorterInterfaceProps } from "../types";

export const fnComparator: SorterInterfaceProps = (
  valueA,
  valueB,
  nodeA,
  nodeB,
  isDescending
) => {
  if (!valueA) return isDescending ? -1 : 1;
  if (!valueB) return isDescending ? 1 : -1;

  const numA = parseFloat(valueA);
  const numB = parseFloat(valueB);

  return numA - numB;
};

export const fnComparatorPha: SorterInterfaceProps = (
  valueA,
  valueB,
  nodeA,
  nodeB,
  isDescending
) => {
  if (!valueA) return isDescending ? -1 : 1;
  if (!valueB) return isDescending ? 1 : -1;
  if (valueA === "") return isDescending ? -1 : 1;
  if (valueB === "") return isDescending ? 1 : -1;

  return valueA.localeCompare(valueB, undefined, { sensitivity: "base" });
};

export const fnComparatorDate: SorterInterfaceProps = (
  valueA,
  valueB,
  nodeA,
  nodeB,
  isDescending
) => {
  if (!valueA) return 1;
  if (!valueB) return -1;
  return new Date(valueA).getTime() - new Date(valueB).getTime();
};
