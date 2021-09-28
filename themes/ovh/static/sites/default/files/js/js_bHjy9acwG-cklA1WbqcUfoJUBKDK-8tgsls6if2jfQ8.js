"use strict";!function(t){var o={t:function(o,n,r){return(r=r||{}).context=r.context?"ovh "+r.context:"ovh",t.t(o,n,r)},formatPlural:function(o,n,r,c,e){return(e=e||{}).context=e.context?"ovh "+e.context:"ovh",t.formatPlural(o,n,r,c,e)}};window.OVH=o}(Drupal);;
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}!function(e,t,n){var s={variables:{navbarIsOpened:!1,loginPanelIsOpened:!1,searchBarIsOpened:!1,totalNotifs:0},constants:{switchDesktopDisplay:1120,buttonTogglerTextClose:t.t("Close menu"),loginTogglerTextClose:t.t("Close login menu"),searchBarOpenClass:"ods-search-bar--open",customerAPIURL:n.ovh.me_api_url,ticketsAPIURL:n.ovh.tickets_api_url+"?status=open",pendingOrdersAPIURL:n.ovh.me_order_api_url+"/*/status?$aggreg=1&value:in=delivering,checking,documentsRequested"},elements:{main:document.querySelector("[data-header]"),topHeaderContainer:document.querySelector("[data-top-menu-container]"),topHeaderList:document.querySelector("[data-top-menu-list]"),topHeaderSubcategoryLinks:document.querySelectorAll("[data-top-menu-link-has-subcat], [data-language-switcher-btn]"),headerTogglerButton:document.querySelector("[data-header-toggler-button]"),headerTogglerButtonTextTag:document.querySelector("[data-header-button-text]"),headerTogglerButtonText:document.querySelector("[data-header-button-text]").textContent,headerUserNicTag:document.querySelector("[data-header-user-nic]"),headerUserNotif:document.querySelector("[data-header-user-notif]"),headerUserNotifAmount:document.querySelector("[data-header-user-notif-amount]"),headerUserNotifList:document.querySelector("[data-header-user-notif-list]"),headerUserNotifOrders:document.querySelector("[data-header-user-notif-orders]"),headerUserNotifOrdersText:document.querySelector("[data-header-user-notif-orders]")?document.querySelector("[data-header-user-notif-orders]").textContent:null,headerUserNotifTickets:document.querySelector("[data-header-user-notif-tickets]"),headerUserNotifTicketsText:document.querySelector("[data-header-user-notif-tickets]")?document.querySelector("[data-header-user-notif-tickets]").textContent:null,loginTogglerButton:document.querySelector("[data-login-toggler-button]"),loginTogglerButtonTextTag:document.querySelector("[data-login-button-text]"),loginMenuWrapper:document.querySelector("[data-login-menu-wrapper]"),searchBarTogglerButton:document.querySelector("[ods-search-bar-toggle]"),searchBarCloseButton:document.querySelector("[data-search-bar-close]"),navbar:document.querySelector("[data-navbar]"),overlay:document.querySelector("[data-header-overlay]"),searchOverlay:document.querySelector("[data-header-search-overlay]"),overlays:document.querySelectorAll("[data-header-overlay], [data-header-search-overlay]"),navbarItemsLvl1:document.querySelectorAll("[data-navbar-item-n1]"),navbarSubcategoryLinks:document.querySelectorAll("[data-link-has-subcat]"),headerBackLinks:document.querySelectorAll("[data-back-link]"),topHeaderLocalAnchors:[],loginTogglerButtonText:"",headerSearchBar:""},methods:{initialize:function(){s.elements.navbar&&(s.elements.topHeaderLocalAnchors=s.elements.navbar.querySelectorAll('a[href^="#"]')),s.elements.loginTogglerButton&&(s.elements.loginTogglerButtonText=s.elements.loginTogglerButtonTextTag.textContent),s.elements.headerSearchBar=s.elements.main.querySelector("[ods-search-bar]"),s.events.clickTogglerButton(),s.events.clickOverlay(),s.elements.navbar&&(s.events.windowSizeListener(),s.events.clickLocalAnchor(),s.events.clickBackLink(),s.events.focusSubcategoryLinkLvl2(),s.events.clickSubcategoryLink()),s.elements.searchBarTogglerButton&&(s.events.clickSearchBarToggler(),s.events.closeSearchButton()),s.elements.loginTogglerButton&&(s.events.clickLoginButton(),s.methods.getLoggedInUser().then((function(e){var t=e.nichandle,n=e.customerCode,a=e.legalForm;s.methods.setSessionStorageLoggedInUser(t,n,a),t&&"undefined"!==t&&s.methods.displayUserNic(t)})).then((function(){s.elements.headerUserNicTag&&(s.elements.headerUserNotif.classList.remove("d-none"),s.methods.getPendingOrders().then((function(e){sessionStorage.setItem("pendingOrders",e.length),e.length&&s.methods.displayNotifications(e.length,"orders")})),s.methods.getPendingTickets().then((function(e){sessionStorage.setItem("pendingTickets",e.length),e.length&&s.methods.displayNotifications(e.length,"tickets")})))}))),s.elements.navbarSubcategoryLinks.length&&s.events.focusNavbarMenu(),window.innerWidth<s.constants.switchDesktopDisplay&&s.elements.topHeaderList&&s.elements.navbar&&(s.elements.navbar.appendChild(s.elements.topHeaderList),s.elements.topHeaderList.classList.remove("d-none"))},navbarDisplay:function(){s.variables.navbarIsOpened?(window.innerWidth<s.constants.switchDesktopDisplay&&document.querySelector("body").classList.add("no-scroll"),s.elements.navbar.classList.add("active"),s.elements.overlay.classList.remove("inactive"),s.elements.headerTogglerButton.classList.add("active"),s.elements.headerTogglerButtonTextTag.textContent=s.constants.buttonTogglerTextClose):(document.querySelector("body").classList.remove("no-scroll"),s.elements.navbar.classList.remove("active"),s.elements.overlay.classList.add("inactive"),s.elements.headerTogglerButton.classList.remove("active"),s.elements.headerTogglerButtonTextTag.textContent=s.elements.headerTogglerButtonText,[].concat(_toConsumableArray(s.elements.navbarSubcategoryLinks)).forEach((function(e){e.nextElementSibling&&e.nextElementSibling.classList.remove("active")})))},loginPanelDisplay:function(){s.variables.loginPanelIsOpened?(s.elements.loginMenuWrapper.classList.add("active"),s.elements.overlay.classList.remove("inactive"),s.elements.loginTogglerButtonTextTag.textContent=s.constants.loginTogglerTextClose):(s.elements.loginMenuWrapper.classList.remove("active"),s.elements.overlay.classList.add("inactive"),s.elements.loginTogglerButtonTextTag.textContent=s.elements.loginTogglerButtonText)},searchBarDisplay:function(){s.variables.searchBarIsOpened?(window.innerWidth<s.constants.switchDesktopDisplay&&(s.elements.searchBarTogglerButton.classList.add("d-none"),s.elements.searchBarTogglerButton.classList.remove("d-flex")),s.elements.searchOverlay.classList.remove("inactive"),s.elements.headerSearchBar.classList.add(s.constants.searchBarOpenClass),s.elements.headerSearchBar.querySelector("input").focus()):(window.innerWidth<s.constants.switchDesktopDisplay&&(s.elements.searchBarTogglerButton.classList.add("d-flex"),s.elements.searchBarTogglerButton.classList.remove("d-none")),s.elements.searchOverlay.classList.add("inactive"),s.elements.headerSearchBar.classList.remove(s.constants.searchBarOpenClass))},menuSubcategoryDisplay:function(e){if(window.innerWidth<s.constants.switchDesktopDisplay){e.nextElementSibling.classList.add("active"),s.elements.navbar.classList.add("no-scroll");var t=e.closest("[data-menu-scroll-lock]");t&&(t.scroll({top:0,behavior:"smooth"}),t.classList.add("no-scroll"))}else{if(e.classList.contains("ods-navbar-link--n1")&&e.nextElementSibling.querySelector("[data-menu-sublist]")){var n=e.nextElementSibling.querySelectorAll("[data-link-has-subcat]"),a=e.nextElementSibling.querySelectorAll("[data-menu-sublist]");[].concat(_toConsumableArray(n)).forEach((function(e){e.classList.remove("active")})),[].concat(_toConsumableArray(a)).forEach((function(e){e.classList.remove("active")})),n[0].classList.add("active"),a[0].classList.add("active"),e.nextElementSibling.style.minHeight=a[0].offsetHeight+"px"}if(e.nextElementSibling.classList.contains("ods-navbar__list--n3")){var r=e.closest("[data-menu-sublist]").querySelectorAll("[data-link-has-subcat]"),o=e.closest("[data-menu-sublist]").querySelectorAll(".ods-navbar__list--n3");r.length&&[].concat(_toConsumableArray(r)).forEach((function(e){e.classList.remove("active")})),o.length&&[].concat(_toConsumableArray(o)).forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),e.nextElementSibling.classList.add("active"),e.closest(".ods-navbar__list--n2").style.minHeight=e.nextElementSibling.offsetHeight+"px",e.nextElementSibling.style.minHeight=e.closest(".ods-navbar__list--n2").offsetHeight+"px"}}},showOverlayDesktop:function(){window.innerWidth>=s.constants.switchDesktopDisplay&&s.elements.overlay.classList.remove("inactive")},hideOverlayDesktop:function(){window.innerWidth>=s.constants.switchDesktopDisplay&&s.elements.overlay.classList.add("inactive")},getLoggedInUser:function(){return new Promise((function(e,t){fetch(s.constants.customerAPIURL).then((function(t){return e(t.json())})).catch((function(e){return t(e)}))}))},getPendingOrders:function(){var e=new Headers;e.append("X-Ovh-ApiVersion","beta");var t={method:"GET",headers:e};return new Promise((function(e,n){fetch(s.constants.pendingOrdersAPIURL,t).then((function(t){return e(t.json())})).catch((function(e){return n(e)}))}))},getPendingTickets:function(){return new Promise((function(e,t){fetch(s.constants.ticketsAPIURL).then((function(t){return e(t.json())})).catch((function(e){return t(e)}))}))},setSessionStorageLoggedInUser:function(e,t,n){var s="1";if(sessionStorage.getItem("user")!==e&&(sessionStorage.setItem("lastCheck",0),sessionStorage.setItem("pendingOrders",null),sessionStorage.setItem("pendingTickets",null)),sessionStorage.setItem("user",e),sessionStorage.setItem("user_code",t),sessionStorage.setItem("legalform",n),null!==sessionStorage.getItem("legalform"))switch(sessionStorage.getItem("legalform")){case"individual":s="1";break;case"association":s="2";break;case"corporation":s="3";break;case"other":s="4"}"undefined"!=typeof tc_vars&&(tc_vars.user_code=t,tc_vars.user_code.length&&(tag.identifiedVisitor.unset(),tag.identifiedVisitor.set({id:tc_vars.user_code,category:s})))},displayUserNic:function(e){s.elements.headerUserNicTag.textContent="("+e+")",s.elements.headerUserNicTag.classList.remove("d-none")},displayNotifications:function(e,n){switch(n){case"orders":parseInt(e,10)>0?(s.elements.headerUserNotifOrders.textContent=t.formatPlural(parseInt(e,10),"1 pending order","@count pending orders"),s.variables.totalNotifs+=parseInt(e,10)):s.elements.headerUserNotifOrders.textContent=s.elements.headerUserNotifOrdersText;break;case"tickets":parseInt(e,10)>0?(s.elements.headerUserNotifTickets.textContent=t.formatPlural(parseInt(e,10),"1 pending ticket","@count pending tickets"),s.variables.totalNotifs+=parseInt(e,10)):s.elements.headerUserNotifTickets.textContent=s.elements.headerUserNotifTicketsText}s.variables.totalNotifs>0&&(s.elements.headerUserNotifAmount.classList.remove("d-none"),s.elements.headerUserNotifAmount.classList.add("d-flex"),s.elements.headerUserNotifAmount.textContent=s.variables.totalNotifs)}},events:{clickTogglerButton:function(){s.elements.headerTogglerButton.addEventListener("click",(function(){s.elements.loginTogglerButton&&(s.variables.loginPanelIsOpened=!1,s.methods.loginPanelDisplay()),s.elements.headerSearchBar&&(s.variables.searchBarIsOpened=!1,s.methods.searchBarDisplay()),s.variables.navbarIsOpened=!s.variables.navbarIsOpened,s.methods.navbarDisplay()}))},closeSearchButton:function(){s.elements.searchBarCloseButton.addEventListener("click",(function(){var e=document.querySelector(".ais-SearchBox-input");e.value.length?e.value="":(s.variables.searchBarIsOpened=!1,s.methods.searchBarDisplay())}))},clickLoginButton:function(){s.elements.loginTogglerButton.addEventListener("click",(function(){s.variables.navbarIsOpened=!1,s.methods.navbarDisplay(),s.elements.headerSearchBar&&(s.variables.searchBarIsOpened=!1,s.methods.searchBarDisplay()),s.variables.loginPanelIsOpened=!s.variables.loginPanelIsOpened,s.methods.loginPanelDisplay()}))},clickSearchBarToggler:function(){s.elements.searchBarTogglerButton.addEventListener("click",(function(){s.variables.searchBarIsOpened=!0,s.methods.searchBarDisplay(),s.variables.navbarIsOpened=!1,s.methods.navbarDisplay(),s.elements.loginTogglerButton&&(s.variables.loginPanelIsOpened=!1,s.methods.loginPanelDisplay())}))},clickOverlay:function(){[].concat(_toConsumableArray(s.elements.overlays)).forEach((function(e){e.addEventListener("click",(function(){e.classList.add("inactive"),s.variables.navbarIsOpened=!1,s.methods.navbarDisplay(),s.elements.loginTogglerButton&&(s.variables.loginPanelIsOpened=!1,s.methods.loginPanelDisplay()),s.elements.searchBarTogglerButton&&(s.variables.searchBarIsOpened=!1,s.methods.searchBarDisplay())}))}))},clickSubcategoryLink:function(){[].concat(_toConsumableArray(s.elements.navbarSubcategoryLinks),_toConsumableArray(s.elements.topHeaderSubcategoryLinks)).forEach((function(e){e.addEventListener("click",(function(t){s.methods.menuSubcategoryDisplay(e),window.innerWidth<s.constants.switchDesktopDisplay&&t.preventDefault()}))}))},focusNavbarMenu:function(){[].concat(_toConsumableArray(s.elements.navbarItemsLvl1)).forEach((function(e){e.addEventListener("mouseenter",s.methods.showOverlayDesktop),e.addEventListener("focusin",s.methods.showOverlayDesktop),e.addEventListener("mouseleave",s.methods.hideOverlayDesktop),e.addEventListener("focusout",s.methods.hideOverlayDesktop)})),s.elements.headerSearchBar&&s.elements.headerSearchBar.addEventListener("focusout",(function(e){var t=document.querySelector(".ods-search-bar__form__input");e.target.classList.contains("ods-search-bar__form__reset")&&!t.value&&(s.elements.searchOverlay.classList.add("inactive"),s.elements.headerSearchBar.classList.remove(s.constants.searchBarOpenClass))}))},focusSubcategoryLinkLvl2:function(){[].concat(_toConsumableArray(s.elements.navbarSubcategoryLinks)).forEach((function(e){e.addEventListener("mouseenter",(function(){window.innerWidth>=s.constants.switchDesktopDisplay&&s.methods.menuSubcategoryDisplay(e)})),e.addEventListener("focusin",(function(){window.innerWidth>=s.constants.switchDesktopDisplay&&s.methods.menuSubcategoryDisplay(e)}))}))},clickBackLink:function(){[].concat(_toConsumableArray(s.elements.headerBackLinks)).forEach((function(e){e.addEventListener("click",(function(){window.innerWidth<s.constants.switchDesktopDisplay&&(e.closest("[data-menu-scroll-lock]").classList.remove("no-scroll"),e.parentNode.closest("[data-menu-sublist]")?e.parentNode.closest("[data-menu-sublist]").classList.remove("active"):e.parentNode.hasAttribute(["data-language-switcher-content"])&&e.parentNode.classList.remove("active"),e.closest("[data-menu-sublist]")&&e.closest("[data-menu-sublist]").classList.contains("ods-navbar__list--n2")&&s.elements.navbar.classList.remove("no-scroll"))}))}))},clickLocalAnchor:function(){[].concat(_toConsumableArray(s.elements.topHeaderLocalAnchors)).forEach((function(e){e.addEventListener("click",(function(t){var n=e.getAttribute("href");(document.querySelector(n)&&document.querySelector(n).scrollIntoView({behavior:"smooth"}),"#callback"===n)&&document.querySelector('[data-expand-section="true"]').querySelector(".oui-cta").click();t.preventDefault()}))}))},windowSizeListener:function(){window.addEventListener("resize",(function(){window.innerWidth<s.constants.switchDesktopDisplay?s.elements.topHeaderList&&(s.elements.navbar.appendChild(s.elements.topHeaderList),s.elements.topHeaderList.classList.remove("d-none")):(s.variables.navbarIsOpened=!1,s.methods.navbarDisplay(),s.elements.topHeaderList&&s.elements.topHeaderList.parentNode!==s.elements.topHeaderContainer&&s.elements.topHeaderContainer.appendChild(s.elements.topHeaderList))}))}},attach:function(){s.methods.initialize()}};e.behaviors.header=s}(Drupal,window.OVH,drupalSettings);;
"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}!function(t){var e={elements:{links:document.querySelectorAll("[data-link-obfuscated]")},methods:{initialize:function(){[].concat(_toConsumableArray(e.elements.links)).forEach((function(t){t.addEventListener("click",(function(){var t=this.getAttribute("target")?this.getAttribute("target"):"_self",e=atob(this.getAttribute("data-link-obfuscated"));window.open(e,t)}))}))}},attach:function(){e.methods.initialize()}};t.behaviors.odsLinkObfuscated=e}(Drupal);;
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var legacyLanguages=[],languagesMapping=[{hrefLegacy:["en-id","en-my","en-vn","en-my","en-pk","en-th","en-hk","en-ph","en-jp","en-bd","en-tw","en-lk","en-kh","en-bn","en-fj","en-kr","en-la","en-mo","en-np","en-ws","en-tl"],hrefOCMS:"en-142"},{hrefLegacy:["es-es"],hrefOCMS:"es"},{hrefLegacy:["es"],hrefOCMS:"es-419"},{hrefLegacy:["pt"],hrefOCMS:"pt-pt"},{hrefLegacy:["en-au","en-nz"],hrefOCMS:"en-au"}],legacyHPMapping=_defineProperty({de:"https://www.ovh.de/",es:"https://www.ovh.es/",fr:"https://www.ovh.com/fr/","en-ie":"https://www.ovh.ie/",it:"https://www.ovh.it/",nl:"https://www.ovh.nl/",pl:"https://www.ovh.pl/","pt-pt":"https://www.ovh.pt/","en-gb":"https://www.ovh.co.uk/","es-419":"https://www.ovh.com/world/es/","en-ca":"https://www.ovh.com/ca/en/","fr-ca":"https://www.ovh.com/ca/fr/","en-us":"https://us.ovhcloud.com/","fr-ma":"https://www.ovh.com/ma/","fr-sn":"https://www.ovh.sn/","fr-tn":"https://www.ovh.com/tn/","en-au":"https://www.ovh.com/au/","en-sg":"https://www.ovh.com/sg/","en-142":"https://www.ovh.com/asia/",en:"https://www.ovh.com/world/"},"en-ie","https://www.ovh.ie/"),docsHPMapping=_defineProperty({de:"https://docs.ovh.com/de/",es:"https://docs.ovh.com/es/",fr:"https://docs.ovh.com/fr/","en-ie":"https://docs.ovh.com/ie/en/",it:"https://docs.ovh.com/it/",nl:"https://docs.ovh.com/nl/",pl:"https://docs.ovh.com/pl/","pt-pt":"https://docs.ovh.com/pt/","en-gb":"https://docs.ovh.com/gb/en/","es-419":"https://docs.ovh.com/us/es/","en-ca":"https://docs.ovh.com/ca/en/","fr-ca":"https://docs.ovh.com/ca/fr/","en-us":"https://us.ovhcloud.com/","fr-ma":"https://www.ovh.com/ma/","fr-sn":"https://www.ovh.sn/","fr-tn":"https://www.ovh.com/tn/","en-au":"https://docs.ovh.com/au/en/","en-sg":"https://docs.ovh.com/sg/en/","en-142":"https://docs.ovh.com/asia/en/",en:"https://www.ovh.com/world/"},"en-ie","https://docs.ovh.com/ie/en/"),languageSwitcherLinks=document.querySelectorAll("[data-language-switcher-content] .language-link"),alternateLinks=document.querySelectorAll('head link[rel="alternate"][hreflang]'),languageSwitcherRegions=document.querySelectorAll("ul[data-region]");[].concat(_toConsumableArray(alternateLinks)).forEach((function(e){var t=e.getAttribute("hreflang"),n=e.getAttribute("href");legacyLanguages.push({hreflang:languagesMapping.filter((function(e){return e.hrefLegacy.includes(t)})).length?languagesMapping.filter((function(e){return e.hrefLegacy.includes(t)}))[0].hrefOCMS:t,href:n})}));var legacyHreflangJsonObject=legacyLanguages.map(JSON.stringify),legacyHreflangUniqueSet=new Set(legacyHreflangJsonObject),cleanLegacyLanguages=Array.from(legacyHreflangUniqueSet).map(JSON.parse);[].concat(_toConsumableArray(languageSwitcherLinks)).forEach((function(e){var t=e.getAttribute("hreflang");if(cleanLegacyLanguages.filter((function(e){return e.hreflang.includes(t)})).length){var n=cleanLegacyLanguages.filter((function(e){return e.hreflang.includes(t)}))[0].href;e.setAttribute("href",n)}else window.location.hostname.includes("docs.ovh")?e.setAttribute("href",docsHPMapping[t]):e.setAttribute("href",legacyHPMapping[t])}));;
"use strict";!function(e){var t={elements:{legalIds:document.querySelectorAll("[data-legal-id]"),layoutContent:document.querySelector(".layout-content"),customLegalNotice:document.querySelector("[data-custom-legal-notice]"),customFooter:document.querySelector("[data-footer]")},variables:{legalNotices:[]},methods:{init:function(){t.methods.getLegalNotices(),t.methods.removeDuplicates(),t.methods.createWrapper(),t.methods.createIndexes()},getLegalNotices:function(){t.elements.legalIds.forEach((function(e){t.variables.legalNotices.push({id:e.getAttribute("data-legal-id"),content:e.getAttribute("data-legal-content")})}))},createLegalContainer:function(){var e=document.createElement("div");return e.classList.add("container"),e.setAttribute("data-legal-container","data-legal-container"),e},removeDuplicates:function(){var e=[];t.variables.legalNotices.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t)})),t.variables.legalNotices=e},createWrapper:function(){t.elements.customLegalNotice&&t.elements.customFooter?t.elements.customLegalNotice.closest(".ods-section").insertBefore(t.methods.createLegalContainer(),null):t.elements.customFooter?t.elements.layoutContent.querySelector("[data-footer]").insertBefore(t.methods.createLegalContainer(),null):t.elements.customLegalNotice?t.elements.customLegalNotice.closest(".ods-section").insertBefore(t.methods.createLegalContainer(),null):t.elements.layoutContent&&t.elements.layoutContent.append(t.methods.createLegalContainer())},createIndexes:function(){t.variables.legalNotices.forEach((function(e,t){document.querySelectorAll('[data-legal-id="'+e.id+'"]').forEach((function(e){var o=e.innerHTML;o&&-1!==o.indexOf("[*]")&&(e.innerHTML=o.replace("[*]","<sup>["+(t+1)+"]</sup>"))})),document.querySelector("[data-legal-container]")&&document.querySelector("[data-legal-container]").insertAdjacentHTML("beforeend",'<div class="oui-legend mb-3 pt-4">'+(t+1)+" "+e.content+"</div>")}))}},attach:function(){t.methods.init()}};e.behaviors.legalNotices=t}(Drupal);;
"use strict";!function(e){var t={constants:{visibleClass:"language-switcher__wrapper--visible"},elements:{languageSwitcherBtn:document.querySelector("[data-language-switcher-btn]"),languageSwitcherBtnContent:document.querySelector("[data-language-switcher-btn-content]"),languageSwitcherContent:document.querySelector("[data-language-switcher-content]"),activeLanguage:void 0,currentFlag:void 0,backLink:void 0},methods:{initialize:function(){t.elements.activeLanguage=t.elements.languageSwitcherContent.querySelector(".is-active"),t.elements.currentFlag=t.elements.activeLanguage.querySelector(".language-icon").cloneNode(!0),t.elements.backLink=t.elements.languageSwitcherContent.querySelector("[data-back-link]"),t.elements.languageText=document.createElement("span"),t.elements.languageSwitcherBtnContent.appendChild(t.elements.currentFlag),t.elements.languageText.classList.add("d-lg-none","mr-auto"),t.elements.languageText.textContent=t.elements.activeLanguage.textContent,t.elements.languageSwitcherBtnContent.appendChild(t.elements.languageText),t.events.clickLanguageSwitcherBtn(),t.events.clickBackLink()}},events:{clickLanguageSwitcherBtn:function(){t.elements.languageSwitcherBtn.addEventListener("click",(function(){t.elements.languageSwitcherContent.classList.toggle(t.constants.visibleClass)}))},clickBackLink:function(){t.elements.backLink.addEventListener("click",(function(){t.elements.languageSwitcherContent.classList.remove(t.constants.visibleClass)}))}}};e.behaviors.languageSwitcher={attach:function(){t.methods.initialize()}}}(Drupal);;