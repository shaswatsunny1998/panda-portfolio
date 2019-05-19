//========================================================================================
/*                                                                                      *
 *                                 require node modules                                 *
 *                                                                                      */
//========================================================================================

const { NumberPrompt } = require('enquirer');

//########################################################################################


// this the prompt which will ask for paras
const prompt = new NumberPrompt({
  name: 'noOFParagraphs',
  message: 'Please enter the number of paragraphs you would like to add to your website'
});

module.exports = {
  askNoOfParas:()=>{
    return prompt.run()
      .then(answer => answer)
      .catch(console.error)
  }
}