const jwt = require("jsonwebtoken");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6Ik5vYWgiLCJlbWFpbCI6ImllLmViZW5tZWx1QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGgudmpKRjZ2NnN6eC85Y0VSUjhiOC5sTmROUUM3RzVBYmJMejg3U0pjZ0hiVVg4WGlLWURDIiwiY3JlYXRlZEF0IjoiMjAyNS0wMy0xMlQxMToyNTo1OS4yNzdaIiwidXBkYXRlZEF0IjoiMjAyNS0wMy0xMlQxMToyNTo1OS4yNzdaIiwiaWF0IjoxNzQxNzgwMzg1LCJleHAiOjE3NDE3ODM5ODV9.ndZLJ3N8U15SHtmpqxMaCGgeO4fuM";
// const token = jwt.sign(
//   { username: "noahweasley", email: "noah@gmail.com" },
//   "oiojwdfojfoiejwfoijwefoiwjfiowfjeiowjfewjfoweijfw",
//   { expiresIn: "5s" }
// );
// console.log(token);

try {
  const decoded = jwt.verify(token, "osjdfoijdfiodsjfdiojsfdsoijfdsoijfdsiojf");
  console.log(decoded);
} catch (error) {
  console.error(error);
}
