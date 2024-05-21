/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            primary: "Roboto",
        },
        extend: {
            colors: {
                primaryGreen: "#8EDD11",
                primaryBlack: "#000000",
                secondaryBlue: "#3787FF"
            }
        },
    },
    plugins: [],
}