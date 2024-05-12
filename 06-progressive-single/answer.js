function solution(queries) {
  const container = [];
  const result = [];
  queries.map( item => {
      if (item[0] === "ADD") {
          container.push(item[1]);
          result.push("");
      } else {
          if (item[0] === "EXISTS") {
              container.includes(item[1]) ? result.push("true") : result.push("false");
          } else if (item[0] === "REMOVE"){
              container.includes(item[1]) ? result.push("true") : result.push("false");
              const indexOfElem = container.indexOf(item[1]);
              const isElemInContainer = indexOfElem >= 0;
              if (isElemInContainer) {
                  container.splice(indexOfElem, 1);
              }
          } else if (item[0] === "GET_NEXT") {
              const sortedArray = container.slice().map(item => parseInt(item)).sort((a,b) => a-b);
              const possibleIndex =  sortedArray.findIndex( sortedItem => sortedItem > parseInt(item[1]));
              possibleIndex > -1 ? result.push(""+sortedArray[possibleIndex]+"") : result.push("");
          }
      }
  });
  return result;
}
