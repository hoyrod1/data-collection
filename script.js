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
console.log("==================== Pt2 CSV ARRAY Format ====================");
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
console.log(csvArray);
/****************************************************************************/
console.log("======================== TEST SOLUTION =======================");
/****************************************************************************/
//================= TEST SOLUTION ==================//
let objKey = containerArr[0];
const testArrObContainer = [];

for (let i = 1; i < containerArr.length; i++) {
  testArrObContainer[i - 1] = {};
  for (let i2 = 0; i2 < containerArr.length - 1; i2++) {
    testArrObContainer[i - 1][objKey[i2].toLowerCase()] = containerArr[i][i2];
  }
}
console.log(testArrObContainer);
// let id1 = containerArr[0][0].toLocaleLowerCase();
// let name2 = containerArr[0][1].toLocaleLowerCase();
// let occupation3 = containerArr[0][2].toLocaleLowerCase();
// let age4 = containerArr[0][3].toLocaleLowerCase();
// let testIterator = [];
// let iterator = 1;
// for (let i = 0; i < containerArr.length - 1; i++) {
//   testArrOb[id1] = containerArr[i][0];
//   testArrOb[name2] = containerArr[i][1];
//   testArrOb[occupation3] = containerArr[i][2];
//   testArrOb[age4] = containerArr[i][3];
//   testArrObContainer.push(testArrOb);
//   testIterator.push(iterator);
//   iterator++;
// }
// console.log(testArrObContainer);
// console.log(testIterator);
/****************************************************************************/
console.log("================== Part3: Transforming Data ==================");
/****************************************************************************/
/**
 -------------------------* CODE HOMEWORK EXAMPLE 2 *-------------------------
 [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
 */
//let containArr2 = containerArr.shift();
let csvArrObj = [];
let csvObj = {};

containerArr.forEach((n) => {
  csvArrObj.push({
    id: n[0],
    name: n[1],
    occupation: n[2],
    age: n[3],
  });
});
// console.log(csvArrObj);

// console.log(counter);
// console.log(dataArr1);
/****************************************************************************/
console.log("=============================================================");
/****************************************************************************/
//**************************************************************************//
// const data2 = [column1];
const dataArr = [];
// let count = 0;
// console.log(data2);
for (const cell2 of containerArr) {
  // cell2[0] cell2[1] cell2[2] cell2[3] //
  //    id     name   ocuppation  age    //
  dataArr.push({
    id: cell2[0],
    name: cell2[1],
    Occupation: cell2[2],
    Age: cell2[3],
  });
}
// console.log(dataArr);
/****************************************************************************/
const dataArr2 = [];
const obj2 = {};

for (let i = 0; i < containerArr.length - 1; i++) {
  dataArr2.push({});
}
// console.log(dataArr2);

/****************************************************************************/
console.log("=============================================================");
/****************************************************************************/
