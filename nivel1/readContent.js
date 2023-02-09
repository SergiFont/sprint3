const { readFile } = require("fs")
const { join } = require("path")

const readContent = (files, inbox) => {
    return new Promise(( res, rej )=> {
        files.forEach(file => {
            readFile(join(inbox, file), "utf8", (error, data) => {
                if (error) rej("Error: File error")
                res({file, data})
            })
        })
    })
}

module.exports = { readContent }