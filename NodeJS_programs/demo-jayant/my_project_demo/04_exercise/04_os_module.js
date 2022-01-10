import os from "os";
const bytesToSize = (bytes) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};
console.log("Details of the CPU below : ");
console.log(os.cpus());
console.log("total memory : ", bytesToSize(os.totalmem()));
console.log("free memory : ", bytesToSize(os.freemem()));
console.log("Free memory : " + os.freemem());
console.log("Total memory : " + os.totalmem());
console.log("Home directory and username : " + os.homedir());
