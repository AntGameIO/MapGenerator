const { generateMap } = require("./MapGenerator");
const fs = require("fs");
const { error } = require("console");

// Current map dimensions
const width = 200;
const height = 112;

const mapData = generateMap(width, height);
let mapNum = parseInt(Math.random() * 10000).toString();
while (mapNum.length < 4) {
  mapNum = "0" + mapNum;
}
const mapName = `GeneratedMap_${mapNum}`;
const mapObject = {
  MapVersion: 1,
  MapName: mapName,
  Map: mapData,
};

fs.writeFile(`${mapName}.json`, JSON.stringify(mapObject), err => {
  if (err) {
    console.error(err);
    return;
  }
});
