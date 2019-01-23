
    


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
                bob.board[i]=document.getElementsByTagName("td")[i].innerHTML;
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
    Array.from(new Set([this.board[2], this.board[5], this.board[8]])).length==1 &&  Array.from(new Set([this.board[2], this.board[5], this.board[8]]))!=[" "]|| 
    Array.from(new Set([this.board[0], this.board[4], this.board[8]])).length==1 &&  Array.from(new Set([this.board[0], this.board[4], this.board[8]]))!=[" "]||
    Array.from(new Set([this.board[2], this.board[4], this.board[6]])).length==1 &&  Array.from(new Set([this.board[2], this.board[4], this.board[6]]))!=[" "]  


    }

   tie(){
     console.log(this.board.includes(""));
   }
}

class Player{
    constructor(value,name){
        this.value=value;// la valeur sera X ou O 
        this.name=name; // Nom du joueur
    }
}

class Game{
    constructor(){
            
            this.j1=new Player(valeurPseudo("camp1"),document.forms["joueur"].elements[0].value)
            this.j2=new Player(valeurPseudo("camp2"),document.forms["joueur"].elements[3].value)
            this.tab=new Board;
            this.symbole=true //true ==x et false==O
        
    }

    tour(){

        if(this.tab.board){

        }
    }

    coup(div){//saisie des coup
    
        if(div.innerHTML.length == 0){
            if(this.symbole == true){
                div.innerHTML="X";
            }else {
                div.innerHTML="O";
            }
        }
       this.symbole=!this.symbole;
    }

  


}

const bob = new Board;
bob.affichage();
const gam1=new Game;


document.getElementsByTagName("table")[0].style.display="none"


function valeurPseudo(clas_radio){// fonction qui donne le choix fais par l'utilisateur dans l'input radio
    var radios = document.getElementsByName(clas_radio);
    var valeur;
         for(var i = 0; i < radios.length; i++){
                if(radios[i].checked){
                   return valeur = radios[i].value;
                    }
        
            } 

            document.getElementsByTagName("table")[0].style.display=""
            document.getElementById("form-joueur").style.display="none"
}

