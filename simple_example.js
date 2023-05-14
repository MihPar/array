const { readFile } = require("node:fs/promises");

// {
// 	authority: "www.geeksforgeeks.org",
// 	method: "GET",
// 	path: "/node-js-file-system-complete-reference/",
// 	scheme: "https"
// }

(async () => {
  const fileName =
    "/Users/mihailparamonov/Downloads/JSON.exerceses/www.geeksforgeeks.org.har";
  const content = await readFile(fileName, "utf8");
  const obj = JSON.parse(content);
  //   console.log(obj.log.entries[0].request.headers.length);
  const result = {};
  for (const elem of obj.log.entries[0].request.headers) {
    // if (elem.name[0] === ":")
    if (elem.name.startsWith(":")) {
      result[elem.name.substring(1)] = elem.value;
    }
  }
  console.log(result);
})().catch((err) => {
  console.log(err.message);
});
