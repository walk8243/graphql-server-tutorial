const fs = require('fs');

const schema =  {
  getSchema,
  getSchemaFiles,
  readDir,
}

function getSchema(schemaDirpath) {
  return schema.getSchemaFiles(schemaDirpath).reduce((accumulator, currentValue) => {
    return accumulator + fs.readFileSync(currentValue).toString();
  }, "");
}

function getSchemaFiles(schemaDirpath) {
  const regexp = /\.gql$/i;
  return readDir(schemaDirpath).filter((filepath) => regexp.test(filepath));
}

function readDir(dirpath) {
  const schemaFiles = [];
  for(let path of fs.readdirSync(dirpath)) {
    path = dirpath + "/" + path;
    try {
      const stat = fs.statSync(path);
      if(stat) {
        // console.debug(path);
        if(stat.isFile()) {
          schemaFiles.push(path);
        } else if(stat.isDirectory()) {
          schemaFiles.push(...schema.readDir(path));
        }
      }
    } catch(ex) {
      console.error(ex);
    }
  }
  return schemaFiles;
}

module.exports = schema;
