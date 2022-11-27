/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            screens: {
                'sm': '640px',// => @media (min-width: 640px) { ... }
                'md': '768px',// => @media (min-width: 768px) { ... }
                'lg': '1024px',// => @media (min-width: 1024px) { ... }
                'xl': '1260px',// => @media (min-width: 1280px) { ... }
                '2xl': '1536px',// => @media (min-width: 1536px) { ... }
            },
            spacing: {
                '29': '7.5rem'
            },
            fontFamily: {
                'sans': ['"Sailec", sans-serif'],
                'mono': ['"DM Mono", sans-serif']
            },
            fontSize: {
                '2xs': '0.625rem'
            },
            lineHeight: {
                'xs-tight': '.75',
                'md-tight': '.9',
                'base': '1.75'
            },
            transitionTimingFunction: {
                'out-expo': 'cubic-bezier(0.19, 0.38, 0.05, 1)',
            },
            transitionDuration: {
                '400': '400ms',
                '600': '600ms',
                '800': '800ms'
            },
            transitionProperty: {
                'padding': 'padding'
            },
            transitionDelay: {
                '0': '0ms'
            },
            backgroundImage: {
                'dotted': 'url("../img/dotts.svg")'
            },
            width: {
                '15': '3.75rem'
            }
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
}