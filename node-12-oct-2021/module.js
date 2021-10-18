function crud(command, arrayObject, object ,Name,Pages) {
  const fs = require("fs");
  try {
    const libraryData = fs.readFileSync("library.json", "utf8");
    library = JSON.parse(libraryData);
  } catch (error) {
    library = [];
  }
  object  = { name: Name, pages: Pages };
  switch (command) {
    case "add":
      try {
        if (arrayObject === []) {
          arrayObject.push(object);
          throw "new arrayObj";
        } else if (arrayObject.find((item) => item.name === Name)) {
          throw "same book name";
        } else {
          arrayObject.push(object);
        }
      } catch (error) {
        console.log(error);
      }
      break;

    case "update":
      try {
        if (arrayObject === []) {
          throw "empty arrayObj";
        } else if (arrayObject.find((item) => item.name === Name)) {
          index = arrayObject.findIndex((item) => item.name == Name);
          arrayObject[index].pages = Pages;
        }
      } catch (error) {
        console.log(error);
      }
      break;

    case "delete":
      try {
        if (arrayObject === []) {
          throw "empty arrayObj";
        } else if (arrayObject.find((item) => item.name === Name)) {
          index = arrayObject.findIndex((item) => item.name == Name);
          arrayObject.splice([index], 1);
        }
      } catch (error) {
        console.log(error);
      }
      break;

    case "getAll":
      console.log(arrayObject);
      break;

    case "search":
      let found = arrayObject.find((item) => item.name === Name);
      if (found == undefined) {
        console.log("not exist");
      } else {
        index = arrayObject.findIndex((item) => item.name == Name);
        console.log(arrayObject[index]);
      }

      break;

    default:
      console.error(`enter command`);
  }

  const fileJson = JSON.stringify(library);
fs.writeFileSync("library.json", fileJson);

}

module.exports.cruds = crud;
