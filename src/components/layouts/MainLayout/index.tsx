import { FC, ReactNode } from "react";
import classes from "./MainLayout.module.scss";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={classes.MainLayout}>
      <header className={classes.MainLayout__header}>
        Hello to our books shop!!
      </header>
      <main className={classes.MainLayout__main}>{children}</main>
      <footer className={classes.MainLayout__footer}>
        If you have any questions - please let us know
      </footer>
    </div>
  );
};

export default MainLayout;
