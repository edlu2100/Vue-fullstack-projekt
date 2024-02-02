/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'background': '#F4F6FA',
                'primary': '#4290A9',
                'lightgrey': '#A9A9A9',
                'darkgrey': '#707070',
                'backgroundBlue': '#F4F6FA'
            }
        },
    },
    plugins: [],
}