export const userValidation = (str) =>{
    if (
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) && //username first character - str.charAt(0)
        (/^\w+$/).test(str) &&               //only letters,numbers and "_"
        (/[a-zA-Z0-9]/).test(str.slice(-1))  //str.charAt(str.length-1)
    ){
        return true
    }else{
        return false
    }
}

/*
RULES
-- The username is between 4 and 25 characters.
-- It must start with a letter.
-- It can only contain letters, numbers and the underskore character.
-- It cannot end with an underscore character.
-- If the username is valid then your program should return the string true, otherwise return the string false.
ex: u__hello_world123
*/