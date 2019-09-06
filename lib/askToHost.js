//========================================================================================
/*                                                                                      *
 *                             Require the node dependencies                            *
 *                                                                                      */
//========================================================================================


const { Confirm } = require('enquirer')


//########################################################################################

// this prompt will confirm whether the use wants to host 
// using github pages or not 
const prompt = new Confirm({
  name: 'HostOrNot',
  message: 'Would like panda-portolio to host your website for you using github pages?'
})

module.exports = {
  hostOrNot: () => {
    return prompt.run()
    .then(answer => answer)
    .catch(console.error)

  }
}