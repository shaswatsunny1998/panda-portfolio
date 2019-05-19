//= =======================================================================================
/*                                                                                      *
 *                                reuire the node js file                               *
 *                                                                                      */
//= =======================================================================================

const fs = require('fs')

const { promisify } = require('util')

// ########################################################################################

// promisify the callback functions

fs.readFile = promisify(fs.readFile)

module.exports = async (fileName) => {
  try {
    var fileData = await fs.readFile(fileName, 'utf8')

    var obj = JSON.parse(fileData)

    var about = ''

    var contactInfo = {
      github: "<i class='fab fa-github fa-2x ss' href=",
      linkedin: "<i class='fab fa-linkedin fa-2x ss' href=",
      medium: "<i class='fab fa-medium fa-2x ss' href=",
      facebook: "<i class='fab fa-facebook-f fa-2x ss' href=",
      instagram: "<i class='fab fa-instagram fa-2x ss' href="
    }

    obj.about.forEach((ele) => {
      about += '<br><p>' + ele + '</p>'
    })

    var css = {
      backColor: 'whitesmoke',
      fontColor: 'black'
    }
    if (obj.theme == 'dark') {
      css['backColor'] = 'black'
      css['fontColor'] = 'whitesmoke'
    }
    var badges = Object.keys(obj.links)

    var bottomLinks = ''

    badges.forEach((badge) => {
      bottomLinks += contactInfo[badge] + obj.links[badge] + '>' + '</i>'
    })

    var htmlFileContent = require('./htmlFile')(obj, css, about, bottomLinks)

    var fileName = 'index.html'

    var stream = fs.createWriteStream(fileName)

    stream.once('open', function (fd) {
      stream.end(htmlFileContent)
    })

    return true
  } catch (error) {
    console.log('Something Went wrong please try again later')
    console.log(error)
    return 0
  }
}
