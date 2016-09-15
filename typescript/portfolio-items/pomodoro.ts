import { PortfolioItem } from '../classes/portfolio-item';

const title = "Zipline: Build a Pomodoro Clock";
const svgURL = "./images/svg/pomodoro.svg";
const userStories = [
   "I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.",
   "I can reset the clock for my next pomodoro.",
   "I can customize the length of each pomodoro."
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/PPNOYy/';
const repo = 'http://codepen.io/MaxBoyko/pen/PPNOYy';
const caption = 'A JavaScript pomodoro clock.';

export const pomodoro = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);