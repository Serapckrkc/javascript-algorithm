export const firstReverse = (str) => {
    const arr = str.split("")
    const reversedArr = arr.reverse()
    const myArr = reversedArr.join("")

    return myArr
}

/*
First Reverse
Have the fuction firstReverse() take the str parameter being passed and return the string in reserved order.

.split() --> convert to array
.reverse() --> reverse
.join() --> convert to string

**DİFFERENT WAYS**

1-) export const firstReverse = (str) =>{
    let arr = [];
    let reversedWord = "";
    for(let i = 0; i < str.length; i++){
        arr[i] = str[(str.length -1 ) - i];
        reversedWord += arr[i];
    }
    return reversedWord;
}

2-) return str.split("").reverse().join("")

**DİFFERENT WAYS**
*/