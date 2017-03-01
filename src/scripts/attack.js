export default function attack(translated) {
  var arc = [];
  switch(translated.facing) {
    case "up":
      arc.push({ "x": translated.x, "y": translated.y + 1 });
      arc.push({ "x": translated.x, "y": translated.y + 2 });
      arc.push({ "x": translated.x, "y": translated.y + 3 });
      arc.push({ "x": translated.x, "y": translated.y + 4 });
      arc.push({ "x": translated.x, "y": translated.y + 5 });
      arc.push({ "x": translated.x, "y": translated.y + 6 });
      arc.push({ "x": translated.x + 1, "y": translated.y + 1 });
      arc.push({ "x": translated.x + 2, "y": translated.y + 2 });
      arc.push({ "x": translated.x + 3, "y": translated.y + 3 });
      arc.push({ "x": translated.x + 4, "y": translated.y + 4 });
      arc.push({ "x": translated.x + 5, "y": translated.y + 5 });
      arc.push({ "x": translated.x + 6, "y": translated.y + 6 });
      arc.push({ "x": translated.x - 1, "y": translated.y + 1 });
      arc.push({ "x": translated.x - 2, "y": translated.y + 2 });
      arc.push({ "x": translated.x - 3, "y": translated.y + 3 });
      arc.push({ "x": translated.x - 4, "y": translated.y + 4 });
      arc.push({ "x": translated.x - 5, "y": translated.y + 5 });
      arc.push({ "x": translated.x - 6, "y": translated.y + 6 });
      break;
    case "down":
      arc.push({ "x": translated.x, "y": translated.y - 1 });
      arc.push({ "x": translated.x, "y": translated.y - 2 });
      arc.push({ "x": translated.x, "y": translated.y - 3 });
      arc.push({ "x": translated.x, "y": translated.y - 4 });
      arc.push({ "x": translated.x, "y": translated.y - 5 });
      arc.push({ "x": translated.x, "y": translated.y - 6 });
      arc.push({ "x": translated.x - 1, "y": translated.y - 1 });
      arc.push({ "x": translated.x - 2, "y": translated.y - 2 });
      arc.push({ "x": translated.x - 3, "y": translated.y - 3 });
      arc.push({ "x": translated.x - 4, "y": translated.y - 4 });
      arc.push({ "x": translated.x - 5, "y": translated.y - 5 });
      arc.push({ "x": translated.x - 6, "y": translated.y - 6 });
      arc.push({ "x": translated.x + 1, "y": translated.y - 1 });
      arc.push({ "x": translated.x + 2, "y": translated.y - 2 });
      arc.push({ "x": translated.x + 3, "y": translated.y - 3 });
      arc.push({ "x": translated.x + 4, "y": translated.y - 4 });
      arc.push({ "x": translated.x + 5, "y": translated.y - 5 });
      arc.push({ "x": translated.x + 6, "y": translated.y - 6 });
      break;
    case "left":
      arc.push({ "x": translated.x - 1, "y": translated.y });
      arc.push({ "x": translated.x - 2, "y": translated.y });
      arc.push({ "x": translated.x - 3, "y": translated.y });
      arc.push({ "x": translated.x - 4, "y": translated.y });
      arc.push({ "x": translated.x - 5, "y": translated.y });
      arc.push({ "x": translated.x - 6, "y": translated.y });
      arc.push({ "x": translated.x - 1, "y": translated.y - 1 });
      arc.push({ "x": translated.x - 2, "y": translated.y - 2 });
      arc.push({ "x": translated.x - 3, "y": translated.y - 3 });
      arc.push({ "x": translated.x - 4, "y": translated.y - 4 });
      arc.push({ "x": translated.x - 5, "y": translated.y - 5 });
      arc.push({ "x": translated.x - 6, "y": translated.y - 6 });
      arc.push({ "x": translated.x - 1, "y": translated.y + 1 });
      arc.push({ "x": translated.x - 2, "y": translated.y + 2 });
      arc.push({ "x": translated.x - 3, "y": translated.y + 3 });
      arc.push({ "x": translated.x - 4, "y": translated.y + 4 });
      arc.push({ "x": translated.x - 5, "y": translated.y + 5 });
      arc.push({ "x": translated.x - 6, "y": translated.y + 6 });
      break;
    case "right":
      arc.push({ "x": translated.x + 1, "y": translated.y });
      arc.push({ "x": translated.x + 2, "y": translated.y });
      arc.push({ "x": translated.x + 3, "y": translated.y });
      arc.push({ "x": translated.x + 4, "y": translated.y });
      arc.push({ "x": translated.x + 5, "y": translated.y });
      arc.push({ "x": translated.x + 6, "y": translated.y });
      arc.push({ "x": translated.x + 1, "y": translated.y + 1 });
      arc.push({ "x": translated.x + 2, "y": translated.y + 2 });
      arc.push({ "x": translated.x + 3, "y": translated.y + 3 });
      arc.push({ "x": translated.x + 4, "y": translated.y + 4 });
      arc.push({ "x": translated.x + 5, "y": translated.y + 5 });
      arc.push({ "x": translated.x + 6, "y": translated.y + 6 });
      arc.push({ "x": translated.x + 1, "y": translated.y - 1 });
      arc.push({ "x": translated.x + 2, "y": translated.y - 2 });
      arc.push({ "x": translated.x + 3, "y": translated.y - 3 });
      arc.push({ "x": translated.x + 4, "y": translated.y - 4 });
      arc.push({ "x": translated.x + 5, "y": translated.y - 5 });
      arc.push({ "x": translated.x + 6, "y": translated.y - 6 });
      break;
  }
  return arc;
}


//.......
//......
//.....
//....
//..|
//
//
