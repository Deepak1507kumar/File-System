#!/usr/bin/env node

// global krrne k lia  -- shebang syntax
// cmd m kuch bhi dlave k lia search kro shebang syntax + language
// --------------------------------------------------------------------------------------
// // process.argv  -->( arguments) ek array hota h
// // jo ki return krta h an array  
// // input (apne file ka content )start from 2nd index 
// process.argv.slice(2) --> [node  , Scripts , "your File"]
//                             0          1         2


//input from cmd 
let inputArr = process.argv.slice(2);
const { log } = require("console");
// console.log(inputArr);

let fs = require("fs");
let path = require("path");

// node input.js tree "directory Path"
// node input.js organize "directory Path"
// node input.js help 


// requires the file 
let helpObj = require("./help");
let treeObj = require("./tree");
let organiseObj = require("./organize");

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"] ,
    Img : ['jpeg' , 'jpg' ]
}


let command = inputArr[0];
switch(command){
    case "tree" : 
        treeObj.treeKey(inputArr[1]);
    break ;
    case "organize" :
        organiseObj.organiseKey(inputArr[1]);    
    break ;
    case "help" :
      helpObj.helpKey();   
    break ;
    default : 
    console.log("Please input right command : ");
    break ;
}
 

 










 