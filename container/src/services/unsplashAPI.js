import axios from 'axios';
import { config } from '../config.js';

function getImages(callback, searchWord){
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=20&client_id=" + config.unsplashClientId + "&query=" + searchWord)
      .then(res => {
        callback(res.data.results.map(function(image) {
          return {thumb: image.urls.thumb, full: image.urls.full, width: image.width, height: image.height};
        })
        );
      });
}

export { getImages };