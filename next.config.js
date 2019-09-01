const path = require('path');
const sass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

nextConfig = {
    webpack: config => {
        //Алиасы для более удобного импорта
        config.resolve.alias['~'] = path.resolve(__dirname);
        config.resolve.alias['~c'] = path.resolve(__dirname, 'components');
        config.resolve.alias['~s'] = path.resolve(__dirname, 'store');
        config.resolve.alias['~p'] = path.resolve(__dirname, 'pages');
        config.resolve.alias['~h'] = path.resolve(__dirname, 'helpers');

        //Настройка стилей
        config.module.rules.forEach(rule => {
            if (rule.test.toString().includes('.sass')) {
                rule.rules = rule.use.map(useRule => {
                    if (typeof useRule === 'string') {
                        return {loader: useRule};
                    }

                    if (useRule.loader.startsWith('css-loader')) {
                        return {
                            oneOf: [
                                {
                                    test: new RegExp('.module.sass$'),
                                    loader: useRule.loader,
                                    options: useRule.options
                                },
                                {
                                    loader: useRule.loader,
                                    options: {},
                                },
                            ],
                        };
                    }
                    return useRule;
                });
                delete rule.use;
            }
        });
        return config;
    },
};

module.exports = withPlugins([
    [sass, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 2,
            localIdentName: '[local]___[hash:base64:5]',
        },
    }],
], nextConfig);