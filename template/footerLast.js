module.exports=()=>{
  return  `],
  "links":{
    `+'\\'+`\${githubLink},
    `+'\\'+`\${linkedinLink},
    `+'\\'+`\${mediumLink},
    `+'\\'+`\${facebookLink},
    `+'\\'+`\${instagramLink},
  }
}\`
});
prompt.run()
   .then(answer => console.log('Answer:', answer.result))
   .catch(err=>console.log(err));
}
`
}