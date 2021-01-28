
const size = {
    moblie: '360px',
    tablet: '768px',
    laptop: '1920px'
}

const device = {
    moblie: `(max-width: ${size.moblie})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`
}

export default {size, device}