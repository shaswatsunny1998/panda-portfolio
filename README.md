![Panda-portfolio Logo](https://raw.githubusercontent.com/YashMeh/panda-portfolio/master/logoPanda.png)

[![npm](https://img.shields.io/badge/npm-6.8.0-brightgreen.svg)](https://www.npmjs.com/package/panda-portfolio) ![node](https://img.shields.io/badge/node-11.8.0-brightgreen.svg) ![npm](https://img.shields.io/npm/dw/panda-portfolio.svg) ![GitHub](https://img.shields.io/github/license/YashMeh/panda-portfolio.svg)
## panda-portfolio
No more worries while making single page github portfolio websites.
### Installation
```javascript
sudo npm install -g panda-portfolio
```
### Creating the config file
```javascript
panda init
```
### Creating the index page
```javascript
panda config.json
```
- Get your single page portfolio as index.html.
- Publish on github.

## Alternate Method
- Create a FILENAME.json file within the directory
- Paste the following content.

```javascript
{
    "theme":"(dark or light)",  
    "name":"YOUR-NAME",
    "profilePhoto":"PICTURE-LINK",
    "resumeLink":"RESUME-LINK",
    "about":[
        "Paragraph1",
        "Paragraph2",
        "Paragraph3",
        "So on.."
    ],
    "links":{
        "github":"YOUR-GITHUB-PROFILE",
        "linkedin":"YOUR-LINKEDIN-PROFILE",
        "medium":"YOUR-MEDIUM-PROFILE",
        "facebook":"YOUR-FACEBOOK-PROFILE",
        "instagram":"YOUR-INSTAGRAM-PROFILE"
    }
}
```
- Write panda FILENAME.json to get the index.html page.

### Demo
[![asciicast](https://asciinema.org/a/DqlkYR2ofzrpN5gesljAHjcjq.svg)](https://asciinema.org/a/DqlkYR2ofzrpN5gesljAHjcjq)

### Example
| Theme        | Picture           |
| ------------- |:-------------:|
| light      |   ![light](https://raw.githubusercontent.com/YashMeh/panda-portfolio/9fc1632805391641bfb3e186f8b90767d818aa2d/light.png)
| dark      | ![dark](https://raw.githubusercontent.com/YashMeh/panda-portfolio/9fc1632805391641bfb3e186f8b90767d818aa2d/dark.png)      |
