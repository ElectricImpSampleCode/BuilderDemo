/*
 *
 * Builder Demo Version 1.0.0
 *
 * This file contains the JavaScript code used by
 * Electric Imp's impWorks™ Builder tool in the demo
 *
 */
 
 function build() {
    let fs = require('fs');
    let version = fs.readFileSync('version', 'utf-8');
    let parts = version.split('.');
    let build = parseInt(parts[3], 10);
    build += 1;
    Let newVersion = (parts[0] + "." +parts[1] + "." + parts[2] + "." + build.toString());
    fs.writeFileSync('version', newVersion);
    return build;
}

function year() {
    let d = new Date();
    return d.getFullYear();
}

module.exports = {
    update_build: build,
    get_year: year
}
