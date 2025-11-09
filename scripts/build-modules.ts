import { execSync } from "child_process";
import { readdirSync } from "fs";
import path from "path";

const componentsDir: string = "src/components";
const outDir: string = "dist/modules";

readdirSync(componentsDir).forEach((file: string) => {
  if (file.endsWith(".scss")) {
    const name: string = path.basename(file, ".scss");
    const cmd: string = `sass ${componentsDir}/${file} ${outDir}/${name}.css --style=compressed`;
    console.log("Compiling:", name);
    execSync(cmd, { stdio: "inherit" });
  }
});
