module.exports = () => {
  return `],
  "links":{
    "github":"` + '\\' + `\${githubLink}",
    "linkedin":"` + '\\' + `\${linkedinLink}",
    "medium":"` + '\\' + `\${mediumLink}",
    "facebook":"` + '\\' + `\${facebookLink}",
    "instagram":"` + '\\' + `\${instagramLink}"
  }
}\`
});
return prompt.run()
   .then(answer => answer.result)
   .catch(err=>console.log(err));
}
`
}
