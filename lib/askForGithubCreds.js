//========================================================================================
/*                                                                                      *
 *                             Require the node dependencies                            *
 *                                                                                      */
//========================================================================================


const { prompt } = require('enquirer')

//########################################################################################

// ask remote creds 
module.exports =async ()=>{
  const remoteCreds = await prompt([
    {
      type:'input',
      name:"username",
      message:"What s your github username ?",
      validate: function (value) {
        if (value.length) {
          return true
        } else {
          return `Please enter your github username`
        }
      }
    },
    {
      type: 'password',
      name: 'password',
      message: `What is your password for github account ?`
    }
  ])
  return remoteCreds;
}