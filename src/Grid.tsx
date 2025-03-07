import { AgGridReact } from "ag-grid-react";

import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { columnDefs } from "./constants";
import { useReset } from "./hook";
import { GridTitle } from "./components";

const NeoGrid = (): JSX.Element => {
  const { resetAll, gridRef } = useReset();
  return (
    <div className="ag-theme-alpine container-grid">
      <GridTitle resetAll={resetAll} />
      <AgGridReact
        ref={gridRef}
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={"always"}
        // cellSelection={true}
        // copyHeadersToClipboard={true}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      />
    </div>
  );
};
// Is not posible use the clipboard funcionality becaouse is exclusive
// for the enterprise version
//https://www.ag-grid.com/react-data-grid/clipboard/

export default NeoGrid;
