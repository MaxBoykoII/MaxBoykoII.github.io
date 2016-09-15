import { PortfolioItem } from '../classes/portfolio-item';

const title = "Zipline: Build a Wikipedia Viewer";
const svgURL = "./images/svg/wiki.svg";
const userStories = [
    'I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.'
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/yYbReN/';
const repo = 'http://codepen.io/MaxBoyko/pen/yYbReN';
const caption = 'A Wikipedia viewer';

export const wiki = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);