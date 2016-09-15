import { PortfolioItem } from './classes/portfolio-item';

/*
 * Import each front-end portfolio item
 */
import { calculator } from './portfolio-items/calculator';
import { simon } from './portfolio-items/simon';
import { wiki } from './portfolio-items/wiki';
import { tickTacToe } from './portfolio-items/tic-tac-toe';
import { pomodoro } from './portfolio-items/pomodoro';
import { leaderboard } from './portfolio-items/leaderboard';
import { markdown } from './portfolio-items/markdown';

let portfolioItems: PortfolioItem[] = [];

portfolioItems.push(calculator);
portfolioItems.push(simon);
portfolioItems.push(wiki);
portfolioItems.push(tickTacToe);
portfolioItems.push(pomodoro);
portfolioItems.push(leaderboard);
portfolioItems.push(markdown);

export { portfolioItems };