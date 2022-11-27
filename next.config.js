module.exports = {
    reactStrictMode: true,
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://gas-station-lemon.vercel.app/:path*',
          },
        ]
      },
  };