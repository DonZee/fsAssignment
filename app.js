const fs = require('fs');

// Challenge 1:
// Simply print the contents of the text file to the screen.

// const files = fs.readFileSync('challenge1/info.txt', 'utf-8');
// console.log(files);

// Challenge 2:
// Add the names of everyone in your group to the end of the text file.

// let names = fs.readFileSync('challenge2/info.txt', 'utf-8')
// names =   names + 'Josh\nTyler\nSeth\nAlbert\nElijah'
// fs.writeFileSync('challenge2/info.txt', names)

// or
// let G96 = ['Josh ','Tyler ' ,'Seth ','Albert ','Elijah '];
// for(let i=0; i<G96.length; i++){
//   fs.appendFileSync('challenge2/info.txt',G96[i]);
// }

// Challenge 3:
// The file was incorrectly named binfo.txt ... Rename it to info.txt (only using js!)

// fs.renameSync('challenge3/binfo.txt','challenge3/info.txt');

// Challenge 4:
// Create a new folder within the challenge4 folder called "copyfolder". Then copy info.txt into that folder.

// fs.mkdirSync('challenge4/copyfolder');
// fs.renameSync('challenge4/info.txt', 'challenge4/copyfolder/info.txt');

// Challenge 5:
// Replace all of the "-"'s inside the text file with spaces.

// let fileStr = fs.readFileSync('challenge5/info.txt','utf-8');
// fileStr = fileStr.replace(/-/g, ' ');
// fs.writeFileSync('challenge5/info.txt', fileStr);

// Challenge 6:
// Display all files that end with ".txt". Don't hard code the file names!

// let readDir = fs.readdirSync('challenge6');
// for(let i=0; i<readDir.length; i++){
//   if(readDir[i].slice(readDir[i].length-4) == '.txt'){
//     console.log(readDir[i]);
//   };
// };
