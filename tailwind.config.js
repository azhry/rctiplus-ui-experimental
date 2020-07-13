// https://tailwindcss.com/docs/configuration/
const prefix = 'rcti-';

module.exports = {
    purge: {
        content: [
            './src/**/*.js'
        ],
        options: {
            whitelistPatterns: [
                /^grid-cols-/,
                /^rounded-r-/
            ]
        }
    },
    theme: {
        extend: {
            backgroundColor: {
                [`${prefix}main`]: '#282828',
                [`${prefix}dark`]: '#171717',
                [`${prefix}darker`]: '#1a1a1a',
                [`${prefix}default`]: '#3a3a3a',
                [`${prefix}primary`]: '#fa262f',
                [`${prefix}gold`]: '#ffe243',
                [`${prefix}silver`]: '#c4bcbc',
                [`${prefix}light`]: '#8f8f8f'
            },
            textColor: {
                [`${prefix}main`]: '#282828',
                [`${prefix}default`]: '#8f8f8f',
                [`${prefix}primary`]: '#fa262f',
                [`${prefix}info`]: '#02b2f1',
                [`${prefix}gold`]: '#ffe243',
                [`${prefix}dim-gray`]: '#676767',
                [`${prefix}link`]: '#02b2f1',
                [`${prefix}dark`]: '#171717'
            },
            placeholderColor: {
                [`${prefix}default`]: '#a8a8a8'
            },
            borderColor: {
                [`${prefix}default`]: '#979797',
                [`${prefix}primary`]: '#fa262f',
                [`${prefix}secondary`]: '#1a1a1a',
                [`${prefix}dark`]: '#171717',
                [`${prefix}gray`]: '#666666'
            },
            borderRadius: {
                [`${prefix}md-lg`]: '0.4375rem',
                [`${prefix}xl`]: '1rem'
            },
            borderWidth: {
                [`${prefix}1/2`]: '0.5px'
            },
            gradients: {
                [`${prefix}gd-default`]: ['to top', 'rgba(40, 40, 40, 0.65) 147%', '#424242'], // black
                [`${prefix}gd-primary`]: ['to bottom', 'rgba(40, 40, 40, 0)', 'rgba(40, 40, 40, 0.6) 18%', 'rgba(40, 40, 40, 0.87) 42%', '#282828 100%'],
                [`${prefix}gd-info`]: ['104deg', '#37a8da 2%', '#00628b 96%'], // blue
                [`${prefix}gd-info-rounded`]: ['142deg', '#4ac3e1 13%', '#2490bf 95%'],
                [`${prefix}gd-red`]: ['120deg', '#fa262f 18%', '#ff5971 87%'],
                [`${prefix}gd-bottom-menu`]: ['to bottom', 'rgba(40, 40, 40, 0)', 'rgba(40, 40, 40, 0.6) 18%', 'rgba(40, 40, 40, 0.87) 42%', '#282828 100%']
            },
            fontFamily: {
                [`${prefix}open-sans`]: ['Open Sans', 'sans-serif']
            },
            fontSize: { // this conversion is using 16px as base font size
                [`${prefix}t`]: '0.6875rem', // 11px
                [`${prefix}ts`]: '0.625rem', // 10px
                [`${prefix}xts`]: '0.5625rem', // 9px
                [`${prefix}xtxs`]: '0.5rem' // 8px
            },
            height: {
                [`${prefix}nav-menu`]: '60px'
            },
            padding: {
                [`${prefix}top`]: '47px',
                [`${prefix}bottom`]: '60px'
            },
            zIndex: {
                [`-${prefix}10`]: '-10'
            },
            margin: {
                [`${prefix}1/2`]: '0.08rem'
            }
        },
    },
    variants: {
        opacity: ['disabled']
    },
    plugins: [
        require('tailwindcss-plugins/gradients')
    ],
}
