const path = require('path');
const glob = require('glob');

module.exports = {
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
            ,
            {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config
    },
    exportPathMap() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };
    },
    distDir: 'build'
}

// const cssLoaderConfig = require('@zeit/next-css/css-loader-config')
// module.exports = (nextConfig = {}) => {
//   return Object.assign({}, nextConfig, {
//     webpack(config, options) {
//       if (!options.defaultLoaders) {
//         throw new Error(
//           'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
//         )
//       }

//       const { dev, isServer } = options
//       const {
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         sassLoaderOptions = {}
//       } = nextConfig

//       options.defaultLoaders.sass = cssLoaderConfig(config, {
//         extensions: ['scss', 'sass'],
//         cssModules,
//         cssLoaderOptions,
//         postcssLoaderOptions,
//         dev,
//         isServer,
//         loaders: [
//           {
//             loader: 'sass-loader',
//             options: sassLoaderOptions
//           }
//         ]
//       })

//       config.module.rules.push(
//         {
//           test: /\.scss$/,
//           use: options.defaultLoaders.sass
//         },
//         {
//           test: /\.sass$/,
//           use: options.defaultLoaders.sass
//         }
//       )

//       if (typeof nextConfig.webpack === 'function') {
//         return nextConfig.webpack(config, options)
//       }

//       return config
//     },

//   })
// }

// module.exports = {
//   exportPathMap: () => {
//     return {
//       '/': { page: '/' },
//       '/about': { page: '/about' }
//     }
//   },
// }