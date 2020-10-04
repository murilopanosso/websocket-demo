const calc = require('@murilopanosso/basic-calc')

const getResult = (expression = "") => {
    console.log(expression.split("/").length)
        if (expression.split("+").length > 1){
            return  calc.add(parseFloat(expression.split("+")[0]),  parseFloat(expression.split("+")[1]))
        } else if (expression.split("-").length > 1){
            return  calc.subtraction(parseFloat(expression.split("-")[0]),  parseFloat(expression.split("-")[1]))
        } else if (expression.split("/").length > 1) {
            return  calc.divisiton(parseFloat(expression.split("/")[0]),  parseFloat(expression.split("/")[1]))
        } else if (expression.split("*").length > 1) {
            return  calc.multiplication(parseFloat(expression.split("*")[0]),  parseFloat(expression.split("*")[1]))
        } else {
            return "Expression not identified =("
        }
} 

module.exports = getResult;
