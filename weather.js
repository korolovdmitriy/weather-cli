#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

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

function initCLI () {
    const args = getArgs (process.argv);
    if (args.h) {
        printHelp();
    }    

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t);
    }
    getWeather('Kiev')
}

initCLI(); 