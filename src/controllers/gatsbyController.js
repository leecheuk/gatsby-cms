/**
 * GatsbyController manages/directs flow of resources between
 * GUI and Gatsby.js app.
 */
import GatsbyService from '../services/gatsbyService';

class GatsbyController {
    constructor() {
        this.gs = new GatsbyService();
    }
    /**
     * Start gatsby server.
     */
    start() {
        this.gs.start();
    }
    stop() {
        this.gs.stop();
    }

}

export default GatsbyController;