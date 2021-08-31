import axios from 'axios';
import {
   CONTENT_URL,
   DETAILS_CONTENT_URL,
   IMAGES_CONTENT_URL,
} from '../utils/config';

const ApiTv = {
   async fetchPopular() {
      const { data } = await axios.get(CONTENT_URL('tv', 'popular'));
      return data;
   },
   async fetchDetails(id) {
      const { data } = await axios.get(CONTENT_URL('tv', id));
      return data;
   },
   async fetchWithCategories(categories) {
      const { data } = await axios.get(CONTENT_URL('tv', categories));
      return data;
   },
   async fetchSimilar(id) {
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('tv', id, 'similar')
      );
      return data;
   },
   async fetchCaster(id) {
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('tv', id, 'credits')
      );
      return data;
   },
   async fetchExternalId(id) {
      const { data } = await axios.get(
         DETAILS_CONTENT_URL('tv', id, 'external_ids')
      );
      return data;
   },
   async fetchImages(id) {
      const { data } = await axios.get(IMAGES_CONTENT_URL('tv', id));
      return data;
   },
};

export default ApiTv;
