//= =======================================================================================
/*                                                                                      *
 *                               require the node modules                               *
 *                                                                                      */
//= =======================================================================================

const fs = require('fs')

// ########################################################################################

//= =======================================================================================
/*                                                                                      *
 *                                  require the modules                                 *
 *                                                                                      */
//= =======================================================================================

const { askNoOfParas } = require('./askNoOfParagraphs')

// ########################################################################################

/**
 * @description         this function will display the output on the command line depending on the argurment
 *
 * @param {String} args the arguement passed alongside the panda command
 *
 * @returns             the content for the config.json file or false in other cases
 *
 */
module.exports = async (args) => {
  if (args) {
    switch (args.toLowerCase()) {
      case 'init':
        // get the present working directory
        let dir = process.cwd()

        // we ask for the number of paras the user would like to add
        var number = await askNoOfParas()

        // this whole part we construct the contents for the file so that
        // we can dynamically create the config file base on user input of the
        // number of paras
        // ########################################################################################

        var header = (require('../template/header')())

        for (var i = 0; i < number; i++) {
          header += require('../template/paras')(i + 1)
        }

        header += require('../template/footerMain')()

        for (var i = 0; i < number; i++) {
          if (i === number - 1) {
            // as we want to remove the trailing comma after the last element
            header += require('../template/footerParas')(i + 1, true)
          } else {
            header += require('../template/footerParas')(i + 1)
          }
        }

        header += require('../template/footerLast')()

        // ########################################################################################
        // try catch blog for creating questions file
        try {
          var writeFile = fs.writeFileSync(dir + '/question.js', header)
          var configContent = require(dir + '/question')()
          return configContent
        } catch (error) {
          console.log('Something went wrong please try again later')
          console.log(error)
          return 0
        }
      case 'help':
        console.log(`Usage: panda <command>\n
            where <command> is one of:
                init\t\t\tInitialises the current working directory with json template
                <path to config json>\tCreates index.html from json template\n
            For more info: https://www.npmjs.com/package/panda-portfolio\n`)
        return 0
      default:
        console.log(`Usage: panda <command>\n
          where <command> is one of:
              init\t\t\tInitialises the current working directory with json template
              <path to config json>\tCreates index.html from json template\n
          For more info: https://www.npmjs.com/package/panda-portfolio\n`)
        return 0
    }
  }
}
