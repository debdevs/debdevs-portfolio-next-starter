// const isProd = process.env.NODE_ENV === 'production'

// module.exports = {
//   // Use the CDN in production and localhost for development.
//   assetPrefix: isProd ? '/' : undefined,
// }


module.exports = {
    assetPrefix: 'main--profound-platypus-0f6614.netlify.app',
    async rewrites(){
      return [
        {
          source: `${"/main--profound-platypus-0f6614.netlify.app"}/_next/:path*`,
          destination: '/_next/:path*'
        }
      ]
    }
  }