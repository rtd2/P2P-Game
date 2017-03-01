export default function maneuver(instruct, state) {

  function getInstruction(instruct) { //forward-2
    var length = instruct.length - 2;
    var instruction = instruct.substring(0, length);
    return instruction;
  }
  function getDistance(instruct) {
    var length = instruct.length;
    var distance = instruct.substring(length, length-1);
    return parseInt(distance);
  }

  var instruction = getInstruction(instruct);
  var distance = getDistance(instruct);

  if(instruction === "forward") {
    switch(state.facing) {
      case "up":
        return {"x": state.x, "y": state.y + distance, "facing": state.facing}
      case "down":
        return {"x": state.x, "y": state.y - distance, "facing": state.facing}
      case "left":
        return {"x": state.x - distance, "y": state.y, "facing": state.facing}
      case "right":
        return {"x": state.x + distance, "y": state.y, "facing": state.facing}
    }
  }
  if(instruction === "reverse") {
    switch(state.facing) {
      case "up":
        return {"x": state.x, "y": state.y + distance, "facing": "down"}
      case "down":
        return {"x": state.x, "y": state.y - distance, "facing": "up"}
      case "left":
        return {"x": state.x - distance, "y": state.y, "facing": "right"}
      case "right":
        return {"x": state.x + distance, "y": state.y, "facing": "left"}
    }
  }
  if(instruction === "left") {
    switch(state.facing) {
      case "up":
        return {"x": state.x - distance, "y": state.y + distance, "facing": "left"}
      case "down":
        return {"x": state.x + distance, "y": state.y - distance, "facing": "right"}
      case "left":
        return {"x": state.x - distance, "y": state.y - distance, "facing": "down"}
      case "right":
        return {"x": state.x + distance, "y": state.y + distance, "facing": "up"}
    }
  }
  if(instruction === "right") {
    switch(state.facing) {
      case "up":
        return {"x": state.x + distance, "y": state.y + distance, "facing": "right"}
      case "down":
        return {"x": state.x - distance, "y": state.y - distance, "facing": "left"}
      case "left":
        return {"x": state.x - distance, "y": state.y + distance, "facing": "up"}
      case "right":
        return {"x": state.x + distance, "y": state.y - distance, "facing": "down"}
    }
  }
}
