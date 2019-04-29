module.exports = {
    presets: [
        [
            'env',
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
                    'env',
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