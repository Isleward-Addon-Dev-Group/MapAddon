// ==UserScript==
// @name         Isleward - Map
// @namespace    Isleward.Addon
// @version      0.1
// @description  Displays a map of the current zone by pressing Tab
// @author       Ravenheart
// @include      http://isleward-test.herokuapp.com/*
// @grant        none
// ==/UserScript==

(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://cdn.rawgit.com/Isleward-Addon-Dev-Group/MapAddon/master/map.js";
    document.body.appendChild( scriptElement );
})();
