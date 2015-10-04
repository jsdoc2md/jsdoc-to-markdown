'use strict'
var render = require('../../../render')
var src = __dirname + '/sorting.js'

/* none */
render({ src: src, 'sort-by': 'none', 'global-index-format': 'grouped' }, __dirname + '/none.md')

/* kind */
render({ src: src, 'sort-by': 'kind', 'global-index-format': 'grouped' }, __dirname + '/kind.md')

/* scope */
render({ src: src, 'sort-by': 'scope', 'global-index-format': 'grouped' }, __dirname + '/scope.md')

/* scope,kind */
render({ src: src, 'sort-by': 'scope,kind', 'global-index-format': 'grouped' }, __dirname + '/scope,kind.md')

/* kind,scope */
render({ src: src, 'sort-by': 'kind,scope', 'global-index-format': 'grouped' }, __dirname + '/kind,scope.md')

/* name */
render({ src: src, 'sort-by': 'name', 'global-index-format': 'grouped' }, __dirname + '/name.md')
