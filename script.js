console.log(
  "======================= Data Collection Homework ======================="
);
/****************************************************************************/
console.log("=============================================================");
/****************************************************************************/
/**
-------------------------* CODE HOMEWORK EXAMPLE 2 *-------------------------
    [['id', 'Name', 'Occupation', 'Age'] 
    [42, 'Bruce', 'Knight', 41] 
    [57, 'Bob', 'Fry Cook', 19] 
    [63, 'Blaine', 'Quiz Master', 58] 
    [98, 'Bill', 'Doctor’s Assistant', 26]]
 */
let csvData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// csvArray = csvData.split(",");
// console.log(csvArray);
let column1 = "";
let column2 = "";
let column3 = "";
let column4 = "";
// This is the column counter
let column = 1;
// This is the row counter
let row = 1;

for (let i = 0; i < csvData.length; i++) {
  if (csvData[i] === ",") {
    column++;
    continue;
  }
  if (csvData[i] === "\n") {
    // If the "\n" condition is true reset column to 1
    column = 1;
    column1 = "";
    column2 = "";
    column3 = "";
    column4 = "";
    continue;
  }
  if (column === 1) {
    column1 += csvData[i];
  }
  if (column === 2) {
    column2 += csvData[i];
  }
  if (column === 3) {
    column3 += csvData[i];
  }
  if (column === 4) {
    column4 += csvData[i];
  }

  if ((column === 4 && csvData[i + 1] === "\n") || i + 1 === csvData.length) {
    console.log(column1, column2, column3, column4);
  }
}
// console.log(data);
// Mother array
// const dataContainer = [data];
// console.log(dataContainer);

/****************************************************************************/
console.log("====================== CSV ARRAY Format ======================");
/****************************************************************************/
let csvDataArray =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let row1a = "";
let row2a = "";
let row3a = "";
let row4a = "";
let row5a = "";
// Container Array
const containerArr = [];
let numCol = 1;

for (let i = 0; i < csvDataArray.length; i++) {
  if (csvDataArray[i] === "\n") {
    numCol++;
  }
  if (numCol === 1) {
    row1a += csvDataArray[i];
  }
  if (numCol === 2) {
    row2a += csvDataArray[i];
  }
  if (numCol === 3) {
    row3a += csvDataArray[i];
  }
  if (numCol === 4) {
    row4a += csvDataArray[i];
  }
  if (numCol === 5) {
    row5a += csvDataArray[i];
  }
}
const csvArray = containerArr.push(
  row1a.replace("\n", "").split(","),
  row2a.replace("\n", "").split(","),
  row3a.replace("\n", "").split(","),
  row4a.replace("\n", "").split(","),
  row5a.replace("\n", "").split(",")
);

console.log(containerArr);

/****************************************************************************/
console.log("================= Column Seperated Format =================");
/****************************************************************************/
/**
 -------------------------* CODE HOMEWORK EXAMPLE 2 *-------------------------

 [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
 */
// let counter = 0;
// data2.forEach((n, i) => {
//   dataArr1.push({
//     id: data2[i][0],
//     name: data2[i][1],
//     Occupation: data2[i][2],
//     Age: data2[i][3],
//   });
// });

// console.log(counter);
// console.log(dataArr1);
/****************************************************************************/
console.log("=============================================================");
/****************************************************************************/

// data2 array stores //
// const data2 = [row1a, row2a, row3a, row4a, row5a];
// const data2 = [row2a, row3a, row4a, row5a];
// console.log(data2);
//**************************************************************************//
// const data2 = [column1];
// const dataArr = [];
// let count = 0;
// console.log(data2);
// for (const cell2 of data2) {
//   // console.log(`| ${cell2[0]} | ${cell2[1]}  ${cell2[2]}  ${cell2[3]} `);
//   dataArr.push({
//     id: cell2[0],
//     name: cell2[1],
//     Occupation: cell2[2],
//     Age: cell2[3],
//   });
// }
// console.log(dataArr);
//const nameKey = [];
// let c = 1;

/****************************************************************************/
