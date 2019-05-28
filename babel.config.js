module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    node: "current"
                },
                debug: true
            }
        ]
    ],
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        targets: {
                            node: "current"
                        },
                        debug: true
                    }
                ]
            ]
        }
    }
}