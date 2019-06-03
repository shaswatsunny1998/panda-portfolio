
// we need to add the '\\' everywhere as we want "\${something}" otherwise we are getting only ${something}
module.exports = () => {
  return `
  ],
  template: \`{
    "theme": "` + '\\' + `\${theme}",
    "name": "` + '\\' + `\${name}",
    "profilePhoto": "` + '\\' + `\${pictureDir}",
    "resumeLink": "` + '\\' + `\${resumeLink}",
    "about": [
      `
}
