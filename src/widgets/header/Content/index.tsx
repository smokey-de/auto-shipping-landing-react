import clsx from "clsx";

import { BlurFade, ContentText } from "@/shared/ui";

import { Navbar } from "../Navbar";

import classes from "./index.module.scss";
import { PhoneSvg } from "@/shared/helpers/svg";
import { HeaderContentForm } from "@/features/headerContentForm";
import { useMediaQuery } from "@mantine/hooks";

const BLUR_FADE_DELAY = 0.06;

export const Content = () => {
  const matches = useMediaQuery("(min-width: 1044px)");

  return (
    <header className={classes.content}>
      <div className={"container"}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Navbar />
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div
            className={clsx(
              [classes.contentBody],
              "flex items-center justify-between gap-4"
            )}
          >
            {matches && (
              <div style={{ width: "50%" }}>
                <ContentText />
                <p className={classes.contentBodyText}>
                  Shipping vehicles is easy and affordable with Unique
                  Autoshipping LLC !
                </p>
                <div
                  className={clsx([
                    classes.contentBottomWrapper,
                    "flex gap-2 items-center",
                  ])}
                >
                  <span className={classes.contentBottomIcon}>
                    <PhoneSvg />
                  </span>
                  <div>
                    <p className={classes.contentBottomText}>
                      Call us for a custom car shipping quote
                    </p>
                    <a href={"tel: +1(917) 627-5498"}>
                      <h3 className={classes.contentBottomPhoneText}>
                        (917) 627-5498
                      </h3>
                    </a>
                    <a href={"tel: +1(865) 776-9121"}>
                      <h3 className={classes.contentBottomPhoneText}>
                        (865) 776-9121
                      </h3>
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div style={{ width: matches ? "50%" : "100%" }}>
              <HeaderContentForm />
            </div>
          </div>
        </BlurFade>
      </div>
    </header>
  );
};
