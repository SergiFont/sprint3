const { readFile } = require("fs")
const { join } = require("path")
const inbox = join(__dirname, "inbox")

const readContent = files => {
    files.forEach(file => {
        readFile(join(inbox, file), "utf8", (error, data) => {
            if (error) return console.log("Error: File error")
            console.log(data)
        })
    })
}

module.exports = readContent