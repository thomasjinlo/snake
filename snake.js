function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 2; i < 22; i++) {
    for (let j = 2; j < 22; j++) {
      ctx.strokeRect(j * 25, i * 25, 25, 25);
    }
  }
}

draw();
