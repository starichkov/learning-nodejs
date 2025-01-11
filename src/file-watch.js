import * as fs from 'node:fs';
import * as path from "node:path";

/**
 * Monitors a specified file for changes and logs information about the changes and the file's last modified time.
 * The file to be monitored is determined using an environment variable and a command-line argument.
 *
 * @return {void} Does not return a value.
 */
function watchFileForChanges() {
    let filepath = path.resolve(process.env.HOME, process.argv[2]);
    console.log(`Watching for changes on: ${filepath}`);

    fs.watch(filepath, (eventType) => {
        if (eventType === 'change') {
            console.log(`File modified: ${filepath}`);
            fs.stat(filepath, (err, stats) => {
                if (err) {
                    console.error(`Error fetching file stats: ${err}`);
                } else {
                    console.info(`Last modified time: ${stats.mtime}`);
                }
            });
        }
    });
}

watchFileForChanges();