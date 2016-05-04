import '../scss/app.scss';
import $ from "jquery";
import 'waypoints';

import * as math from "./math";
console.log('Webpack boilerplate starting...');

class WebpackIntro {
    constructor() {
        this.initialize();
    }

    initialize() {
        console.log("initialize");
        console.log("2π = " + math.sum(math.pi, math.pi));
    }
}

let webpackIntro = new WebpackIntro();

