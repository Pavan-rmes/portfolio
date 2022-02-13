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
          },
          animation: {
            "slide-in-fwd-center": "slide-in-fwd-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both"
            },
            keyframes: {
                "slide-in-fwd-center": {
                    "0%": {
                        transform: "translateZ(-1400px)",
                        opacity: "0"
                    },
                    to: {
                        transform: "translateZ(0)",
                        opacity: "1"
                    }
                }
            }
      }
  }
}