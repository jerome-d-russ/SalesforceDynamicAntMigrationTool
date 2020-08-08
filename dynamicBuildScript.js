const loc = "C:\\Users\\PC\\workspace\\principalLife\\src\\classes"
//const loc = "SalesforceDynamicAntMigrationTool"
const fs = require('fs');
const dirents = fs.readdirSync(loc, { withFileTypes: true });
const regex = /^(Life|LA).*Test.cls$/;
const runTests = dirents
    .filter(dirent => {
        return dirent.isFile() && dirent.name.match(regex)
    })
    .map(dirent => "\n\t\t\t<runTest>" + dirent.name.replace(".cls", "") + "</runTest>");
console.log(runTests);

let buildFile = fs.readFileSync('./build.xml', {encoding:'utf8', flag:'r'}); 

buildFile = buildFile.replace('{!runTests}', runTests);
buildFile = buildFile.replace('{!runTests}', runTests); //Twice for Proxy version

console.log(buildFile);

fs.writeFileSync("dynamicBuild.xml", data);