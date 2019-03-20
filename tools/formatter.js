#!/usr/bin/env node
var args = process.argv.splice( /node$/.test(process.argv[0]) ? 2 : 1 );
console.log(
    JSON.stringify(
        JSON.parse(
            require('fs') .readFileSync(
                args.length > 0 ? args[0] : "/dev/stdin"
            )
        ), null, 4)
);
