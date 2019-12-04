function createMap(columnCount, rowCount) {
    const map = [];
    for (let x = 0; x < columnCount; x++) {
      map[x] = []; // set up inner array
      for (let y = 0; y < rowCount; y++) {
         addCell(map, x, y);
      }
    }
    return map;
  }
 
  function addCell(map, x, y) {
     map[x][y] = cell(); // create a new object on x and y
  }
 
  const map = createMap(10, 10);