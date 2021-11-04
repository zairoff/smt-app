import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/pcbposition";

function positionUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getPositions() {
    return http.get(apiEndpoint);
}

export function getPosition(positionId) {
    return http.get(positionUrl(positionId));
}

export function addPosition(position) {
    return http.post(apiEndpoint, position);
}

export function updatePosition(position) {
    return http.put(positionUrl(position._id), position);
}

export function deletePosition(positionId) {
    return http.delete(positionUrl(positionId));
}
