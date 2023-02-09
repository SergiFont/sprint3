/*El código adjunto lee un archivo situado en un directorio inbox y escribe su contenido invertido en un
otro archivo en el directorio outbox. Reestructura y simplifique el código existente para evitar el denominado Callback Hell.*/

// const { readdir, readFile, writeFile } = require("fs")
const { join } = require("path")
const listContents = require("./listContents.js")
const readContent = require("./readContent.js")
const inbox = join(__dirname, "inbox")
const outbox = join(__dirname, "outbox")

// const reverseText = str =>
//   str
//   .split("")
//   .reverse()
//   .join("");

// const dirContents = listContents()
// const fileContents = 
readContent(listContents)



// Read and reverse contents of text files in a directory
// readdir(inbox, (error, files) => {
//   if (error) return console.log("Error: Folder inaccessible"); // done in another file
//   files.forEach(file => {
//     readFile(join(inbox, file), "utf8", (error, data) => {
//       if (error) return console.log("Error: File error")
//       writeFile(join(outbox, file), reverseText(data), error => {
//         if (error) return console.log("Error: File could not be saved!")
//         console.log(`${file} was successfully saved in the outbox!`)
//       })
//     })
//   })
// })