/** @format */

import { dirname, join } from "path"
import fs from "fs"
import { fileURLToPath } from "url"
import { createRequire } from "module"
import upperCamelCase from "uppercamelcase"

const require = createRequire(import.meta.url)
const IconsManifest = require("../src/manifest.json")
const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, "..")
const icons = Object.keys(IconsManifest)
const dir = join(rootDir, "src/icons")
const outline_entry = join(rootDir, "src", "outline.ts")
const bold_entry = join(rootDir, "src", "bold.ts")

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const initialTypeDefinitions = `/// <reference types="react" />
import { FC, SVGAttributes } from 'react';
export interface IconProps extends SVGAttributes<SVGElement> {
  className?: string;
  color?: string;
  size?: number;
}
export type Icon = FC<IconProps>;
`

fs.writeFileSync(join(rootDir, "index.d.ts"), initialTypeDefinitions, "utf-8")
fs.existsSync(outline_entry) && fs.unlinkSync(outline_entry)
fs.existsSync(bold_entry) && fs.unlinkSync(bold_entry)

const attrsToString = (attrs) => {
  return Object.keys(attrs)
    .map((key) => {
      if (key === "width" || key === "height" || key === "stroke" || key === "className") {
        return key + "={" + attrs[key] + "}"
      }
      if (key === "rest") {
        return "{...rest}"
      }
      return key + '="' + attrs[key] + '"'
    })
    .join(" ")
}

icons.forEach((name) => {
  const isOutline = name.includes("outline")
  const ComponentName = upperCamelCase(name.replace("-outline", "").replace("-bold", ""))
  const location = join(rootDir, "src", isOutline ? "outline" : "bold", `${ComponentName}.tsx`)
  const defaultAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    className: "className",
    height: "size",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "color",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    rest: "...rest",
  }

  console.log(location)
  const element = `
    import { FunctionComponent, forwardRef } from 'react'

    interface ${ComponentName}Props {
        className?: string
        size?: number
        color?: string
        [rest: string]: any
    }

    const ${ComponentName}: FunctionComponent<${ComponentName}Props> = forwardRef<SVGSVGElement, ${ComponentName}Props>(({ className, color = 'currentColor', size = 16, ...rest }, ref) => {
        return (
            <svg ref={ref} ${attrsToString(defaultAttrs)}>
                ${IconsManifest[name].replace(/clippath/g, "clipPath").replace(/maskunits/g, "maskUnits")}
            </svg>
        )
    })

    export default ${ComponentName}
  `

  fs.writeFileSync(location, element, "utf-8")

  console.log("Successfully built", ComponentName)

  const exportString = `export { default as ${ComponentName} } from './${
    isOutline ? "outline" : "bold"
  }/${ComponentName}';\r\n`
  isOutline
    ? fs.appendFileSync(outline_entry, exportString, "utf-8")
    : fs.appendFileSync(bold_entry, exportString, "utf-8")

  const exportTypeString = `export const ${ComponentName}: Icon;\n`
  fs.appendFileSync(join(rootDir, "index.d.ts"), exportTypeString, "utf-8")
})
