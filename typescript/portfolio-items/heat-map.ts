import { PortfolioItem } from '../classes/portfolio-item';

const title = "Visualize Data with a Responsive Heat Map";
const svgURL = "./images/svg/heat-map.svg";
const userStories = [
    'I can view a heat map with data represented both on the Y and X axis.',
    'Each cell is colored based its relationship to other data.',
    'I can mouse over a cell in the heat map to get more exact information.',
    'The chart is responsive.'
];
const liveDemo = "http://codepen.io/MaxBoyko/full/zKyjPO/";
const repo = "http://codepen.io/MaxBoyko/pen/zKyjPO";
const caption = "A responsive heat map built with d3";

export const heatMap = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);