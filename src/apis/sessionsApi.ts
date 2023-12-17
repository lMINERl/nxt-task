import axios from "../config/axios";
const sessionsApi = function (authorization: string) {
  return {
    getAll: function () {
      return axios.get("get-sessions", {
        params: { event_id: 19 },
        headers: { Authorization: authorization },
      });
    },
  };
};

export default sessionsApi;
