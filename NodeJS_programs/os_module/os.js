const os = require('os');
console.log(os.cpus());
console.log("Free memory : " + os.freemem());
console.log("Total memory : " + os.totalmem());