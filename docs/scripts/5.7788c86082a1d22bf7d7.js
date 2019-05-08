(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{cEYR:function(e,t,o){},fXJO:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"init_render",function(){return init_render});var _styles_editorialfloor_track_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("cEYR"),_styles_editorialfloor_track_css__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_styles_editorialfloor_track_css__WEBPACK_IMPORTED_MODULE_0__),_styles_editorialfloor_jsoneditor_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("gB64"),_styles_editorialfloor_jsoneditor_css__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_styles_editorialfloor_jsoneditor_css__WEBPACK_IMPORTED_MODULE_1__),lit_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("AaG5"),moment__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("wd/R"),moment__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__),jsoneditor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3PWe"),jsoneditor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(jsoneditor__WEBPACK_IMPORTED_MODULE_4__),lodash__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("LvDl"),lodash__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);function init_render(){document.body.classList.add("editorial");Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
    <div class="editorial-tracker">
        <div class="editorial-herotext">
            <p class="hero1">Editorial /tracker</p>
            <p class="hero1">(track edits/revise contents)</p>
            <p class="hero2">All changes you made will be saved into database with your editorial id. Once it's marked as 'ready for publish', it'll be saved as final data within 24hrs.</p>
        </div>
    </div>
    <div class="editorial-track-actions">
        <div class="editorial-track-action-refresh">
            <div class="icon"></div>
        </div>
        <div class="editorial-track-action-add">
            <div class="icon"></div>
        </div>
    </div>
    <div class="editorial-track-console">
        <div class="track-console-list-column">
            <div class="item-columns">
                <p class="column-title">Title</p>
                <p class="column-section">Section</p>
                <p class="column-lasteditor">Last Edit By</p>
                <p class="column-reviewstatus">Status</p>
            </div>
            <div class="column-actions">
                <p class="column-edititem"></p>
            </div>
        </div>
        <div class="track-console-list"></div>
    </div>
    <div class="editorial-track-console-add">
        <div class="console-add-wrapper">
            <div class="console-herotext">
                <p class="hero1">Add item</p>
                <p class="hero2">Please specify the format first. (You can't change the format once you posted) And make sure your text document edit is made via Google Drive or Dropbox Paper.</p>
            </div>
            <div class="console-add-fields">
                <input type="text" id="consoleadd-title" placeholder="Title" />
                <input type="text" id="consoleadd-section" placeholder="Section (e.g. whattrumpsaid)" />
                <div class="console-add-editor-wrapper">
                    <p>Specify the format: </p>
                    <div class="console-add-datatype">
                        <div class="datatype-action-jsondata" banana-id="json">
                            <p>Dataset in JSON</p>
                        </div>
                        <div class="datatype-action-document" banana-id="document">
                            <p>Text Document</p>
                        </div>
                    </div>
                </div>
                <textarea id="consoleadd-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="5"></textarea>
            </div>
            <div class="console-add-reviewstatus">
                <div class="reviewstatus-action-pending" banana-id="pending">
                    <p>Pending</p>
                </div>
                <div class="reviewstatus-action-revised" banana-id="revised">
                    <p>Revised</p>
                </div>
                <div class="reviewstatus-action-preapproval" banana-id="preapproval">
                    <p>Submit For Approval</p>
                </div>
                <div class="reviewstatus-action-finalapproval" banana-id="finalapproval">
                    <p>Approved/Ready For Publish</p>
                </div>
            </div>
            
        </div>
        <div class="track-console-header">
            <div class="console-add-action-send">
                <div class="icon"></div>
            </div>
            <div class="console-add-action-cancel">
                <div class="icon"></div>
            </div>
        </div>
    </div>

    <div class="editorial-track-console-edit">
        <div class="console-edit-wrapper">
            <div class="console-herotext">
                <p class="hero1">Edit item</p>
                <p class="hero2">Updating review status is required! Make sure your text document edit is made via Google Drive or Dropbox Paper.</p>
            </div>
            <div class="console-edit-fields">
                <input type="text" id="consoleedit-title" placeholder="Title" />
                <input type="text" id="consoleedit-section" placeholder="Section (e.g. whattrumpsaid)" />
                <div class="console-edit-editor"></div>
            </div>
            <div class="console-edit-reviewstatus">
                <div class="reviewstatus-action-pending" banana-id="pending">
                    <p>Pending</p>
                </div>
                <div class="reviewstatus-action-revised" banana-id="revised">
                    <p>Revised</p>
                </div>
                <div class="reviewstatus-action-preapproval" banana-id="preapproval">
                    <p>Submit For Approval</p>
                </div>
                <div class="reviewstatus-action-finalapproval" banana-id="finalapproval">
                    <p>Approved/Ready For Publish</p>
                </div>
            </div>

            <div class="console-edit-historylist">
            </div>
        </div>
        <div class="track-console-header">
            <div class="console-edit-action-send">
                <div class="icon"></div>
            </div>
            <div class="console-edit-action-cancel">
                <div class="icon"></div>
            </div>
        </div>
    </div>

    <div class="editorial-track-console-edithistory">
        <div class="console-edithistory-wrapper">
            <div class="console-herotext">
                <p class="hero1">Revisions</p>
            </div>
            <div class="console-edithistory-list">
            </div>
        </div>
        <div class="track-console-header">
            <div class="console-edithistory-action-cancel">
                <div class="icon"></div>
            </div>
        </div>
    </div>
    `,document.querySelector(".minion-contents")),load_trackerdata(),attach_events()}const attach_events=()=>{$(".console-edithistory-wrapper, .console-edit-wrapper, .console-add-wrapper").on("scroll",function(e){var t=$(this).parent().find(".track-console-header");this.scrollTop>=50?$(t).addClass("scroll_bar"):$(t).removeClass("scroll_bar")}),document.querySelector(".editorial-track-action-refresh").addEventListener("click",function(e){load_trackerdata()}),document.querySelector(".editorial-track-action-add").addEventListener("click",function(e){document.querySelector(".editorial-track-console-add").classList.add("opened"),document.documentElement.className="n_scroll"}),$(".editorial-track-console-add .console-add-reviewstatus div").on("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):(Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console-add .console-add-reviewstatus div"),function(e,t,o){e.classList.remove("selected")}),this.classList.add("selected"))}),$(".editorial-track-console-add .console-add-datatype div").on("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):(Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console-add .console-add-datatype div"),function(e,t,o){e.classList.remove("selected")}),this.classList.add("selected"))}),document.querySelector(".editorial-track-console-add .console-add-action-cancel").addEventListener("click",function(e){document.querySelector(".editorial-track-console-add").classList.remove("opened"),document.documentElement.className=""}),document.querySelector(".editorial-track-console-add .console-add-action-send").addEventListener("click",function(e){post_trackerdata()}),document.querySelector(".editorial-track-console-edit .console-edit-action-cancel").addEventListener("click",function(e){document.querySelector(".editorial-track-console-edit").classList.remove("opened"),document.documentElement.className="",document.querySelector(".editorial-track-console-edit .console-edit-editor").setAttribute("banana-type",""),$(".editorial-track-console-edit .console-edit-editor").empty();Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
        `,document.querySelector(".editorial-track-console-edit .console-edit-editor"))}),document.querySelector(".editorial-track-console-edit .console-edit-action-send").addEventListener("click",function(e){update_trackerdata()}),document.querySelector(".editorial-track-console-edithistory .console-edithistory-action-cancel").addEventListener("click",function(e){document.querySelector(".editorial-track-console-edithistory").classList.remove("opened"),$(".editorial-track-console-edithistory .console-edithistory-list").empty();Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
        `,document.querySelector(".editorial-track-console-edithistory .console-edithistory-list")),document.documentElement.className=""}),$(".editorial-track-console-edit .console-edit-reviewstatus div").on("click",function(e){this.classList.contains("selected")?this.classList.remove("selected"):(Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console-edit .console-edit-reviewstatus div"),function(e,t,o){e.classList.remove("selected")}),this.classList.add("selected"))})},post_trackerdata=()=>{if(""!=document.querySelector(".editorial-track-console-add #consoleadd-title").value&&""!=document.querySelector(".editorial-track-console-add #consoleadd-section").value&&""!=document.querySelector(".editorial-track-console-add #consoleadd-content").value)if(null!=document.querySelector(".editorial-track-console-add .console-add-reviewstatus div.selected")&&null!=document.querySelector(".editorial-track-console-add .console-add-datatype div.selected")){var e;e="//thisisallabout.com:5020/track/article/new";var t=document.querySelector(".editorial-track-console-add .console-add-reviewstatus div.selected").getAttribute("banana-id"),o=document.querySelector(".editorial-track-console-add .console-add-datatype div.selected").getAttribute("banana-id"),a={title:document.querySelector(".editorial-track-console-add #consoleadd-title").value,section:document.querySelector(".editorial-track-console-add #consoleadd-section").value,content:document.querySelector(".editorial-track-console-add #consoleadd-content").value,reviewstatus:t,datatype:o},i={"Content-Type":"application/json","x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(e,{method:"POST",headers:i,body:JSON.stringify(a)}).then(e=>e.json()).then(function(e){if(document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),e.error)return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+e.error);document.querySelector(".editorial-track-console-add #consoleadd-title").value="",document.querySelector(".editorial-track-console-add #consoleadd-section").value="",document.querySelector(".editorial-track-console-add #consoleadd-content").value="",$(".editorial-track-console-add .console-add-reviewstatus div.selected").removeClass("selected"),$(".editorial-track-console-add .console-add-datatype div.selected").removeClass("selected"),$(".editorial-track-console-add").removeClass("opened"),document.documentElement.className="",load_trackerdata(!0)}).catch(e=>alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+e))}else alert("Please select review stage status and data type of the content.");else alert("Please provide title, section, and contents first.")},load_trackerdata=e=>{var t;t="//thisisallabout.com:5020/track/article";var o={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};if(1==e){$(".editorial-track-console .track-console-list").find("ul").remove(),$(".editorial-track-console .track-console-list > p").remove();const e=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
        `;Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(e(),document.querySelector(".editorial-track-console .track-console-list"))}document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"GET",headers:o}).then(e=>e.json()).then(function(e){var t=e.reverse();document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
        ${t.length<=0?lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
            <p class="no-track-item">No tracker items yet</p>
        `:lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
            <ul class="track-items">
                ${t.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                <li class="track-item-obj" banana-id="${e._id}">
                    <div class="item-info">
                        <p class="item-title">${e.title}</p>
                        <p class="item-section">${e.section}</p>
                        <p class="item-lasteditor" banana-id="${e.revision_history[e.revision_history.length-1].revision_user}">...</p>
                        <p class="item-reviewstatus" banana-id="${e.reviewstatus}">${e.reviewstatus}</p>
                    </div>
                    <div class="item-actions">
                        <p class="action-itemhistory">REV</p>
                        <p class="action-edititem">Edit</p>
                        ${"json"==e.datatype&&"finalapproval"==e.reviewstatus?lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                            <p class="action-jsonmerge">MERGE</p>
                        `:""}
                        <p class="action-delitem">DEL</p>
                    </div>
                </li>
                `)}
            </ul>
        `}
        `,document.querySelector(".editorial-track-console .track-console-list")),Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console .track-console-list .track-item-obj"),function(e,t,o){var a=e.querySelector(".item-lasteditor");$(a).removeClass("fetched"),get_editor_username(a,a.getAttribute("banana-id"))}),attach_consolelist_events()}).catch(e=>alert("Unable to load tracker data. ERR_MSG_CODE: "+e))},get_editor_username=(e,t)=>{if($(".minion-root").find('[banana-id="'+t+'"].fetched').length>0)e.innerHTML=$(".minion-root").find('[banana-id="'+t+'"].fetched').first().text();else{var o;o="//thisisallabout.com:5020/members/"+t;var a={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(o,{method:"GET",headers:a}).then(e=>e.json()).then(function(t){t&&(e.innerHTML=t.username),$(e).hasClass("fetched")||$(e).addClass("fetched"),document.querySelector(".minion-dataload").setAttribute("status","dl_d_0")}).catch(e=>alert("Unable to load tracker data. ERR_MSG_CODE: "+JSON.stringify(e)))}},update_trackerdata=()=>{if(null!=document.querySelector(".editorial-track-console-edit .console-edit-reviewstatus div.selected")){var e;e="//thisisallabout.com:5020/track/article/edit";var t=document.querySelector(".editorial-track-console-edit .console-edit-reviewstatus div.selected").getAttribute("banana-id"),o=null;"json"==document.querySelector(".editorial-track-console-edit .console-edit-editor").getAttribute("banana-type")&&consoleedit_editorelement?o=JSON.stringify(consoleedit_editorelement.get()):"document"==document.querySelector(".editorial-track-console-edit .console-edit-editor").getAttribute("banana-type")&&(o=document.querySelector(".editorial-track-console-edit #consoleedit-content").value);var a={title:document.querySelector(".editorial-track-console-edit #consoleedit-title").value,section:document.querySelector(".editorial-track-console-edit #consoleedit-section").value,content:o,reviewstatus:t,articleid:document.querySelector(".editorial-track-console-edit").getAttribute("banana-id")},i={"Content-Type":"application/json","x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};""!=document.querySelector(".editorial-track-console-edit #consoleedit-title").value&&""!=document.querySelector(".editorial-track-console-edit #consoleedit-section").value&&null!=o?(document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(e,{method:"POST",headers:i,body:JSON.stringify(a)}).then(e=>e.json()).then(function(e){if(document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),e.error)return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+JSON.stringify(e.error));$(".editorial-track-console-edit #consoleedit-title").value="",$(".editorial-track-console-edit #consoleedit-section").value="",$(".editorial-track-console-edit").attr("banana-id","");Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
        `,document.querySelector(".editorial-track-console-edit .console-edit-editor")),$(".editorial-track-console-edit .console-edit-reviewstatus div.selected").removeClass("selected"),$(".editorial-track-console-edit").removeClass("opened"),document.documentElement.className="",load_trackerdata(!0)}).catch(e=>alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+e))):alert("Please provide title, section, and contents first.")}else alert("Please select or update review stage status.")};var consoleedit_editorelement=null;const attach_consolelist_events=()=>{$(".editorial-track-console .track-item-obj .action-delitem").off("click"),$(".editorial-track-console .track-item-obj .action-edititem").off("click"),$(".editorial-track-console .track-item-obj .action-itemhistory").off("click"),$(".editorial-track-console .track-item-obj .action-delitem").on("click",function(e){if(document.querySelector(".minion-bidobido").classList.add("opened"),confirm("Are you sure you really want to delete this item?")){var t,o=getParents(this,".track-item-obj")[0];t="//thisisallabout.com:5020/track/article/"+getParents(this,".track-item-obj")[0].getAttribute("banana-id");var a={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"DELETE",headers:a}).then(e=>e.json()).then(function(e){if(document.querySelector(".minion-bidobido").classList.remove("opened"),document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),e.error)return alert("Unable to post a new article to tracker. ERR_MSG_CODE: "+e.error);o.remove()})}else document.querySelector(".minion-bidobido").classList.remove("opened")}),$(".editorial-track-console .track-item-obj .action-edititem").on("click",function(e){document.querySelector(".minion-bidobido").classList.add("opened");var t,o=getParents(this,".track-item-obj")[0].getAttribute("banana-id");t="//thisisallabout.com:5020/track/article/"+o;var a={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"GET",headers:a}).then(e=>e.json()).then(function(e){document.querySelector(".minion-bidobido").classList.remove("opened");var t=e[0].revision_history.reverse();if(document.querySelector(".editorial-track-console-edit").setAttribute("banana-id",o),document.querySelector(".editorial-track-console-edit #consoleedit-title").value=e[0].title,document.querySelector(".editorial-track-console-edit #consoleedit-section").value=e[0].section,Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console-edit .console-edit-reviewstatus div"),function(e,t,o){e.classList.remove("selected")}),document.querySelector('.editorial-track-console-edit .console-edit-reviewstatus div[banana-id="'+e[0].reviewstatus+'"]').classList.add("selected"),document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),"json"==e[0].datatype)(consoleedit_editorelement=new jsoneditor__WEBPACK_IMPORTED_MODULE_4___default.a(document.querySelector(".editorial-track-console-edit .console-edit-editor"),{})).set(JSON.parse(t[0].revision_item)),document.querySelector(".editorial-track-console-edit .console-edit-editor").setAttribute("banana-type","json");else{const e=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                <textarea id="consoleedit-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="5"></textarea>
                `;Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(e(),document.querySelector(".editorial-track-console-edit .console-edit-editor")),document.querySelector(".editorial-track-console-edit .console-edit-editor").setAttribute("banana-type","document"),document.querySelector(".editorial-track-console-edit .console-edit-editor textarea").value=t[0].revision_item}document.querySelector(".editorial-track-console-edit").classList.add("opened"),document.documentElement.className="n_scroll"})}),$(".editorial-track-console .track-item-obj .action-itemhistory").on("click",function(e){var t;document.querySelector(".minion-bidobido").classList.add("opened"),t="//thisisallabout.com:5020/track/article/"+getParents(this,".track-item-obj")[0].getAttribute("banana-id");var o={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(t,{method:"GET",headers:o}).then(e=>e.json()).then(function(e){document.querySelector(".minion-bidobido").classList.remove("opened"),lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(e,function(e){var t=e.revision_history.reverse();if("json"==e.datatype){const e=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                        ${t.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                        <div class="revision-obj" banana-type="json" banana-id="${e.revision_id}">
                            <div class="revision-details">
                                <p class="rev-id" banana-id="${e.revision_id}">Revision ID ${e.revision_id}</p>
                                <p class="rev-user" banana-id="${e.revision_user}"></p>
                            </div>
                            <div class="contenthistory-jsoneditor"></div>
                        </div>
                        `)}
                    `;Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(e(),document.querySelector(".editorial-track-console-edithistory .console-edithistory-list"))}else{const e=()=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                        ${t.map(e=>lit_html__WEBPACK_IMPORTED_MODULE_2__["a"]`
                        <div class="revision-obj" banana-type="document" banana-id="${e.revision_id}">
                            <div class="revision-details">
                                <p class="rev-id" banana-id="${e.revision_id}">Revision ID ${e.revision_id}</p>
                                <p class="rev-user" banana-id="${e.revision_user}"></p>
                            </div>
                            <textarea id="consolehistory-content" rows="5" banana-data="${e.revision_item}"></textarea>
                        </div>
                        `)}
                    `;Object(lit_html__WEBPACK_IMPORTED_MODULE_2__.b)(e(),document.querySelector(".editorial-track-console-edithistory .console-edithistory-list"))}}),Array.prototype.forEach.call(document.querySelectorAll(".editorial-track-console-edithistory .console-edithistory-list .revision-obj"),function(t,o,a){var i=[];(lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(e,function(e){lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(e.revision_history,function(e){e.revision_id==t.getAttribute("banana-id")&&i.push(e.revision_item)})}),"json"==t.getAttribute("banana-type"))?new jsoneditor__WEBPACK_IMPORTED_MODULE_4___default.a(t,{}).set(JSON.parse(i)):t.querySelector("textarea").value=i[0];get_editor_username(t.querySelector(".rev-user"),t.querySelector(".rev-user").getAttribute("banana-id"))}),document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),document.querySelector(".editorial-track-console-edithistory").classList.add("opened"),document.documentElement.className="n_scroll"})}),$(".editorial-track-console .track-item-obj .action-jsonmerge").on("click",function(e){var filepath=prompt("Please provide the path of a dataset you're going to merge");if(filepath){document.querySelector(".minion-bidobido").classList.add("opened");var itemid=getParents(this,".track-item-obj")[0].getAttribute("banana-id"),api_url;api_url="//thisisallabout.com:5020/track/article/"+itemid;var api_header={"x-access-token":localStorage.getItem("tiaa_stuart_edt_ac_t")};document.querySelector(".minion-dataload").setAttribute("status","dl_d_1"),fetch(api_url,{method:"GET",headers:api_header}).then(e=>e.json()).then(function(response){document.querySelector(".minion-dataload").setAttribute("status","dl_d_0"),document.querySelector(".minion-bidobido").classList.remove("opened");var reversedres=response[0].revision_history.reverse(),d_content=[],dataset_d=null,dataset_url;dataset_url="https://thisisallabout.com/dataset/"+filepath+".json",fetch(dataset_url).then(e=>e.text()).then(function(text){var module=eval(text),dataset_d=module,d_content=[],edited_content=JSON.parse(reversedres[0].revision_item),merged=lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(dataset_d,function(e){return lodash__WEBPACK_IMPORTED_MODULE_5___default.a.filter(e.data,function(e,t){return e.header=edited_content[t].header,edited_content[t].msg&&(e.msg=edited_content[t].msg),console.log(e),e})}),filename=prompt("Please provide the file name");if(!filename)return alert("Failed to create a json file: NO_FILENAME");var dataStr="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(merged)),downloadAnchorNode=document.createElement("a");downloadAnchorNode.setAttribute("href",dataStr),downloadAnchorNode.setAttribute("download",filename+".json"),downloadAnchorNode.click(),downloadAnchorNode.remove()})})}})};var getParents=function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),o=t.length;--o>=0&&t.item(o)!==this;);return o>-1});for(var o=[];e&&e!==document;e=e.parentNode)t?e.matches(t)&&o.push(e):o.push(e);return o}},gB64:function(e,t,o){}}]);