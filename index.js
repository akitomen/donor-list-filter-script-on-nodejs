const config = require("./config");
const TaskSolver = require("./src/taskSolver");

(async function main() {
    const solver = new TaskSolver(config);
    await solver.run();
})();