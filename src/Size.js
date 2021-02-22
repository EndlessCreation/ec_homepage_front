const size = {
  moblie: "767px",
  tablet: "1279px",
  laptop: "1920px",
};

const device = {
  moblie: `(max-width: ${size.moblie})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
};

export default { size, device };
