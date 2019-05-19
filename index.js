#!/usr/bin/env node

//========================================================================================
/*                                                                                      *
 *                               require the node modules                               *
 *                                                                                      */
//========================================================================================

const fs = require('fs')

const cmd = require('node-cmd');


//########################################################################################



const args = process.argv[2];

(async function(){
  var isFileCreated = await require('./lib/showCLi')(args);
  cmd.run('node question.js')
})();
