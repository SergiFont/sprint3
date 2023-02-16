const { readdir, readFile, writeFile } = require("fs")
const { join } = require("path")
const inbox = join(__dirname, "inbox")
const outbox = join(__dirname, "outbox")

const reverseText = str =>
  str
    .split("")
    .reverse()
    .join("");


const listContents = inbox => {
  return new Promise((res, rej) => {
    readdir(inbox, (error, files) => {
      if (error) rej("Error: Folder inaccessible")
      res(files)
    }
    )
  })
}

const readContent = (files, inbox) => {
  return new Promise((res, rej) => {
    files.forEach(file => {
      readFile(join(inbox, file), "utf8", (error, data) => {
        if (error) rej("Error: File error")
        res({ file, data })
      })
    })
  })
}

const saveContent = (file, data, outbox) => {
  return new Promise((res, rej) => {
    writeFile(join(outbox, file), reverseText(data), error => {
      if (error) rej("Error: File could not be saved!")
      res(`${file} was successfully saved in the outbox!`)
    })
  })
}

const turnAround = async (inbox, outbox) => {
  try {
    const list = await listContents(inbox)
    const { file, data } = await readContent(list, inbox)
    const result = await saveContent(file, data, outbox)
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

turnAround(inbox, outbox)