import './app.scss';
import "@babel/polyfill";
import forceCluster from './js/forceCluster';

document.addEventListener("DOMContentLoaded", () => {
  forceCluster()
});