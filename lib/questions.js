// const { Snippet } = require('enquirer');

// /**
//  * @description             this validate sthe value typed by the user
//  * 
//  * @param {String}  value   the value of the field enterd by the user
//  * 
//  * @param {String} message  the message you want to display when the user enter worng vale
//  * 
//  * @returns                 prompt with the question
//  * 
//  * @author  Ram Pandey <iamram2510@ieee.org>
//  */
// function valdiator(value,message){
//   if(value===undefined || value===null || value===''){
//     return prompt.styles.danger(message);
//   }
// }

// const prompt = new Snippet({
//   name: 'config',
//   message: 'Fill out the fields in package.json',
//   required: true,
//   fields: [
//     {
//       name: 'name',
//       message: 'Your name',
//       validate(value){
//         return valdiator(value,'Please enter your name')
//       }
//     },
//     {
//       name: 'theme',
//       message: 'Theme (dark or light)',
//       validate(value){
//         console.log(value)
//         if(value.toLowerCase()!=='dark' &&  value.toLowerCase()!=='light'){
//           return prompt.styles.danger('Please choose between light or dark');
//         }
//       }
//     },
//     {
//       name: 'pictureDir',
//       message: 'Copy paste the profile photo directory link ',
//       validate(value){
//         return valdiator(value,'Please enter the directory of the image for your portfolio photo')
//       }
//     },
//     {
//       name: 'resumeLink',
//       message: 'Copy paste the resume directory link ',
//       validate(value){
//         return valdiator(value,'Please enter the directory of the resume file')
//       }
//     },
//     {
//       name: 'paragraph1',
//       message: 'enter a paragraph ',
//       validate(value){
//         return valdiator(value,'Please enter the directory of the resume file')
//       }
//     },
//     {
//       name: 'paragraph1',
//       message: 'enter a paragraph ',
//       validate(value){
//         return valdiator(value,'Please enter the directory of the resume file')
//       }
//     },
//     {
//       name: 'githubLink',
//       message: 'enter Your github profile username only',
//       initial:''
//     },
//     {
//       name: 'linkedinLink',
//       message: 'enter Your Linkedin profile username only',
//       initial:''
//     },
//     {
//       name: 'mediumLink',
//       message: 'enter Your medium profile username only',
//       initial:''
//     },
//     {
//       name: 'facebookLink',
//       message: 'enter Your facebook profile username only',
//       initial:''
//     },
//     {
//       name: 'instagramLink',
//       message: 'enter Your instagram profile username only',
//       initial:''
//     }   
//   ],
//   template: `{
//   "theme": "\${theme}",
//   "name": "\${name}",
//   "profilePhoto": "\${pictureDir}",
//   "resumeLink": "\${resumeLink}",
//   "about": [
//     \${paragraph1},
//   ],
//   "links":{
//     \${githubLink},
//     \${linkedinLink},
//     \${mediumLink},
//     \${facebookLink},
//     \${instagramLink},
//   }
// }
// `
// });

// prompt.run()
//   .then(answer => console.log('Answer:', answer.result))
//   .catch(console.error);
const { Snippet } = require('enquirer');

  /**
   * @description             this validate sthe value typed by the user
   * 
   * @param {String}  value   the value of the field enterd by the user
   * 
   * @param {String} message  the message you want to display when the user enter worng vale
   * 
   * @returns                 prompt with the question
   * 
   * @author  Ram Pandey <iamram2510@ieee.org>
   */
  function valdiator(value,message){
    if(value===undefined || value===null || value===''){
      return prompt.styles.danger(message);
    }
  }
  
  const prompt = new Snippet({
    name: 'config',
    message: 'Fill out the fields in package.json',
    required: true,
    fields: [
      {
        name: 'name',
        message: 'Your name',
        validate(value){
          return valdiator(value,'Please enter your name')
        }
      },
      {
        name: 'theme',
        message: 'Theme (dark or light)',
        validate(value){
          console.log(value)
          if(value.toLowerCase()!=='dark' &&  value.toLowerCase()!=='light'){
            return prompt.styles.danger('Please choose between light or dark');
          }
        }
      },
      {
        name: 'pictureDir',
        message: 'Copy paste the profile photo directory link ',
        validate(value){
          return valdiator(value,'Please enter the directory of the image for your portfolio photo')
        }
      },
      {
        name: 'resumeLink',
        message: 'Copy paste the resume directory link ',
        validate(value){
          return valdiator(value,'Please enter the directory of the resume file')
        }
      },
      {
        name: 'githubLink',
        message: 'enter Your github profile username only',
        initial:''
      },
      {
        name: 'linkedinLink',
        message: 'enter Your Linkedin profile username only',
        initial:''
      },
      {
        name: 'mediumLink',
        message: 'enter Your medium profile username only',
        initial:''
      },
      {
        name: 'facebookLink',
        message: 'enter Your facebook profile username only',
        initial:''
      },
      {
        name: 'instagramLink',
        message: 'enter Your instagram profile username only',
        initial:''
      },
    {
      name: 'paragraph1',
      message: 'enter a paragraph ',
      validate(value){
        return valdiator(value,'Please enter the directory of the resume file')
      }
    },
    {
      name: 'paragraph2',
      message: 'enter a paragraph ',
      validate(value){
        return valdiator(value,'Please enter the directory of the resume file')
      }
    },
  ],
  template: `{
    "theme": "\${theme}",
    "name": "\${name}",
    "profilePhoto": "\${pictureDir}",
    "resumeLink": "\${resumeLink}",
    "about": [\${paragraph1},
  \${paragraph2},
  ],
  "links":{
    \${githubLink},
    \${linkedinLink},
    \${mediumLink},
    \${facebookLink},
    \${instagramLink},
  }
}`
});
prompt.run()
   .then(answer => console.log('Answer:', answer.result))
   .catch(console.error);