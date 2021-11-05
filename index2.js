const { fetchMyIP } = require("./iss_promised");
const { fetchCoordsByIP } = require("./iss_promised");
const { fetchISSFlyOverTimes } = require("./iss_promised");
const { nextISSTimesForMyLocation } = require("./iss_promised");
nextISSTimesForMyLocation().then((passTimes) => {
  printPassTimes(passTimes);
});
