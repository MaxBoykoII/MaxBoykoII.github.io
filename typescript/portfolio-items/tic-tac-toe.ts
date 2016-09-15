import { PortfolioItem } from '../classes/portfolio-item';

const title = "Zipline: Build a Tic Tac Toe Game";
const svgURL = "./images/svg/tic-tac-toe.svg";
const userStories = [
    "I can play a game of Tic Tac Toe with the computer.",
    "My game will reset as soon as it's over so I can play again.",
    "I can choose whether I want to play as X or O."
    ];
const liveDemo = 'http://codepen.io/MaxBoyko/full/qOPVjx/';
const repo = 'http://codepen.io/MaxBoyko/pen/qOPVjx/';
const caption = 'A JavaScript implementation of tic tac toe.';

export const tickTacToe = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);