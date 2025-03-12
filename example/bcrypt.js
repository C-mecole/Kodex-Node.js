const bcrypt = require("bcrypt");

const password = "fpokrwfkrgopkre";
const prevHash = "$2b$10$DirWPgW2gKd4FBWiZVWohOXFK2GJNw5k/kqcCftKk9Z5yDWFqU1Hi";

(async () => {
  const hash = await bcrypt.hash(password, );
  console.log(hash);

  const result = await bcrypt.compare(password, prevHash);
  console.log(result);
})();
