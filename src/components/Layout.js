import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      {/* Nav Component */}
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>
          {/* Props from Home Component */}
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
