import axios from '../../../../axios';

export default {
  checkPostalCode(data) {
    return axios.post('/postcode/validate', data);
  },
  validate(data) {
    return axios.post('/validate', data);
  },
};
