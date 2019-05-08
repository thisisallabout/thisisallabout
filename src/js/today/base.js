import {html, render} from 'lit-html';
import today_style from '../../styles/today/today.css';
import moment from 'moment';
import tz from 'moment-timezone';

let isDeviceTypeMobile = document.body.getAttribute('banana-device-type', 'mobile');

export function init_render() {
    document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
    document.body.classList.add('today');
    document.querySelector('.minion-header li[data-sectionid="nav-section-today"]').classList.add('current');

    const today_hero_markup = () => html`
    <div class="today-head-data">  
        <div class="head-hero-title">
            <p class="head-today-hero">Key Headlines</p>
            <p class="head-date-hero">Today</p>
        </div>
        <div class="head-item-container">
        </div>
    </div>
    <div class="today-copyrights">
        <p>Articles/Images copyrights CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, Financial Times. All images belong to the publishers and the rightful owner of images. We display images based on open metadata aggregation.</p>
    </div>
    <div class="today-guide-photosafetynet">
        <div class="guide-text">
            <p>Our Today section is an unbiased news cluster of topics trending across mainstream media. We pick the most important stories from each topic cluster automatically through our algorithm.</p>
            <p>Due to this, our editorial staff can't verify if the photos displayed in this section are consistent with our editorial guidelines. Hence, we offer an option to mask the background photos.</p>
            <p>Please select your preference below to continue.</p>
        </div>
        <div class="guide-photosafetynet-actions">
            <p banana-action="photosafetynet-on">Mask photos partially</p>
            <p banana-action="photosafetynet-off">Keep photos visible</p>
        </div>
    </div>
    <div class="today-tpdetails">
        <div class="tpdetails-reveal">
            <p>More Details</p>
        </div>
        <div class="tpdetails-text">
            <p>Our clustering system uses a sophisticated algorithm to automatically determine a reasonable and optimal size of clusters. Once the initial data processing is done, the "interpreter" unit creates a final result, ready to be published.</p>
            <p>This content renders clustering results created automatically by our processing system. We verify that the result is completely untouched.</p>
            <p>We aggregate and process stories from CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, and Financial Times from the past 24 hours.</p>
            <p>Based on the data, the system runs a full natural language processing and clustering sequence to sort out key topics. </p>
        </div>
        <div class="photosafetynet-reveal">
            <p>Photo Masking Configuration</p>
        </div>
        <div class="photosafetynet-text">
            <p>Our Today section is an unbiased news cluster of topics trending across mainstream media. We pick the most important stories from each topic cluster automatically through our algorithm.</p>
            <p>Due to this, our editorial staff can't verify if the photos displayed in this section are consistent with our editorial guidelines. Hence, we offer an option to mask the background photos.</p>
            <p>Please select your preference below to continue.</p>
        </div>
        <div class="photosafetynet-actions">
            <p banana-action="photosafetynet-on">Mask photos partially</p>
            <p banana-action="photosafetynet-off">Keep photos visible</p>
        </div>
        <div class="tpdetails-close-action">
            <div class="icon"></div>
        </div>
    </div>
    
    <div class="today-action-revealinfo">
        <div class="icon"></div>
    </div>
    `;

    render(today_hero_markup(), document.querySelector('.minion-contents'));
    render_head_data();

    window.addEventListener('scroll', function (e) {
        if (window.scrollY >= 30) {
            document.querySelector('.today-head-data .head-hero-title').classList.add('scrolled');
        } else {
            document.querySelector('.today-head-data .head-hero-title').classList.remove('scrolled');
        }
    });
}


const render_head_data = () => {
    var published_data = null;
    var dataset_url;
    if (process.env.NODE_ENV == 'dev') {
        // debugging dataset_url = '//localhost:3000/data_publish_ready/today/today_data.json';
        dataset_url = './data_publish_ready/today/today_data.json';
    } else {
        dataset_url = './data_publish_ready/today/today_data.json';
    }

    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        published_data = module;

        var contentts = published_data[0].timestamp;
        var est_ts = moment.tz(contentts, "America/New_York").format("MMM D ddd");
        var est_ts_hero = moment.tz(contentts, "America/New_York").format("MMMM D hA, ddd");
        document.querySelector('.head-date-hero').innerHTML = est_ts_hero;

        const head_markup = () => html`
            ${published_data.map((i) => html`
                ${i.item_highestrank.map((article) => html`
                    <div class="head-article-item analysis-article-obj" banana-keywords="${JSON.stringify(i.topics_lda)}" banana-link="${article[0].url}" banana-articleid="${article[0]._id}">
                        <div class="article-image" banana-imagesrc="${article[0].image}" style="background-image:  linear-gradient(to bottom, rgba(0, 0, 0 , 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('${article[0].image}')"></div>
                        <div class="article-keywords">
                            ${i.topics_lda.map((topiccluster) => html`
                            <div class="keyword-cluster">
                                ${topiccluster.map((topic) => html`
                                <span>${topic}&nbsp;</span>
                                `)}
                            </div>
                            `)}
                        </div>
                        <div class="article-highestrank-key">
                            <a href="${article[0].url}" target="_blank">
                                <p class="title">${article[0].title}</p>
                                <div class="article-info">
                                    <p class="origin">${article[0].origin}</p>
                                </div>
                            </a>
                        </div>
                        <div class="article-highestrank-all">
                        ${article.length > 0 ? html`
                            ${article.map((a) => html`
                            <div class="all-article-item" banana-link="${a.url}" banana-articleid="${a._id}" banana-imagesrc="${a.image}">
                                <a href="${a.url}" target="_blank">
                                    <p class="title">${a.title}</p>
                                </a>
                                <div class="article-info">
                                    <p class="origin">${a.origin}</p>
                                </div>
                            </div>
                            `)}
                        ` : ''}
                        </div>
                        
                    </div>
                `)}
            `)}
        `;

        render(head_markup(), document.querySelector('.today-head-data .head-item-container'));

        postrender_head_data();
        document.querySelector('.minion-dataload').setAttribute('status', '');
    });
}

