import archiver from 'archiver'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import ext_package from '../package.json' assert { type: 'json' }

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INPUT_DIR = path.join(__dirname, '../dist')
const DEST_DIR = path.join(__dirname, '../build')

const ensure_dest_zip_directory_exists = () => {
    if (!fs.existsSync(DEST_DIR)) {
        fs.mkdirSync(DEST_DIR)
    }
}

const buildZip = (src, dist, filename) => {
    console.info(`Building ${filename}...`)

    const output = fs.createWriteStream(path.join(dist, filename))
    // @ts-ignore
    const archive = archiver('zip', {
        zlib: { level: 9 },
    })
    archive.pipe(output)
    archive.directory(src, false)
    archive.finalize()
}

const main = () => {
    const { name, version } = ext_package
    const file_name = `${name}-v${version}.zip`

    ensure_dest_zip_directory_exists()

    buildZip(INPUT_DIR, DEST_DIR, file_name)
}

main()
