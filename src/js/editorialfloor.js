import {html, render} from 'lit-html';
import styles from '../styles/editorialfloor/core.css';

export function init_render() {
    const getpathparam = (name, url) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        var regexS = "[\\?&]"+name+"=([^&#]*)";
        var regex = new RegExp( regexS );
        var results = regex.exec( url );
        return results == null ? null : results[1];
    }
    
    if (!localStorage.getItem('tiaa_stuart_edt_ac_t')) {
        import('./editorialfloor/auth').then(module => {
            module.init_render();
        });
    } else {
        var api_url;
        if (process.env.NODE_ENV == 'dev') {
            api_url = '//localhost:17502/members';
        } else {
            api_url = '//thisisallabout.com:5020/members';
        }

        var api_header = {
            "x-access-token": localStorage.getItem('tiaa_stuart_edt_ac_t')
        }

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
        fetch(api_url, {
            method: "GET",
            headers: api_header
        }).then(r => r.json()).then(function(response) {
            if (response.username) {
                const editorialMenus = [
                    { id: 'nav-editorial-track', name: 'Tracker', path: 'editorialfloor/track' },
                    { id: 'nav-editorial-datasetextract', name: 'Dataset Extractor', path: 'editorialfloor/datasetextract' },
                    { id: 'nav-editorial-monthlycluster', name: 'MonthlyCluster Editor', path: 'editorialfloor/monthlycluster' }
                ];
            
                const sections_markup = () => html`
                    <p class="section-guide">EDITORIALCONSOLE</p>
                    <ul class="sections-list editorial">
                        ${editorialMenus.map((i) => html`
                            <li data-sectionid="${i.id}"><a href="/${i.path}">${i.name}</a></li>
                        `
                        )}
                    </ul>
                `;

                var stuartdiv = document.createElement('div');
                stuartdiv.setAttribute('class', 'sections-group editorial');
                var parentSections = document.querySelector('.minion-sections');
                parentSections.querySelector('.developer').after(stuartdiv);
                render(sections_markup(), parentSections.querySelector('.editorial'));
                
                $('.stuart-sections-reveal').on('click', function (e) {
                    if (!document.querySelector('.minion-stuartbox').classList.contains('opened')) {
                        document.querySelector('.minion-stuartbox').classList.add('opened');
                    } else {
                        document.querySelector('.minion-stuartbox').classList.remove('opened');
                    }
                });
        
                $('.minion-editorial-header .stuart-action-logout').on('click', function (e) {
                    if (confirm('Are you sure you want to signout from editorial console?')) {
                        localStorage.removeItem('tiaa_stuart_edt_ac_t');
                        window.location.href = window.location.protocol + "//" + window.location.host + "/editorialfloor";
                    }
                });
        
                if (getpathparam('type') !== '' && getpathparam('type') !== null) {
                    import('./editorialfloor/' + getpathparam('type')).then(module => {
                        module.init_render();
                    });
                } else {
                    import('./editorialfloor/track').then(module => {
                        module.init_render();
                    });
                }
            } else {
                alert("Unable to verify editorial auth credentials");
                localStorage.removeItem('tiaa_stuart_edt_ac_t');
                import('./editorialfloor/auth').then(module => {
                    module.init_render();
                });
            }
        })
        .catch(e => alert("Unable to verify editorial auth credentials. ERR_MSG_CODE: " + e))
    }
}