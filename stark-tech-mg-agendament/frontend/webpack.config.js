module.exports = {
    resolve: {
        fallback: {
            // Adicione as resoluções de fallback aqui
        }
    }
    // Adicione outras configurações do webpack conforme necessário
};
resolve: {
    fallback: {
        util: require.resolve("util/"),
            fs: false,
                stream: require.resolve("stream-browserify"),
                    zlib: require.resolve("browserify-zlib"),
                        http: require.resolve("stream-http"),
                            https: require.resolve("https-browserify"),
                                os: require.resolve("os-browserify/browser"),
                                    constants: require.resolve("constants-browserify"),
  },
},
