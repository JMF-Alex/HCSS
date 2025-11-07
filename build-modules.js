import { execSync } from "child_process";
import { readdirSync } from "fs";
import path from "path";

const componentsDir = "src/components";
const outDir = "dist/modules";

readdirSync(componentsDir).forEach(file => {
  if (file.endsWith(".scss")) {
    const name = path.basename(file, ".scss");
    const cmd = `sass ${componentsDir}/${file} ${outDir}/${name}.css --style=compressed`;
    console.log("Compiling:", name);
    execSync(cmd, { stdio: "inherit" });
  }
});