export const longestWord = (sen) => {
   const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")  //remove punctuation marks and dividing the sentence into the blanks, creating a array with words
   arr.sort((a,b) => {return b.length - a.length})  //to sort the array we created with words, according to the number of characters in the words and return 0 index on startup
   return arr[0]
}

/*
RULES 
-- Using the javascript language, have the functipn LongestWord(sen) take the sen parameter beign passed and return the largest word in the string.
-- If there are two or more words that are the same length, retırn the first word from the string wtih that length.
-- Ignore punctuation and assume sen will not be empty.
*/