/** @format */

import { resolve, dirname, basename, join, extname } from "path"
import { readdirSync, readFileSync, writeFileSync } from "fs"
import { fileURLToPath } from "url"
import { load } from "cheerio"
import { minify } from "html-minifier"

/**
 * Build an object in the format: `{ <name>: <contents> }`.
 * @param {string[]} svgFiles - A list of filenames.
 * @param {Function} getSvg - A function that returns the contents of an SVG file given a filename.
 * @returns {Object}
 */
function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map((svgFile) => {
      const name = basename(svgFile, ".svg")
      const svg = getSvg(svgFile)
      const contents = getSvgContents(svg)
      return { name, contents }
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents
      return icons
    }, {})
}

/**
 * Get contents between opening and closing `<svg>` tags.
 * @param {string} svg
 * @returns {string}
 */
function getSvgContents(svg) {
  const $ = load(svg)
  return minify($("svg").html(), { collapseWhitespace: true })
}

export default buildIconsObject

// --------------------------------------------------------------------------------------------------------------------

const __dirname = dirname(fileURLToPath(import.meta.url))
const IN_DIR = resolve(__dirname, "../src/icons")
const OUT_FILE = resolve(__dirname, "../src/manifest.json")

console.log(`Building ${OUT_FILE}...`)

const svgFiles = readdirSync(IN_DIR).filter((file) => extname(file) === ".svg")

const getSvg = (svgFile) => readFileSync(join(IN_DIR, svgFile))

const icons = buildIconsObject(svgFiles, getSvg)

writeFileSync(OUT_FILE, JSON.stringify(icons))
