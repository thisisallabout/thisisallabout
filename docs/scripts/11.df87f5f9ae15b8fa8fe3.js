(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GVee:function(e,t,a){"use strict";a.r(t),a.d(t,"init_render",function(){return d});a("J9qm");var i=a("AaG5");function d(){document.body.classList.add("editorial");Object(i.b)(i["a"]`
    <div class="editorial-dataextract">
        <div class="editorial-herotext">
            <p class="hero1">Editorial /datasetextract</p>
            <p class="hero1">(extract items from dataset)</p>
            <p class="hero2">Make sure you provide proper dataset path before initiate the process.</p>
            <div class="editorial-dataextract-opt">
                <div class="editorial-editor-datatype">
                    <p>Specify the section: </p>
                    <div class="datatype-action-list">
                        <div class="datatype-action" banana-id="whattrumpsaid">
                            <p>WhatTrumpSaid</p>
                        </div>
                    </div>
                </div>
                <input type="text" placeholder="Type dataset json path (w/o file extension) and enter" />
            </div>
        </div>
    </div>
    <div class="editorial-editor-viewer">
        <div class="viewer-wrapper">
            <textarea id="console-content" placeholder="Content" rows="10"></textarea>
        </div>
        <div class="viewer-action-cancel">
            <div class="icon"></div>
        </div>
    </div>
    `,document.querySelector(".minion-contents")),o()}const o=()=>{document.querySelector(".editorial-dataextract-opt input").addEventListener("keypress",function(e){if(13==e.keyCode){if(null==document.querySelector(".editorial-editor-datatype .datatype-action-list div.selected"))return alert("ERR: No section datatype selected!");var t=document.querySelector(".editorial-editor-datatype .datatype-action-list div.selected").getAttribute("banana-id");return r(t,this.value),!1}}),document.querySelector(".editorial-editor-viewer .viewer-action-cancel").addEventListener("click",function(e){document.querySelector(".editorial-editor-viewer").classList.remove("opened")});for(var e=document.querySelectorAll(".editorial-editor-datatype .datatype-action-list div"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):(Array.prototype.forEach.call(document.querySelectorAll(".editorial-editor-datatype .datatype-action-list div"),function(e,t,a){e.classList.remove("selected")}),this.classList.add("selected"))})},r=(e,t)=>{var i;i="https://thisisallabout.com/dataset/"+t+".json",document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),"whattrumpsaid"==e&&Promise.all([a.e(1),a.e(8)]).then(a.bind(null,"PIaM")).then(e=>{e.process(i)})}},J9qm:function(e,t,a){}}]);