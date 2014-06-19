jsdoc2md test/input/globals/members.js -p globals > test/output/globals/members.md &&
jsdoc2md test/input/globals/functions.js -p globals > test/output/globals/functions.md &&
jsdoc2md test/input/globals/constants.js -p globals > test/output/globals/constants.md &&
jsdoc2md test/input/globals/classes.js -p globals > test/output/globals/classes.md &&
jsdoc2md test/input/globals/class-methods.js -p globals > test/output/globals/class-methods.md &&
jsdoc2md test/input/globals/class-properties.js -p globals > test/output/globals/class-properties.md &&
jsdoc2md test/input/globals/*.js -p globals > test/output/globals/all.md
