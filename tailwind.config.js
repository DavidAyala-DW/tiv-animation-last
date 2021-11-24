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
        }
      },
      fontSize: {
        heading1: '56px'
      },
      dropShadow: {
        'current-sm': '0 0 7px'
      },
      grid: {}
    }
  }
}
