import { promises as fs } from "fs";

export async function getMockJson(href: string) {
  const file = await fs.readFile(process.cwd() + href, "utf8");
  const data = JSON.parse(file);
  return data;
}
