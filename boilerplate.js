const fs = require('fs');
const folderName = process.argv[2] || 'Project'


try {

    fs.mkdirSync(folderName);

    fs.writeFileSync(`${folderName}/index.html`, parseInt(10).toString())
    fs.writeFileSync(`${folderName}/styles.css`, parseInt(10).toString())
    fs.writeFileSync(`${folderName}/script.js`, parseInt(10).toString())

} catch (e) {
    console.log("SOMETHING WENT WRONG");
    console.log(e);
}
