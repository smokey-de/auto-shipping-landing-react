import classes from "./index.module.scss";

const content = ["CARS", "SUVS", "TRUCKS", "MOTORCYCLES"];

export const ContentText = () => {
  return (
    <div>
      <h1 className={classes.contentTitle}>WE SHIP</h1>
      <div className={classes.content}>
        <ul className={classes.contentAnimation}>
          {content.map((item) => (
            <li key={item} className={classes.contentAnimationText}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
