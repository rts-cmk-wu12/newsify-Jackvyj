import { fetchMostPopularByViews } from './nyt.js';
// import { fetchMostPopularByViews } = require('./nyt.js');

const popularNews = await fetchMostPopularByViews();


console.log(popularNews);
