import styles from '../../styles/editorialfloor/track.css';
import json_styles from '../../styles/editorialfloor/jsoneditor.css';
import {html, render} from 'lit-html';
import moment from 'moment';
import JSONEditor from 'jsoneditor';
import _ from 'lodash';

export function init_render() {
    document.body.classList.add('editorial');

    const hero_markup = () => html`
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
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    load_trackerdata();
    attach_events();
}

const attach_events = () => {
    $('.console-edithistory-wrapper, .console-edit-wrapper, .console-add-wrapper').on('scroll', function (e) {
        var item = $(this).parent().find('.track-console-header');
        if (this.scrollTop >= 50) {
            $(item).addClass('scroll_bar');
        } else {
            $(item).removeClass('scroll_bar');
        }
    });

    document.querySelector('.editorial-track-action-refresh').addEventListener('click', function (e) {
        //window.location.reload(false); 
        load_trackerdata();
    });

    document.querySelector('.editorial-track-action-add').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-add').classList.add('opened');
        document.documentElement.className = 'n_scroll';
    });

    $('.editorial-track-console-add .console-add-reviewstatus div').on('click', function (e) {
        if (!this.classList.contains('selected')) {
            Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-add .console-add-reviewstatus div'), function(el, index, array) {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
        } else {
            this.classList.remove('selected');
        }
    });

    $('.editorial-track-console-add .console-add-datatype div').on('click', function (e) {
        if (!this.classList.contains('selected')) {
            Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-add .console-add-datatype div'), function(el, index, array) {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
        } else {
            this.classList.remove('selected');
        }
    });

    document.querySelector('.editorial-track-console-add .console-add-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-add').classList.remove('opened');
        document.documentElement.className = '';
    });

    document.querySelector('.editorial-track-console-add .console-add-action-send').addEventListener('click', function (e) {
        post_trackerdata();
    });

    document.querySelector('.editorial-track-console-edit .console-edit-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-edit').classList.remove('opened');
        document.documentElement.className = '';
        document.querySelector('.editorial-track-console-edit .console-edit-editor').setAttribute('banana-type', '');
        $('.editorial-track-console-edit .console-edit-editor').empty();
        const history_json_markup = () => html`
        `;

        render(history_json_markup(), document.querySelector('.editorial-track-console-edit .console-edit-editor'));
    });

    document.querySelector('.editorial-track-console-edit .console-edit-action-send').addEventListener('click', function (e) {
        update_trackerdata();
    });

    document.querySelector('.editorial-track-console-edithistory .console-edithistory-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-track-console-edithistory').classList.remove('opened');
        $('.editorial-track-console-edithistory .console-edithistory-list').empty();
        const history_json_markup = () => html`
        `;

        render(history_json_markup(), document.querySelector('.editorial-track-console-edithistory .console-edithistory-list'));
        document.documentElement.className = '';
    });

    $('.editorial-track-console-edit .console-edit-reviewstatus div').on('click', function (e) {
        if (!this.classList.contains('selected')) {
            Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-edit .console-edit-reviewstatus div'), function(el, index, array) {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
        } else {
            this.classList.remove('selected');
        }
    });
}

const post_trackerdata = () => {
    if (document.querySelector('.editorial-track-console-add #consoleadd-title').value == '' ||
    document.querySelector('.editorial-track-console-add #consoleadd-section').value == '' ||
    document.querySelector('.editorial-track-console-add #consoleadd-content').value == '') {
        alert('Please provide title, section, and contents first.');
        return;
    }

    if (document.querySelector('.editorial-track-console-add .console-add-reviewstatus div.selected') == null || document.querySelector('.editorial-track-console-add .console-add-datatype div.selected') == null) {
        alert('Please select review stage status and data type of the content.');
        return;
    }

    var api_url;
    if (process.env.NODE_ENV == 'dev') {
        api_url = '//localhost:17502/track/article/new';
    } else {
        api_url = '//thisisallabout.com:5020/track/article/new';
    }

    var tracker_reviewstatus = document.querySelector('.editorial-track-console-add .console-add-reviewstatus div.selected').getAttribute('banana-id');
    var tracker_datatype = document.querySelector('.editorial-track-console-add .console-add-datatype div.selected').getAttribute('banana-id');

    var api_post_data = {
        "title": document.querySelector('.editorial-track-console-add #consoleadd-title').value,
        "section": document.querySelector('.editorial-track-console-add #consoleadd-section').value,
        "content": document.querySelector('.editorial-track-console-add #consoleadd-content').value,
        "reviewstatus": tracker_reviewstatus,
        "datatype": tracker_datatype
    };

    var api_header = {
        "Content-Type": 'application/json',
        "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
    };

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(api_url, {
        method: "POST",
        headers: api_header,
        body: JSON.stringify(api_post_data)
    }).then(r => r.json()).then(function(response) {
        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        if (response.error) return alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + response.error);

        document.querySelector('.editorial-track-console-add #consoleadd-title').value = '';
        document.querySelector('.editorial-track-console-add #consoleadd-section').value = '';
        document.querySelector('.editorial-track-console-add #consoleadd-content').value = '';
        $('.editorial-track-console-add .console-add-reviewstatus div.selected').removeClass('selected');
        $('.editorial-track-console-add .console-add-datatype div.selected').removeClass('selected');
        $('.editorial-track-console-add').removeClass('opened');
        document.documentElement.className = '';

        load_trackerdata(true);
        //window.location.reload(false); 
    })
    .catch(e => alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + e))
}

const load_trackerdata = (refresh) => {
    var api_url;
    if (process.env.NODE_ENV == 'dev') {
        api_url = '//localhost:17502/track/article';
    } else {
        api_url = '//thisisallabout.com:5020/track/article';
    }

    var api_header = {
        "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
    }

    if (refresh == true) {
        $('.editorial-track-console .track-console-list').find('ul').remove();
        $('.editorial-track-console .track-console-list > p').remove();
        const history_json_markup = () => html`
        `;

        render(history_json_markup(), document.querySelector('.editorial-track-console .track-console-list'));
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(api_url, {
        method: "GET",
        headers: api_header
      }).then(r => r.json()).then(function(response) {
        var reversedresponse = response.reverse();
        const data_markup = () => html`
        ${reversedresponse.length <= 0 ? html`
            <p class="no-track-item">No tracker items yet</p>
        ` : html`
            <ul class="track-items">
                ${reversedresponse.map((dset) => html`
                <li class="track-item-obj" banana-id="${dset._id}">
                    <div class="item-info">
                        <p class="item-title">${dset.title}</p>
                        <p class="item-section">${dset.section}</p>
                        <p class="item-lasteditor" banana-id="${dset.revision_history[dset.revision_history.length - 1].revision_user}">...</p>
                        <p class="item-reviewstatus" banana-id="${dset.reviewstatus}">${dset.reviewstatus}</p>
                    </div>
                    <div class="item-actions">
                        <p class="action-itemhistory">REV</p>
                        <p class="action-edititem">Edit</p>
                        ${dset.datatype == 'json' &&  dset.reviewstatus == 'finalapproval' ? html`
                            <p class="action-jsonmerge">MERGE</p>
                        ` : ''}
                        <p class="action-delitem">DEL</p>
                    </div>
                </li>
                `
                )}
            </ul>
        `
        }
        `;

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        render(data_markup(), document.querySelector('.editorial-track-console .track-console-list'));
        Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console .track-console-list .track-item-obj'), function(el, index, array) {
            var uel = el.querySelector('.item-lasteditor');
            $(uel).removeClass('fetched');
            get_editor_username(uel, uel.getAttribute('banana-id'));
        });
        
        attach_consolelist_events();
    })
    .catch(e => alert("Unable to load tracker data. ERR_MSG_CODE: " + e))
}

const get_editor_username = (element, id) => {
    if ($('.minion-root').find('[banana-id="' + id + '"].fetched').length > 0) {
        element.innerHTML = $('.minion-root').find('[banana-id="' + id + '"].fetched').first().text();
    } else {
        var api_url;
        if (process.env.NODE_ENV == 'dev') {
            api_url = '//localhost:17502/members/' + id;
        } else {
            api_url = '//thisisallabout.com:5020/members/' + id;
        }

        var api_header = {
            "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
        }

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');

        fetch(api_url, {
            method: "GET",
            headers: api_header
        }).then(r => r.json()).then(function(response) {
            
            if (response) element.innerHTML = response.username;
            if (!$(element).hasClass('fetched')) $(element).addClass('fetched');
            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        })
        .catch(e => alert("Unable to load tracker data. ERR_MSG_CODE: " + JSON.stringify(e)));
    }
}

const update_trackerdata = () => {
    if (document.querySelector('.editorial-track-console-edit .console-edit-reviewstatus div.selected') == null) {
        alert('Please select or update review stage status.');
        return;
    }

    var api_url;
    if (process.env.NODE_ENV == 'dev') {
        api_url = '//localhost:17502/track/article/edit';
    } else {
        api_url = '//thisisallabout.com:5020/track/article/edit';
    }

    var tracker_reviewstatus = document.querySelector('.editorial-track-console-edit .console-edit-reviewstatus div.selected').getAttribute('banana-id');
    var tracker_content = null;
    if (document.querySelector('.editorial-track-console-edit .console-edit-editor').getAttribute('banana-type') == 'json' && consoleedit_editorelement) {
        tracker_content = JSON.stringify(consoleedit_editorelement.get());
    } else if (document.querySelector('.editorial-track-console-edit .console-edit-editor').getAttribute('banana-type') == 'document') {
        tracker_content = document.querySelector('.editorial-track-console-edit #consoleedit-content').value;
    }

    var api_post_data = {
        "title": document.querySelector('.editorial-track-console-edit #consoleedit-title').value,
        "section": document.querySelector('.editorial-track-console-edit #consoleedit-section').value,
        "content": tracker_content,
        "reviewstatus": tracker_reviewstatus,
        "articleid": document.querySelector('.editorial-track-console-edit').getAttribute('banana-id')
    };

    var api_header = {
        "Content-Type": 'application/json',
        "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
    };

    if (document.querySelector('.editorial-track-console-edit #consoleedit-title').value == '' ||
    document.querySelector('.editorial-track-console-edit #consoleedit-section').value == '' ||
    tracker_content == null) {
        alert('Please provide title, section, and contents first.');
        return;
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(api_url, {
        method: "POST",
        headers: api_header,
        body: JSON.stringify(api_post_data)
    }).then(r => r.json()).then(function(response) {
        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        if (response.error) return alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + JSON.stringify(response.error));

        $('.editorial-track-console-edit #consoleedit-title').value = '';
        $('.editorial-track-console-edit #consoleedit-section').value = '';
        $('.editorial-track-console-edit').attr('banana-id', '');
        const editor_textmarkup = () => html`
        `;
        render(editor_textmarkup(), document.querySelector('.editorial-track-console-edit .console-edit-editor'));
        $('.editorial-track-console-edit .console-edit-reviewstatus div.selected').removeClass('selected');
        $('.editorial-track-console-edit').removeClass('opened');
        document.documentElement.className = '';

        load_trackerdata(true);
        //window.location.reload(false); 
    })
    .catch(e => alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + e))
}

var consoleedit_editorelement = null;
const attach_consolelist_events = () => {
    $('.editorial-track-console .track-item-obj .action-delitem').off('click');
    $('.editorial-track-console .track-item-obj .action-edititem').off('click');
    $('.editorial-track-console .track-item-obj .action-itemhistory').off('click');

    $('.editorial-track-console .track-item-obj .action-delitem').on('click', function (e) {
        document.querySelector('.minion-bidobido').classList.add('opened');
        if (confirm('Are you sure you really want to delete this item?')) {
            var item = getParents(this, '.track-item-obj')[0];
            var itemid = getParents(this, '.track-item-obj')[0].getAttribute('banana-id');
            var api_url;
            if (process.env.NODE_ENV == 'dev') {
                api_url = '//localhost:17502/track/article/' + itemid;
            } else {
                api_url = '//thisisallabout.com:5020/track/article/' + itemid;
            }

            var api_header = {
                "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
            }

            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
            fetch(api_url, {
                method: "DELETE",
                headers: api_header
            }).then(r => r.json()).then(function(response) {
                document.querySelector('.minion-bidobido').classList.remove('opened');
                document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
                if (response.error) return alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + response.error);
                item.remove();
            });
        } else {
            document.querySelector('.minion-bidobido').classList.remove('opened');
        }
    });

    $('.editorial-track-console .track-item-obj .action-edititem').on('click', function (e) {
        document.querySelector('.minion-bidobido').classList.add('opened');
        var itemid = getParents(this, '.track-item-obj')[0].getAttribute('banana-id');
        var api_url;
        if (process.env.NODE_ENV == 'dev') {
            api_url = '//localhost:17502/track/article/' + itemid;
        } else {
            api_url = '//thisisallabout.com:5020/track/article/' + itemid;
        }

        var api_header = {
            "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
        }

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
        fetch(api_url, {
            method: "GET",
            headers: api_header
        }).then(r => r.json()).then(function(response) {
            document.querySelector('.minion-bidobido').classList.remove('opened');
            var reversedres = response[0].revision_history.reverse();
            document.querySelector('.editorial-track-console-edit').setAttribute('banana-id', itemid);
            document.querySelector('.editorial-track-console-edit #consoleedit-title').value = response[0].title;
            document.querySelector('.editorial-track-console-edit #consoleedit-section').value = response[0].section;
            Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-edit .console-edit-reviewstatus div'), function(el, index, array) {
                el.classList.remove('selected');
            });
            document.querySelector('.editorial-track-console-edit .console-edit-reviewstatus div[banana-id="' + response[0].reviewstatus + '"]').classList.add('selected');

            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');

            if (response[0].datatype == 'json') {
                consoleedit_editorelement = new JSONEditor(document.querySelector('.editorial-track-console-edit .console-edit-editor'), {});
                consoleedit_editorelement.set(JSON.parse(reversedres[0].revision_item));
                document.querySelector('.editorial-track-console-edit .console-edit-editor').setAttribute('banana-type', 'json');
            } else {
                const editor_textmarkup = () => html`
                <textarea id="consoleedit-content" placeholder="Content (Provide raw JSON, or Dropbox Paper/Google Drive link)" rows="5"></textarea>
                `;
                render(editor_textmarkup(), document.querySelector('.editorial-track-console-edit .console-edit-editor'));
                document.querySelector('.editorial-track-console-edit .console-edit-editor').setAttribute('banana-type', 'document');
                document.querySelector('.editorial-track-console-edit .console-edit-editor textarea').value = reversedres[0].revision_item;
            }

            document.querySelector('.editorial-track-console-edit').classList.add('opened');
            document.documentElement.className = 'n_scroll';
        });
    });

    $('.editorial-track-console .track-item-obj .action-itemhistory').on('click', function (e) {
        document.querySelector('.minion-bidobido').classList.add('opened');
        var itemid = getParents(this, '.track-item-obj')[0].getAttribute('banana-id');
        var api_url;
        if (process.env.NODE_ENV == 'dev') {
            api_url = '//localhost:17502/track/article/' + itemid;
        } else {
            api_url = '//thisisallabout.com:5020/track/article/' + itemid;
        }

        var api_header = {
            "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
        }

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
        fetch(api_url, {
            method: "GET",
            headers: api_header
        }).then(r => r.json()).then(function(response) {
            document.querySelector('.minion-bidobido').classList.remove('opened');
            _.filter(response, function (res) {
                var reversedres = res.revision_history.reverse();
                if (res.datatype == 'json') {
                    const history_json_markup = () => html`
                        ${reversedres.map((rvst) => html`
                        <div class="revision-obj" banana-type="json" banana-id="${rvst.revision_id}">
                            <div class="revision-details">
                                <p class="rev-id" banana-id="${rvst.revision_id}">Revision ID ${rvst.revision_id}</p>
                                <p class="rev-user" banana-id="${rvst.revision_user}"></p>
                            </div>
                            <div class="contenthistory-jsoneditor"></div>
                        </div>
                        `
                        )}
                    `;

                    render(history_json_markup(), document.querySelector('.editorial-track-console-edithistory .console-edithistory-list'));
                    
                } else {
                    const history_doc_markup = () => html`
                        ${reversedres.map((rvst) => html`
                        <div class="revision-obj" banana-type="document" banana-id="${rvst.revision_id}">
                            <div class="revision-details">
                                <p class="rev-id" banana-id="${rvst.revision_id}">Revision ID ${rvst.revision_id}</p>
                                <p class="rev-user" banana-id="${rvst.revision_user}"></p>
                            </div>
                            <textarea id="consolehistory-content" rows="5" banana-data="${rvst.revision_item}"></textarea>
                        </div>
                        `
                        )}
                    `;

                    render(history_doc_markup(), document.querySelector('.editorial-track-console-edithistory .console-edithistory-list'));
                    
                }
            });

            Array.prototype.forEach.call(document.querySelectorAll('.editorial-track-console-edithistory .console-edithistory-list .revision-obj'), function(el, index, array) {
                var revitem = [];
                _.filter(response, function (res) {
                    _.filter(res.revision_history, function (rvst) {
                        if (rvst.revision_id == el.getAttribute('banana-id')) revitem.push(rvst.revision_item);
                    });
                });

                if (el.getAttribute('banana-type') == 'json') {
                    var consoleedithist_editorelement = new JSONEditor(el, {});
                    consoleedithist_editorelement.set(JSON.parse(revitem));
                } else {
                    el.querySelector('textarea').value = revitem[0];
                }
                get_editor_username(el.querySelector('.rev-user'), el.querySelector('.rev-user').getAttribute('banana-id'));
            });
            
            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
            document.querySelector('.editorial-track-console-edithistory').classList.add('opened');
            document.documentElement.className = 'n_scroll';
        });
    });

    $('.editorial-track-console .track-item-obj .action-jsonmerge').on('click', function (e) {
        var filepath = prompt('Please provide the path of a dataset you\'re going to merge');
        if (filepath) {
            document.querySelector('.minion-bidobido').classList.add('opened');
            var itemid = getParents(this, '.track-item-obj')[0].getAttribute('banana-id');
            var api_url;
            if (process.env.NODE_ENV == 'dev') {
                api_url = '//localhost:17502/track/article/' + itemid;
            } else {
                api_url = '//thisisallabout.com:5020/track/article/' + itemid;
            }

            var api_header = {
                "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
            }

            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
            fetch(api_url, {
                method: "GET",
                headers: api_header
            }).then(r => r.json()).then(function(response) {
                document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
                document.querySelector('.minion-bidobido').classList.remove('opened');
                var reversedres = response[0].revision_history.reverse();

                var d_content = [];
                var dataset_d = null;
                var dataset_url;
                if (process.env.NODE_ENV == 'dev') {
                    dataset_url = 'http://localhost:3000/dataset/' + filepath + '.json';
                } else {
                    dataset_url = 'https://thisisallabout.com/dataset/' + filepath + '.json';
                }
                fetch(dataset_url).then(response => response.text()).then(function(text) {
                    var module = eval(text);
                    var dataset_d = module;
                    var d_content = [];
                    var edited_content = JSON.parse(reversedres[0].revision_item);
            
                    var merged = _.filter(dataset_d, function (set) {
                        var new_data = _.filter(set.data, function (d, index) {
                            d['header'] = edited_content[index]['header'];
                            if (edited_content[index]['msg']) d['msg'] = edited_content[index]['msg'];
                            console.log(d);
                            return d;
                        });

                        return new_data;
                    });
                    
                    var filename = prompt('Please provide the file name');
                    if (!filename) return alert('Failed to create a json file: NO_FILENAME');
                    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(merged));
                    var downloadAnchorNode = document.createElement('a');
                    downloadAnchorNode.setAttribute("href", dataStr);
                    downloadAnchorNode.setAttribute("download", filename + ".json");
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                });
                
            });
        }
    });
}

var getParents = function ( elem, selector ) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Setup parents array
    var parents = [];

    // Get matching parent elements
    for ( ; elem && elem !== document; elem = elem.parentNode ) {

        // Add matching parents to array
        if ( selector ) {
            if ( elem.matches( selector ) ) {
                parents.push( elem );
            }
        } else {
            parents.push( elem );
        }

    }

    return parents;

};

