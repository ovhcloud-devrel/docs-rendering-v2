"use strict";function _toConsumableArray(o){if(Array.isArray(o)){for(var e=0,r=Array(o.length);e<o.length;e++)r[e]=o[e];return r}return Array.from(o)}function odsFooter(){var o=[].concat(_toConsumableArray(document.querySelectorAll("li[data-button-menu]")));window.innerWidth<=768&&o.forEach((function(o){var e=o.querySelector("span[data-title-menu]"),r=o.querySelector("li.ods-footer__menu__item");r&&e.classList.add("chevron"),o.addEventListener("click",(function(){if(o.hasChildNodes()){var t=o.querySelector("div.ods-footer__menu__item__block").children;"d-none d-md-block"===t[1].className&&r?(t[1].classList.remove("d-none","d-md-block"),e.classList.add("open")):(t[1].classList.add("d-none","d-md-block"),e.classList.remove("open"))}}))}))}window.Drupal?function(o){o.behaviors.odsFooter={attach:function(){odsFooter()}}}(Drupal):odsFooter();;
"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(t){var e={elements:{links:document.querySelectorAll("[data-link-obfuscated]")},methods:{initialize:function(){[].concat(_toConsumableArray(e.elements.links)).forEach((function(t){t.addEventListener("click",(function(){var t=this.getAttribute("target")?this.getAttribute("target"):"_self",e=atob(this.getAttribute("data-link-obfuscated"));window.open(e,t)}))}))}},attach:function(){e.methods.initialize()}};t.behaviors.odsLinkObfuscated=e}(Drupal);;