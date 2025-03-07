import { ColDef } from "ag-grid-community";
import {
  dateFormaterMMDDYYYY,
  dateValueGetter,
  decimalFormatter,
  fnComparator,
  fnComparatorDate,
  fnComparatorPha,
  phaFormatter,
} from "../utils";

export const columnDefs: ColDef[] = [
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
    valueFormatter: dateFormaterMMDDYYYY,
    valueGetter: dateValueGetter,
  },
  {
    field: "h_mag",
    headerName: "H (mag)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "h_mag"),
  },
  {
    field: "moid_au",
    headerName: "MOID (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "moid_au"),
  },
  {
    field: "q_au_1",
    headerName: "q (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "q_au_1"),
  },
  {
    field: "q_au_2",
    headerName: "Q (au)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "q_au_2"),
  },
  {
    field: "period_yr",
    headerName: "Period (yr)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "period_yr"),
  },
  {
    field: "i_deg",
    headerName: "Inclination (deg)",
    sortable: true,
    comparator: fnComparator,
    filter: "agNumberColumnFilter",
    valueGetter: (e) => decimalFormatter(e, "i_deg"),
  },
  {
    field: "pha",
    headerName: "Potentially Hazardous",
    sortable: true,
    comparator: fnComparatorPha,
    filter: "agTextColumnFilte",
    valueGetter: phaFormatter,
  },
  {
    field: "orbit_class",
    headerName: "Orbit Class",
    filter: "agTextColumnFilter",
    enableRowGroup: true,
  },
];
