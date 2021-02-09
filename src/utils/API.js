import axios from "axios";

// eslint-disable-next-line
export default {
    getEmployeeList: function() {
      return axios.get("https://randomuser.me/api/?results=10&nat=us");;
  },
};