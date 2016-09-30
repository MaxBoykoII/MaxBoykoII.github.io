import { PortfolioItem } from '../classes/portfolio-item';

const title = "Visualize Data with a Scatterplot Graph";
const svgURL = "./images/svg/scatterplot.svg";
const userStories = [
   "I can see performance time visualized in a scatterplot graph.",
   "I can mouse over a plot to see a tooltip with additional details.",
   "The chart is responsive."
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/yaoPdm/';
const repo = 'http://codepen.io/MaxBoyko/pen/yaoPdm';
const caption = 'A responsive scatterplot built with d3';

export const scatterplot = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);