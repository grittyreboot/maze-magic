class MainPath {
  constructor(xdim, ydim, number_of_turns){
    if (typeof xdim != "number" || typeof ydim != "number" || typeof turns != "number") {
      console.log("You've attempted to create a MainPath class with bad arguments.")
    }
    // The dimensions of the maze:
    this.xdim = xdim;
    this.ydim = ydim;
    // How many turns will there be in the path?
    this.number_of_turns = number_of_turns;
    // Where will the turns be?
    this.turns = [];
  }
  add_turn(turn){
    self.turns.push(turn);
  }
  create_turns(){
    for (i=0;i<=turns;i++){
      x = Math.floor(Math.random/(this.xdim + 1));
      y = Math.floor(Math.random/(this.ydim + 1));
      self.add_turn([x,y])
    }
  }
}