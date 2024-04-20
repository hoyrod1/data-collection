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
console.log("================== Part3: Transforming Data ==================");
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
/****************************************************************************/
console.log("============ Part 4: Sorting and Manipulating Data ============");
/****************************************************************************/
console.log("=== 1 ==========================================================");
/****************************************************************************/
testArrObContainer.pop();
console.log(testArrObContainer);
/****************************************************************************/
console.log("=== 2 ==========================================================");
/****************************************************************************/
testArrObContainer.unshift({
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(testArrObContainer);
/****************************************************************************/
console.log("=== 3 ==========================================================");
/****************************************************************************/
testArrObContainer.push({
  id: "7",
  name: "Bilbo",
  occupation: "Retired",
  age: "111",
});
console.log(testArrObContainer);
/****************************************************************************/
console.log("============ Calculate the average age of the group ============");
/****************************************************************************/

// let arrLength = testArrObContainer.length;
// let age1 = parseInt(testArrObContainer[0].age);
// let age2 = parseInt(testArrObContainer[1].age);
// let age3 = parseInt(testArrObContainer[2].age);
// let age4 = parseInt(testArrObContainer[3].age);
// let age5 = parseInt(testArrObContainer[4].age);

// console.log(
//   `The average age of this group is ${
//     (age1 + age2 + age3 + age4 + age5) / arrLength
//   } without being loopy!!! ;)`
// );
//--------------------------------------------------------------------------//
const arrLength = testArrObContainer.length;
let ageCount = 0;
for (let i = 0; i < testArrObContainer.length; i++) {
  ageCount += parseInt(testArrObContainer[i].age);
}
console.log(
  `The average age of this group is ${ageCount / arrLength} being loopy!!! ;)`
);
/****************************************************************************/
console.log("===================== Part 5: Full Circle =====================");
/****************************************************************************/
// This array will store all the values from the array of objects
const orgCSV = [];
//-------------------------------------------------------------------------//
// arrObjKey stores the keys from the first object from the "testArrObContainer" array
const arrObjKey = Object.keys(testArrObContainer[0]);
// console.log(arrObjKey);
//-------------------------------------------------------------------------//
// This join returns the array from the object keys as strings with the "," as the separator
let arrObjKeyComa = arrObjKey.join(",");
// console.log(arrObjKeyComa);
//-------------------------------------------------------------------------//
// The comma separated strings is pushed in the "orgCSV" array
orgCSV.push(arrObjKeyComa);

for (const objRow of testArrObContainer) {
  // The for of loop loops through all of its object
  // The map method returns an array of all the object values using their keys
  const objValues = arrObjKey.map((arrObjKey) => {
    let objValue = objRow[arrObjKey];
    return objValue;
  });

  // This join returns this array as a string with the "," as the separator
  orgCSV.push(objValues.join(","));
}
// console.log(orgCSV);
// Join returns this array as a string with the "\n" as the separator
const orgCSVString = orgCSV.join("\n");
console.log(orgCSVString);
//-------------------------------------------------------------------------//
/****************************************************************************/
/****************************************************************************/
/****************************************************************************/
/****************************************************************************/
console.log("======================== TEST SOLUTIONS =======================");
/****************************************************************************/
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
console.log("======================== TEST SOLUTIONS =======================");
/****************************************************************************/
/**
 -------------------------* CODE HOMEWORK EXAMPLE 2 *-------------------------
 [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
 */
//let containArr2 = containerArr.shift();
// let csvArrObj = [];
// let csvObj = {};

// containerArr.forEach((n) => {
//   csvArrObj.push({
//     id: n[0],
//     name: n[1],
//     occupation: n[2],
//     age: n[3],
//   });
// });
// console.log(csvArrObj);

// console.log(counter);
// console.log(dataArr1);
/****************************************************************************/
console.log("======================== TEST SOLUTIONS =======================");
/****************************************************************************/
//**************************************************************************//

// const anotnerTest = [];
// anotnerTest[0] = {};
// anotnerTest[1] = {};
// anotnerTest[2] = {};
// console.log(anotnerTest);
// const data2 = [column1];
// const dataArr = [];
// let count = 0;
// console.log(data2);
// for (const cell2 of containerArr) {
//   // cell2[0] cell2[1] cell2[2] cell2[3] //
//   //    id     name   ocuppation  age    //
//   dataArr.push({
//     id: cell2[0],
//     name: cell2[1],
//     Occupation: cell2[2],
//     Age: cell2[3],
//   });
// }
// console.log(dataArr);
/****************************************************************************/
// const dataArr2 = [];
// const obj2 = {};

// for (let i = 0; i < containerArr.length - 1; i++) {
//   dataArr2.push({});
// }
// console.log(dataArr2);

/****************************************************************************/
console.log("===============================================================");
/****************************************************************************/
