/**
 * @function validateRegex()
 * @description Function to validate a string with the defined regular expressions:
 * @param {String} type : of regular expressions defined: 'numeric', ...
 * @param {String} theString : string to validate
 * @returns {Boolean} : true if is a valid expression, false if not
 * 
 */
module.exports =
    function validRegex(type, theString) {
        try {
            var regex;
            switch (type) {
                case 'numeric':
                    return /^[0-9]*$/.test(theString)
                case 'email':
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(theString)
                default:
                    throw new TypeError('no se ha ingresado una expresión regular válida')
            }
        } catch (error) {
            return error
        }
    }