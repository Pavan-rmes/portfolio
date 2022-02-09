module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          animation: {
              "slide-in-bottom": "slide-in-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940)    "
          },
          keyframes: {
              "slide-in-bottom": {
                  "0%": {
                      transform: "translateY(1000px)",
                      opacity: "0"
                  },
                  to: {
                      transform: "translateY(0)",
                      opacity: "1"
                  }
              }
          }
      }
  }
}