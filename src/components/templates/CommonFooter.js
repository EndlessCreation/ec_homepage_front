import { useMediaQuery } from "react-responsive";
import FooterPC from "../organisms/CommonFooterPC";
import FooterMobile from "../organisms/CommonFooterMobile";
import FooterTablet from "../organisms/CommonFooterTablet";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

function CommonFooter() {
  return (
    <>
      <Desktop>
        <FooterPC></FooterPC>
      </Desktop>

      <Tablet>
        <FooterTablet></FooterTablet>
      </Tablet>

      <Mobile>
        <FooterMobile></FooterMobile>
      </Mobile>
    </>
  );
}

export default CommonFooter;
