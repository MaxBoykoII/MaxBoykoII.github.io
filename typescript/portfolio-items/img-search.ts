import { PortfolioItem } from '../classes/portfolio-item';

const title = "Image Search Abstraction Layer";
const svgURL = "./images/svg/img-search.svg";
const userStories = [
   'I can get the image URLs, alt text and page urls for a set of images relating to a given search string.',
   'I can paginate through the responses by adding a ?offset=2 parameter to the URL.',
   'I can get a list of the most recently submitted search strings.'
];
const liveDemo = "https://img-search-abstraction-layer.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/image-search-abstraction-layer";
const caption = "A node app for searching images.";

export const imgSearch = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);