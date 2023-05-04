import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js';
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

async function saveToken (token) {
    if (!token.length) {
        printError('No token value');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess ('Token have been saved')
    } catch (e) {
        printError(e.message)
    }
    
}

async function saveCity (city) {
    if (!city.length) {
        printError('No city name');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);
        printSuccess ('City have been saved')
    } catch (e) {
        printError(e.message)
    }
    
}

async function getForcast() {
    try {
        const city = await getKeyValue(TOKEN_DICTIONARY.city)
        const weather = await getWeather(city);
        printWeather(weather, getIcon(weather.weather[0].icon));
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('The city is not specified correctly');
        } else if (e?.response?.status == 401) {
            printError('Incorrect token');
        } else {
            printError(e.massege);
        }
    }

}

function initCLI () {
    const args = getArgs (process.argv);
    if (args.h) {
        return printHelp();
    }    

    if (args.s) {
        return saveCity(args.s)
    }

    if (args.t) {
        return saveToken(args.t);
    }   
    return getForcast();
}

initCLI(); 