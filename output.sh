jsdoc2md test/input/globals/members.js -p globals > test/output/globals/members.md &&
jsdoc2md test/input/globals/functions.js -p globals > test/output/globals/functions.md &&
jsdoc2md test/input/globals/constants.js -p globals > test/output/globals/constants.md &&
jsdoc2md test/input/globals/class-constructors.js -p globals > test/output/globals/class-constructors.md &&
jsdoc2md test/input/globals/class-methods.js -p globals > test/output/globals/class-methods.md &&
jsdoc2md test/input/globals/class-properties.js -p globals > test/output/globals/class-properties.md &&
jsdoc2md test/input/globals/class-all.js -p globals > test/output/globals/class-all.md &&
jsdoc2md test/input/globals/*.js -p globals > test/output/globals/all.md &&
jsdoc2md test/input/commonjs/object.js -p modules > test/output/commonjs/object.md &&
jsdoc2md test/input/commonjs/object.js -p modules --index > test/output/commonjs/object-with-index.md &&
jsdoc2md test/input/commonjs/module.js -p modules > test/output/commonjs/module.md &&
jsdoc2md test/input/commonjs/class.js -p modules > test/output/commonjs/class.md &&
jsdoc2md test/input/commonjs/object-with-alias.js -p modules > test/output/commonjs/object-with-alias.md 