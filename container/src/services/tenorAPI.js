import axios from 'axios';
import { config } from '../config.js';

function getGifs(callback, searchWord){
    axios.get("https://api.tenor.com/v1/search?limit=20&q=" + searchWord + "&key=" + config.tenorKey)
      .then(res => {

        callback(res.data.results.map(function(gif) {
          return {thumb: gif.media[0].nanogif.url, thumbPreview: gif.media[0].nanogif.preview, full: gif.media[0].gif.url, width: gif.media[0].nanogif.dims[0], height: gif.media[0].nanogif.dims[1]};
        })
        );
      });
}

export { getGifs };