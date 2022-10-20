/** @format */

import { join, extname, basename, dirname } from "path"
import { fileURLToPath } from "url"
import { readdirSync, renameSync } from "fs"

const dir = join(dirname(fileURLToPath(import.meta.url)), "../src/icons")

for (const oldFile of readdirSync(dir)) {
  const extension = extname(oldFile)
  const name = basename(oldFile, extension)

  renameSync(
    join(dir, oldFile),
    join(
      dir,
      name.toLowerCase().replace("property 1=", "").replace(", property 2=", "-").replace(" ", "-") + extension,
    ),
  )
}

console.log("File name cleaning successful")
