const tailwindcss = require('tailwindcss');

module.exports = {
    plugins:
        [
            // 'tailwindcss', 
            tailwindcss('./tailwind.config.js'),
            'postcss-preset-env'
        ],
}