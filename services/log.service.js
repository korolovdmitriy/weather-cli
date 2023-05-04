import chalk from 'chalk';
import dedent from 'dedent-js';

function printError (error) {
    console.log(chalk.bgRed (' ERROR ') + ' ' + error);
}

function printSuccess (msg) {
    console.log(chalk.bgGreen (' SUCCESS ') + ' ' + msg);
}

function printHelp () {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without parameters - weather
        -s [CITY] city
        -h help
        -t [API KEY] token
        `
    );
}

function printWeather (res, icon) {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} in ${res.name}
        ${icon}   ${res.weather[0].description}
        Temperature: ${res.main.temp} (fells like ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather };