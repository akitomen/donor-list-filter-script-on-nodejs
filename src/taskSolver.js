const fs = require("fs");
const donorService = require("../src/services/donorService");

class TaskSolver {
    constructor(config) {
        this.config = config;

        // parse donors data
        const donorsBuffer = fs.readFileSync(config.JSON_DATA_PATH);
        const donorsJson = donorsBuffer.toString();
        this.donors = JSON.parse(donorsJson);
    }

    #calculateTimeRate() {
        // time rate is a value which mean how many donations costs each second of a fixed amount of time
        this.donors = this.donors.map(donor => ({
            ...donor,
            timeRate: donor.value / this.config.CHANNELS_TIME_BUDGET[donor.channel]
        }));
    }

    #sortByTimeRate() {
        this.donors = this.donors.sort((d1, d2) => d2.timeRate - d1.timeRate);
    }

    #calculateOutput() {
        let engagementTime = this.config.ENGAGEMENT_TIME;
        this.output = [];

        for (const donor of this.donors) {
            const timeBudget = this.config.CHANNELS_TIME_BUDGET[donor.channel];

            if (engagementTime < Math.min(...Object.values(this.config.CHANNELS_TIME_BUDGET))) {
                return;
            }

            if (timeBudget > engagementTime) {
                continue;
            }

            engagementTime -= timeBudget;
            this.output.push(donor);
        }
    }

    #writeOutput() {
        const dataToWrite = this.output.map(donor => ({
            id: donor.id,
            channel: donor.channel,
            value: donor.value
        }));

        fs.writeFileSync("./ANS.json", JSON.stringify(dataToWrite));
    }

    async run() {
        await donorService.deleteAllDonors();
        await donorService.saveManyDonors(this.donors);

        this.#calculateTimeRate();
        this.#sortByTimeRate();
        this.#calculateOutput();
        this.#writeOutput();
    }
}

module.exports = TaskSolver;