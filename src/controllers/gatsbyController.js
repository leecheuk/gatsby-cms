/**
 * GatsbyController manages/directs flow of resources between
 * GUI and Gatsby.js app.
 */
import GatsbyService from '../services/gatsbyService';

class GatsbyController {
    constructor() {
        this.gs = new GatsbyService();
        this.initializeConfig();
    }

    /**
     * Start gatsby server.
     */
    start() {
        this.gs.runScript('start');
    }
    stop() {
        this.gs.runScript('stop');
    }

    /**
     *  Config file
     */
    initializeConfig() {
        this.gs.createConfig();
    }
    getConfig() {
        return this.gs.getConfig();
    }

}

export default GatsbyController;