(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0lbq":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),_styles_whattrumpsaid_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("EBzp"),_styles_whattrumpsaid_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_whattrumpsaid_css__WEBPACK_IMPORTED_MODULE_1__),social_likes_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("/kDA"),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(social_likes_next__WEBPACK_IMPORTED_MODULE_2__),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("cdXw"),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__),moment__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("wd/R"),moment__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__),lodash__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("LvDl"),lodash__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);function init_render(){document.body.classList.add("whattrumpsaid"),document.title="WhatTrumpSaid on THISISALLABOUT",document.querySelector('.minion-header li[data-sectionid="nav-section-whattrumpsaid"]').classList.add("current"),window.screen.width<=980&&document.body.setAttribute("banana-type","mobile");Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
    <div class="whattrumpsaid-hero">
        <div class="whattrumpsaid-herotext">
            <p class="hero1">Reading Trump's moves</p>
            <p class="hero1">through his tweets</p>
            <div class="hero2">
                <p>We all know that President Trump loves posting on Twitter.</p>
                <p>And that means you can see through his fanciful game by tweets.</p>
                <p>THISISALLABOUT did an analysis of his tweets since day one.</p>
            </div>
            <p class="whattrumpsaid-content-timestamp">Updated on ...</p>
            <p class="whattrumpsaid-action-details">Details</p>
        </div>

        <div class="whattrumpsaid-share" data-url="https://thisisallabout.com/whattrumpsaid" data-title="WhatTrumpSaid on THISISALLABOUT">
            <div data-service="facebook" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="twitter" data-via="" data-related="realDonaldTrump"></div>
            <div data-service="plusone" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="linkedin" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="pinterest" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div class="email" title="WhatTrumpSaid on THISISALLABOUT">
                <div class="icon"></div>    
            </div>
        </div>
    </div>
    
    <div class="whattrumpsaid-section-monthly">
        <div class="whattrumpsaid-analysis-group">

        </div>
    </div>
    <div class="whattrumpsaid-details">
        <div class="details-reveal">
            <p>Technical Details</p>
        </div>
        <div class="details-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed Twitter tweets of @realDonaldTrump between January 20th, 2017 and January 15th, 2018 ET through Twitter. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains PBS and/or NPR promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="details-close-action">
            <div class="icon"></div>
        </div>
    </div>
    <div class="whattrumpsaid-datapopup">
        <div class="datapopup-contents">
        </div>
        <div class="datapopup-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `,document.querySelector(".minion-contents")),document.querySelector(".whattrumpsaid-content-timestamp").innerHTML="Updated on Jul 17, 2018 ET / Early-Preview";for(var t=["2017-01","2017-02","2017-03","2017-04","2017-05","2017-06","2017-07","2017-08","2017-09","2017-10","2017-11","2017-12","2018-01"].reverse(),e=0;e<t.length;e++){var a=document.createElement("div");a.className="whattrumpsaid-analysis-data",a.setAttribute("banana-month",t[e]),document.querySelector(".whattrumpsaid-analysis-group").appendChild(a),""!==getpathparam("type")&&null!==getpathparam("type")&&getpathparam("type")==t[e]?render_list(t[e],!0):render_list(t[e],!1)}base_events()}const getpathparam=(t,e)=>{e||(e=window.location.href),t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null==a?null:a[1]},render_list=(moindex,opt)=>{var list_data=null,dataset_url;dataset_url="./data_publish_ready/trumptweeted/list_data.json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(dataset_url).then(t=>t.text()).then(function(text){var module=eval(text);list_data=module,lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(list_data,function(t){if(t.month==moindex){const a=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                <div class="whattrumpsaid-analysis-data-cover">
                    ${t.image?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                    <div class="cover-image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${t.image}')"></div>
                    `:lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`<div class="cover-image"></div>`}
                    <div class="cover-info">
                        <p class="month-title">${t.header}</p>
                        <ul class="month-tags">
                        ${t.keytag.map(t=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <li>#${t}</li>
                        `)}
                        </ul>
                    </div>
                </div>
                <div class="whattrumpsaid-analysis-data-wrapper">
                </div>
                `;if(Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(a(),document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+moindex+'"]')),1==opt){document.documentElement.className="n_scroll";var e=document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+moindex+'"]');e.getAttribute("banana-month");document.querySelector(".whattrumpsaid-analysis-group").classList.add("selectionmode"),e.classList.add("selected"),render_data(moindex)}return document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+moindex+'"] .whattrumpsaid-analysis-data-cover').addEventListener("click",function(t){document.documentElement.className="n_scroll";var e=document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+moindex+'"]'),a=e.getAttribute("banana-month");document.querySelector(".whattrumpsaid-analysis-group").classList.add("selectionmode"),e.classList.add("selected"),render_data(a)}),!1}}),document.querySelector(".minion-dataload").setAttribute("status","")})},page_go_back=()=>{var t=document.querySelector(".whattrumpsaid-analysis-data.selected");null!==t&&t.querySelector(".whattrumpsaid-analysis-data-action-close").click()},base_events=()=>{social_likes_next__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector(".whattrumpsaid-share")),document.querySelector(".whattrumpsaid-share .email").addEventListener("click",function(t){window.location.href="mailto:?body=Hey, check this story: "+window.location.href}),document.querySelector(".whattrumpsaid-hero .whattrumpsaid-action-details").addEventListener("click",function(t){document.querySelector(".whattrumpsaid-details").classList.contains("opened")||document.querySelector(".whattrumpsaid-details").classList.add("opened"),document.querySelector(".whattrumpsaid-analysis-data").classList.contains("hidden")||document.querySelector(".whattrumpsaid-analysis-data").classList.add("hidden")}),document.querySelector(".whattrumpsaid-details .details-close-action").addEventListener("click",function(t){document.querySelector(".whattrumpsaid-details").classList.contains("opened")&&document.querySelector(".whattrumpsaid-details").classList.remove("opened"),document.querySelector(".whattrumpsaid-analysis-data").classList.contains("hidden")&&document.querySelector(".whattrumpsaid-analysis-data").classList.remove("hidden")}),document.querySelector(".whattrumpsaid-datapopup .datapopup-close-action").addEventListener("click",function(t){document.querySelector(".whattrumpsaid-datapopup").classList.remove("opened")})},check_mobile=()=>{return!!document.body.getAttribute("banana-type","mobile")};var renderdata_fetch=null;const render_data=month=>{var trump_data=null,dataset_url;dataset_url="./data_publish_ready/trumptweeted/"+month+".json";const base_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
        <div class="whattrumpsaid-analysis-data-action-close-pre">
            <div class="icon"></div>
        </div>
    `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(base_markup(),document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+month+'"] .whattrumpsaid-analysis-data-wrapper')),document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+month+'"] .whattrumpsaid-analysis-data-wrapper .whattrumpsaid-analysis-data-action-close-pre').addEventListener("click",function(t){getParents(this,".whattrumpsaid-analysis-data")[0].classList.remove("selected"),document.querySelector(".whattrumpsaid-analysis-group").classList.remove("selectionmode"),document.documentElement.className="",document.querySelector(".minion-dataload").setAttribute("status","")}),document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),renderdata_fetch=fetch(dataset_url).then(t=>t.text()).then(function(text){var module=eval(text);trump_data=module;var targetnode=document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+trump_data[0].month+'"]');const base_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
            <div class="whattrumpsaid-analysis-data-dynamicbg" banana-month="${trump_data[0].month}">
                <div class="dynamicbg-group" banana-month="${trump_data[0].month}">
                ${trump_data[0].data.map(t=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                    <div class="dynamicbg-item" banana-id="${t.id}">
                    ${t.image?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                        <div class="image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${t.image}')"></div>
                    `:""}
                    </div>
                `)}
                </div>
            </div>
            <div class="analysis-group" banana-month="${trump_data[0].month}">
                <div class="analysis-list">
                ${trump_data[0].data.map(t=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                    <div class="analysis-item" banana-id="${t.id}">
                        <div class="item-title">
                            <p class="title-text">${t.header}</p>
                            ${t.msg?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <p class="msg-text">${t.msg}</p>
                            `:""}
                            ${t.imgcopyright?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="item-img-copyright">
                                <p>${t.imgcopyright}</p>
                            </div>
                            `:""}
                        </div>

                        ${t.picked?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                        <div class="item-pickedtweets">
                            <div class="tweet-item">
                                <p class="tweet-text">“${t.picked[0].title}”</p>
                                ${t.picked[0].url?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`<p class="link-text">${t.picked[0].url}</p>`:""}
                            </div>
                            ${t.image?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="item-revealtweets-action">
                                <p>MORE</p>
                            </div>
                            `:lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="item-revealtweets-action nobg">
                                <p>MORE</p>
                            </div>
                            `}
                        </div>
                        `:lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            ${t.image?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="item-revealtweets-action notweet">
                                <p>MORE</p>
                            </div>
                            `:lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="item-revealtweets-action nobg notweet">
                                <p>MORE</p>
                            </div>
                            `}
                        `}
                        
                        
                        <div class="item-tweets">
                        ${t.articles.map(t=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="tweet-item">
                                <p class="text">${t.title}</p>
                                <p class="ts" banana-ts="${t.ts}"></p>
                            </div>
                        `)}
                        </div>
                    </div>
                `)}
                </div>
            </div>
            <div class="whattrumpsaid-analysis-data-panelactions">
                <div class="whattrumpsaid-analysis-data-action-close">
                    <div class="icon"></div>
                    <p>Close</p>
                </div>
                <div class="whattrumpsaid-analysis-data-action-share" data-url="https://thisisallabout.com/whattrumpsaid/${trump_data[0].month}" data-title="WhatTrumpSaid on THISISALLABOUT">
                    <div data-service="facebook" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="twitter" data-via="" data-related="realDonaldTrump"></div>
                    <div data-service="plusone" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="linkedin" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="pinterest" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div class="email" title="WhatTrumpSaid on THISISALLABOUT">
                        <div class="icon"></div>    
                    </div>
                </div>
            </div>
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(base_markup(),document.querySelector('.whattrumpsaid-analysis-data[banana-month="'+trump_data[0].month+'"] .whattrumpsaid-analysis-data-wrapper')),targetnode.querySelector(".whattrumpsaid-analysis-data-action-share .email").addEventListener("click",function(t){window.location.href="mailto:?body=Hey, check this story: "+window.location.href}),targetnode.querySelector(".whattrumpsaid-analysis-data-action-close").addEventListener("click",function(t){getParents(this,".whattrumpsaid-analysis-data")[0].classList.remove("selected"),document.querySelector(".whattrumpsaid-analysis-group").classList.remove("selectionmode"),document.documentElement.className=""}),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default()(targetnode.querySelector(".whattrumpsaid-analysis-data-action-share")),trump_data[0].dynamicbg_list.length>0&&lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(trump_data[0].dynamicbg_list,function(t){__webpack_require__.e(15).then(__webpack_require__.bind(null,"NPok")).then(e=>{e.dynamicbg_render_data(month,t)})}),Array.prototype.forEach.call(document.querySelectorAll(".whattrumpsaid-analysis-data .tweet-item .ts"),function(t,e,a){var i=t.getAttribute("banana-ts"),s=moment__WEBPACK_IMPORTED_MODULE_4___default.a.unix(i).format("MMMM Do YYYY, hh:mm");t.innerHTML=s});for(var revealtweets=document.querySelectorAll(".whattrumpsaid-analysis-data .item-revealtweets-action"),i=0;i<revealtweets.length;i++)revealtweets[i].addEventListener("click",function(t){for(var e=getParents(this,".analysis-item")[0].querySelector(".item-tweets"),a=document.querySelector(".whattrumpsaid-datapopup .datapopup-contents");a.firstChild;)a.removeChild(a.firstChild);var i=e.cloneNode(!0);document.querySelector(".whattrumpsaid-datapopup .datapopup-contents").appendChild(i),document.querySelector(".whattrumpsaid-datapopup").classList.add("opened")});targetnode.querySelector(".whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item:nth-child(1)").classList.add("current"),targetnode.querySelector(".whattrumpsaid-analysis-data .analysis-item:nth-child(1)").classList.add("current"),targetnode.querySelector(".analysis-group").addEventListener("scroll",function(t){lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(trump_data[0].dynamicscroll_list,function(t){1==checkVisible(targetnode.querySelector('.analysis-item[banana-id="'+t+'"]'),.3*window.innerHeight)&&(targetnode.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item[banana-id="'+t+'"]').classList.add("current"),targetnode.querySelector('.analysis-item[banana-id="'+t+'"]').classList.add("current")),0==checkVisible(targetnode.querySelector('.analysis-item[banana-id="'+t+'"]'),.25*window.innerHeight)&&(targetnode.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item[banana-id="'+t+'"]').classList.remove("current"),targetnode.querySelector('.analysis-item[banana-id="'+t+'"]').classList.remove("current"))})}),document.querySelector(".minion-dataload").setAttribute("status","")})};var getClosest=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),a=e.length;--a>=0&&e.item(a)!==this;);return a>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},getParents=function(t,e){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),a=e.length;--a>=0&&e.item(a)!==this;);return a>-1});for(var a=[];t&&t!==document;t=t.parentNode)e?t.matches(e)&&a.push(t):a.push(t);return a};function checkVisible(t,e,a){if(t){e=e||0,a=a||"visible";var i=t.getBoundingClientRect(),s=Math.max(document.documentElement.clientHeight,window.innerHeight),n=i.bottom-e<0,r=i.top-s+e>=0;return"above"===a?n:"below"===a?r:!n&&!r}}function isElementInViewport(t){"function"==typeof jQuery&&t instanceof jQuery&&(t=t[0]);var e=t.getBoundingClientRect();return e.top>=.3*-window.innerHeight||e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),i=a.length>>>0;if(0===i)return!1;var s=0|e,n=Math.max(s>=0?s:i-Math.abs(s),0);function r(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}for(;n<i;){if(r(a[n],t))return!0;n++}return!1}})},EBzp:function(t,e,a){}}]);