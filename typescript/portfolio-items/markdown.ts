import { PortfolioItem } from '../classes/portfolio-item';

const title = "Build a Markdown Previewer";
const svgURL = "./images/svg/markdown.svg";
const userStories = [
  "I can type GitHub-flavored Markdown into a text area.",
  "I can see a preview of the output of my markdown that is updated as I type."
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/BzBMgm/';
const repo = 'http://codepen.io/MaxBoyko/pen/BzBMgm';
const caption = 'A simple markdown previewer built with React';

export const markdown = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);