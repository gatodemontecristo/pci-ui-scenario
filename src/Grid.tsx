import { AgGridReact } from "ag-grid-react";
import { ColDef, IRowNode } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const fnComparator = (
  valueA: string | undefined,
  valueB: string | undefined,
  nodeA: IRowNode<any>,
  nodeB: IRowNode<any>,
  isDescending: boolean
) => {
  if (!valueA) return isDescending ? -1 : 1;
  if (!valueB) return isDescending ? 1 : -1;

  const numA = parseFloat(valueA);
  const numB = parseFloat(valueB);

  return numA - numB;
};

const fnComparatorPha = (
  valueA: string,
  valueB: string,
  nodeA: IRowNode<any>,
  nodeB: IRowNode<any>,
  isDescending: boolean
) => {
  if (valueA === "") return isDescending ? -1 : 1;
  if (valueB === "") return isDescending ? 1 : -1;

  return valueA.localeCompare(valueB, undefined, { sensitivity: "base" });
};
const fnComparatorDate = (
  valueA: string,
  valueB: string,
  nodeA: IRowNode<any>,
  nodeB: IRowNode<any>,
  isDescending: boolean
) => {
  if (!valueA) return 1;
  if (!valueB) return -1;
  return new Date(valueA).getTime() - new Date(valueB).getTime();
};
const columnDefs: ColDef[] = [
  {
    field: "designation",
    headerName: "Designation",
    sortable: true,
    filter: "agTextColumnFilter",
  },
  {
    field: "discovery_date",
    headerName: "Discovery Date",
    sortable: true,
    filter: "agDateColumnFilter",
    comparator: fnComparatorDate,
    valueFormatter: (dateValue) => {
      if (!dateValue.value) return "";
      const date = new Date(dateValue.value);
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    },
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    comparator: fnComparatorPha,
    filter: "agTextColumnFilte",
    valueGetter: (phaValue) => {
      switch (phaValue.data.pha) {
        case "Y":
          return "Yes";
        case "N":
          return "No";
        default:
          return "";
      }
    },
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    filter: "agTextColumnFilter",
    enableRowGroup: true,
  },
];

const NeoGrid = (): JSX.Element => {
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 2000 }}>
      <p
        style={{
          width: "100vw",
          textAlign: "center",
          position: "sticky",
          zIndex: 10,
          left: 0,
          top: "auto",
        }}
      >
        Near-Earth Object Overview
      </p>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
      />
    </div>
  );
};

export default NeoGrid;
