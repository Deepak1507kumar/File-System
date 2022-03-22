
//----------tree 

function treeFn(dirPath){
    // console.log("Tree command implement for " , dirPath);

    // cwd -- current working directory 
    if(dirPath == undefined){
        // console.log("Kindly enter the path ");
       // process.cwd();   //The process.cwd() method returns the current working directory of the Node.js process.
        treeHelper(process.cwd() , " ");
        return ;
    }else {
        let doesExits =  fs.existsSync(dirPath);
       
        if(doesExits){
                treeHelper(dirPath , " ");
        }
        else{
            console.log("Kindly enter the path ");
            return ;
        }
    }

}

function treeHelper(dirPath , indent){
        // is file or folder
        // fs.lstatSync() --> provide u detail about  path ,  file ka h ya folder ka h 
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent  + " |---" + fileName);
    }
    else{
            let dirName =path.basename(dirPath);
            console.log(indent + "|---" + dirName );
            let children = fs.readdirSync(dirPath);
            for(let i =0 ; i< children.length ; i++){
                let childPath = path.join(dirPath , children[i]);
                treeHelper(childPath , indent  + "\t");
            }
    }

}


module.exports = {
    treeKey : treeFn  
}