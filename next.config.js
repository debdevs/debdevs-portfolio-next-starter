// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? '/' : undefined,
// }


module.exports = {
    assetPrefix: './',
    async rewrites(){
      return [
        {
          assetPrefix:'./',
          source: `/_next/:path*`,
          destination: '/:path*'
        }
      ]
    }
  }