import { PortfolioItem } from '../classes/portfolio-item';

const title = "Timestamp Microservice";
const svgURL = "./images/svg/timestamp.svg";
const userStories = [
    'I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)',
    'If it does, it returns both the Unix timestamp and the natural language form of that date.',
    'If it does not contain a date or Unix timestamp, it returns null for those properties.'
];
const liveDemo = "https://timestamp-microservice-2.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/timestampMicroservice";
const caption = "A node app that generates timestamps.";

export const timestamp = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);