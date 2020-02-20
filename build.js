const theo = require("theo");

theo
  .convert({
    transform: {
      type: "web",
      file: "tokens/app.json"
    },
    format: {
      type: "consistent"
    }
  })
  .then(css => {
    // $button-background: rgb(0, 112, 210);
  })
  .catch(error => console.log(`Something went wrong: ${error}`));
