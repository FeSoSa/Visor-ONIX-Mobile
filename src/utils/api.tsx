import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const loadBaseURL = async () => {
    const savedUrl = await AsyncStorage.getItem("API_URL");
    return savedUrl || "http://192.168.18.216:8080"; // Usa o salvo ou o padrão
};

const api = axios.create();

loadBaseURL().then((baseURL) => {
    api.defaults.baseURL = baseURL;
});

export default api;
