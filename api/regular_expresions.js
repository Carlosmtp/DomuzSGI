const NUMERIC = 0
const EMAIL = 1
const NIT = 2
/**
 * @function validate()
 * @description Function to validate a string with the defined regular expressions:
 * @param {String} type : of regular expressions defined: 'numeric', ...
 * @param {String} theString : string to validate
 * @returns {Boolean} : true if is a valid expression, false if not
 * 
 */
function validate(type, theString) {
    try {
        var regex;
        switch (type) {
            case 0: //numeric
                return /^[0-9]*$/.test(theString)
            case 1: //email
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theString)
            case 2: //nit
                return /^[0-9]*-[0-9]$/.test(theString)
            default:
                throw new TypeError('no se ha ingresado una expresión regular válida')
        }
    } catch (error) {
        return error
    }
}
module.exports ={NUMERIC, EMAIL, NIT, validate}