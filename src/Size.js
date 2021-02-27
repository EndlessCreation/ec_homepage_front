import { useMediaQuery } from "react-responsive";

const device = {
  moblie: `(max-width: 767px)`,
  tablet: `(max-width: 1279px)`,
  laptop: `(max-width: 1920px)`,
};

export default { device };

export const UsePc = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1280px)",
  });
  return isPc;
};
export const UseTablet = () => {
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1279px)",
  });
  return isTablet;
};

export const UseMobile = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  return isMobile;
};