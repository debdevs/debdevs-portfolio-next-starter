// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? '/' : undefined,
// }


module.exports = {
    async redirects() {
      return [
        {
          source: '/_next/',
          destination: '/:',
          permanent: false,
        },
      ]
    },
  }