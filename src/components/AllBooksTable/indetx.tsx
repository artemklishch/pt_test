import { FC, useEffect, useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { BooksState, booksState } from "../../store/booksSlice";
import classes from "./AllBooksTable.module.scss";
import { ITEM_HEIGHT } from "../../utils/constants";
import { renderNewItems } from "../../utils/renderNewItems";

const AllBooksTable: FC = () => {
  const { renderedItems, booksData }: BooksState = useAppSelector(booksState);
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const onScrollHandler = (): void => {
    if (listRef.current) {
      const topPos: number = mainRef.current?.scrollTop || 0;
      renderNewItems(topPos, listRef.current, booksData);
    }
  };
  useEffect(() => {
    const wrapperHeight = ITEM_HEIGHT * booksData.length;
    containerRef.current!.style.height = wrapperHeight + "px";
  }, [booksData.length]);
  return (
    <div className={classes.AllBooksTable}>
      <h1 className={classes.AllBooksTable__title}>Our books</h1>
      <header className={classes.AllBooksTable__header}>
        <span>№</span>
        <span>Book Name</span>
        <span>Book Price</span>
      </header>

      <main
        className={classes.AllBooksTable__box}
        onScroll={onScrollHandler}
        ref={mainRef}
      >
        <div className={classes.AllBooksTable__box_wrapper} ref={containerRef}>
          <ul className={classes.itemsList} ref={listRef}>
            {renderedItems.map((item) => (
              <li
                key={item.id}
                className={classes.itemsList__item}
                style={{ height: ITEM_HEIGHT }}
              >
                <span>{item.index}</span>
                <span>{item.bookName}</span>
                <span>{item.bookPrice}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AllBooksTable;
