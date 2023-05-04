import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'
import axios from 'axios';

function getIcon(icon) {
    switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
}

async function getWeather (city) {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('No value API, use command -t [API_KEY]');
    }
    const { data, } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'eng',
            units: 'metric'
        }
    });
    return data;
}

export { getWeather, getIcon };