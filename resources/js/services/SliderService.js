import http from "../http-common";

const PREFIX_URL = "/rest/slider/"

class SliderService {
    findAll(alert) {
        let url = PREFIX_URL + "find-all";
        return http.get(url, {alert: alert,});
    }
}

export default new SliderService();
