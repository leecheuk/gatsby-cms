 /**
 * GatsbyService 
 */

import {ipcRenderer} from 'electron';
import fs from 'fs';

 class GatsbyService {
     constructor() {
         this.getConfig();
         this.config = null;
     }
     // ask ipcMain to run script
     runScript(type) {
        ipcRenderer.send('run-script', {
            type
        });
     }
     createFile(path) {
        ipcRenderer.send('create-file', {
            path
        });
     }
     writeFile(filename, content) {
        ipcRenderer.send('write-file', {
            filename,
            content
        });
     }
     createConfig() {
        let filename = `./public/website/config/config.json`;
        let content = JSON.stringify({
            url: `https://yourdomain.com`,
            title: `My Blog`,
            subtitle: `Amazing Blog`,
            copyright: `My Blog © ${new Date().getFullYear()}`,
            postsPerPage: 5,
            author: {
                name: `Gatsby Fan`,
                photo_url: `#`,
                bio_description: ``,
                contacts: {
                    email: `dev.cheuk.lee@gmail.com`,
                    github: `https://github.com/leecheuk`,
                    twitter: ``,
                    linkedin: ``,
                    youtube: ``,
                    dribble: ``,
                    instagram: ``
                }
            }
        }, null, 2);
        if (!fs.existsSync(filename)) {
            this.writeFile(filename, content);
        }
     }
     editConfigFields(config) {
         ipcRenderer.send('update-config', config);
     }
     getConfig() {
         let config = ipcRenderer.sendSync('get-config');
         return config;
     }
 }

 export default GatsbyService;