import styles from '../styles/core.css';
import { html, render } from 'lit-html';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "core-js/stable";
require('../resources/favicons/android-chrome-192x192.png');
require('../resources/favicons/android-chrome-384x384.png');
require('../resources/favicons/apple-touch-icon.png');
require('../resources/favicons/apple-touch-icon.png');
require('../resources/favicons/apple-touch-icon-120x120-precomposed.png');
require('../resources/favicons/apple-touch-icon-120x120.png');
require('../resources/favicons/favicon-16x16.png');
require('../resources/favicons/favicon-32x32.png');
require('../resources/favicons/favicon.ico');
require('../resources/favicons/mstile-150x150.png');
require('../resources/favicons/safari-pinned-tab.svg');

let isDeviceTypeMobile = document.body.getAttribute('banana-device-type', 'mobile');

const render_core = () => {
    const contentSections = [
        { id: 'nav-section-today', name: 'Today', path: '' },
        { id: 'nav-section-theyear', name: 'TheYear', path: 'theyear' }
    ];

    const labSections = [
        { id: 'nav-section-datatodaycluster', name: 'HourlyClusters', path: 'lab?type=hourlycluster' },
        { id: 'nav-section-datatodaycluster', name: 'Backend', path: 'lab' }
    ];

    const top_frame_markup = () => html`
    <div class="minion-root">
        <div class="minion-header">
            <div class="header-box">
                <div class="minion-tiaa-logo">THISISALLABOUT</div>
                <div class="minion-featured-sections">
                    <ul class="sections-list">
                        <li data-sectionid="reveal-sections">browse</li>
                        <li data-sectionid="close-sections">close</li>
                    </ul>
                </div>
            </div>

            <div class="minion-sections">
                <div class="sections-group regular">
                    <p class="section-guide">REGULAR</p>
                    <ul class="sections-list">
                        ${contentSections.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="#${i.path}">${i.name}</a></li>
                        `
        )}
                    </ul>
                </div>

                <div class="sections-group developer">
                    <p class="section-guide">DEVELOPER</p>
                    <ul class="sections-list lab">
                        ${labSections.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="#${i.path}">${i.name}</a></li>
                        `
        )}
                    </ul>
                </div>

                <div class="sections-group about">
                    <ul class="sections-tiaainfo">
                        <li><a href="#about">About</a></li>
                        <li><a href="mailto:toddstonefieldoh@gmail.com">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="minion-contents">
        </div>
        <div class="minion-dataload"></div>
        <div class="minion-bidobido"</div>
    </div>
    `;

    render(top_frame_markup(), document.body);
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_e_1');
    (window.screen.width <= 980) ? document.body.setAttribute('banana-device-type', 'mobile') : document.body.setAttribute('banana-device-type', 'wide');
}

render_core();
var currentpath_whole = window.location.pathname;
var currentpath_type = window.location.hash.split('?')[0].substring(1);

$(window).on('hashchange', function() {
    window.location.reload();
});

if (currentpath_type !== undefined && currentpath_type !== '') {
    import('./' + currentpath_type).then(module => {
        module.init_render();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
} else {
    import(/* webpackChunkName: "today" */ './today').then(module => {
        module.init_render();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

document.querySelector('.minion-header .header-box').addEventListener('click', function (e) {
    (!document.querySelector('.minion-header').classList.contains('opened')) ? document.querySelector('.minion-header').classList.add('opened') : document.querySelector('.minion-header').classList.remove('opened');
});

// browser detect
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.zversionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
            } else if (dataProp) return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, { // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, { // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]

};

BrowserDetect.init();
(document.documentMode || /Edge/.test(navigator.userAgent) || (BrowserDetect.browser === 'Safari' && iOSVersion() < 10.3) || (BrowserDetect.browser === 'Safari' && BrowserDetect.version < 11.1)) ? document.body.setAttribute('banana-rendering-type', 'advancedrendering-disable') : document.body.setAttribute('banana-rendering-type', 'advancedrendering-avail');


function iOSVersion() {
    var match = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/),
        version;

    if (match !== undefined && match !== null) {
        version = [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3] || 0, 10)
        ];
        return parseFloat(version.join('.'));
    }
    return false;
}