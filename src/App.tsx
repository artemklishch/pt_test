import { Routes, Route, Navigate } from "react-router-dom";
import classes from "./App.module.scss";
import MainLayout from "./components/layouts/MainLayout";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { setBooksData } from "./store/booksSlice";
import routes from "./routes";
import HomePage from "./pages/HomePage";
import RVirtPage from "./pages/RVirtPage";
import CustomRPage from "./pages/CustomRPage";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setBooksData());
  }, [dispatch]);
  return (
    <div className={classes.App}>
      <MainLayout>
        <Routes>
          <Route path={routes.homeRoute} element={<HomePage />} />
          <Route path={routes.reactVirtualizedRoute} element={<RVirtPage />} />
          <Route path={routes.customRealization} element={<CustomRPage />} />
          <Route
            path="*"
            element={<Navigate to={routes.homeRoute} replace />}
          />
        </Routes>
      </MainLayout>
    </div>
  );
}

export default App;
