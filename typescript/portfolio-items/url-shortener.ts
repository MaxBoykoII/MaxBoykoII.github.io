import { PortfolioItem } from '../classes/portfolio-item';

const title = "URL Shortener Microservice";
const svgURL = "./images/svg/url-shortener.svg";
const userStories = [
   'I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.',
   "If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.",
   'I can get a list of the most recently submitted search strings.'
];
const liveDemo = "https://url-shortener-2.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/url-shortener";
const caption = "A node app for shortening urls.";

export const urlShortener = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);