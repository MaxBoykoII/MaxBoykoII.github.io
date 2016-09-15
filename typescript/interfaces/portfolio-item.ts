import * as jQuery from 'jquery';

export interface PortfolioItemInterface {
    title: string;
    svgURL: string;
    userStories: string[];
    liveDemo: string;
    repo: string;
    caption: string;
    createHTML(id: number):JQuery;
    createModalHTML(id:number): JQuery;
}