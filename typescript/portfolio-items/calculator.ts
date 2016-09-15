import { PortfolioItem } from '../classes/portfolio-item';

const title = "Zipline: Build a JavaScript calculator";
const svgURL = "./images/svg/calculator.svg";
const userStories = [
    'I can add, subtract, multiply and divide two numbers.',
    'I can clear the input field with a clear button.',
    'I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output'
];
const liveDemo = "http://codepen.io/MaxBoyko/full/WQKjJN";
const repo = "http://codepen.io/MaxBoyko/pen/WQKjJN";
const caption = "A javascript calculator";

export const calculator = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);