module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://gas-station-smoky.vercel.app/api/:path*',
          },
        ]
      },
  };