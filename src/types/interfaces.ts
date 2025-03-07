import { IRowNode } from "ag-grid-community";

export interface SorterInterfaceProps {
  (
    valueA: string | undefined,
    valueB: string | undefined,
    nodeA: IRowNode<any>,
    nodeB: IRowNode<any>,
    isDescending: boolean
  ): any;
}

export interface GridTitleProps {
  resetAll: () => void;
}
