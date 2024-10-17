const fs = require('fs');
const posthtml = require('posthtml');
const path = require('path');

// Helper function to read the SVG content
function inlineSvg(filePath) {
  // eslint-disable-next-line no-undef
  const absolutePath = path.resolve(__dirname, '..', 'dist', filePath);
  if (fs.existsSync(absolutePath)) {
    return fs.readFileSync(absolutePath, 'utf8');
  }
  console.error(`SVG file not found: ${filePath}`);
  return '';
}

// Path to your built HTML file
const htmlFile = './dist/index.html';

// Read the built HTML file
fs.readFile(htmlFile, 'utf8', (err, html) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  // Use posthtml to process the HTML and inline SVGs
  posthtml()
    .use((tree) => {
      tree.walk((node) => {
        if (node.tag === 'img' && node.attrs && node.attrs.src.endsWith('.svg')) {
          // Get the path to the SVG from the src attribute
          const svgPath = node.attrs.src;
          // Inline the SVG content
          const svgContent = inlineSvg(svgPath);
          if (svgContent) {
            // Replace the <img> tag with the inline SVG content
            node.tag = false;
            node.content = [svgContent];
          }
        }
        return node;
      });
    })
    .process(html)
    .then((result) => {
      // Write the processed HTML with inlined SVGs back to the file
      fs.writeFile(htmlFile, result.html, 'utf8', (err) => {
        if (err) {
          console.error('Error writing inlined HTML:', err);
          return;
        }
        console.log('SVGs have been successfully inlined.');
      });
    })
    .catch((err) => {
      console.error('Error processing HTML:', err);
    });
});
