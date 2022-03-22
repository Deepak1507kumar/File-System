
//--------------organize 
function organizeFn(dirPath){
    //  console.log("organize command implement for " , dirPath);
  
    //agr path provide nhi kia to undefine print krta h 
      //1.input --> directory path given
      let destPath;
      if(dirPath == undefined){
          // console.log("Kindly enter the path ");
          destPath = process.cwd();
          return ;
      }else {
          let doesExits =  fs.existsSync(dirPath);
          if(doesExits){
              //2. create --> organized_file  name of folder -> directoy
               destPath =  path.join(dirPath , "organized_files");
              if(fs.existsSync(destPath)== false){
                  fs.mkdirSync(destPath); 
              }         
              
          }else{
              console.log("Kindly enter the  correct path ");
              return;            
          }
          
      }
          organizeHelper(dirPath , destPath);                        
      }
      
  function organizeHelper(src , dest){
      //3. identify categories of all the files present in that input directory ->
              let childName = fs.readdirSync(src);
              // console.log(childName);
              for(let i =0 ; i < childName.length ; i++){
                  let childAddress =  path.join(src , childName[i]);
                  // fs.lstatSync() --> chk give item is file or folder
                  let isFile = fs.lstatSync(childAddress).isFile();
                  if(isFile){
                    //  console.log(childName[i]);
                    let category = getCategory(childName[i]);
                      console.log(childName[i] , "-- Belong to -->  " , category );
  
                      //4. copy /cut  files to that organized directory inside of any of category folder
                      sendFiles(childAddress , dest , category);
                  }
                  
              }
  
  }
  
  function sendFiles(srcFilePath , dest , category){
      let categoryPath = path.join(dest ,category);     //file and folder path
      if(fs.existsSync(categoryPath) == false){
          fs.mkdirSync(categoryPath);
      }
      //phle empth folder create hota h uske bd file / folder copy hota h
      let filename = path.basename(srcFilePath);
      let destFilePath = path.join(categoryPath , filename);
      fs.copyFileSync(srcFilePath , destFilePath);
      fs.unlinkSync(srcFilePath);
      console.log(filename , " --copied to -- " , category);
  
  }
  
  
  function getCategory(name){
      let ext = path.extname(name);
      ext = ext.slice(1); 
       // file ka .(dot) ko remove kr dega
      //  console.log(ext);
  
      for(let type in types){
          let cTypeArr = types[type];
          for(let  i =0 ; i < cTypeArr.length ; i++){
              if(ext == cTypeArr[i]){
                  return type ;
              }
          }
      }
      return "other";
  
  }

  
  module.exports = {
      organiseKey : organizeFn
  }