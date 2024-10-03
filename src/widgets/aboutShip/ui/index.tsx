import classes from "./index.module.scss";
import { useRef } from 'react';
import { useScroll, useTransform ,motion} from 'framer-motion';

const aboutShip = [
  {
    title: "Quote & Reservation",
    text: "Request a quote and make a reservation. You can do this by filling out our online form or contacting us directly at (865) 427-2353 . We'll need some information about your vehicle and the shipping destination to provide you with a detailed quote. Once you're happy with the quote, we'll require a small deposit to secure your spot on our schedule.",
  },
  {
    title: "Vehicle Pick-Up",
    text: "Once your reservation is confirmed, we will coordinate the pickup of your vehicle. Our team of expert drivers will arrive at the designated pickup location and carefully load your vehicle onto the trailer. We will also provide you with a detailed inspection report before and after pickup to ensure that your vehicle is in good condition.",
  },
  {
    title: "Vehicle Delivery",
    text: "Once your vehicle is loaded and on its way, we will provide you with regular updates on its progress. Our team will handle all the necessary paperwork and customs clearance to ensure a smooth and hassle-free delivery. When your vehicle reaches its destination, our team will unload it and perform another detailed inspection before releasing it to you.",
  },
];

export const AboutShip = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className={classes.aboutShipWrapper}>
      <motion.div className={"container"} ref={ref} style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}>
        <div>
          <h2 className={classes.aboutShipTitle}>
            Ship your vehicle in 3 easy steps
          </h2>
          {aboutShip.map((item, index) => (
            <div key={index} className={classes.aboutShipItem}>
              <h3 className={classes.aboutShipItemTitle}>
                {item.title}{" "}
                <span className={classes.aboutShipItemTitleStep}>
                (Step ${index + 1})
              </span>
              </h3>
              <p className={classes.aboutShipItemText}>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
