// ==UserScript==
// @name         Isleward - Map
// @namespace    Isleward.Addon
// @version      0.3
// @description  Displays a map of the current zone by pressing Tab. Use Num+ and Num- to zoom in/out
// @author       Ravenheart
// @match        isleward-test.herokuapp.com/*
// @grant        none
// ==/UserScript==

(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://cdn.rawgit.com/Isleward-Addon-Dev-Group/MapAddon/master/map.js";
    document.body.appendChild( scriptElement );
})();
