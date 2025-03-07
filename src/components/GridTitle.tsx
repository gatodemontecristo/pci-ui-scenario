import { GridTitleProps } from "../types";

export const GridTitle = ({ resetAll }: GridTitleProps) => {
  return (
    <div className="title-grid">
      <p>Near-Earth Object Overview</p>
      <button onClick={resetAll}>Clear Filters and Sorters</button>
    </div>
  );
};
