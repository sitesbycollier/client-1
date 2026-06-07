/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-border-default-default": "var(--color-border-default-default)",
        "color-primitives-brand-100": "var(--color-primitives-brand-100)",
        "color-primitives-gray-300": "var(--color-primitives-gray-300)",
        "color-primitives-gray-400": "var(--color-primitives-gray-400)",
        "color-primitives-gray-900": "var(--color-primitives-gray-900)",
        "color-text-brand-on-brand": "var(--color-text-brand-on-brand)",
        "color-text-default-default": "var(--color-text-default-default)",
        "color-text-default-tertiary": "var(--color-text-default-tertiary)",
        "colorwheelprimitives-1-accent-BLUE":
          "var(--colorwheelprimitives-1-accent-BLUE)",
        "colorwheelprimitives-1-color-duplicate":
          "var(--colorwheelprimitives-1-color-duplicate)",
        "colorwheelprimitives-1-grey-100":
          "var(--colorwheelprimitives-1-grey-100)",
        "colorwheelprimitives-1-grey-200":
          "var(--colorwheelprimitives-1-grey-200)",
        "colorwheelprimitives-1-grey-300":
          "var(--colorwheelprimitives-1-grey-300)",
        "colorwheelprimitives-1-grey-400":
          "var(--colorwheelprimitives-1-grey-400)",
        "colorwheelprimitives-1-grey-500":
          "var(--colorwheelprimitives-1-grey-500)",
        "colorwheelprimitives-1-grey-600":
          "var(--colorwheelprimitives-1-grey-600)",
        "colorwheelprimitives-1-grey-700":
          "var(--colorwheelprimitives-1-grey-700)",
        "colorwheelprimitives-1-grey-base":
          "var(--colorwheelprimitives-1-grey-base)",
        "colorwheelprimitives-1-LOGO-COLOR-PRIM":
          "var(--colorwheelprimitives-1-LOGO-COLOR-PRIM)",
        "colorwheelprimitives-1-octonary-100":
          "var(--colorwheelprimitives-1-octonary-100)",
        "colorwheelprimitives-1-octonary-200":
          "var(--colorwheelprimitives-1-octonary-200)",
        "colorwheelprimitives-1-octonary-300":
          "var(--colorwheelprimitives-1-octonary-300)",
        "colorwheelprimitives-1-octonary-400":
          "var(--colorwheelprimitives-1-octonary-400)",
        "colorwheelprimitives-1-octonary-500":
          "var(--colorwheelprimitives-1-octonary-500)",
        "colorwheelprimitives-1-octonary-600":
          "var(--colorwheelprimitives-1-octonary-600)",
        "colorwheelprimitives-1-octonary-700":
          "var(--colorwheelprimitives-1-octonary-700)",
        "colorwheelprimitives-1-octonary-base":
          "var(--colorwheelprimitives-1-octonary-base)",
        "colorwheelprimitives-1-primary-100":
          "var(--colorwheelprimitives-1-primary-100)",
        "colorwheelprimitives-1-primary-200":
          "var(--colorwheelprimitives-1-primary-200)",
        "colorwheelprimitives-1-primary-300":
          "var(--colorwheelprimitives-1-primary-300)",
        "colorwheelprimitives-1-primary-400":
          "var(--colorwheelprimitives-1-primary-400)",
        "colorwheelprimitives-1-primary-500":
          "var(--colorwheelprimitives-1-primary-500)",
        "colorwheelprimitives-1-primary-600":
          "var(--colorwheelprimitives-1-primary-600)",
        "colorwheelprimitives-1-primary-700":
          "var(--colorwheelprimitives-1-primary-700)",
        "colorwheelprimitives-1-primary-base":
          "var(--colorwheelprimitives-1-primary-base)",
        "colorwheelprimitives-1-quaternary-100":
          "var(--colorwheelprimitives-1-quaternary-100)",
        "colorwheelprimitives-1-quaternary-200":
          "var(--colorwheelprimitives-1-quaternary-200)",
        "colorwheelprimitives-1-quaternary-300":
          "var(--colorwheelprimitives-1-quaternary-300)",
        "colorwheelprimitives-1-quaternary-400":
          "var(--colorwheelprimitives-1-quaternary-400)",
        "colorwheelprimitives-1-quaternary-500":
          "var(--colorwheelprimitives-1-quaternary-500)",
        "colorwheelprimitives-1-quaternary-600":
          "var(--colorwheelprimitives-1-quaternary-600)",
        "colorwheelprimitives-1-quaternary-700":
          "var(--colorwheelprimitives-1-quaternary-700)",
        "colorwheelprimitives-1-quaternary-base":
          "var(--colorwheelprimitives-1-quaternary-base)",
        "colorwheelprimitives-1-quinary-100":
          "var(--colorwheelprimitives-1-quinary-100)",
        "colorwheelprimitives-1-quinary-200":
          "var(--colorwheelprimitives-1-quinary-200)",
        "colorwheelprimitives-1-quinary-300":
          "var(--colorwheelprimitives-1-quinary-300)",
        "colorwheelprimitives-1-quinary-400":
          "var(--colorwheelprimitives-1-quinary-400)",
        "colorwheelprimitives-1-quinary-500":
          "var(--colorwheelprimitives-1-quinary-500)",
        "colorwheelprimitives-1-quinary-600":
          "var(--colorwheelprimitives-1-quinary-600)",
        "colorwheelprimitives-1-quinary-700":
          "var(--colorwheelprimitives-1-quinary-700)",
        "colorwheelprimitives-1-quinary-base":
          "var(--colorwheelprimitives-1-quinary-base)",
        "colorwheelprimitives-1-secondary-100":
          "var(--colorwheelprimitives-1-secondary-100)",
        "colorwheelprimitives-1-secondary-200":
          "var(--colorwheelprimitives-1-secondary-200)",
        "colorwheelprimitives-1-secondary-300":
          "var(--colorwheelprimitives-1-secondary-300)",
        "colorwheelprimitives-1-secondary-400":
          "var(--colorwheelprimitives-1-secondary-400)",
        "colorwheelprimitives-1-secondary-500":
          "var(--colorwheelprimitives-1-secondary-500)",
        "colorwheelprimitives-1-secondary-600":
          "var(--colorwheelprimitives-1-secondary-600)",
        "colorwheelprimitives-1-secondary-700":
          "var(--colorwheelprimitives-1-secondary-700)",
        "colorwheelprimitives-1-secondary-base":
          "var(--colorwheelprimitives-1-secondary-base)",
        "colorwheelprimitives-1-senary-100":
          "var(--colorwheelprimitives-1-senary-100)",
        "colorwheelprimitives-1-senary-200":
          "var(--colorwheelprimitives-1-senary-200)",
        "colorwheelprimitives-1-senary-300":
          "var(--colorwheelprimitives-1-senary-300)",
        "colorwheelprimitives-1-senary-400":
          "var(--colorwheelprimitives-1-senary-400)",
        "colorwheelprimitives-1-senary-500":
          "var(--colorwheelprimitives-1-senary-500)",
        "colorwheelprimitives-1-senary-600":
          "var(--colorwheelprimitives-1-senary-600)",
        "colorwheelprimitives-1-senary-700":
          "var(--colorwheelprimitives-1-senary-700)",
        "colorwheelprimitives-1-senary-base":
          "var(--colorwheelprimitives-1-senary-base)",
        "colorwheelprimitives-1-septenary-100":
          "var(--colorwheelprimitives-1-septenary-100)",
        "colorwheelprimitives-1-septenary-200":
          "var(--colorwheelprimitives-1-septenary-200)",
        "colorwheelprimitives-1-septenary-300":
          "var(--colorwheelprimitives-1-septenary-300)",
        "colorwheelprimitives-1-septenary-400":
          "var(--colorwheelprimitives-1-septenary-400)",
        "colorwheelprimitives-1-septenary-500":
          "var(--colorwheelprimitives-1-septenary-500)",
        "colorwheelprimitives-1-septenary-600":
          "var(--colorwheelprimitives-1-septenary-600)",
        "colorwheelprimitives-1-septenary-700":
          "var(--colorwheelprimitives-1-septenary-700)",
        "colorwheelprimitives-1-septenary-base":
          "var(--colorwheelprimitives-1-septenary-base)",
        "colorwheelprimitives-1-tertiary-100":
          "var(--colorwheelprimitives-1-tertiary-100)",
        "colorwheelprimitives-1-tertiary-200":
          "var(--colorwheelprimitives-1-tertiary-200)",
        "colorwheelprimitives-1-tertiary-300":
          "var(--colorwheelprimitives-1-tertiary-300)",
        "colorwheelprimitives-1-tertiary-400":
          "var(--colorwheelprimitives-1-tertiary-400)",
        "colorwheelprimitives-1-tertiary-500":
          "var(--colorwheelprimitives-1-tertiary-500)",
        "colorwheelprimitives-1-tertiary-600":
          "var(--colorwheelprimitives-1-tertiary-600)",
        "colorwheelprimitives-1-tertiary-700":
          "var(--colorwheelprimitives-1-tertiary-700)",
        "colorwheelprimitives-1-tertiary-base":
          "var(--colorwheelprimitives-1-tertiary-base)",
        "logo-aw-sand": "var(--logo-aw-sand)",
        "logo-interior-blue": "var(--logo-interior-blue)",
        "variable-collection-color": "var(--variable-collection-color)",
        "variable-collection-logo-blue": "var(--variable-collection-logo-blue)",
        "variable-collection-sandy-color":
          "var(--variable-collection-sandy-color)",
        "variable-collectioncolor": "var(--variable-collectioncolor)",
      },
      fontFamily: {
        "body-base": "var(--body-base-font-family)",
        "single-line-body-base": "var(--single-line-body-base-font-family)",
      },
    },
  },
  plugins: [],
};
