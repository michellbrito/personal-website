import fs from "fs";
import path from "path";

export async function getData(markdownFile) {
  const fullPath = path.join(process.cwd(), "content", markdownFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return fileContents;
}
