import { strict as a } from 'assert'
import jsdoc2md from 'jsdoc-to-markdown'

const [test, only, skip] = [new Map(), new Map(), new Map()]
const inputFile = 'test/fixture/ignore.js'

test.set('.render({ files })', function () {
  return jsdoc2md.render({ files: inputFile })
    .then(result => a.ok(/a visible global/.test(result)))
})

test.set('.render({ data })', function () {
  const data = [
    {
      id: 'visible',
      longname: 'visible',
      name: 'visible',
      kind: 'member',
      scope: 'global',
      description: 'a visible global',
      meta: {
        lineno: 4,
        filename: 'ignore.js'
      },
      order: 0
    },
    {
      id: 'invisible',
      longname: 'invisible',
      name: 'invisible',
      kind: 'member',
      scope: 'global',
      description: 'an ignored global',
      ignore: true,
      meta: {
        lineno: 10,
        filename: 'ignore.js'
      },
      order: 1
    }
  ]
  return jsdoc2md.render({ data: data })
    .then(result => a.ok(/a visible global/.test(result)))
})

test.set('.render({ files, heading-depth: 4 })', function () {
  return jsdoc2md.render({ files: inputFile, 'heading-depth': 4 })
    .then(result => a.ok(/#### visible/.test(result)))
})

test.set('.render({ files, param-list-format: list })', function () {
  const inputFile = 'test/fixture/params.js'
  return jsdoc2md.render({ files: inputFile, 'param-list-format': 'list' })
    .then(result => a.ok(/- one/.test(result)))
})

test.set('.getTemplateData({ files })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile })
    .then(result => a.ok(result[0].id))
})

test.set('.getJsdocData({ files })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile })
    .then(result => a.ok(result[0].longname))
})

test.set('.render({ files, noCache })', function () {
  return jsdoc2md.render({ files: inputFile, noCache: true })
    .then(result => a.ok(/a visible global/.test(result)))
})

test.set('.render({ data, noCache })', function () {
  const data = [
    {
      id: 'visible',
      longname: 'visible',
      name: 'visible',
      kind: 'member',
      scope: 'global',
      description: 'a visible global',
      meta: {
        lineno: 4,
        filename: 'ignore.js'
      },
      order: 0
    },
    {
      id: 'invisible',
      longname: 'invisible',
      name: 'invisible',
      kind: 'member',
      scope: 'global',
      description: 'an ignored global',
      ignore: true,
      meta: {
        lineno: 10,
        filename: 'ignore.js'
      },
      order: 1
    }
  ]
  return jsdoc2md.render({ data: data, noCache: true })
    .then(result => a.ok(/a visible global/.test(result)))
})

test.set('.render({ files, heading-depth: 4, noCache })', function () {
  return jsdoc2md.render({ files: inputFile, 'heading-depth': 4, noCache: true })
    .then(result => a.ok(/#### visible/.test(result)))
})

test.set('.render({ files, param-list-format: list, noCache })', function () {
  const inputFile = 'test/fixture/params.js'
  return jsdoc2md.render({ files: inputFile, 'param-list-format': 'list', noCache: true })
    .then(result => a.ok(/- one/.test(result)))
})

test.set('.getTemplateData({ files, noCache })', function () {
  return jsdoc2md.getTemplateData({ files: inputFile, noCache: true })
    .then(result => a.ok(result[0].id))
})

test.set('.getJsdocData({ files, noCache })', function () {
  return jsdoc2md.getJsdocData({ files: inputFile, noCache: true })
    .then(result => a.ok(result[0].longname))
})

test.set('.getNamepaths()', function () {
  return jsdoc2md.getNamepaths({ files: 'test/fixture/ignore.js' })
    .then(namepaths => {
      a.deepStrictEqual(namepaths.member, [
        'visible',
        'invisible'
      ])
    })
})

test.set('.clear()', function () {
  return jsdoc2md.clear()
})

test.set('.render({ files, send })', function () {
  return jsdoc2md.render({ files: inputFile, send: true })
    .then(result => a.ok(/a visible global/.test(result)))
})

export { test, only, skip }

