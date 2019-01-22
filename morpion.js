
    


 class Boardcase {
    constructor(){
        this.boardcase="X";
    }
}



class Board{
    constructor(){
       this.board=[]
        for( var i=0 ;i<9; i++){
            const casier= new Boardcase
            this.board[i]=casier.boardcase;
        }

    }


   aff(){
       console.log(this.board[0]+" | "+this.board[1]+" | "+this.board[2]);
       console.log("----------");
       console.log(this.board[3]+" | "+this.board[4]+" | "+this.board[5]);
       console.log("----------");
       console.log(this.board[6]+" | "+this.board[7]+" | "+this.board[8]);
   }

   affichage(){// affichage desvaleur de board dans le table html

        document.getElementById("but").onclick = function afficher()
        {
            for( var i=0 ;i<9; i++){
            document.getElementsByTagName("td")[i].innerHTML=bob.board[i];
            }
        }
     
   }

   coup(){
   }


   game_over(){
   return Array.from(new Set([this.board[0], this.board[1], this.board[2]])).length==1 &&  Array.from(new Set([this.board[0], this.board[1], this.board[2]]))!=[" "]||
    Array.from(new Set([this.board[3], this.board[4], this.board[5]])).length==1 &&  Array.from(new Set([this.board[3], this.board[4], this.board[5]]))!=[" "]||
    Array.from(new Set([this.board[6], this.board[7], this.board[8]])).length==1 &&  Array.from(new Set([this.board[6], this.board[7], this.board[8]]))!=[" "]||
    Array.from(new Set([this.board[0], this.board[3], this.board[6]])).length==1 &&  Array.from(new Set([this.board[0], this.board[3], this.board[6]]))!=[" "]||
    Array.from(new Set([this.board[1], this.board[4], this.board[7]])).length==1 &&  Array.from(new Set([this.board[1], this.board[4], this.board[7]]))!=[" "]||
    Array.from(new Set([this.board[2], this.board[5], this.board[8]])).length==1 &&  Array.from(new Set([this.board[2], this.board[5], this.board[8]]))!=[" "]
   }

   tie(){
     return this.board.includes("")
   }
}

class Player{
    constructor(value,name){
        this.value=value;// la valeur sera X ou O 
        this.name=name; // Nom du joueur
    }
}



let bob = new Board;
bob.affichage();






 