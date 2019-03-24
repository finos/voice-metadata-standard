#!/usr/bin/env node

const fs = require('fs');

const usage = function() {
    const usageText = `
Usage: formatter.js [-i] schema.json

Options:
    -i        Edit file in-place
  `

    console.log(usageText)
}

var inline = false;
var filename = null;

const args = process.argv.splice(/node$/.test(process.argv[0]) ? 2 : 1);
if (args.length == 1) {
    filename = args[0];
} else if (args.length == 2 && args[0] == '-i') {
    inline = true;
    filename = args[1];
} else {
    usage();
    process.exit(1);
}

var formatted = JSON.stringify(
    JSON.parse(
        fs.readFileSync(filename)
    ), null, 4);

if (inline) {
    fs.renameSync(filename, filename + '.bak');
    console.log('Backp saved: ' + filename + '.bak');
    fs.writeFileSync(filename, formatted);
} else {
    process.stdout.write(formatted);
}
