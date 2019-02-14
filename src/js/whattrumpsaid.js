import {html, render} from 'lit-html';
import whattrumpsaid_style from '../styles/whattrumpsaid.css';
import socialLikes from 'social-likes-next';
import whattrumpsaid_style_social from 'social-likes-next/lib/social-likes_light.css';
import moment from 'moment';
import _ from 'lodash';

export function init_render() {
    document.body.classList.add('whattrumpsaid');
    document.title = "WhatTrumpSaid on THISISALLABOUT";
    document.querySelector('.minion-header li[data-sectionid="nav-section-whattrumpsaid"]').classList.add('current');
    if (window.screen.width <= 980) {
        document.body.setAttribute('banana-type', 'mobile');
    }

    const hero_markup = () => html`
    <div class="whattrumpsaid-hero">
        <div class="whattrumpsaid-herotext">
            <p class="hero1">Reading Trump's moves</p>
            <p class="hero1">through his tweets</p>
            <div class="hero2">
                <p>We all know that President Trump loves posting on Twitter.</p>
                <p>And that means you can see through his fanciful game by tweets.</p>
                <p>THISISALLABOUT did an analysis of his tweets since day one.</p>
            </div>
            <p class="whattrumpsaid-content-timestamp">Updated on ...</p>
            <p class="whattrumpsaid-action-details">Details</p>
        </div>

        <div class="whattrumpsaid-share" data-url="https://thisisallabout.com/whattrumpsaid" data-title="WhatTrumpSaid on THISISALLABOUT">
            <div data-service="facebook" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="twitter" data-via="" data-related="realDonaldTrump"></div>
            <div data-service="plusone" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="linkedin" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div data-service="pinterest" title="WhatTrumpSaid on THISISALLABOUT"></div>
            <div class="email" title="WhatTrumpSaid on THISISALLABOUT">
                <div class="icon"></div>    
            </div>
        </div>
    </div>
    
    <div class="whattrumpsaid-section-monthly">
        <div class="whattrumpsaid-analysis-group">

        </div>
    </div>
    <div class="whattrumpsaid-details">
        <div class="details-reveal">
            <p>Technical Details</p>
        </div>
        <div class="details-text">
            <p>This content renders the clustering result of our processing system.</p>
            <p>We aggregated and processed Twitter tweets of @realDonaldTrump between January 20th, 2017 and January 15th, 2018 ET through Twitter. Based on the data, the system did run a full natural language processing and clustering to sort out key topics.</p>
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, our editorial team manually verifies the result, reformat theme keywords for bettery relevancy, and removes unnecessary cluster theme that contains PBS and/or NPR promotional keywords. Lastly, the "interpreter" unit creates a final result ready to be published.</p>
        </div>
        <div class="details-close-action">
            <div class="icon"></div>
        </div>
    </div>
    <div class="whattrumpsaid-datapopup">
        <div class="datapopup-contents">
        </div>
        <div class="datapopup-close-action">
            <div class="icon"></div>
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    document.querySelector('.whattrumpsaid-content-timestamp').innerHTML = 'Updated on Jul 17, 2018 ET / Early-Preview';

    var month_index_data = [
        {
            "year": "2017",
            "months": ["2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-06", "2017-07", "2017-08", "2017-09", "2017-10", "2017-11", "2017-12"],
            "months_string": ["jan2017", "feb2017", "mar2017", "apr2017", "may2017", "jun2017", "jul2017", "aug2017", "sep2017", "oct2017", "nov2017", "dec2017"]
        }, 
        {
            "year": "2018",
            "months": ["2018-01"],
            "months_string": ["jan2018"]
        }
    ];
    var month_render_index = ["2017-01", "2017-02", "2017-03", "2017-04", "2017-05", "2017-06", "2017-07", "2017-08", "2017-09", "2017-10", "2017-11", "2017-12", "2018-01"].reverse();

    if (getpathparam('type') == '' && getpathparam('type') !== null) window.history.replaceState({}, null, '/whattrumpsaid/');

    for (var i=0; i < month_render_index.length; i++) {
        var markup_init_container = document.createElement("div");
        markup_init_container.className = "whattrumpsaid-analysis-data";
        markup_init_container.setAttribute('banana-month', month_render_index[i]);
        document.querySelector('.whattrumpsaid-analysis-group').appendChild(markup_init_container);
        if (getpathparam('type') !== '' && getpathparam('type') !== null && getpathparam('type') == month_render_index[i]) {
            render_list(month_render_index[i], true);
        } else {
            render_list(month_render_index[i], false);
        }
    }

    base_events();
    
}

const getpathparam = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}

window.onpopstate = function() {
    if (window.innerDocClick) {
        window.innerDocClick = false;
    } else {
        if (window.location.pathname == '/whattrumpsaid/' || window.location.pathname == '/whattrumpsaid') {
            page_go_back();
        }
    }
}

const render_list = (moindex, opt) => {
    var list_data = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = '//localhost:3000/data_publish_ready/trumptweeted/list_data.json';
    } else {
        dataset_url = 'https://thisisallabout.com/data_publish_ready/trumptweeted/list_data.json';
    }
    
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        list_data = module;

        _.filter(list_data, function(item) {
            if (item.month == moindex) {
                const cover_markup = () => html`
                <div class="whattrumpsaid-analysis-data-cover">
                    ${item.image ? html`
                    <div class="cover-image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${item.image}')"></div>
                    ` : html`<div class="cover-image"></div>`}
                    <div class="cover-info">
                        <p class="month-title">${item.header}</p>
                        <ul class="month-tags">
                        ${item.keytag.map((tag) => html`
                            <li>#${tag}</li>
                        `
                        )}
                        </ul>
                    </div>
                </div>
                <div class="whattrumpsaid-analysis-data-wrapper">
                </div>
                `;

                render(cover_markup(), document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + moindex +'"]'));
                if (opt == true) {
                    document.documentElement.className = 'n_scroll';
                    var obj = document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + moindex +'"]');
                    var month_tapped = obj.getAttribute('banana-month');
                    document.querySelector('.whattrumpsaid-analysis-group').classList.add('selectionmode');
                    obj.classList.add('selected');
                    render_data(moindex);
                }

                document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + moindex +'"] .whattrumpsaid-analysis-data-cover').addEventListener('click', function (e) {
                    document.documentElement.className = 'n_scroll';
                    var obj = document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + moindex +'"]');
                    var month_tapped = obj.getAttribute('banana-month');
                    document.querySelector('.whattrumpsaid-analysis-group').classList.add('selectionmode');
                    obj.classList.add('selected');
                    render_data(month_tapped);
                });

                return false;
            }
        });

        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const page_go_back = () => {
    var opened_content = document.querySelector('.whattrumpsaid-analysis-data.selected');
    if (opened_content !== null) {
        opened_content.querySelector('.whattrumpsaid-analysis-data-action-close').click();
    }
}

const base_events = () => {
    socialLikes(document.querySelector('.whattrumpsaid-share'));
    document.querySelector('.whattrumpsaid-share .email').addEventListener('click', function (e) {
        window.location.href = "mailto:?body=Hey, check this story: " + window.location.href;
    });

    document.querySelector('.whattrumpsaid-hero .whattrumpsaid-action-details').addEventListener('click', function (e) {
        if (!document.querySelector('.whattrumpsaid-details').classList.contains('opened'))
            document.querySelector('.whattrumpsaid-details').classList.add('opened');

        if (!document.querySelector('.whattrumpsaid-analysis-data').classList.contains('hidden'))
            document.querySelector('.whattrumpsaid-analysis-data').classList.add('hidden');
    });

    document.querySelector('.whattrumpsaid-details .details-close-action').addEventListener('click', function (e) {
        if (document.querySelector('.whattrumpsaid-details').classList.contains('opened'))
            document.querySelector('.whattrumpsaid-details').classList.remove('opened');

        if (document.querySelector('.whattrumpsaid-analysis-data').classList.contains('hidden'))
            document.querySelector('.whattrumpsaid-analysis-data').classList.remove('hidden');
    });

    document.querySelector('.whattrumpsaid-datapopup .datapopup-close-action').addEventListener('click', function (e) {
        document.querySelector('.whattrumpsaid-datapopup').classList.remove('opened');
    });
}

const check_mobile = () => {
    var status = false;
    document.body.getAttribute('banana-type', 'mobile') ? status = true : status = false;
    return status;
}

var renderdata_fetch = null;
const render_data = (month) => {
    var trump_data = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        dataset_url = '//localhost:3000/data_publish_ready/trumptweeted/' + month + '.json';
    } else {
        dataset_url = 'https://thisisallabout.com/data_publish_ready/trumptweeted/' + month + '.json';
    }

    window.history.pushState({}, null, '/whattrumpsaid/' + month + '/');
    const base_markup = () => html`
        <div class="whattrumpsaid-analysis-data-action-close-pre">
            <div class="icon"></div>
        </div>
    `;
    
    render(base_markup(), document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + month + '"] .whattrumpsaid-analysis-data-wrapper'));

    document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + month + '"] .whattrumpsaid-analysis-data-wrapper .whattrumpsaid-analysis-data-action-close-pre').addEventListener('click', function (e) {
        getParents(this, '.whattrumpsaid-analysis-data')[0].classList.remove('selected');
        document.querySelector('.whattrumpsaid-analysis-group').classList.remove('selectionmode');
        document.documentElement.className = '';
        document.querySelector('.minion-dataload').setAttribute('status', '');
        window.history.pushState({}, null, '/whattrumpsaid/');
    });

    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    renderdata_fetch = fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;

        var targetnode = document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + trump_data[0].month + '"]');

        const base_markup = () => html`
            <div class="whattrumpsaid-analysis-data-dynamicbg" banana-month="${trump_data[0].month}">
                <div class="dynamicbg-group" banana-month="${trump_data[0].month}">
                ${trump_data[0].data.map((item) => html`
                    <div class="dynamicbg-item" banana-id="${item.id}">
                    ${item.image ? html`
                        <div class="image" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.4) 0%, rgba(0, 0, 0, 0.2) 100%), url('${item.image}')"></div>
                    ` : ''}
                    </div>
                `
                )}
                </div>
            </div>
            <div class="analysis-group" banana-month="${trump_data[0].month}">
                <div class="analysis-list">
                ${trump_data[0].data.map((item) => html`
                    <div class="analysis-item" banana-id="${item.id}">
                        <div class="item-title">
                            <p class="title-text">${item.header}</p>
                            ${item.msg ? html`
                            <p class="msg-text">${item.msg}</p>
                            ` : ''}
                            ${item.imgcopyright ? html`
                            <div class="item-img-copyright">
                                <p>${item.imgcopyright}</p>
                            </div>
                            ` : ''}
                        </div>

                        ${item.picked ? html`
                        <div class="item-pickedtweets">
                            <div class="tweet-item">
                                <p class="tweet-text">“${item.picked[0].title}”</p>
                                ${item.picked[0].url ? html`<p class="link-text">${item.picked[0].url}</p>` : ''}
                            </div>
                            ${item.image ? html`
                            <div class="item-revealtweets-action">
                                <p>MORE</p>
                            </div>
                            ` : html`
                            <div class="item-revealtweets-action nobg">
                                <p>MORE</p>
                            </div>
                            `}
                        </div>
                        ` : html`
                            ${item.image ? html`
                            <div class="item-revealtweets-action notweet">
                                <p>MORE</p>
                            </div>
                            ` : html`
                            <div class="item-revealtweets-action nobg notweet">
                                <p>MORE</p>
                            </div>
                            `}
                        `}
                        
                        
                        <div class="item-tweets">
                        ${item.articles.map((tweets) => html`
                            <div class="tweet-item">
                                <p class="text">${tweets.title}</p>
                                <p class="ts" banana-ts="${tweets.ts}"></p>
                            </div>
                        `
                        )}
                        </div>
                    </div>
                `
                )}
                </div>
            </div>
            <div class="whattrumpsaid-analysis-data-panelactions">
                <div class="whattrumpsaid-analysis-data-action-close">
                    <div class="icon"></div>
                    <p>Close</p>
                </div>
                <div class="whattrumpsaid-analysis-data-action-share" data-url="https://thisisallabout.com/whattrumpsaid/${trump_data[0].month}" data-title="WhatTrumpSaid on THISISALLABOUT">
                    <div data-service="facebook" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="twitter" data-via="" data-related="realDonaldTrump"></div>
                    <div data-service="plusone" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="linkedin" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div data-service="pinterest" title="WhatTrumpSaid on THISISALLABOUT"></div>
                    <div class="email" title="WhatTrumpSaid on THISISALLABOUT">
                        <div class="icon"></div>    
                    </div>
                </div>
            </div>
        `;
        
        render(base_markup(), document.querySelector('.whattrumpsaid-analysis-data[banana-month="' + trump_data[0].month + '"] .whattrumpsaid-analysis-data-wrapper'));

        targetnode.querySelector('.whattrumpsaid-analysis-data-action-share .email').addEventListener('click', function (e) {
            window.location.href = "mailto:?body=Hey, check this story: " + window.location.href;
        });

        targetnode.querySelector('.whattrumpsaid-analysis-data-action-close').addEventListener('click', function (e) {
            getParents(this, '.whattrumpsaid-analysis-data')[0].classList.remove('selected');
            document.querySelector('.whattrumpsaid-analysis-group').classList.remove('selectionmode');
            document.documentElement.className = '';
            window.history.pushState({}, null, '/whattrumpsaid/');
        });

        socialLikes(targetnode.querySelector('.whattrumpsaid-analysis-data-action-share'));

        if (trump_data[0].dynamicbg_list.length > 0) {
            _.filter(trump_data[0].dynamicbg_list, function (dbg) {
                import('./whattrumpsaid_dynamic').then(module => {
                    module.dynamicbg_render_data(month, dbg);
                });

                return;
            });
        }

        Array.prototype.forEach.call(document.querySelectorAll('.whattrumpsaid-analysis-data .tweet-item .ts'), function(el, index, array) {
            var ts_raw = el.getAttribute('banana-ts');
            var ts_cv = moment.unix(ts_raw).format("MMMM Do YYYY, hh:mm");
    
            el.innerHTML = ts_cv;
        });
    
        var revealtweets = document.querySelectorAll('.whattrumpsaid-analysis-data .item-revealtweets-action');
        for (var i=0; i < revealtweets.length; i++) {
            revealtweets[i].addEventListener('click', function (e) {
                var parent = getParents(this, '.analysis-item')[0];
                var target = parent.querySelector('.item-tweets');
                
                var div = document.querySelector('.whattrumpsaid-datapopup .datapopup-contents');
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }
                var divClone = target.cloneNode(true);
                document.querySelector('.whattrumpsaid-datapopup .datapopup-contents').appendChild(divClone);
                document.querySelector('.whattrumpsaid-datapopup').classList.add('opened');
            });
        }

        targetnode.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item:nth-child(1)').classList.add('current');
        targetnode.querySelector('.whattrumpsaid-analysis-data .analysis-item:nth-child(1)').classList.add('current');
        targetnode.querySelector('.analysis-group').addEventListener('scroll', function (e) {
            _.filter(trump_data[0].dynamicscroll_list, function (dbg) {
                if (checkVisible(targetnode.querySelector('.analysis-item[banana-id="' + dbg + '"]'), window.innerHeight * 0.3) == true) {
                    targetnode.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + dbg + '"]').classList.add('current');
                    targetnode.querySelector('.analysis-item[banana-id="' + dbg + '"]').classList.add('current');
                }
                
                if (checkVisible(targetnode.querySelector('.analysis-item[banana-id="' + dbg + '"]'), window.innerHeight * 0.25) == false) {
                    targetnode.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + dbg + '"]').classList.remove('current');
                    targetnode.querySelector('.analysis-item[banana-id="' + dbg + '"]').classList.remove('current');
                }
            });
        });

        document.querySelector('.minion-dataload').setAttribute('status', '');
        return;
    });
}

var getClosest = function ( elem, selector ) {
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

    // Get closest match
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }

    return null;
};

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

function checkVisible(elm, threshold, mode) {
    if (!elm) return;
    threshold = threshold || 0;
    mode = mode || 'visible';
  
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    var above = rect.bottom - threshold < 0;
    var below = rect.top - viewHeight + threshold >= 0;
  
    return mode === 'above' ? above : (mode === 'below' ? below : !above && !below);
}

function isElementInViewport (el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
        rect.top  >= -window.innerHeight * 0.3 ||
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(searchElement, fromIndex) {
  
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
  
        // 1. Let O be ? ToObject(this value).
        var o = Object(this);
  
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;
  
        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }
  
        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;
  
        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
  
        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }
  
        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          // c. Increase k by 1. 
          k++;
        }
  
        // 8. Return false
        return false;
      }
    });
}