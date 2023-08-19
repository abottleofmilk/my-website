const fs = require("fs");

// 读取环境变量
const arguments = process.argv.slice(2);
const arg = {};


/**
 * 
 * @param {*} arguments 
 */
function getKeyWord(arguments) {
  arguments.forEach((val, index) => {
    const object = val.split("=");
    if (object.length != 2) {
      console.warn("\x1b[31m%s\x1b[0m","error: please recheck arguments\n");
      process.exit(1);
    }
    arg[object[0]] = object[1];
  });
}
getKeyWord(arguments);


// 创建blog

const date = new Date();
const year = date.getFullYear().toString().padStart(4, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");

const fileName = `./blog/${year}-${month}-${day}-${arg["blog"]}.md`;

// 根据配置创建文件
try {
  fs.writeFileSync(fileName, "");
} catch (err) {
  console.error(err);
}
