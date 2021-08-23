import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h3>Hey there ! </h3>
      <h2>That me , </h2>
      <h1> Joni ! </h1>
      <p>This is my first Project , that i did in React .</p>
      <p>
        I'm glad to say that although it was hard , i did it with a little (or
        big) help from Udemy course
      </p>
      <p>
        Have fun with moving around , adding some items to the cart , or just
        look at me .
      </p>
    </section>
  );
};

export default MealsSummary;
