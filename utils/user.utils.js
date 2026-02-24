import fs from "fs";
let readFile = () => {
  return JSON.parse(fs.readFileSync(process.env.FILE_NAME, "utf-8"));
};

let writeFile = (data) => {
  fs.writeFileSync(
    process.env.FILE_NAME,
    JSON.stringify(data, null, 4),
    "utf-8",
  );
};

export { readFile, writeFile };
