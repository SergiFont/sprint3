const { readdir } = require("fs")

const listContents = inbox => {
    return new Promise((res, rej) => {
        readdir(inbox, (error, files) => {
            if (error) rej("Error: Folder inaccessible")
            res(files)
        }
        )
    })
}

module.exports = { listContents }

