class Maze {
  constructor(xdim, ydim, goodpath){
    if (typeof goodpath != "boolean" || typeof xdim != "number" || typeof ydim != "number") {
      console.log("You've attempted to create a Maze class with bad arguments.")
    }
    // The dimensions of the maze:
    this.xdim = xdim
    this.ydim = ydim
    // Whether or not this path will lead to the exit:
    this.goodpath = goodpath
  }
}