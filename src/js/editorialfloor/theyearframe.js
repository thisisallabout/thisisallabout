import styles from '../../styles/editorialfloor/dataeditor.css';
import {html, render} from 'lit-html';
import moment from 'moment';

export function init_render() {
    document.body.classList.add('editorial');

    const hero_markup = () => html`
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
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));

    generate_data();
}

const render_data = (path) => {
    var dataset_d = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = '//localhost:3000/dataset/' + path + '.json';
    } else {
        dataset_url = '//thisisallabout.com/dataset/' + path + '.json';
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        dataset_d = module;

        const data_markup = () => html`
        <div class="data-keyfield">
            <input type="text" placeholder="dataset key for itemid" />
        </div>
        ${dataset_d.map((dset) => html`
        <div class="data-group" banana-month="${dset.month}">
            <ul class="cluster-themes">
            ${dset.theme.map((theme) => html`
                <li>${theme}</li>
            `
            )}
            </ul>
            <ul class="cluster-articles" banana-json="${JSON.stringify(dset.articles)}">
            ${dset.articles.map((arti, i) => html`
                <li banana-id="${arti.twitterid}" banana-json="${JSON.stringify(arti)}">
                    <p class="title">${arti.title}</p>
                    <p banana-ts="${arti.ts}" class="ts"></p>
                    <p class="objectid">${arti.twitterid}</p>
                </li>
            `
            )}
            </ul>
            <div class="cluster-customfields">
                <input type="text" class="field-header" placeholder="header" />
                <input type="text" class="field-msg" placeholder="additional messages" />
                <input type="text" class="field-pickedid" placeholder="an object id of picked tweet section" />
                <input type="text" class="field-image" placeholder="image (optional)" />
                <input type="text" class="field-imagecopy" placeholder="image copyright info (optional)" />
            </div>
        </div>
        `
        )}
        `;

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        render(data_markup(), document.querySelector('.analysis-console-renderer'));
        attach_events();
    });
}

const attach_events = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.cluster-articles .ts'), function(el, index, array) {
        var ts_raw = el.getAttribute('banana-ts');
        var ts_cv = moment.unix(ts_raw).format("MMMM Do YYYY hh:mm");

        el.innerHTML = ts_cv;
    });

    var articles = document.querySelectorAll('.cluster-articles li');
    for (var i=0; i < articles.length; i++) {
        articles[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }

    var themes = document.querySelectorAll('.cluster-themes li');
    for (var i=0; i < themes.length; i++) {
        themes[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }
}

const generate_data = () => {
    var finishbtn = document.querySelector('.analysis-console-finish');
    finishbtn.addEventListener('click', function (e) {
        if (!this.classList.contains('initiated') && !this.classList.contains('previewed')) {
            if (document.querySelector('.editorial-pathfield input').value != '') {
                render_data(document.querySelector('.editorial-pathfield input').value);
                this.classList.add('initiated');
            } else {
                alert('Please provide dataset path first to proceed');
            }
        } else if (this.classList.contains('initiated') && !this.classList.contains('previewed')) {
            var data_packed = [];
            if (document.querySelector('.data-keyfield input').value == '') {
                alert('Please provide appropriate key for itemid!');
                return;
            }

            Array.prototype.forEach.call(document.querySelectorAll('.analysis-console-renderer .data-group'), function(el, index, array) {
                var data_group = {};
                data_group['month'] = el.getAttribute('banana-month');
                var article_group = [];
                Array.prototype.forEach.call(el.querySelectorAll('.cluster-articles li.selected'), function(ael, index, array) {
                    var ejson = ael.getAttribute('banana-json');
                    article_group.push(JSON.parse(ejson));
                });
                data_group['articles'] = article_group;

                
                if (el.querySelector('.cluster-customfields .field-pickedid').value != '') {
                    var picked_group = [];
                    Array.prototype.forEach.call(el.querySelectorAll('.cluster-articles li.selected'), function(ael, index, array) {
                        if (el.querySelector('.cluster-customfields .field-pickedid').value == ael.getAttribute('banana-id')) {
                            var ejson = ael.getAttribute('banana-json');
                            picked_group.push(JSON.parse(ejson));
                            data_group['picked'] = picked_group;
                        }
                    });
                }
                

                var theme_list = [];
                Array.prototype.forEach.call(el.querySelectorAll('.cluster-themes li.selected'), function(tel, index, array) {
                    theme_list.push(tel.innerHTML);
                });
                data_group['theme'] = theme_list;

                if (el.querySelector('.cluster-customfields .field-header').value != '') 
                    data_group['header'] = el.querySelector('.cluster-customfields .field-header').value;

                if (el.querySelector('.cluster-customfields .field-msg').value != '') 
                    data_group['msg'] = el.querySelector('.cluster-customfields .field-msg').value;

                if (el.querySelector('.cluster-customfields .field-image').value != '') 
                    data_group['image'] = el.querySelector('.cluster-customfields .field-image').value;

                if (el.querySelector('.cluster-customfields .field-imagecopy').value != '') 
                    data_group['image-copyright'] = el.querySelector('.cluster-customfields .field-imagecopy').value;

                var idindex = index;
                if (index < 10) idindex = '0' + index;
                data_group['id'] = document.querySelector('.data-keyfield input').value + 'c' + idindex;

                data_packed.push(data_group);
            });
                
            const finaldata_markup = () => html`
            <textarea>
            </textarea>
            `;

            //render(finaldata_markup(), document.querySelector('.minion-datapopup .datapopup-contents'));
            //document.querySelector('.minion-datapopup').classList.add('visible');
            //document.querySelector('.minion-datapopup textarea').value = JSON.stringify(data_packed);

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data_packed));
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", document.querySelector('.editorial-pathfield input').value + ".json");
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }
    });
}