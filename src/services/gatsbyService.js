/**
 * GatsbyService 
 */

 import {ipcRenderer} from 'electron';

 class GatsbyService {
     start() {
        // path is relative to root directory
        ipcRenderer.send('run-script', {
            type: 'start'
        });
     }
     stop() {
         ipcRenderer.send('run-script', {
             type: 'stop'
         });
     }
 }

 export default GatsbyService;