
const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdir('Dog', { recursive: true }, (err) => {
//     console.log("IN THE CALLBACK!!")
//     if (err) throw err;
//   });
//   console.log("I COME AFTER MKDIR!")
try{
fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`)
    fs.writeFileSync(`${folderName}/styles.css`)
    fs.writeFileSync(`${folderName}/app.js`)
} catch (e) {
    console.log("SOMETHING WENT WRONG")
    console.log(e)
}