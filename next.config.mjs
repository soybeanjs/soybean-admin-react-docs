import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import nextra from 'nextra';

const withNextra = nextra({
  // ... Other Nextra config options
});

// eslint-disable-next-line n/prefer-global/process
if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

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

    config.cache = false; // 关闭缓存

    return config;
  }
});
