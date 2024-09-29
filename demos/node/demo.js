/*
 * NAME: demo.js
 * AUTH: Brent Ely (https://github.com/gitbrent/)
 * DATE: 20220404
 * DESC: xlsx-js-style feature demos for Node.js
 * REQS: npm 14.x + `npm i`
 * USAGE: `node demo.js` (runs local tests with callbacks etc)
 */

import XLSX from "xlsx-js-style";

console.log(`\n\n--------------------==~==~==~==[ STARTING DEMO... ]==~==~==~==--------------------\n`);
console.log("`XLSX.version` ......... = " + XLSX.version);
console.log("`XLSX.style_version` ... = " + XLSX.style_version);

// STEP 1: Create a new Workbook
const wb = XLSX.utils.book_new();

// STEP 2: Create data rows
let row1 = ["a", "b", "c"];
let row2 = [1, 2, 3];
let row3 = [
	{ v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
	{ v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
	{ v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
	{ v: "line\nbreak!", t: "s", s: { alignment: { wrapText: true } } },
];

// STEP 3: Create Worksheet, add data, set cols widths
const ws = XLSX.utils.aoa_to_sheet([row1, row2, row3]);
ws["!cols"] = [{ width: 30 }, { width: 20 }, { width: 20 }];
XLSX.utils.book_append_sheet(wb, ws, "browser-demo");

// STEP 4: Write Excel file to browser
XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");

console.log(`\n--------------------==~==~==~==[ ...DEMO COMPLETE ]==~==~==~==--------------------\n\n`);
