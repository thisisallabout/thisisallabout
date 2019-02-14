import {html, render} from 'lit-html';
import today_style from '../../styles/today/gallery.css';
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
            <p class="head-date-hero">Today</p>
        </div>
        <div class="head-item-container">
        </div>
        <div class="head-container-move" banana-slide-direction="right">
            <div class="icon"></div>
        </div>
        <div class="head-container-slide-indicator">
        </div>
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
    <div class="today-copyrights">
        <p>Articles/Images copyrights CNN, Fox News, The New York Times, The Hill, Washington Post, The Wall Street Journal, NPR, Chicago Tribune, USA Today, Politico, L.A. Times, NBC News, PBS NewsHour, The Washington Times, The New Yorker, CBS News, C-SPAN, ABC News, The Atlantic, AP, The New Republic, The Boston Globe, Business Insider, CNBC, Bloomberg, Financial Times. All images belong to the publishers and the rightful owner of images. We display images based on open metadata aggregation.</p>
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
    var trump_data = null;
    var dataset_url;
    dataset_url = 'https://thisisallabout.com/analysis_assets/today/today_data.json';

    fetch(dataset_url).then(response => response.text()).then(function(text) {
        var module = eval(text);
        trump_data = module;

        var contentts = trump_data[0].timestamp;
        var est_ts = moment.tz(contentts, "America/New_York").format("MMM D ddd");
        var est_ts_hero = moment.tz(contentts, "America/New_York").format("MMMM D hA, ddd");
        document.querySelector('.head-date-hero').innerHTML = est_ts_hero;

        const head_markup = () => html`
            ${trump_data.map((i) => html`
                ${i.toparticles.map((arti) => html`
                    <div class="head-article-item analysis-article-obj" banana-keywords="${JSON.stringify(i.theme)}" banana-link="${arti[0].url}" banana-articleid="${arti[0]._id}">
                        <div class="article-image" banana-imagesrc="${arti[0].image}" style="background-image:  linear-gradient(to bottom, rgba(0, 0, 0 , 0.6) 0%, rgba(0, 0, 0, 0.4) 100%), url('${arti[0].image}')"></div>

                        <div class="article-keywords">
                            ${i.theme.map((th) => html`
                            <p>${th}</p>
                            `)}
                        </div>
                        <a href="${arti[0].url}" target="_blank">
                            <p class="title">${arti[0].title}</p>
                            <div class="article-info">
                                <p class="origin">${arti[0].origin}</p>
                            </div>
                        </a>
                        
                        <div class="article-moreitems">
                            <div class="article-action-closereveal">
                                <div class="icon"></div>
                            </div>
                            <p class="all-article-header">More Stories In This Cluster</p>
                        ${arti.length > 0 ? html`
                            ${arti.map((a) => html`
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

        const head_slide_indicator_markup = () => 
        html`
        ${trump_data.map((i) => html`
            <div class="slide-indicator"></div>
        `)}
        </div>
        `;

        render(head_slide_indicator_markup(), document.querySelector('.today-head-data .head-container-slide-indicator'));
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

    var head_container = document.querySelector('.today-head-data .head-item-container');
    var head_items = head_container.children;
    var head_container_slide_indicators = document.querySelector('.today-head-data .head-container-slide-indicator');
    var head_container_slide_indicator = head_container_slide_indicators.children;
    head_container.setAttribute('banana-slide-index', 0);
    var head_ind = 0;
    
    while (head_ind < head_items.length) {
        head_items[head_ind].style.transform = 'translate3d(' + window.innerWidth * head_ind + 'px' + ', 0, 0)';
        if (head_ind == 0) {
            head_items[head_ind].classList.add('visible');
            head_container_slide_indicator[head_ind].classList.add('visible');
            head_items[head_ind].querySelector('.article-keywords').classList.add('focus');
        }
        head_ind++;
    }
    
    function head_container_slide_move_right() {
        var head_container = document.querySelector('.today-head-data .head-item-container');
        var head_container_slide_indicators = document.querySelector('.today-head-data .head-container-slide-indicator');
        var head_container_slide_indicator = head_container_slide_indicators.children;
        if (parseInt(head_container.getAttribute('banana-slide-index'))+1 == head_container.children.length) {
            head_container.setAttribute('banana-slide-index', 0);
            var head_items = head_container.children;
            var head_ind = 0;
        
            while (head_ind < head_items.length) {
                head_items[head_ind].style.transform = 'translate3d(' + window.innerWidth * head_ind + 'px' + ', 0, 0)';
                if (head_ind == 0) {
                    head_items[head_ind].classList.add('visible');
                    head_container_slide_indicator[head_ind].classList.add('visible');
                    head_container_slide_indicator[head_container_slide_indicator.length - 1].classList.remove('visible');
                    head_items[head_ind].querySelector('.article-keywords').classList.add('focus');
                }
                head_ind++;
            }
        } else {
            head_container.setAttribute('banana-slide-index', parseInt(head_container.getAttribute('banana-slide-index'))+1);
            var head_ind = parseInt(head_container.getAttribute('banana-slide-index'));
            var head_ind_right = 0;
            var head_items = head_container.children;

            for (var i=0; i < head_items.length; i++) {
                if (i <= head_ind) {
                    head_items[i].style.transform = 'translate3d(-' + window.innerWidth * (head_ind-i) + 'px' + ', 0, 0)';
                } else {
                    head_items[i].style.transform = 'translate3d(' + window.innerWidth * (head_ind+head_ind_right) + 'px' + ', 0, 0)';
                    head_ind_right++;
                }

                if (i == head_ind) {
                    head_container_slide_indicator[i].classList.add('visible');
                    head_items[i].classList.add('visible');
                    head_items[i].querySelector('.article-keywords').classList.add('focus');
                } else {
                    head_container_slide_indicator[i].classList.remove('visible');
                    head_items[i].classList.remove('visible');
                    if (head_items[i].querySelector('.article-keywords').classList.contains('focus')) {
                        head_items[i].querySelector('.article-keywords').classList.remove('focus');
                    }
                }
            }
        }
    }

    $('.today-head-data .head-container-move').on('click', function (e) {
        if (this.getAttribute('banana-slide-direction') == 'right') {
            head_container_slide_move_right();
        }
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