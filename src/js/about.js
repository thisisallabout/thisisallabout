import {html, render} from 'lit-html';
import about_style from '../styles/about.css';

export function init_render() {
    const hero_markup = () => html`
    <div class="about-hero">
        <div class="about-herotext">
            <p class="hero1">It's all about</p>
            <p class="hero1">what really matters.</p>
            <div class="hero2">
                <p>At THISISALLABOUT, our aim is to unravel complex issues and agendas by group, timeframe, and key topic using intelligent data analysis and great visualization. With an eye towards curation, we help you navigate through a wide range of issues with a single click.</p>
                <p>We are living in a time of unprecedented economic, political, and social hardships. That's why having a data driven perspective on key issues has become more critical than ever.</p>
                <p>However, in the era of digital journalism, it's difficult to get clear information about what is affecting our daily lives. In a flood of stories and fake news, our aim is to help people understand issues in an easy, and clear way.</p>
                <p>Our algorithm, without political bias, examines a wide range of media in order to create a qualified look at important issues.</p>
                <p>Through a deliberate process of data analysis and story curation, we will never stop exploring influential aspects of society.</p>
                <p>THISISALLABOUT is a step forward in uncovering truth buried by bias.</p>
            </div>
            <div class="hero2 contact">
                <p><a href="mailto:hello@thisisallabout.com">Contact Us</a></p>
            </div>
        </div>
    </div>
    
    `;

    render(hero_markup(), document.querySelector('.minion-contents'));
}