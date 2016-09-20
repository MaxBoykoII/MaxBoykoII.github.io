import { PortfolioItem } from '../classes/portfolio-item';


const title = "Chart the Stock Market ";
const svgURL = "./images/svg/stock-sync.svg";
const userStories = [
   'I can view a graph displaying the recent trend lines for each added stock.',
   'I can add new stocks by their symbol name.',
   'I can remove stocks.',
   'I can see changes in real-time when any other user adds or removes a stock.'
];
const liveDemo = "https://stock-sync.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/stock-sync";
const caption = "An app to chart the stock market and sync across multiple clients";

export const stockSync = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);