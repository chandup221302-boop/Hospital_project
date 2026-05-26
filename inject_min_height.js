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
    
    // Replace .heroSection { ... } to inject min-height and flex
    // We can do this by finding ".heroSection {" and appending our new properties.
    // Also, we must only do it for the root level .heroSection, not ones in media queries ideally, 
    // but doing it for all is probably fine since we just want a min-height.
    // Actually, maybe better to just find `.heroSection {\n  background:` or similar and inject there.
    
    // A regex to match .heroSection {
    content = content.replace(/\.heroSection\s*\{/g, ".heroSection {\n  min-height: 450px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;");
    
    // BUT WAIT: If there's an existing padding, maybe it conflicts? 
    // Padding + min-height + border-box: The flex layout with padding will just center the content in the available space. 
    // Wait, flex-direction column inside a section requires width 100% or something? It's block element so width is 100% by default.
    // Let's add box-sizing: border-box just in case.
    
    if (content !== original) {
        // Also remove duplicate properties if we run this multiple times by accident? I'll just write directly.
        fs.writeFileSync(file, content, "utf8");
        console.log(`Updated ${file}`);
    }
});
