const path=require('path');
console.log(path.sep);

const filepath=path.join('/content','folder', 'subfolder')
console.log(filepath);
const basepath =path.basename(filepath);
console.log(basepath)