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

/*
 * Import each full-stack item
 */
 import { maxPolls } from './portfolio-items/max-polls';
 import { stockSync } from './portfolio-items/stock-sync';
 
 /*
  * Import each microservice
  */
 import { imgSearch } from './portfolio-items/img-search';
 import { urlShortener } from './portfolio-items/url-shortener';
 import { fileMeta } from './portfolio-items/file-meta';
<<<<<<< HEAD
=======
 import { headParser } from './portfolio-items/head-parser';
 import { timestamp } from './portfolio-items/timestamp';
>>>>>>> refine-portfolio
 
let portfolioItems: PortfolioItem[] = [];

/*
 * Front-end projects
 */
portfolioItems.push(calculator);
portfolioItems.push(simon);
portfolioItems.push(wiki);
portfolioItems.push(tickTacToe);
portfolioItems.push(pomodoro);
portfolioItems.push(leaderboard);
portfolioItems.push(markdown);

/*
 * Full-stack projects
 */
portfolioItems.push(maxPolls);
portfolioItems.push(stockSync);

/*
 * Import each microservice
 */
portfolioItems.push(imgSearch);
portfolioItems.push(urlShortener);
portfolioItems.push(fileMeta);
<<<<<<< HEAD
=======
portfolioItems.push(headParser);
portfolioItems.push(timestamp);
>>>>>>> refine-portfolio
 
export { portfolioItems };