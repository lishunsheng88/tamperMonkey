// ==UserScript==
// @name         哈哩哈哩 “下一集”跳转标签
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  看柯南必备
// @author       lishunsheng
// @match        http://halihali5.com/*/*.html
// @match        http://halihali4.com/*/*.html
// @match        http://halihali3.com/*/*.html
// @match        http://halihali2.com/*/*.html
// @match        http://halihali1.com/*/*.html
// @icon         http://halihali1.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';
    var nowUrl=window.location.href;
    var regex=/(\/[0-9]*)/g;
    var regexResult=nowUrl.match(regex);
    var now=parseInt(regexResult[regexResult.length-1].substring(1,4))
    var re= /\/\d{1,10}.html/g
    url=nowUrl.replace(re,"/"+(now+1)+".html")
    //var node=document.getElementsByClassName("wrap head clearfix")[0].getElementsByClassName("logo")[0].getElementsByTagName("a")[0].setAttribute("href", url)

    var node=document.createElement("a");
    var textnode=document.createTextNode("下一集");
    node.appendChild(textnode);
    node.style.border='1px solid #666'
    node.style.background= '#222';
    node.style.color= '#aaa';
    node.style.padding= '5px 10px';
    node.style.margin= '5px 5px';
    node.style.textDecoration= 'none';
    node.style.borderRadius='2px';
    node.style.mozborderradius= '2px';
    node.style.webkitborderradius= '2px';
    node.setAttribute("href", url)
    document.getElementsByClassName("h2")[0].appendChild(node);
})();