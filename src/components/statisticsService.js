// src/services/statisticsService.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/stat/';

export const fetchStatistics = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching statistics", error);
        throw error;
    }
};
