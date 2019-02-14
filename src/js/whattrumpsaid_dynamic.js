import {html, render} from 'lit-html';

export function dynamicbg_render_data(month, dbg) {
    if (month == '2017-01') dynamicbg_201701(month, dbg);
    if (month == '2017-02') dynamicbg_201702(month, dbg);
    if (month == '2017-03') dynamicbg_201703(month, dbg);
    if (month == '2017-04') dynamicbg_201704(month, dbg);
    if (month == '2017-06') dynamicbg_201706(month, dbg);
    if (month == '2017-07') dynamicbg_201707(month, dbg);
    if (month == '2017-08') dynamicbg_201708(month, dbg);
    if (month == '2017-09') dynamicbg_201709(month, dbg);
    if (month == '2017-11') dynamicbg_201711(month, dbg);
    if (month == '2017-12') dynamicbg_201712(month, dbg);
    if (month == '2018-01') dynamicbg_201801(month, dbg);

    return;
}

const dynamicbg_201701 = (month, type) => {
    if (type == '1701c03') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>😈</p>
                <p>EVIL AND FAKE</p>
                <p>CNN?</p>
            </div>
            <div class="graphic-box">
                <p>😇</p>
                <p>GREAT AND NO.1</p>
                <p>Fox News?</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1701c04') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>🤬</p>
                <p>THE COVERAGE ABOUT ME IN</p>
                <p>NYT AND WP HAS BEEN SO FALSE! ...</p>
            </div>
            <div class="graphic-box">
                <p>😤</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1701c05') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>EXTREME</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201702 = (month, type) => {
    if (type == '1702c02') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box nyt">
                <div class="nytlogo"></div>
                <p>FAKE</p>
            </div>
            <div class="graphic-box cnn">
                <div class="cnnlogo"></div>
                <p>FAKE</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201703 = (month, type) => {
    if (type == '1703c00') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <div class="trumpcare"></div>
                <p>😏</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }

    if (type == '1703c01') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
            <div class="graphic-box">
                <p>MORE JOBS</p>
            </div>
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201704 = (month, type) => {
    if (type == '1704c01') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201706 = (month, type) => {
    if (type == '1706c05') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201707 = (month, type) => {
    if (type == '1707c01' || type == '1707c03' || type == '1707c03' || type == '1707c04') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201708 = (month, type) => {
    if (type == '1708c05') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201709 = (month, type) => {
    if (type == '1709c03') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201711 = (month, type) => {
    if (type == '1711c01' || type == '1711c05') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201712 = (month, type) => {
    if (type == '1712c00' || type == '1712c02') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}

const dynamicbg_201801 = (month, type) => {
    if (type == '1801c00') {
        const dynamicbg_markup = () => html`
        <div class="graphic">
        </div>
        `;
        
        render(dynamicbg_markup(), document.querySelector('.whattrumpsaid-analysis-data-dynamicbg[banana-month="' + month + '"] .dynamicbg-item[banana-id="' + type + '"]'));
    }
}