module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['"Exo 2"', 'sans-serif'],
      'display-alt': ['"Exo"', 'sans-serif'],
      sans: ['"Open Sans"', 'sans-serif'],
      mono: ['"Space Mono"', 'monospace']
    },

    extend: {
      colors: {
        orange: '#F15A29',
        teal: {
          DEFAULT: '#24B7AF',
          light: '#33ECEC'
        },
        gray: {
          DEFAULT: '#969696',
          '50': '#F2F2F2',
          '100': '#E8E8E8',
          '200': '#D3D3D3',
          '300': '#BFBFBF',
          '400': '#AAAAAA',
          '500': '#969696',
          '600': '#7A7A7A',
          '700': '#5E5E5E',
          '800': '#424242',
          '900': '#262626'
        }
      },
      fontSize: {
        heading1: '56px',
        heading2: '48px',
        heading3: '33px',
        heading5: '18px'
      },
      dropShadow: {
        'current-sm': '0 0 7px'
      }
    }
  }
}
