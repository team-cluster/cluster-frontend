import ColumnTitle from "./columnTitle";
import ColumnList from "./columnList";

export default function Column() {
  return (
    <div className="column-wrapper">
      <ColumnTitle />
      <ColumnList />
    </div>
  );
}
