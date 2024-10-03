import logo from "@/shared/assets/logo.png";

import classes from "./index.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { ContentText } from "@/shared/ui";
import { routeHistory } from '@/shared/config/routing/historyRouter';
import { routePaths } from '@/shared/config/routing';
export const Navbar = () => {
  const matches = useMediaQuery("(min-width: 1044px)");

  return (
    <div className="flex items-center gap-3 pt-4 pb-4 cursor-pointer"   onClick={() =>
      routeHistory.push(routePaths.root)}>
      <div className={classes.navbarLogo}>
        <img src={logo as string} alt="" />
      </div>
      <div>
        {matches ? (
          <h3 className={classes.logoTitle}>UNIQUE AUTO SHIPPING</h3>
        ) : (
          <ContentText />
        )}
      </div>
    </div>
  );
};
