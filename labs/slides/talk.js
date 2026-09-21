/**
 * JS file included in *all* lab slides
 */

import "./prism.js";
import Inspire from "https://inspirejs.org/inspire.mjs";
import { SELECTOR as TARGET_WIDTH_SELECTOR } from "./plugins/target-width/plugin.js";

let base = new URL("./plugins/", import.meta.url);
Inspire.plugins.register({
	"syntax-breakdown": {
		test: ".syntax-breakdown",
		base
	},
	"target-width": {
		test: TARGET_WIDTH_SELECTOR,
		base
	},
	"browser": {
		test: ".browser",
		base
	},
	"tree": {
		test: ".tree",
		base
	},
});

export default Inspire;
