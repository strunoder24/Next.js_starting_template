const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: '[local]___[hash:base64:5]',
    },

    webpack: config => {
        config.module.rules.forEach(rule => {
            if (rule.test.toString().includes('.sass')) {
                rule.rules = rule.use.map(useRule => {
                    if (typeof useRule === 'string') {
                        return { loader: useRule };
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
});