#!/usr/bin/env node

var fs = require('fs');

var contactInfo = {
    github: "<i class='fab fa-github fa-2x ss' href=",
    linkedin: "<i class='fab fa-linkedin fa-2x ss' href=",
    medium: "<i class='fab fa-medium fa-2x ss' href=",
    facebook: "<i class='fab fa-facebook-f fa-2x ss' href=",
    instagram: "<i class='fab fa-instagram fa-2x ss' href="
}

const args = process.argv[2];
if (args == "init") {
    let dir = process.cwd();
    let template = '{' +
        '\n\t"theme": "(dark or light)",' +
        '\n\t"name": "YOUR-NAME",' +
        '\n\t"profilePhoto": "PICTURE-LINK",' +
        '\n\t"resumeLink": "RESUME-LINK",' +
        '\n\t"about": [' +
        '\n\t\t"Paragraph1",' +
        '\n\t\t"Paragraph2",' +
        '\n\t\t"Paragraph3",' +
        '\n\t\t"So on.."' +
        '\n\t],' +
        '\n\t"links": {' +
        '\n\t\t"github": "YOUR-GITHUB-PROFILE",' +
        '\n\t\t"linkedin": "YOUR-LINKEDIN-PROFILE",' +
        '\n\t\t"medium": "YOUR-MEDIUM-PROFILE",' +
        '\n\t\t"facebook": "YOUR-FACEBOOK-PROFILE",' +
        '\n\t\t"instagram": "YOUR-INSTAGRAM-PROFILE"' +
        '\n\t}' +
        '\n}'
    fs.writeFile(dir + "/config.json", template, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("Template config.json created\nRun `panda config.json` after editing");
        }
    })
} else {
    const fileName = `./${process.argv[2]}`;
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) throw err;
        var obj = JSON.parse(data);
        var about = "";
        obj.about.forEach((ele) => {
            about += '<br><p>' + ele + '</p>';
        })
        var css = {
            backColor: 'whitesmoke',
            fontColor: 'black'
        }
        if (obj.theme == 'dark') {
            css['backColor'] = 'black';
            css['fontColor'] = 'whitesmoke';
        }
        var badges = Object.keys(obj.links);
        var bottomLinks = "";
        badges.forEach((badge) => {
            bottomLinks += contactInfo[badge] + obj.links[badge] + ">" + '</i>';
        })
        var html = `<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN'
    'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd'>
    
    <html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en' lang='en'>
    
    <head>
         <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
         <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.8.1/css/all.css' integrity='sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf' crossorigin='anonymous'>
         <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
         <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
         <link href='https://fonts.googleapis.com/css?family=Days+One' rel='stylesheet'>
         <title>${obj.name}</title>
         <link rel='icon' href='https://cdn.pixabay.com/photo/2017/05/16/04/08/bear-2316805_960_720.png' type='image/x-icon'>
         <style type='text/css'>
            * { margin: 0; padding: 0; }
            body { font-family: 'Days One', sans-serif; line-height: 24px;background: ${css.backColor};color:${css.fontColor}; }
            .clear { clear: both; }
            #page-wrap { width: 800px; margin: 40px auto 60px; }
            #pic { float: right; margin: -30px 100px 0 0;width: 200px;height:200px;border-radius: 50%;border:2px solid ${css.fontColor}; }
            h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
            h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
            h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
            p { margin: 0 0 16px 0; }
            a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
            a:hover { border-bottom-style: solid; color: black; }
            ul { margin: 0 0 32px 17px; }
            #objective { width: 500px; float: left; }
            #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
            dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
            dd { width: 600px; float: right; }
            dd.clear { float: none; margin: 0; height: 15px; }
            #bottom-links{ position: relative;margin-top:15%;margin-left:25%;padding: 10px;}
            .ss{padding-right: 30px;color:${css.fontColor};}
            .ss:hover{color:lightblue;}
            .resume-button{position: relative;display: flex;float: left;}
            .resume-button:hover{background-color: lightblue;}
            #main-heading{font-size: 40px;font-weight: bold;}
            p{font-weight: lighter;}
            #credit{font-size: 10px;margin-left: 35%;}
         </style>
    </head>
    
    <body>
    
        <div id='page-wrap'>
        
            <img src='${obj.profilePhoto}' alt='Photo of Cthulu' id='pic' />
            <a href='${obj.resumeLink}'><button class='btn btn-dark resume-button'>Résumé</button></a>
            <br>
            <br>
            <br>
        <div >
             <h2 id='main-heading'>I'm ${obj.name.split(" ")[0]}</h2>
             <br>
             ${about}
        </div>    
            
        <div id='bottom-links'>
                
                ${bottomLinks}
        </div>        
        </div>
        <div id="credit">
        <a href="https://github.com/YashMeh/portfolio-panda">Made with <i class="far fa-heart"></i> using portfolio-panda </a>
    </div>
    
        <script>
            $('.ss').on('click',(event)=>{
                var link=event.currentTarget.attributes.href.nodeValue;
                window.location.href=link;    
            })
            
        </script>
    </body>
    
    </html>`
        var fileName = 'index.html';
        var stream = fs.createWriteStream(fileName);

        stream.once('open', function (fd) {
            stream.end(html);
        });
    });
}
