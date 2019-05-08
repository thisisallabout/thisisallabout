(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+gsa":function(t,e,i){"use strict";i.r(e),i.d(e,"init_render",function(){return o});i("1Ue7");var a=i("AaG5");function o(){document.body.classList.add("editorial");Object(a.b)(a["a"]`
    <div class="editorial-auth">
        <div class="editorial-herotext">
            <p class="hero1">Identification required</p>
            <p class="hero2">Please contact editorial team if there's any inquiry.</p>
            <div class="editorial-authfields">
                <input type="text" id="editorial-authid" placeholder="username" />
                <input type="password" id="editorial-authpw" placeholder="password" />
                <div class="editorial-auth-action-proceed">
                    <div class="icon"></div>
                </div>
            </div>
        </div>
    </div>
    `,document.querySelector(".minion-contents")),r()}const r=()=>{$(".editorial-auth-action-proceed").on("click",function(e){t()}),$(".editorial-authfields input").on("keypress",function(e){if(13==e.keyCode)return t(),!1});const t=()=>{if(""==document.querySelector(".editorial-authfields #editorial-authid").value||""==document.querySelector(".editorial-authfields #editorial-authpw").value)return alert("Please provide your editorial auth credentials first");var t;t="//thisisallabout.com:5020/auth";var e={username:document.querySelector(".editorial-authfields #editorial-authid").value,password:document.querySelector(".editorial-authfields #editorial-authpw").value};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>t.json()).then(function(t){if(document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),t.error)return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+JSON.stringify(t.error));localStorage.setItem("tiaa_stuart_edt_ac_t",t.token),window.location.reload(!1)}).catch(t=>alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+t))}}}}]);