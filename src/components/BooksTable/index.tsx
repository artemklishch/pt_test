import { FC, useEffect, useRef, useState } from "react";
import classes from "./BooksTable.module.scss";
import { Table, Column } from "react-virtualized";
import Book from "../../models/book.model";
import { useAppSelector } from "../../store/hooks";
import { booksState } from "../../store/booksSlice";

interface TableSizesData {
  height: number;
  width: number;
}
const BooksTable: FC = () => {
  const books = useAppSelector(booksState);
  const booksDataArray: Book[] = books.booksData;
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableSizesData, setTableSizesData] = useState<TableSizesData>({
    height: 0,
    width: 0,
  });
  const getTableHeight = () => {
    const tableSizes = tableRef.current!.getBoundingClientRect();
    setTableSizesData({ height: tableSizes.height, width: tableSizes.width });
  };
  useEffect(() => {
    getTableHeight();
    window.addEventListener("resize", getTableHeight);
    return () => window.removeEventListener("resize", getTableHeight);
  }, []);

  return (
    <div className={classes.BooksTable} ref={tableRef}>
      <Table
        width={tableSizesData.width}
        height={tableSizesData.height}
        headerHeight={40}
        rowHeight={80}
        rowCount={booksDataArray.length}
        rowGetter={({ index }) => booksDataArray[index]}
        rowClassName={classes.BooksTable__table_row}
        gridClassName={classes.BooksTable__table_grid}
      >
        <Column
          label="№"
          dataKey="index"
          cellRenderer={(props) => props.rowIndex + 1}
          width={50}
        />
        <Column label="Book Name" dataKey="bookName" width={200} />
        <Column label="Book Price" dataKey="bookPrice" width={200} />
      </Table>
    </div>
  );
};

export default BooksTable;
