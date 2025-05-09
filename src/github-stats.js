import * as dotenv from 'dotenv';
import { prepareStats } from './prepare-stats';
import { printStats } from './print-stats/print-stats';

dotenv.config();

const {
    COLLECTION_PATH,
    REPO,
    SINCE,
    UNTIL,
} = process.env;

const commonRequestData = {
    owner: REPO.split('/')[0],
    repo: REPO.split('/')[1],
};

const timePeriod = {
    until: UNTIL || new Date().toISOString(),
    since: SINCE,
};

(async () => {
    const statistics = await prepareStats(COLLECTION_PATH, commonRequestData, timePeriod);

    printStats(statistics);
})();
