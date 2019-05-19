module.exports=(number)=>{
  return `
    {
      name: 'paragraph${number}',
      message: 'enter a paragraph ',
      validate(value){
        return valdiator(value,'Please enter the directory of the resume file')
      }
    },`
}