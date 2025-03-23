import nextra from 'nextra';

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  typescript: {
    ignoreBuildErrors: true
  },
  webpack(config) {
    // rule.exclude doesn't work starting from Next.js 15
    const { test: _test, ...imageLoaderOptions } = config.module.rules.find(rule => rule.test?.test?.('.svg'));
    config.module.rules.push({
      oneOf: [
        {
          resourceQuery: /svgr/,
          use: ['@svgr/webpack']
        },
        imageLoaderOptions
      ],
      test: /\.svg$/
    });
    return config;
  }
});
