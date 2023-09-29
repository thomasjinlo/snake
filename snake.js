// snake obj. has props x, y, and dir
// snake.slither();
// snake.changeDir(dir);
// snake.eat();

class Node {
  constructor(x, y, next = null) {
    this.x = x;
    this.y = y;
    this.next = next;
  }
}

class Snake {
  constructor(x, y, dir = null) {
    this.head = new Node(x, y);
    this.tail = this.head;
    this.dir = dir;
  }
  get position() {
    return [this.head.x,this.head.y];
  }
}

function drawBoard() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 2; i < 22; i++) {
    for (let j = 2; j < 22; j++) {
      ctx.strokeRect(j * 25, i * 25, 25, 25);
    }
  }
}

function drawSnake(snake) {
  const ctx = document.getElementById("canvas").getContext("2d");
  node = snake.head;
  while (node) {
    ctx.fillRect(node.x * 25, node.y * 25, 25, 25);
    node = node.next;
  }
}

drawBoard();
const snake = new Snake(2, 2);
drawSnake(snake);
