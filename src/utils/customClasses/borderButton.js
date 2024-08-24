
const borderButtonClass = ({ disabled }) => ({
    primary: `flex justify-between items-center gap-2 border border-button-primary-300 bg-button-primary-bg rounded-lg shadow-md px-4 py-2 text-button-primary-text font-medium ${disabled?"":"hover:bg-button-primary-500 hover:border-button-primary-400 transition-colors focus:outline-none"}  `,
    secondary: `flex justify-between items-center gap-2 border border-button-secondary-300 bg-button-secondary-bg rounded-lg shadow-md px-4 py-2 text-button-secondary-text font-medium hover:bg-button-secondary-100 hover:border-button-secondary-400 transition-colors focus:outline-none `,
})

export default borderButtonClass;