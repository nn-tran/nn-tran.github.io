const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
    ]
  },
  assetPrefix: !debug ? '/portfolio/' : '',
}
