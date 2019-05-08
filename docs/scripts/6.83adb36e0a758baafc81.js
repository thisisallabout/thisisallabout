(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6KJF":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("AaG5"),_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("qVof"),_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_theyear_base_css__WEBPACK_IMPORTED_MODULE_1__),social_likes_next__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("/kDA"),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(social_likes_next__WEBPACK_IMPORTED_MODULE_2__),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("cdXw"),social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(social_likes_next_lib_social_likes_light_css__WEBPACK_IMPORTED_MODULE_3__);function init_render(){document.querySelector('.minion-header li[data-sectionid="nav-section-theyear"]').classList.add("current"),window.screen.width<=980&&document.body.setAttribute("banana-type","mobile");Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
    <div class="theyear-hero">
        <div class="theyear-herotext">
            <p class="hero1 strike">#Jan2017-Jan2018</p>
            <p class="hero1">It's been a giant mess.</p>
            <div class="hero2">
                <p>This month, to celebrate Trump's first year mark in the White House,</p>
                <p>we rediscovered what has happened in our nation during then.</p>
            </div>
            <p class="theyear-herotpdetails">More</p>
        </div>
        <div class="theyear-share" data-url="https://thisisallabout.com/theweek" data-title="TheWeek on THISISALLABOUT">
            <div data-service="facebook" title="TheWeek on THISISALLABOUT"></div>
            <div data-service="twitter" data-via="" data-related=""></div>
            <div data-service="plusone" title="TheWeek on THISISALLABOUT"></div>
            <div data-service="linkedin" title="TheWeek on THISISALLABOUT"></div>
            <div data-service="pinterest" title="TheWeek on THISISALLABOUT"></div>
            <div class="email" title="TheWeek on THISISALLABOUT">
                <div class="icon"></div>    
            </div>
        </div>
    </div>
    <div class="theyear-analysis-data">
        <div class="analysis-list">
        </div>
    </div>
    <div class="theyear-copyrights">
        <p>Articles/Images copyrights NPR, PBS. All images belong to NPR, PBS, and the rightful owner of images. We display images based on open metadata aggregation.</p>
    </div>
    <div class="theyear-tpdetails">
        <div class="tpdetails-reveal">
            <p>Technical Details</p>
        </div>
        <div class="tpdetails-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed stories from NPR and PBS NewsHour between January 20th, 2017 and January 15th, 2018 ET through Twitter. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains PBS and/or NPR promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `,document.querySelector(".minion-contents")),render_data(),social_likes_next__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelector(".theyear-share")),document.querySelector(".theyear-share .email").addEventListener("click",function(e){window.location.href="mailto:?body=Hey, check trending issues of this year: "+window.location.href})}const check_mobile=()=>{return!!document.body.getAttribute("banana-type","mobile")},render_data=()=>{var trump_data=null,dataset_url;dataset_url="./data_publish_ready/theyear/theyear_jan2018_data.json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text);trump_data=module;const analysis_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
            ${trump_data.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                <div class="analysis-item">
                    <div class="item-info">
                        <div class="item-theme">
                            <div class="item-bg" banana-imagesrc=""></div>
                            <p class="theme-header">${e.header}</p>
                            <p class="themes">${e.message}</p>
                        </div>
                        <div class="toparticle-month-container" banana-peakdata="${JSON.stringify(e.list)}" banana-peaks="${JSON.stringify(e.peaks)}" banana-months="${JSON.stringify(e.months)}">
                            ${e.toparticles.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                ${e.length>0?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                <div class="toparticle-month" banana-month="${e[0].date_month}">
                                    <p>${e[0].date_month}</p>
                                </div>
                                `:""}
                            `)}
                        </div>
                    </div>

                    <div class="item-toparticle-container">
                        <div class="toparticle-content-container">
                            ${e.toparticles.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                ${e.length>0?lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                <div class="toparticle-month" banana-month="${e[0].date_month}">
                                    ${e.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_0__["a"]`
                                        <div class="toparticle-object" banana-link="${e.url}" banana-articleid="${e._id}" banana-imagesrc="${e.image}">
                                            <div class="article-info">
                                                <p class="article-title">${e.title}</p>
                                                <p class="article-origin">${e.origin}</p>
                                            </div>
                                        </div>
                                    `)}
                                </div>
                                `:""}
                            `)}
                        </div>
                    </div>

                    <div class="item-close-action">
                        <div class="icon"></div>
                    </div>
                </div>
            `)}
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_0__.b)(analysis_markup(),document.querySelector(".theyear-analysis-data .analysis-list")),postrender_data(),document.querySelector(".minion-dataload").setAttribute("status","")})},postrender_data=()=>{if(Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .toparticle-month-container"),function(e,t,a){var i=JSON.parse(e.getAttribute("banana-peaks"));Array.prototype.forEach.call(e.querySelectorAll(".toparticle-month"),function(e,t,a){var s=e.getAttribute("banana-month"),r="";"2017-01"==s&&(r="Jan"),"2017-02"==s&&(r="Feb"),"2017-03"==s&&(r="Mar"),"2017-04"==s&&(r="Apr"),"2017-05"==s&&(r="May"),"2017-06"==s&&(r="Jun"),"2017-07"==s&&(r="Jul"),"2017-08"==s&&(r="Aug"),"2017-09"==s&&(r="Sep"),"2017-10"==s&&(r="Oct"),"2017-11"==s&&(r="Nov"),"2017-12"==s&&(r="Dec"),"2018-01"==s&&(r="Jan '18"),e.querySelector("p").innerHTML=r,i.includes(s)&&e.classList.add("peak")})}),Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .analysis-item"),function(e,t,a){e.querySelectorAll(".toparticle-month-container .toparticle-month")[0].classList.add("selected"),e.querySelectorAll(".toparticle-content-container .toparticle-month")[0].classList.add("selected");var i=e.querySelectorAll(".toparticle-content-container .toparticle-month")[1];e.querySelector(".item-bg").style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url("+i.querySelectorAll(".toparticle-object")[0].getAttribute("banana-imagesrc")+")"}),Array.prototype.forEach.call(document.querySelectorAll(".theyear-analysis-data .analysis-list .toparticle-content-container .toparticle-object"),function(e,t,a){e.style.backgroundImage="linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url("+e.getAttribute("banana-imagesrc")+")"}),check_mobile()){for(var e=document.querySelectorAll(".theyear-analysis-data .analysis-list .item-theme"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))});var a=document.querySelectorAll(".theyear-analysis-data .analysis-list .item-close-action");for(t=0;t<a.length;t++)a[t].addEventListener("click",function(e){var t,a=getParents(this,".analysis-item")[0];a.classList.contains("selected")?(a.classList.remove("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")&&t.classList.remove("highlighted")):(a.classList.add("selected"),(t=document.querySelector(".theyear-analysis-data .analysis-list")).classList.contains("highlighted")||t.classList.add("highlighted"))})}var i=document.querySelectorAll(".toparticle-month-container .toparticle-month");for(t=0;t<i.length;t++)i[t].addEventListener("click",function(e){var t=this.getAttribute("banana-month"),a=getParents(this,".analysis-item")[0];null!=a&&void 0!=a&&(a.querySelector(".toparticle-content-container .toparticle-month.selected").classList.remove("selected"),a.querySelector(".toparticle-month-container .toparticle-month.selected").classList.remove("selected"),a.querySelector('.toparticle-content-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"),a.querySelector('.toparticle-month-container .toparticle-month[banana-month="'+t+'"]').classList.add("selected"))});var s=document.querySelectorAll(".toparticle-content-container .toparticle-object");for(t=0;t<s.length;t++)s[t].addEventListener("click",function(e){var t=this.getAttribute("banana-link");null!=t&&void 0!=t&&""!=t&&window.open(t,"_blank")});document.querySelector(".theyear-herotpdetails").addEventListener("click",function(e){document.querySelector(".theyear-tpdetails").classList.contains("opened")||document.querySelector(".theyear-tpdetails").classList.add("opened"),document.querySelector(".theyear-analysis-data").classList.contains("hidden")||document.querySelector(".theyear-analysis-data").classList.add("hidden")}),document.querySelector(".theyear-tpdetails .tpdetails-close-action").addEventListener("click",function(e){document.querySelector(".theyear-tpdetails").classList.contains("opened")&&document.querySelector(".theyear-tpdetails").classList.remove("opened"),document.querySelector(".theyear-analysis-data").classList.contains("hidden")&&document.querySelector(".theyear-analysis-data").classList.remove("hidden")})};var getClosest=function(e,t){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),a=t.length;--a>=0&&t.item(a)!==this;);return a>-1});for(var a=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&a.push(e):a.push(e);return a};Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),i=a.length>>>0;if(0===i)return!1;var s=0|t,r=Math.max(s>=0?s:i-Math.abs(s),0);function n(e,t){return e===t||"number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t)}for(;r<i;){if(n(a[r],e))return!0;r++}return!1}})},qVof:function(e,t,a){}}]);