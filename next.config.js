// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? '/' : undefined,
// }


module.exports = {
    assetPrefix: '.',
    async rewrites(){
      return [
        {
          source: `https://638bc44161deba00085abd2d--profound-platypus-0f6614.netlify.app/_next/:path*`,
          destination: 'https://638bc44161deba00085abd2d--profound-platypus-0f6614.netlify.app/static/:path*'
        }
      ]
    }
  }