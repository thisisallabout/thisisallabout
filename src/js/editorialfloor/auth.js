import styles from '../../styles/editorialfloor/core.css';
import {html, render} from 'lit-html';

export function init_render() {
    document.body.classList.add('editorial');

    const hero_markup = () => html`
    <div class="editorial-auth">
        <div class="editorial-herotext">
            <p class="hero1">Identification required</p>
            <p class="hero2">Please contact editorial team if there's any inquiry.</p>
            <div class="editorial-authfields">
                <input type="text" id="editorial-authid" placeholder="username" />
                <input type="password" id="editorial-authpw" placeholder="password" />
                <div class="editorial-auth-action-proceed">
                    <div class="icon"></div>
                </div>
            </div>
        </div>
    </div>
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
    attach_events();
}

const attach_events = () => {
    $('.editorial-auth-action-proceed').on('click', function (e) {
        auth_proceed();
    });

    $('.editorial-authfields input').on('keypress', function (e) {
        if (e.keyCode == 13) {
            auth_proceed();
            return false;
        }
    });

    const auth_proceed = () => {
        if (document.querySelector('.editorial-authfields #editorial-authid').value == '' || document.querySelector('.editorial-authfields #editorial-authpw').value == '') {
            return alert('Please provide your editorial auth credentials first');
        }
        var api_url;
        if (process.env.NODE_ENV == 'dev') {
            api_url = '//localhost:17502/auth';
        } else {
            api_url = '//thisisallabout.com:5020/auth';
        }

        var api_post_data = {
            "username": document.querySelector('.editorial-authfields #editorial-authid').value,
            "password": document.querySelector('.editorial-authfields #editorial-authpw').value
        };

        var api_header = {
            "Content-Type": 'application/json',
        };

        document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_1');
        fetch(api_url, {
            method: "POST",
            headers: api_header,
            body: JSON.stringify(api_post_data)
        }).then(r => r.json()).then(function(response) {
            document.querySelector('.minion-dataload').setAttribute('status', 'dl_d_0');
            if (response.error) return alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + JSON.stringify(response.error));

            localStorage.setItem('tiaa_stuart_edt_ac_t', response.token);
            window.location.reload(false);
        })
        .catch(e => alert("Unable to post a new article to tracker. ERR_MSG_CODE: " + e))
    }
}