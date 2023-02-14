const {listContents} = require("./listContents.js")
const {readContent} = require("./readContent.js")
const {saveContent} = require("./saveContent.js")
const { join } = require("path")
const inbox = join(__dirname, "inbox")
const outbox = join(__dirname, "outbox")

const turnAround = async(inbox, outbox) => {
  try {
    const list = await listContents(inbox)
    const {file, data} = await readContent(list, inbox)
    const result = await saveContent(file, data, outbox)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}
turnAround(inbox, outbox)