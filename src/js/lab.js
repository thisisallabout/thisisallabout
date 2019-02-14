import {html, render} from 'lit-html';

export function init_render() {
    const getpathparam = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }

    if (getpathparam('type') == '' && getpathparam('type') == null) {
        window.location.href = 'https://github.com/thisisallabout/';
    } else if (getpathparam('type') == 'hourlycluster') {
        window.location.href = 'https://github.com/thisisallabout/hourly_newscluster_today';
    } else {
        window.location.href = 'https://github.com/thisisallabout/';
    }
}