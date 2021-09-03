module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purpleShade: 
          
              {
                50: '#fee2ff',
                100: '#efb1ff',
                200: '#e37fff',
                300: '#d64cff',
                400: '#ca1aff',
                500: '#b000e6',
                600: '#8900b4',
                700: '#630081',
                800: '#3c0050',
                900: '#17001f',
              },
             

              navCol:
              
              {
                50: '#e9f0ff',
                100: '#c8d2eb',
                200: '#2B3148',
                300: '#8497c8',
                400: '#6179b7',
                500: '#48609e',
                600: '#374b7b',
                700: '#263559',
                800: '#162038',
                900: '#040b19',
              },

              myColor :
              
            {
              50: '#ffe2ec',
              100: '#ffb3c5',
              200: '#fc839f',
              300: '#f95278',
              400: '#f62252',
              500: '#dd0939',
              600: '#ad032c',
              700: '#7c001e',
              800: '#4d0012',
              900: '#200005',
            }

        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
