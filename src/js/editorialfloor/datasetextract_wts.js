import {html, render} from 'lit-html';
import _ from 'lodash';

export function process(dataset_url) {
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        var dataset_d = module;
        var d_content = [];

        _.filter(dataset_d, function (set) {
            _.filter(set.data, function (d) {
                var item = {};
                item['header'] = d['header'];
                if (d.msg) item['msg'] = d['msg'];
                d_content.push(item);
                console.log(item);
            });
        });

        document.querySelector('.editorial-editor-viewer textarea').value = JSON.stringify(d_content);
        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
        document.querySelector('.editorial-editor-viewer').classList.add('opened');
        Array.prototype.forEach.call(document.querySelectorAll('.editorial-editor-datatype .datatype-action-list div'), function(el, index, array) {
            el.classList.remove('selected');
        });
    });
}