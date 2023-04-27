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

export { printError, printSuccess, printHelp };