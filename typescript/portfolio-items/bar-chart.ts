import { PortfolioItem } from '../classes/portfolio-item';

const title = "Visualize Data with a Bar Chart ";
const svgURL = "./images/svg/bar-chart.svg";
const userStories = [
    'I can see US Gross Domestic Product by quarter, over time.',
    'I can mouse over a bar and see a tooltip with the GDP amount and exact year and month that bar represents.',
    'The chart is responsive.'
];
const liveDemo = "http://codepen.io/MaxBoyko/full/WGpBVL/";
const repo = "http://codepen.io/MaxBoyko/pen/WGpBVL";
const caption = "A responsive bar chart built with d3";

export const barChart = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);