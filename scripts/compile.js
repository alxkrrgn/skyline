const less = require('less');
const fs = require('fs');
const path = require('path');

// Read the LESS file
const lessFilePath = path.join(__dirname, '../src/styles/headerLess.less');
const cssOutputPath = path.join(__dirname, '../src/styles/headerLess.css');

fs.readFile(lessFilePath, 'utf8', (err, data) => {
  if (err) throw err;

  // Compile LESS to CSS
  less.render(data, (err, output) => {
    if (err) throw err;

    // Write the output CSS to a file
    fs.writeFile(cssOutputPath, output.css, (err) => {
      if (err) throw err;
      console.log('LESS compiled to CSS successfully!');
    });
  });
});
