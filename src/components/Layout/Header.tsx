import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.scss";
import mealsImage from "../../assets/img/meals.jpg";

const Header = (props: any) => {
  return (
    <Fragment>
      <header className={classes.header}>
      <p className={classes.courierText}>Thien's Restaurant</p>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
