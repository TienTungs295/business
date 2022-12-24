import http from "../http-common";
import base from "../base";

const PREFIX_URL = "/rest/comment/"

class CommentService {
    findByPost(param, alert) {
        let url = PREFIX_URL + "find-by-post";
        if (param != undefined) url = base.object2Param(url, param);
        return http.get(url, {alert: alert});
    };

    save(data, alert) {
        let url = PREFIX_URL + "save";
        return http.post(url, data, {alert: alert});
    };
}

export default new CommentService();
