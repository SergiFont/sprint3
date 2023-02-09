const { readdir } = require("fs")
const { join } = require("path")
const inbox = join(__dirname, "inbox")

const listContents = () => {
     readdir(inbox, (error, files) => {
        if (error) return console.log("Error: Folder inaccessible")
        const result = files
        return result
    }
    )
}
// dirContents()

module.exports = listContents