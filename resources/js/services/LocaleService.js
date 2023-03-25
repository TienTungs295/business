import http from "../http-common";
import base from "../base";

const PREFIX_URL = "/rest/locale/"

class LocaleService {
    changeLocale(data, alert) {
        let url = PREFIX_URL + "changeLocale";
        return http.post(url, data, {alert: alert});
    };
    getLocale(alert) {
        let url = PREFIX_URL + "getLocale";
        return http.get(url, {alert: alert});
    };
}

export default new LocaleService();
