import { PortfolioItem } from '../classes/portfolio-item';

const title = "File Metadata Microservice";
const svgURL = "./images/svg/file-meta.svg";
const userStories = [
    'I can submit a FormData object that includes a file upload.',
    'When I submit something, I will receive the file size in bytes within the response.'
];
const liveDemo = "https://file-size.herokuapp.com/";
const repo = "https://github.com/MaxBoykoII/file-metadata-microservice";
const caption = "A node app that displays the size of an uploaded file.";

export const fileMeta = new PortfolioItem(title, svgURL, userStories, liveDemo, repo, caption);