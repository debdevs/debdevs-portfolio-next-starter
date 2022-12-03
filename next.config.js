// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? '/' : undefined,
// }


module.exports = {
    assetPrefix: BASE_PREFIX_FOR_APP,
    async rewrites(){
      return [
        {
          source: `${BASE_PREFIX_FOR_APP}/_next/:path*`,
          destination: '_next/:path*'
        }
      ]
    }
  }