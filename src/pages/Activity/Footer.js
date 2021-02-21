import { useMediaQuery } from 'react-responsive'
import FooterPC from './organisms/FooterPC';
import FooterMobile from './organisms/FooterMobile';
import FooterTablet from './organisms/FooterTablet';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  

  function Footer() {
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
  
  export default Footer;

