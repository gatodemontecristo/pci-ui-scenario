import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";

export const useReset = () => {
  const gridRef = useRef<AgGridReact>(null);

  const resetAll = () => {
    if (gridRef.current) {
      const api = gridRef.current.api;
      api.setFilterModel(null);
      api.resetColumnState();
    }
  };
  return { resetAll, gridRef };
};
