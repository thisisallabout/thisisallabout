(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{MfMa:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),_styles_today_today_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("Q2yN"),_styles_today_today_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_today_today_css__WEBPACK_IMPORTED_MODULE_1__),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wd/R"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__),moment_timezone__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("f0Wu"),moment_timezone__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);let isDeviceTypeMobile=document.body.getAttribute("banana-device-type","mobile");function init_render(){document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),document.body.classList.add("today"),document.querySelector('.minion-header li[data-sectionid="nav-section-today"]').classList.add("current");Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
    <div class="today-head-data">  
        <div class="head-hero-title">
            <p class="head-today-hero">Key Headlines</p>
            <p class="head-date-hero">Today</p>
        </div>
        <div class="head-item-container">
        </div>
    </div>
    <div class="today-copyrights">
        <p>Articles/Images copyrights CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, Financial Times. All images belong to the publishers and the rightful owner of images. We display images based on open metadata aggregation.</p>
    </div>
    <div class="today-guide-photosafetynet">
        <div class="guide-text">
            <p>Our Today section is an unbiased news cluster of topics trending across mainstream media. We pick the most important stories from each topic cluster automatically through our algorithm.</p>
            <p>Due to this, our editorial staff can't verify if the photos displayed in this section are consistent with our editorial guidelines. Hence, we offer an option to mask the background photos.</p>
            <p>Please select your preference below to continue.</p>
        </div>
        <div class="guide-photosafetynet-actions">
            <p banana-action="photosafetynet-on">Mask photos partially</p>
            <p banana-action="photosafetynet-off">Keep photos visible</p>
        </div>
    </div>
    <div class="today-tpdetails">
        <div class="tpdetails-reveal">
            <p>More Details</p>
        </div>
        <div class="tpdetails-text">
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, the "interpreter" unit creates a final result, ready to be published.</p>
            <p>This content renders clustering results created automatically by our processing system. We verify that the result is completely untouched.</p>
            <p>We aggregate and process stories from CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, and Financial Times from the past 24 hours.</p>
            <p>Based on the data, the system runs a full natural language processing and clustering sequence to sort out key topics. </p>
        </div>
        <div class="photosafetynet-reveal">
            <p>Photo Masking Configuration</p>
        </div>
        <div class="photosafetynet-text">
            <p>Our Today section is an unbiased news cluster of topics trending across mainstream media. We pick the most important stories from each topic cluster automatically through our algorithm.</p>
            <p>Due to this, our editorial staff can't verify if the photos displayed in this section are consistent with our editorial guidelines. Hence, we offer an option to mask the background photos.</p>
            <p>Please select your preference below to continue.</p>
        </div>
        <div class="photosafetynet-actions">
            <p banana-action="photosafetynet-on">Mask photos partially</p>
            <p banana-action="photosafetynet-off">Keep photos visible</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    
    <div class="today-action-revealinfo">
        <div class="icon"></div>
    </div>
    `,document.querySelector(".minion-contents")),render_head_data(),window.addEventListener("scroll",function(e){window.scrollY>=30?document.querySelector(".today-head-data .head-hero-title").classList.add("scrolled"):document.querySelector(".today-head-data .head-hero-title").classList.remove("scrolled")})}const render_head_data=()=>{var published_data=null,dataset_url;dataset_url="./data_publish_ready/today/today_data.json",fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text);published_data=module;var contentts=published_data[0].timestamp,est_ts=moment__WEBPACK_IMPORTED_MODULE_2___default.a.tz(contentts,"America/New_York").format("MMM D ddd"),est_ts_hero=moment__WEBPACK_IMPORTED_MODULE_2___default.a.tz(contentts,"America/New_York").format("MMMM D hA, ddd");document.querySelector(".head-date-hero").innerHTML=est_ts_hero;const head_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
            ${published_data.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                ${e.item_highestrank.map(t=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                    <div class="head-article-item analysis-article-obj" banana-keywords="${JSON.stringify(e.topics_lda)}" banana-link="${t[0].url}" banana-articleid="${t[0]._id}">
                        <div class="article-image" banana-imagesrc="${t[0].image}" style="background-image:  linear-gradient(to bottom, rgba(0, 0, 0 , 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('${t[0].image}')"></div>
                        <div class="article-keywords">
                            ${e.topics_lda.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="keyword-cluster">
                                ${e.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                <span>${e}&nbsp;</span>
                                `)}
                            </div>
                            `)}
                        </div>
                        <div class="article-highestrank-key">
                            <a href="${t[0].url}" target="_blank">
                                <p class="title">${t[0].title}</p>
                                <div class="article-info">
                                    <p class="origin">${t[0].origin}</p>
                                </div>
                            </a>
                        </div>
                        <div class="article-highestrank-all">
                        ${t.length>0?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            ${t.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                            <div class="all-article-item" banana-link="${e.url}" banana-articleid="${e._id}" banana-imagesrc="${e.image}">
                                <a href="${e.url}" target="_blank">
                                    <p class="title">${e.title}</p>
                                </a>
                                <div class="article-info">
                                    <p class="origin">${e.origin}</p>
                                </div>
                            </div>
                            `)}
                        `:""}
                        </div>
                        
                    </div>
                `)}
            `)}
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(head_markup(),document.querySelector(".today-head-data .head-item-container")),postrender_head_data(),document.querySelector(".minion-dataload").setAttribute("status","")})},postrender_head_data=()=>{if(localStorage.getItem("tiaa_visitor_photosafetynet_blur")?"on"==localStorage.getItem("tiaa_visitor_photosafetynet_blur")&&$(".today-head-data .head-article-item .article-image").each(function(e,t){$(t).addClass("blurred")}):$(".today-guide-photosafetynet").addClass("opened"),$(".today-guide-photosafetynet .guide-photosafetynet-actions > p").on("click",function(e){"photosafetynet-on"==$(this).attr("banana-action")?(localStorage.setItem("tiaa_visitor_photosafetynet_blur","on"),$(".today-head-data .head-article-item .article-image").each(function(e,t){$(t).addClass("blurred")})):"photosafetynet-off"==$(this).attr("banana-action")&&localStorage.setItem("tiaa_visitor_photosafetynet_blur","off"),$(".today-guide-photosafetynet").removeClass("opened")}),$(".today-head-data .head-article-item .article-keywords").on("click",function(e){$(this).parent().addClass("moreitems-opened"),$(this).parent().find(".article-moreitems").addClass("opened"),$(".today-head-data").addClass("head-item-sticky")}),$(".today-head-data .head-article-item .article-action-closereveal").on("click",function(e){$(this).parents(".head-article-item").removeClass("moreitems-opened"),$(".today-head-data").removeClass("head-item-sticky"),$(this).parents(".head-article-item").find(".article-moreitems").removeClass("opened")}),$(".today-head-data .head-article-item .article-moreitems").each(function(e,t){$(t).find(".all-article-item:nth-child(1)").remove()}),$(".today-head-data .analysis-article-obj").each(function(e,t){var a=moment__WEBPACK_IMPORTED_MODULE_2___default.a.tz(moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix($(t).find(".article-info .ts").attr("banana-ts")),"America/New_York").format(),o=moment__WEBPACK_IMPORTED_MODULE_2___default()(a).fromNow();$(t).find(".article-info .ts").text(o),$(t).addClass("article-item-"+e),e>=7&&$(t).addClass("article-item-lowpriority");["www.washingtonpost.com/pb/resources/img/twp-social-share.png","twt-assets.washtimes.com","https://static01.nyt.com/images/icons/t_logo_291_black.png","favicon","Twitterlogo.png","facebook-default-wide.jpg","social-default"].filter(e=>$(t).find(".article-image").attr("banana-imagesrc").toLowerCase().includes(e.toLowerCase())).length>0&&$(t).addClass("noimage")}),$(".today-action-revealinfo").on("click",function(e){document.querySelector(".today-tpdetails").classList.contains("opened")||(document.querySelector(".today-tpdetails").classList.add("opened"),document.documentElement.className="n_scroll")}),$(".today-tpdetails .tpdetails-close-action").on("click",function(e){document.querySelector(".today-tpdetails").classList.contains("opened")&&(document.querySelector(".today-tpdetails").classList.remove("opened"),document.documentElement.className="")}),$(".today-tpdetails .photosafetynet-actions > p").on("click",function(e){"photosafetynet-on"==$(this).attr("banana-action")?(localStorage.setItem("tiaa_visitor_photosafetynet_blur","on"),$(".today-head-data .head-article-item .article-image").each(function(e,t){$(t).addClass("blurred")})):"photosafetynet-off"==$(this).attr("banana-action")&&(localStorage.setItem("tiaa_visitor_photosafetynet_blur","off"),$(".today-head-data .head-article-item .article-image").each(function(e,t){$(t).removeClass("blurred")})),document.querySelector(".today-tpdetails").classList.contains("opened")&&(document.querySelector(".today-tpdetails").classList.remove("opened"),document.documentElement.className="")}),isDeviceTypeMobile)for(var e=document.querySelectorAll(".today-analysis-data .analysis-list .item-close-action"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t=getParents(this,".analysis-item")[0];if(t.classList.contains("selected")){t.classList.remove("selected");var a=document.querySelector(".today-analysis-data .analysis-list");a.classList.contains("selected")&&a.classList.remove("selected")}})};var getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a};Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),o=a.length>>>0;if(0===o)return!1;var i=0|t,s=Math.max(i>=0?i:o-Math.abs(i),0);function n(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}for(;s<o;){if(n(a[s],e))return!0;s++}return!1}})},Q2yN:function(e,t,a){}}]);