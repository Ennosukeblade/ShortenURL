module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: {
        "tn-desert": "url('../src/img/ariel-pilotto-ZeXAR8wGEkQ-unsplash.jpg')",
        "tn-desert-rally":
          "url('../src/img/sz-marton-YB_EPkLDkqU-unsplash.jpg')",
        "tn-mosk-okba":
          "url('../src/img/haythem-gataa-qj46--C16fs-unsplash.jpg')",
        "tn-ain-draham":
          "url('../src/img/iheb-photographie-bhpSATY0vHM-unsplash.jpg')",
        "stacked":
          "url('../src/img/stacked-bg.svg')",
      },
    },
    fontFamily: {
      pacifico: ["Pacifico"],
      passion: ["Passion One"],
      poppins: ['Poppins'],
      lora:['Lora'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
