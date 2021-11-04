import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/defect";

function defectUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getDefects() {
    return http.get(apiEndpoint);
}

export function getDefect(defectId) {
    return http.get(defectUrl(defectId));
}

export function addDefect(defect) {
    return http.post(apiEndpoint, defect);
}

export function updateDefect(defect) {
    return http.put(defectUrl(defect._id), defect);
}

export function deleteDefect(defectId) {
    return http.delete(defectUrl(defectId));
}
