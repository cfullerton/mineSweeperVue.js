var MineField = function(width,length,mineQuantity){
  this.width = width;
  this.length = length;
  this.mineQuantity = mineQuantity;
  this.squares = [];
  this.initialize = function(x,y){
    var minesLeft = this.mineQuantity;
    for(var i = 0;i<this.length;i++){
      this.squares[i] = [];
      for (var j = 0;j<this.width;j++){
        this.squares[i][j] = {};
        if(minesLeft && i != x && j != y){
          if(Math.round(Math.random()));
          this.squares[i][j].hasMine = true;
          minesLeft--;
        }else{
          this.squares[i][j].hasMine = false;
        }
      }
    }
    for(var i = 0;i<this.squares.length;i++){
      for(var j = 0; j<this.squares[i].length;j++){
        if(!this.squares[i][j].hasMine){
          this.squares[i][j].touchCount = 0;
          if(this.squares[i-1] && this.squares[i-1][j-1] && this.squares[i-1][j-1].hasMine){
            this.squares[i][j].touchCount++;
          }
          if(this.squares[i-1] && this.squares[i-1][j] && this.squares[i-1][j].hasMine){
            this.squares[i][j].touchCount++;
          }
          if(this.squares[i-1] && this.squares[i-1][j+1] && this.squares[i-1][j+1].hasMine){
            this.squares[i][j].touchCount++;
          }

          if(this.squares[i][j-1] && this.squares[i][j-1].hasMine){
            this.squares[i][j].touchCount++;
          }
          if(this.squares[i][j+1] && this.squares[i][j+1] && this.squares[i][j+1].hasMine){
            this.squares[i][j].touchCount++;
          }

          if(this.squares[i+1] && this.squares[i+1][j-1] && this.squares[i+1][j-1].hasMine){
            this.squares[i][j].touchCount++;
          }
          if(this.squares[i+1] && this.squares[i+1][j] && this.squares[i+1][j].hasMine){
            this.squares[i][j].touchCount++;
          }
          if(this.squares[i+1] &&this.squares[i+1][j+1] && this.squares[i+1][j+1].hasMine){
            this.squares[i][j].touchCount++;
          }
        }
      }
    }
  }
}
var field = new MineField(9,10,10);
field.initialize(3,3);
console.log(JSON.stringify(field));
