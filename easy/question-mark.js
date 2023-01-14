export const questionMarks = (str) => {
    //str >= 5 check it
    if (str.length < 5) {
        return false
    }

    //Clears values without numbers and question marks
    const newStr = str.replace(/[^0-9?]/g, "")

    //string->array conversion
    const arr = newStr.split("")

    //Defining the variables to be used in forEach
    let sums = []
    let sum = 0
    let iterator = 0

    //With the forEach loop, adding each digit and the next 4th character to the sum variable and then adding this value to the sums array
    arr.forEach((item) => {
        if (item != "?") {
            sum = parseInt(item) + parseInt(arr[iterator + 4])
            sums.push(sum)
        }
        iterator += 1
    });
    console.log(str);
    console.log(newStr)
    console.log(sums)

    //Returning true if the sums array has a value of 10, otherwise false
    return sums.includes(10) ? true : false
}

/*
Have the function questionMarks() tke the str string parameter, which will contain single digit numbers, letters and question marks,
and check ifthere are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true,
otherwise it should return the string false. If there aern't any two numbers that add up to 10 in the string. Then your program should return false a well.

For example: if str is "arrb6???4xxb15???eee5" 
then your program should return true because there are exactly 3 questions marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
*/