const postrender_head_data = () => {
    if (!localStorage.getItem('tiaa_visitor_photosafetynet_blur')) {
        $('.today-guide-photosafetynet').addClass('opened');
    } else if (localStorage.getItem('tiaa_visitor_photosafetynet_blur') == 'on') {
        $('.today-head-data .head-article-item .article-image').each(function (i, el) {
            $(el).addClass('blurred');
        });
    }

    $('.today-guide-photosafetynet .guide-photosafetynet-actions > p').on('click', function (e) {
        if ($(this).attr('banana-action') == 'photosafetynet-on') {
            localStorage.setItem('tiaa_visitor_photosafetynet_blur', 'on');
            $('.today-head-data .head-article-item .article-image').each(function (i, el) {
                $(el).addClass('blurred');
            });
        } else if ($(this).attr('banana-action') == 'photosafetynet-off') {
            localStorage.setItem('tiaa_visitor_photosafetynet_blur', 'off');
        }

        $('.today-guide-photosafetynet').removeClass('opened');
    });

    $('.today-head-data .head-article-item .article-keywords').on('click', function (e) {
        $(this).parent().addClass('moreitems-opened');
        $(this).parent().find('.article-moreitems').addClass('opened');
        $('.today-head-data').addClass('head-item-sticky');
    });

    $('.today-head-data .head-article-item .article-action-closereveal').on('click', function (e) {
        $(this).parents('.head-article-item').removeClass('moreitems-opened');
        $('.today-head-data').removeClass('head-item-sticky');
        $(this).parents('.head-article-item').find('.article-moreitems').removeClass('opened');
    });

    $('.today-head-data .head-article-item .article-moreitems').each(function (i, el) {
        $(el).find('.all-article-item:nth-child(1)').remove();
    });

    $('.today-head-data .analysis-article-obj').each(function (i, el) {
        var ts_converted = moment.tz(moment.unix($(el).find('.article-info .ts').attr('banana-ts')), "America/New_York").format();
        var ts_ago = moment(ts_converted).fromNow();
        $(el).find('.article-info .ts').text(ts_ago);
        $(el).addClass('article-item-' + i);
        (i >= 7) ? $(el).addClass('article-item-lowpriority') : '' ;

        var items = ['www.washingtonpost.com/pb/resources/img/twp-social-share.png', 'twt-assets.washtimes.com', 'https://static01.nyt.com/images/icons/t_logo_291_black.png', 'favicon', 'Twitterlogo.png', 'facebook-default-wide.jpg', 'social-default'];
        var matches = items.filter(s => $(el).find('.article-image').attr('banana-imagesrc').toLowerCase().includes(s.toLowerCase()));
        if (matches.length > 0) {
            $(el).addClass('noimage');
        }
    });

    $('.today-action-revealinfo').on('click', function (e) {
        if (!document.querySelector('.today-tpdetails').classList.contains('opened')) {
            document.querySelector('.today-tpdetails').classList.add('opened');
            document.documentElement.className = 'n_scroll';
        }
    });

    $('.today-tpdetails .tpdetails-close-action').on('click', function (e) {
        if (document.querySelector('.today-tpdetails').classList.contains('opened')) {
            document.querySelector('.today-tpdetails').classList.remove('opened');
            document.documentElement.className = '';
        }
    });

    $('.today-tpdetails .photosafetynet-actions > p').on('click', function (e) {
        if ($(this).attr('banana-action') == 'photosafetynet-on') {
            localStorage.setItem('tiaa_visitor_photosafetynet_blur', 'on');
            $('.today-head-data .head-article-item .article-image').each(function (i, el) {
                $(el).addClass('blurred');
            });
        } else if ($(this).attr('banana-action') == 'photosafetynet-off') {
            localStorage.setItem('tiaa_visitor_photosafetynet_blur', 'off');
            $('.today-head-data .head-article-item .article-image').each(function (i, el) {
                $(el).removeClass('blurred');
            });
        }

        if (document.querySelector('.today-tpdetails').classList.contains('opened')) {
            document.querySelector('.today-tpdetails').classList.remove('opened');
            document.documentElement.className = '';
        }
    });

    if (isDeviceTypeMobile) {
        var mobile_ithm_close = document.querySelectorAll('.today-analysis-data .analysis-list .item-close-action');
        for (var i=0; i < mobile_ithm_close.length; i++) {
            mobile_ithm_close[i].addEventListener('click', function (e) {
                var parent = getParents(this, '.analysis-item')[0];
                if (parent.classList.contains('selected')) {
                    parent.classList.remove('selected');

                    var list = document.querySelector('.today-analysis-data .analysis-list');
                    if (list.classList.contains('selected')) {
                        list.classList.remove('selected');
                    }
                }
            });
        }
    }
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