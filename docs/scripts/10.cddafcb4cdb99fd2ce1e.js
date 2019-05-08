(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0Lbv":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var _styles_editorialfloor_dataeditor_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("EQ3G"),_styles_editorialfloor_dataeditor_css__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_styles_editorialfloor_dataeditor_css__WEBPACK_IMPORTED_MODULE_0__),lit_html__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("AaG5"),moment__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("wd/R"),moment__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);function init_render(){document.body.classList.add("editorial");Object(lit_html__WEBPACK_IMPORTED_MODULE_1__.b)(lit_html__WEBPACK_IMPORTED_MODULE_1__["a"]`
    <div class="editorial-prepare">
        <div class="editorial-herotext">
            <p class="hero1">Editorial /theyearframe</p>
            <p class="hero1">(edit cluster framing data of theyear section)</p>
        </div>
    </div>
    <div class="editorial-frame-preview">
        <div class="analysis-console-renderer"></div>
        <div class="analysis-console-preview"></div>
    </div>
    <div class="analysis-console-finish">
        <div class="icon"></div>
    </div>
    `,document.querySelector(".minion-contents")),generate_data()}const render_data=path=>{var dataset_d=null,dataset_url;dataset_url="//thisisallabout.com/dataset/"+path+".json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text);dataset_d=module;const data_markup=()=>lit_html__WEBPACK_IMPORTED_MODULE_1__["a"]`
        <div class="data-keyfield">
            <input type="text" placeholder="dataset key for itemid" />
        </div>
        ${dataset_d.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_1__["a"]`
        <div class="data-group" banana-month="${e.month}">
            <ul class="cluster-themes">
            ${e.theme.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_1__["a"]`
                <li>${e}</li>
            `)}
            </ul>
            <ul class="cluster-articles" banana-json="${JSON.stringify(e.articles)}">
            ${e.articles.map((e,t)=>lit_html__WEBPACK_IMPORTED_MODULE_1__["a"]`
                <li banana-id="${e.twitterid}" banana-json="${JSON.stringify(e)}">
                    <p class="title">${e.title}</p>
                    <p banana-ts="${e.ts}" class="ts"></p>
                    <p class="objectid">${e.twitterid}</p>
                </li>
            `)}
            </ul>
            <div class="cluster-customfields">
                <input type="text" class="field-header" placeholder="header" />
                <input type="text" class="field-msg" placeholder="additional messages" />
                <input type="text" class="field-pickedid" placeholder="an object id of picked tweet section" />
                <input type="text" class="field-image" placeholder="image (optional)" />
                <input type="text" class="field-imagecopy" placeholder="image copyright info (optional)" />
            </div>
        </div>
        `)}
        `;document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),Object(lit_html__WEBPACK_IMPORTED_MODULE_1__.b)(data_markup(),document.querySelector(".analysis-console-renderer")),attach_events()})},attach_events=()=>{Array.prototype.forEach.call(document.querySelectorAll(".cluster-articles .ts"),function(e,t,a){var i=e.getAttribute("banana-ts"),l=moment__WEBPACK_IMPORTED_MODULE_2___default.a.unix(i).format("MMMM Do YYYY hh:mm");e.innerHTML=l});for(var e=document.querySelectorAll(".cluster-articles li"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):this.classList.add("selected")});var a=document.querySelectorAll(".cluster-themes li");for(t=0;t<a.length;t++)a[t].addEventListener("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):this.classList.add("selected")})},generate_data=()=>{document.querySelector(".analysis-console-finish").addEventListener("click",function(e){if(this.classList.contains("initiated")||this.classList.contains("previewed")){if(this.classList.contains("initiated")&&!this.classList.contains("previewed")){var t=[];if(""==document.querySelector(".data-keyfield input").value)return void alert("Please provide appropriate key for itemid!");Array.prototype.forEach.call(document.querySelectorAll(".analysis-console-renderer .data-group"),function(e,a,i){var l={};l.month=e.getAttribute("banana-month");var s=[];if(Array.prototype.forEach.call(e.querySelectorAll(".cluster-articles li.selected"),function(e,t,a){var i=e.getAttribute("banana-json");s.push(JSON.parse(i))}),l.articles=s,""!=e.querySelector(".cluster-customfields .field-pickedid").value){var r=[];Array.prototype.forEach.call(e.querySelectorAll(".cluster-articles li.selected"),function(t,a,i){if(e.querySelector(".cluster-customfields .field-pickedid").value==t.getAttribute("banana-id")){var s=t.getAttribute("banana-json");r.push(JSON.parse(s)),l.picked=r}})}var c=[];Array.prototype.forEach.call(e.querySelectorAll(".cluster-themes li.selected"),function(e,t,a){c.push(e.innerHTML)}),l.theme=c,""!=e.querySelector(".cluster-customfields .field-header").value&&(l.header=e.querySelector(".cluster-customfields .field-header").value),""!=e.querySelector(".cluster-customfields .field-msg").value&&(l.msg=e.querySelector(".cluster-customfields .field-msg").value),""!=e.querySelector(".cluster-customfields .field-image").value&&(l.image=e.querySelector(".cluster-customfields .field-image").value),""!=e.querySelector(".cluster-customfields .field-imagecopy").value&&(l["image-copyright"]=e.querySelector(".cluster-customfields .field-imagecopy").value);var o=a;a<10&&(o="0"+a),l.id=document.querySelector(".data-keyfield input").value+"c"+o,t.push(l)});var a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),i=document.createElement("a");i.setAttribute("href",a),i.setAttribute("download",document.querySelector(".editorial-pathfield input").value+".json"),i.click(),i.remove()}}else""!=document.querySelector(".editorial-pathfield input").value?(render_data(document.querySelector(".editorial-pathfield input").value),this.classList.add("initiated")):alert("Please provide dataset path first to proceed")})}},EQ3G:function(e,t,a){}}]);