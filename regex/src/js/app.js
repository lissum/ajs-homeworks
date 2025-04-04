import Validator from "./Validator";

let validator = new Validator();
console.log( validator.validateUsername( 'Иванов Иван Владимирович!' ) ); // false
console.log( validator.validateUsername( 'lissum' ) ); // true
