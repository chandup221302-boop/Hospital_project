const fs = require("fs");
const path = require("path");

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith(".module.css")) {
            results.push(file);
        }
    });
    return results;
}

const files = walk("./app");
files.forEach(file => {
    let content = fs.readFileSync(file, "utf8");
    let original = content;
    
    content = content.replace(/align-items:\s*center;/g, "");
    
    // BUT wait, this removes ALL align-items: center! That's bad.
    // I should just re-replace the whole block.
    
    // Original injected block:
    // min-height: 450px;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    
    let badBlock = `min-height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;`;
    let goodBlock = `min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;`; // align-items defaults to stretch
    
    content = content.replace(new RegExp(badBlock.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), goodBlock);
    
    if (content !== original) {
        fs.writeFileSync(file, content, "utf8");
        console.log(`Fixed ${file}`);
    }
});
