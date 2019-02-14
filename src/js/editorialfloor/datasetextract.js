import styles from '../../styles/editorialfloor/dataextract.css';
import {html, render} from 'lit-html';

export function init_render() {
    document.body.classList.add('editorial');

    const hero_markup = () => html`
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
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    attach_events();
}

const attach_events = () => {
    document.querySelector('.editorial-dataextract-opt input').addEventListener('keypress', function (e) {
        if (e.keyCode == 13) {
            if (document.querySelector('.editorial-editor-datatype .datatype-action-list div.selected') == null) {
                return alert('ERR: No section datatype selected!');
            }
            var tracker_datatype = document.querySelector('.editorial-editor-datatype .datatype-action-list div.selected').getAttribute('banana-id');
            extract_dataset(tracker_datatype, this.value);
            return false;
        }
    });

    document.querySelector('.editorial-editor-viewer .viewer-action-cancel').addEventListener('click', function (e) {
        document.querySelector('.editorial-editor-viewer').classList.remove('opened');
    });

    var datasettype = document.querySelectorAll('.editorial-editor-datatype .datatype-action-list div');
    for (var i=0; i < datasettype.length; i++) {
        datasettype[i].addEventListener('click', function (e) {
            if (!this.classList.contains('selected')) {
                Array.prototype.forEach.call(document.querySelectorAll('.editorial-editor-datatype .datatype-action-list div'), function(el, index, array) {
                    el.classList.remove('selected');
                });
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    }
}

const extract_dataset = (type, d_path) => {
    var d_content = [];
    var dataset_d = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = 'http://localhost:3000/dataset/' + d_path + '.json';
    } else {
        dataset_url = 'https://thisisallabout.com/dataset/' + d_path + '.json';
    }

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    if (type == 'whattrumpsaid') {
        import('./datasetextract_wts').then(module => {
            module.process(dataset_url);
        });
    }
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

