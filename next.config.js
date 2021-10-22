const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    domains: [
      "raw.githubusercontent.com",
    ]
  },
}
