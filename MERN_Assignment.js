// question N0 -1

// let arr = [
//     "Arunachal Pradesh",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//    "Tripura",
//     "Uttar Pradesh",
//     "Uttarakhand",
//     "West Bengal",
//     "Arunachal Pradesh",
//     "Assam",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Sikkim",
//     "Tripura"];


// const newarry= [];
// for(let i=0 ;i<arr.length;i++){
//     if (arr[i].charAt(0) === 'A' || arr[i].charAt(0) === 'E' || arr[i].charAt(0) === 'I' || arr[i].charAt(0) === 'O' || arr[i].charAt(0) === 'U')
//       newarry.push(arr[i])
// }
        
// console.log(newarry);




// question No -2
// let str ="I Love my india"
// let s="";
// const name=str.split(" ")
// name.reverse();
// for(i=0;i<name.length;i++){
//     s+=name[i];
//     s+=" "
// }
// console.log(s);



// question N0 - 3

//  let name ="INDIA";
//  let arr=[];
//  for(let i=0;i<name.length;i++){
//      arr.push(name.charAt(i));
//  }
// arr.splice(3,0,'O','N','E','S');
// let value = arr.toString();
// console.log(value);



// question  No - 4
// let name ="fgsjdhygekmcmdbdcjbemrhorihbvk";
// let count1=0,count2=0;

// for(let i=0;i<name.length;i++){

//     if(name.charAt(i)=='a'||name.charAt(i)=='e'|| name.charAt(i)=='i'|| name.charAt(i)=='o'|| name.charAt(i)=='u')
//     count1++;
//    else
//    count2++;
// }

// console.log("vowel " + count1);
// console.log("consonant " + count2);


// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.

// const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3]

// const newArray = inputArr.filter(fun);
// console.log(newArray)

// function fun(inputArr) {
//     return inputArr > 5
// }

// question 7
// const students = [
//     { name: "Ram", scores: [80, 70, 60] },
//     { name: "Mohan", scores: [80, 70, 90] },
//     { name: "Sai", scores: [60, 70, 80] },
//     { name: "Hemang", scores: [90, 90, 80, 80] },
//     ];

//     for(let i=0;i<students.length;i++){
//         let sum=0;
//         for(let j=0;j<students[i].scores.length;j++){
//              sum+=students[i].scores[j];
//         }
//     students[i].scores=sum/students[i].scores.length;
//     }
//     console.log(students);



// question - 8
// 456 - 4+5+6 = 15 - 1+5 = 6. This output

let num = 456, i = 0, save;

while (num>9) {
    while (num > 0) {
        save += num % 10;
        num /= 10;
    }
    num = save;
}
console.log(parseInt(save)) // 8  my output




// Q10) Write a function to reverse a string.
//   javaScript string is mutable;
// let Input="Hello"
// const char= Input.split("");
// // console.log(Input.charAt(4));
// // // Outpur - olleH
// for(let i=0; i<Input.length/2; i++){
//      tem= char[i];
//     char[i] = char[Input.length-1-i];
//      char[Input.length-i-1] = tem;
// }

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// console.log(char.join(""))

// Q9) Write a function to count the number of words in a paragraph.
const name="The sun dipped below the horizon, casting hues of orange and pink across the sky, signaling the day's end";
// console.log(name.split(" ").length);
