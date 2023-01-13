export const findIntersection = (strArr) => {
    let intersection = []
    const set1 = strArr[0].replace(/\s/g,"").split(',')
    const set2 = strArr[1].replace(/\s/g,"").split(',')
    set2.forEach((item) => {
        if (set1.includes(item)) {
            intersection.push(item)
        }
    })

    if (intersection.length != 0) {
        return intersection.toString()
    }else{
        return false
    }
}

/*
Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
The first element will represent a list of coma-seperated numbers sorted in ascending order, the second element will represent a second list of coma-separated numbers(also sorted).
Your goal is to return a coma-seperated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/