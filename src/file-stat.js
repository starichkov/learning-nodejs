import * as fs from 'node:fs';
import * as path from "node:path";

/**
 * Prints metadata for a specified file. The file path is constructed
 * using the user's home directory and a relative path provided as
 * a command-line argument.
 *
 * The method retrieves and logs the file's absolute path and metadata,
 * including access time (atime), modification time (mtime), change time (ctime),
 * and creation time (birthtime).
 *
 * @return {void} This function does not return a value.
 */
function printFileMetadata() {
    let filepath = path.resolve(process.env.HOME, process.argv[2])
    console.log(filepath)
    fs.stat(filepath, (err, stats) => {
        if (err) {
            console.error(err);
        } else {
            console.info(stats);
            console.info(stats.atime);
            console.info(stats.mtime);
            console.info(stats.ctime);
            console.info(stats.birthtime);
        }
    })
}

printFileMetadata();