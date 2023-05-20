import { FC } from "react";
import classes from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <div className={classes.HomePage}>
      <div className={classes.HomePage__wrapper}>
        <h1 className={classes.HomePage__wrapper_title}>
          Hello! These are long lists realizations!
        </h1>
        <section className={classes.HomePage__wrapper_description}>
          <p className={classes.text}>
            There are two versions of realizations of lists: 1) first option is
            realized with 'react-virtualized' library; 2) second option is
            realizd with the similar approach, but it was made customly, without
            extra library.
          </p>
          <p className={classes.text}>
            The essence of the realization: program doen't send all array of
            data to the rendering as it is made in React via 'map' JavaScript
            method. The program takes the all array of data and crops from that
            its part of some not big number of items, and they upload themselves
            in faster way.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
