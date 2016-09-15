import { PortfolioItem } from '../classes/portfolio-item';

const title = "Build a Camper Leaderboard";
const svgURL = "./images/svg/leaderboard.svg";
const userStories = [
   "I can see a table of the Free Code Camp campers who've earned the most brownie points in the past 30 days.",
   "I can see how many brownie points they've earned in the past 30 days, and how many they've earned total.",
   "I can toggle between sorting the list by how many brownie points they've earned in the past 30 days and by how many brownie points they've earned total."
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/gMpWry/';
const repo = 'http://codepen.io/MaxBoyko/pen/gMpWry';
const caption = 'A React implementation of a leaderboard.';

export const leaderboard = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);