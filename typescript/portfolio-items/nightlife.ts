import { PortfolioItem } from '../classes/portfolio-item';

const title = "Build a Nightlife Coordination App";
const svgURL = "./images/svg/nightlife.svg";
const userStories = [
    "As an unauthenticated user, I can view all bars in my area.",
    "As an authenticated user, I can add myself to a bar to indicate I am going there tonight.",
    "As an authenticated user, I can remove myself from a bar if I no longer want to go there.",
    "As an unauthenticated user, when I login I should not have to search again."
];
const liveDemo = "https://joyous-nightlife.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/nightlife";
const caption = "A nightlife coordination app built with angular 2 and node";

export const nightlife = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);