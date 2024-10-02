import classes from "./index.module.scss";
import {
  ArrowRightSvg,
  PersonSvg,
  StarSvgPure,
  TimeSvg,
  VehicleSvg,
} from "@/shared/helpers/svg";
import { useMediaQuery } from "@mantine/hooks";
import { Flex } from "@mantine/core";

const statistics = [
  {
    text: "Clients served",
    count: 400,
    icon: PersonSvg,
  },
  {
    text: "Vehicles shipped",
    count: 500,
    icon: VehicleSvg,
  },
  {
    text: "Online reviews",
    count: 120,
    icon: StarSvgPure,
  },
  {
    text: "Year in operation",
    count: 1,
    icon: TimeSvg,
  },
];

const whyList = [
  "Experienced and knowledgeable team: With over one year in the industry, we have the expertise to handle your car shipping needs.",
  "Reliable and safe shipping: Our state-of-the-art trailers and experienced drivers ensure your vehicle arrives safely and on time.",
  "Affordable prices: We offer competitive pricing with no hidden fees, ensuring that you get the best value for your money.",
  "Nationwide coverage: We offer car transportation services across all 50 states including Hawaii and Alaska , so you can trust us to handle your vehicle shipping needs, no matter where you are located.",
  "24/7 Customer-focused service: Our top priority is ensuring customer satisfaction, and we take pride in providing a high level of customer service every step of the way.",
  "Flexible shipping options: We offer open and enclosed trailers, door-to-door and terminal-to-terminal services to meet your specific needs.",
  "Insured transport: Your vehicle is fully insured during transport, giving you peace of mind.",
  "Modern technology: Our real-time tracking system allows you to monitor the progress of your vehicle at any time, providing added transparency and convenience.",
];

export const WhyChoose = () => {
  const matches = useMediaQuery("(min-width: 1044px)");

  return (
    <section className={classes.whyChooseWrapper}>
      <div className={"container"}>
        <h2 className={classes.whyChooseTitle}>
          Ship your vehicle in 3 easy steps
        </h2>

        <Flex
          gap={"1rem"}
          direction={
            matches ? "row" : ("column" as React.CSSProperties["flexDirection"])
          }
          mb={"2rem"}
        >
          {statistics.map((item, index) => (
            <div className={classes.rateCard} key={index}>
              <div>
                <item.icon />
              </div>
              <div className={classes.rateCardText}>
                <p>{item.count}+</p>
                <h2>{item.text}</h2>
              </div>
              <div>
                <ArrowRightSvg />
              </div>
            </div>
          ))}
        </Flex>

        <ul>
          {whyList.map((item, index) => (
            <li key={index} className={classes.whyChooseItem}>
              <span>{index + 1}</span>
              <div>{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
