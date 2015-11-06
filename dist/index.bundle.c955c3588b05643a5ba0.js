/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var fb = __webpack_require__(1);
	var doge = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAGJ6VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAB4nFXIsQ2AMAwAwd5TeIR3HBwyDkIBRUKAsn9BAQ1XnuztbKOveo9r60cTVVVVz5JrrmkBZl4GbhgJKF8t/ExEDQ8rHgYgD0i2FMl6UPBzAAAEK0lEQVRoge2aTWhcVRTHf+fOm8lkJh+TyYfGxLbSam1DUZHaZtWKHxUU8QMruBGKuhBcKbirWBd+rFTEhYEK4kYLrhSxIEEQjXUXEE2N1EhMTGNDPp03896910ViQpo3LzOZ15mJ5LeYxbv33Hf+755z7r1vngD0nzx7QrDPAkeBuAg+dYy1OIAnYn8wVn3w/aenvpIjTw4cd1CDtXauEnzM3cqx6nStHakUx6rTCmF/rR2pFIu9Va3E2zZHYqpeElsk4FqR6wG2fk1nQynB8w1zCy6u6+Nrg8UiCAgoEUSEmBLaM40kk3G0NoFj1URITAlu3mfi8gLpVIK+m7vovb6ZjrYUDQkHrQ0F3+C6Hrm8xs17jI7NsLBUIO6owDGrLsRxFH9NL6K14amHD/H4iYMcPtSzaQi9cOZLvhgcoee6FmzQuNfE2yI4McX45DztmUbeevl+jt21u3RjWf0JHrti70pEKWF6ZonW5gY+efcJ9vRkyrI3xobOWtWEaG2YX8rz/pmHyhZRCsGZEzEiMHF5kQeP38Kxw2WEUxlURYgx4GvDo/cd2PIYyYSDX6T0QpVCK+d67LqhlTv7ujftOzo2w29/zKC1RSlBFAjC5PQCzemGonZVEbL4T4EDezvoyKZC+7394RDvfDS0ktjLiyFYQOjMpuhoSxWdlaoIKXiajmw6tM/wL1O8OfAt2UyKTHMSsOvWCyVS+9ACaIjHQtuHR6ZAINvaiLXLs1DCNmuVqiQ7gLFB6/EaWlvisdiKiPKpmpDNUKqc5x9gH5EfNSfSHBEg72m0seviO+f6FDwdautrQ871cPMbj0ci0JBw+K+GBRGpECsgIsQdwZi1WyolqE22tyKCUmpDiIkIauVsEpZnkQnxfUOu4PP6i/fQt68TX6/d1PM1rU3JUPtH7t3Pkdt6SFxV3ZQSZuZyvPTGeRYXXFLJeKB9ZEIsFs/XHNzXye4tbAozLUkyLcFi041xZudyOE7xEh5psisRZufdKIcE4KfRaRaWCiTixd3dFlVrfHIOz9ehJXpbCJm6srTpQrkthMzOu4io4rWXCIVYu3wc7dpkc7gVpv5eIhaTMB3RVa2YEhqTDp+d/5k9vRl8f22nupgrsPfGLP139Ba1v3jpCheG/6QplVi9ppTgeYaxidmVHXFxIhPiOIp4PMZ7H1/A8/S6p/f7+CxPP3Z7qJCvv7vE8698zk272tY3WOhqT9OcTqBNFRZEa8FaS3smxdXBrLUh2xr+RNOpBL3dLXR3Nm1oE5FQEXANziMS8P5p7bQXbldKv2Jsi6pVCjtC6o0dIfXGjpB6Y0dIvbEjpN74X3wwYC1O3XwwUBm2oLCM1NqNShHkV6WtvFprRyLgNWfo3Klv+k+efUCJeQ7kqLU4UYdbyf8UlNjRWhyEvGB/1IaBoXPPDP4LXeRj+LH/99EAAAAASUVORK5CYII="

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "images/doge-d9409101bb.jpg"

/***/ }
/******/ ]);