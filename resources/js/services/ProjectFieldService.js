import http from "../http-common";

const PREFIX_URL = "/rest/project-field/"

class ProjectFieldService {
    findAll(alert) {
        let url = PREFIX_URL + "find-all";
        return http.get(url, {alert: alert,});
    }
}

export default new ProjectFieldService();
