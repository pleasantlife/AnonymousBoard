import CryptoJS from 'crypto-js';
import 'dotenv/config';

export default {
  encodingSHA256(data) {
    return CryptoJS.SHA256(data, process.env.SECRET_KEY).toString();
  },
};
