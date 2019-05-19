//========================================================================================
/*                                                                                      *
 *                               require the node modules                               *
 *                                                                                      */
//========================================================================================

const fs = require('fs');

const {promisify} = require('util');

const {exec}  = require('child_process');


//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                  require the modules                                 *
 *                                                                                      */
//========================================================================================

const {askNoOfParas} = require('./askNoOfParagraphs')

//########################################################################################


fs.writeFile = promisify(fs.writeFile)

/**
 * @description         this function will display the output on the command line depending on the argurment
 * 
 * @param {String} args the arguement passed alongside the panda command
 * 
 */
module.exports=async (args)=>{
  if(args){
    switch (args.toLowerCase()) {
      case "init":
          let dir = process.cwd();
          var number = await askNoOfParas();
          var header = (require('../template/header')())
          for(var i = 0;i<number;i++){
            header+=require('../template/paras')(i+1);
          }
          header+=require('../template/footerMain')();
          for(var i = 0;i<number;i++){
            header+=require('../template/footerParas')(i+1);
          }
          header+=require('../template/footerLast')();

          // try catch blog for creating questions file
          try {
            var writeFile = await fs.writeFile(dir+'/question.js',header); 
            require(dir+'/question')() 
          } catch (error) {
            console.log("Something went wrong please try again later");
            process.exit();
          }
      default:
        break;
    }
  }
}