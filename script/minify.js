import fs from 'fs';
import { minify } from 'minify';
import tryToCatch from 'try-to-catch';

const map = {
    "src/assets/js/html5shiv.js": "public/assets/js/html5shiv.min.js",
    "src/assets/js/main.js": "public/assets/js/main.min.js",
    "src/assets/js/pwa_service_worker.js": "public/assets/js/pwa_service_worker.min.js",
    "src/assets/css/bootstrap/buttons.css": "public/assets/css/bootstrap/buttons.min.css",
    "src/assets/css/bootstrap/colors.css": "public/assets/css/bootstrap/colors.min.css",
    "src/assets/css/main.css": "public/assets/css/main.min.css",
};


for (const src in map) {
    const dst = map[src];
    console.log(src, dst);
    const [error, data] = await tryToCatch(minify, src);
    if (error) {
        console.error(error);
    } else {
        fs.writeFile(dst, data);
    }
}
