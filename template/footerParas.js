module.exports = (number, last) => {
  if (last) {
    return ' "\\' + `\${paragraph${number}}"
      `
  } else {
    return ' "\\' + `\${paragraph${number}}",
      `
  }
}
