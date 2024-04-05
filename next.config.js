/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // 注意：不要修改输入的 webpack 配置中的插件，除非你知道你在做什么
    //     // 添加对私有类字段的支持
    //     config.module.rules.push({
    //       test: /\.+(js|jsx|ts|tsx)$/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['next/babel'],
    //           plugins: [
    //             ['@babel/plugin-proposal-private-methods', { loose: true }],
    //             ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    //             ['@babel/plugin-proposal-class-properties', { loose: true }]
    //           ]
    //         }
    //       }
    //     });
    
    //     // 重要：返回修改后的配置
    //     return config;
    //   },
    
};

module.exports = nextConfig;
