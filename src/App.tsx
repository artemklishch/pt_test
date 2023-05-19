import classes from "./App.module.scss";
import MainLayout from "./components/layouts/MainLayout";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { setBooksData } from "./store/booksSlice";
import BooksTable from "./components/BooksTable";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBooksData());
  }, [dispatch]);
  return (
    <div className={classes.App}>
      <MainLayout>
        <BooksTable />
      </MainLayout>
    </div>
  );
}

export default App;
