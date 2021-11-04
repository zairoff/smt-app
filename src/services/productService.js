import http from "../services/httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/product";

function productUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getProducts() {
    return http.get(apiEndpoint);
}

export function getProduct(productId) {
    return http.get(productUrl(productId));
}

export function addProduct(product) {
    return http.post(apiEndpoint, product);
}

export function updateProduct(product) {
    return http.put(productUrl(product._id), product);
}

export function deleteProduct(productId) {
    return http.delete(productUrl(productId));
}
