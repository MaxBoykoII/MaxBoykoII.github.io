import * as jQuery from 'jquery';
import * as _ from 'lodash';

import { PortfolioItemInterface } from '../interfaces/portfolio-item';

export class PortfolioItem implements PortfolioItemInterface {
     title: string;
    svgURL: string;
    userStories: string[];
    liveDemo: string;
    repo: string;
    caption: string;
    constructor(title:string, svgURL:string, userStories: string[], liveDemo:string, repo:string, caption: string){
        _.assign(this, {title, svgURL, userStories, liveDemo, repo, caption});
    }
    createHTML(id: number) {
     const modalId =`#portfolioModal${id}`;
     const templateString = `<div class="col-sm-4"> 
                <a href="${modalId}" data-toggle="modal">
                <img src="${this.svgURL}" class="img-svg img-responsive" alt="${this.title}"/>
                </a>
                </div>`;
                
        return jQuery(templateString);
    }
    createModalHTML(id:number){
    const modalId = `portfolioModal${id}`;
    const templateString = `
    <div class="portfolio-modal modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-content">
                <div class="modal-close" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2">
                            <div class="modal-body">
                                <h2>${this.title}</h2>
                                <figure class="figure">
                                    <img src="${this.svgURL}" class="img-svg img-responsive" alt="${this.title}" />
                                    <figcaption class="figure-caption">${this.caption}</figcaption>
                                </figure>
                                <h3> User Stories</h3>
                                <ol>
                                   ${this.userStories.map(story => `<li>${story}</li>`).join(' ')}
                                </ol>
                                <ul class="list-inline">
                                    <li>
                                        <strong> <a href="${this.liveDemo}" target="_blank">Live Demo</a></strong>
                                    </li>
                                    <li>
                                        <strong> <a href="${this.repo}" target="_blank">Code</a></strong>
                                    </li>
                                </ul>
                                <button class="btn btn-default" data-dismiss="modal">
                            <i class="fa fa-times"></i>
                            Close 
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
        return jQuery(templateString);
    }
}