import { PortfolioItem } from '../classes/portfolio-item';

const title = "Show National Contiguity with a Force Directed Graph";
const svgURL = "./images/svg/national-contiguity.svg";
const userStories = [
    "I can see a Force-directed Graph that shows which countries share borders.",
    "I can see each country's flag on its node.",
    "I can mouse over a flag to get the name of the corresponding country.",
];
const liveDemo = "http://codepen.io/MaxBoyko/full/WojRox/";
const repo = "http://codepen.io/MaxBoyko/pen/WojRox/";
const caption = "A force layout built with d3";

export const nationalContiguity = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);