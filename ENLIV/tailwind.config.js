const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const Color = require('color')

module.exports = {
  content: ['public/**/*.html'],
  purge: false,
  theme: {
    themeVariants: ['dark'],
    customForms: (theme) => ({
      default: {
        'input, textarea': {
          '&::placeholder': {
            color: theme('colors.gray.400'),
          },
        },
      },
    }),

    fontSize: {
      'xs': ['.75rem', { 
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
      'sm': ['.875rem',{
        lineheight: '1.25rem',
        letterSpacing: '1px',
      }],
      'base': ['1rem',{
        lineheight: '1.5rem',
        letterSpacing: '1px',
      }],
      'lg': ['1.125rem',{
        lineheight: '1.75rem',
        letterSpacing: '1px',
      }],
      'xl': ['1.25rem',{
        lineheight: '1.75rem',
        letterSpacing: '1px',
      }],
      '2xl': ['1.5rem',{
        lineheight: '2rem',
        letterSpacing: '1px',
      }],
      '3xl': ['1.875rem',{
        lineheight: '2.25rem',
        letterSpacing: '1px',
      }],
      '4xl': ['2.25rem',{
        lineheight: '2.5rem',
        letterSpacing: '1px',
      }],
      '5xl': ['3rem',{
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
      '6xl': ['3.75rem',{
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
      '7xl': ['4.5rem',{
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
      '8xl': ['6rem',{
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
      '9xl': ['8rem',{
        lineheight: '1rem',
        letterSpacing: '1px',
      }],
     
    },
    
    
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#03191E',
      red: '#F07167',
      yellow: '#ffc53b',
      
      greenYellow: '#BEC67F',
      'beau-blue': '#C1CFDA',
      // 
      button: '#DE6D4B',
      buttonActive: '#B94623',
      buttonHover: '#DA7354',
      // 
      gray: {
        '50': '#f9f9f9',
        '100': '#E3E3E3',
        '200': '#C7C7C7',
        '300': '#B9B9B9',
        '400': '#ABABAB',
        '500': '#737373',
        '600': '#656565',
        '700': '#575757',
        '800': '#494949',
        '900': '#3A3A3A',
      },
      'greenYellow': {
        '50': '#F1F2E3',
        '100': '#DBDFB9',
        '200': '#c4cb8b',
        '300': '#c5cc8e',
        '400': '#C2C987',
        '500': '#BEC67F',
        '600': '#b7c072',
        '700': '#AFB964',
        '800': '#848D3F',
        '900': '#5C632C',
      },
      red: {
        '50': '#C1CFDA',
        '100': '#e57688',
        '200': '#DE546B',
        '300': '#d8314d',
        '400': '#F07167',
        '500': '#CF2642',
        '600': '#be233d',
        '700': '#AC2037',
        '800': '#8A192C',
        '900': '#56101C',
      },
      orange: {
        '50': '#F9E3DD',
        '100': '#F4D1C7',
        '200': '#EFBEB0',
        '300': '#E49882',
        '400': '#DA7354',
        '500': '#CF4D26',
        '600': '#B94623',
        '700': '#A23E20',
        '800': '#8C371D',
        '900': '#752f1a',
      },
      yellow: {
        '50': '#FDFCDC',
        '100': '#FEEFB4',
        '200': '#FEE18C',
        '300': '#fee8a0',
        '400': '#FFD364',
        '500': '#FFC53B',
        '600': '#FFBC1F',
        '700': '#F5AB00',
        '800': '#CC8F00',
        '900': '#A37200',
      },
      // 

      green: {
        '50': '#f3faf7',
        '100': '#def7ec',
        '200': '#bcf0da',
        '300': '#84e1bc',
        '400': '#31c48d',
        '500': '#0e9f6e',
        '600': '#057a55',
        '700': '#046c4e',
        '800': '#03543f',
        '900': '#014737',
      },
      teal: {
        '50': '#edfafa',
        '100': '#d5f5f6',
        '200': '#afecef',
        '300': '#7edce2',
        '400': '#16bdca',
        '500': '#0694a2',
        '600': '#047481',
        '700': '#036672',
        '800': '#05505c',
        '900': '#014451',
      },
      blue: {
        '50': '#ebf5ff',
        '100': '#e1effe',
        '200': '#c3ddfd',
        '300': '#a4cafe',
        '400': '#76a9fa',
        '500': '#3f83f8',
        '600': '#1c64f2',
        '700': '#1a56db',
        '800': '#1e429f',
        '900': '#233876',
      },
      indigo: {
        '50': '#f0f5ff',
        '100': '#e5edff',
        '200': '#cddbfe',
        '300': '#b4c6fc',
        '400': '#8da2fb',
        '500': '#6875f5',
        '600': '#5850ec',
        '700': '#5145cd',
        '800': '#42389d',
        '900': '#362f78',
      },
      purple: {
        '50': '#f6f5ff',
        '100': '#edebfe',
        '200': '#dcd7fe',
        '300': '#cabffd',
        '400': '#ac94fa',
        '500': '#9061f9',
        '600': '#7e3af2',
        '700': '#6c2bd9',
        '800': '#5521b5',
        '900': '#4a1d96',
      },
      pink: {
        '50': '#fdf2f8',
        '100': '#fce8f3',
        '200': '#fad1e8',
        '300': '#f8b4d9',
        '400': '#f17eb8',
        '500': '#e74694',
        '600': '#d61f69',
        '700': '#bf125d',
        '800': '#99154b',
        '900': '#751a3d',
      },
    },
    extend: {
      minHeight: {
        '60vh': '60vh',
        '80vh': '80vh',
      },
      maxHeight: {
        '0': '0',
        xl: '36rem',
      },
      fontFamily: {
        sans: ['Work Sans','Noto Sans TC','sans-serif',...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'bg1': "url('~/assets/img/global/bg-1.jpg')",
        'bg2': "url('~/assets/img/global/bg-2.jpg')",
        'bg3': "url('~/assets/img/global/bg-3.png')",
        
      }
      
    },
  },
  variants: {
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'odd',
      'dark',
     
    ],
    display: ['responsive', 'dark'],
    textColor: [
      'focus-within',
      'hover',
      'active',
      'dark',
      
    ],
    placeholderColor: ['focus', 'dark'],
    borderColor: ['focus', 'hover', 'dark'],
    divideColor: ['dark'],
    boxShadow: ['focus'],
  },
  plugins: [
    require('tailwindcss-multi-theme'),
    require('@tailwindcss/custom-forms'),
    
    plugin(({ addUtilities, e, theme, variants }) => {
      const newUtilities = {}
      Object.entries(theme('colors')).map(([name, value]) => {
        if (name === 'transparent' || name === 'current') return
        const color = value[300] ? value[300] : value
        const hsla = Color(color).alpha(0.45).hsl().string()

        newUtilities[`.shadow-outline-${name}`] = {
          'box-shadow': `0 0 0 3px ${hsla}`,
        }
      })

      addUtilities(newUtilities, variants('boxShadow'))
      
      
    }),
  ],
}
