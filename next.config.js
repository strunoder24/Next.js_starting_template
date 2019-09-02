const path = require('path');
const sass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

require('./helpers/hash_function');

nextConfig = {
    webpack: config => {
        //Алиасы для более удобного импорта
        config.resolve.alias['~'] = path.resolve(__dirname);
        config.resolve.alias['~c'] = path.resolve(__dirname, 'components');
        config.resolve.alias['~s'] = path.resolve(__dirname, 'store');
        config.resolve.alias['~p'] = path.resolve(__dirname, 'pages');
        config.resolve.alias['~h'] = path.resolve(__dirname, 'helpers');

        return config;
    },
};

module.exports = withPlugins([
    [sass, {
        cssModules: true,
        cssLoaderOptions: {
            getLocalIdent: (loaderContext, _, localName) => {
                const fileName = path.basename(loaderContext.resourcePath);

                if (/\.module\.sass$/.test(fileName)) {
                    const uniq = loaderContext.resourcePath.hashCode();
                    return `${localName}__${uniq}`;
                }

                return localName;
            },
        },
    }]
], nextConfig);