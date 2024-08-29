import { strict as a } from 'assert'
import fs from 'node:fs'
import { spawn } from 'node:child_process'

const [test, only, skip] = [new Map(), new Map(), new Map()]
const inputPath = 'test/fixture/ignore.js'

try {
  fs.mkdirSync('tmp-test')
} catch (err) {
  // dir exists
}

test.set('cli: json option', async function () {
  const outputFile = fs.openSync('tmp-test/ignore.json', 'w')
  return new Promise((resolve, reject) => {
    const handle = spawn(
      'node',
      ['bin/cli.js', '--no-cache', '--json', inputPath],
      { stdio: ['ignore', outputFile, 'inherit'] }
    )
    handle.on('close', function (code) {
      if (code !== 0) {
        return reject(new Error('CLI process failed'))
      }
      const json = fs.readFileSync('tmp-test/ignore.json', 'utf8')
      if (json) {
        a.ok(/"id": "visible"/.test(json.toString()))
        resolve()
      } else {
        reject(new Error('no json returned'))
      }
    })
    handle.on('error', reject)
  })
})

export { test, only, skip }

