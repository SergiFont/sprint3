const { writeFile } = require("fs")
const { join } = require("path")
const { reverseText } = require('./reverseText')

const saveContent = (file, data, outbox) => {
    return new Promise((res, rej) => {
        writeFile(join(outbox, file), reverseText(data), error => {
            if (error) rej("Error: File could not be saved!")
            res(`${file} was successfully saved in the outbox!`)
        })
    })
}

module.exports = { saveContent }