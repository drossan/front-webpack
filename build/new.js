#!/urs/bin/env node

var path = require('path');
const fs = require('fs-extra')
const [, , ...args] = process.argv

async function copyFiles() {
    try {
        await fs.copy('./build/base', `./src/${args}`)
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
}

copyFiles()