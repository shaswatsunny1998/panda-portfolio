#!/usr/bin/env node

//= =======================================================================================
/*                                                                                      *
 *                               require the node modules                               *
 *                                                                                      */
//= =======================================================================================

const fs = require('fs')

// ########################################################################################

// get the present working directory
let dir = process.cwd()

const args = process.argv[2];

(async function () {
  try {
    if (args.split('.').reverse()[0] === 'json') {
      var isHtmlFileCreated = await require('./lib/createIndexhtmlFile')(args)
      let userWantToHost = await require('./lib/askToHost')()
      console.log(userWantToHost)
      console.log('Html file generated please view it and if you would like any changes\nyou can change the content in config.json file')
    } else {
      var configContent = await require('./lib/showCLi')(args)
  
      if (configContent) {
        fs.writeFileSync(dir + '/config.json', configContent)
  
        fs.unlinkSync(dir + '/question.js')
  
        var isHtmlFileCreated = await require('./lib/createIndexhtmlFile')('config.json')
        let userWantToHost = await require('./lib/askToHost').hostOrNot()
        if(userWantToHost){
          let remoteCredsDetails = await require('./lib/askForGithubCreds')
        }
  
        console.log('Html file generated please view it and if you would like any changes\nyou can change the content in config.json file')
      } else {
        try {
          fs.unlinkSync(dir + '/question.js')
        } catch (error) {
          // this catch block will not output anuthing
        }
      }
    }
  } catch (error) {
    console.log(require('./lib/returnHelpLog')())
  }
  
})()
