import { PortfolioItem } from '../classes/portfolio-item';

const title = "Request Header Parser Microservice";
const svgURL = "./images/svg/head-parser.svg";
const userStories = [
    'I can get the IP address, language and operating system for my browser.'
];
const liveDemo = "https://headparser-microservice.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/headparser-microservice";
const caption = "A node app that parses request headers.";

export const headParser = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);