
    

 class Boardcase {// classe d'une case
    constructor(){
        this.boardcase="";// initialise toute les case avec la valeur vide
    }
}



class Board{
    constructor(){//classe du tablezau du morpion
       this.board=[]
        for( var i=0 ;i<9; i++){//creation des 9 case du tableau 
            const casier= new Boardcase
            this.board[i]=casier.boardcase;
        }

    }


   aff(){// fonction test pour voir l'affichage console
       console.log(this.board[0]+" | "+this.board[1]+" | "+this.board[2]);
       console.log("----------");
       console.log(this.board[3]+" | "+this.board[4]+" | "+this.board[5]);
       console.log("----------");
       console.log(this.board[6]+" | "+this.board[7]+" | "+this.board[8]);
   }

   affichage(){// affichage desvaleur de board dans le table html

       
        
            for( var i=0 ;i<9; i++){
                this.board[i]=document.getElementsByTagName("td")[i].innerHTML;
            }
    
     
   }

   coup(){
   }


   game_over(){// function censer renvoyer un bouléen si qq gagne la partie
   return new Set([this.board[0], this.board[1], this.board[2]])).length==1 &&  new Set([this.board[0], this.board[1], this.board[2]]))!=[" "]||
    new Set([this.board[3], this.board[4], this.board[5]])).length==1 &&  new Set([this.board[3], this.board[4], this.board[5]]))!=[" "]||
    new Set([this.board[6], this.board[7], this.board[8]])).length==1 &&  new Set([this.board[6], this.board[7], this.board[8]]))!=[" "]||
    new Set([this.board[0], this.board[3], this.board[6]])).length==1 &&  new Set([this.board[0], this.board[3], this.board[6]]))!=[" "]||
    new Set([this.board[1], this.board[4], this.board[7]])).length==1 &&  new Set([this.board[1], this.board[4], this.board[7]]))!=[" "]||
    new Set([this.board[2], this.board[5], this.board[8]])).length==1 &&  new Set([this.board[2], this.board[5], this.board[8]]))!=[" "]|| 
    new Set([this.board[0], this.board[4], this.board[8]])).length==1 &&  new Set([this.board[0], this.board[4], this.board[8]]))!=[" "]||
    new Set([this.board[2], this.board[4], this.board[6]])).length==1 &&  new Set([this.board[2], this.board[4], this.board[6]]))!=[" "]  
//la fonction verifie toutes les lignes  et regarde si les

    }

   tie(){
     this.board.includes("");
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
       this.tab.affichage();
    }

    start(){
     /*    while(this.tab.game_over()==true || this.tab.tie()==true){
            this.tab.affichage();
        } */
       
        if(this.tab.game_over()==true && this.symbole==true){ //si la methode game over retourne  true et symbole est true aussi ('X') 
           document.getElementById("winner").style.display="";// on affiche la div d'id winner 
           if(valeurPseudo("camp1") == X){// si la valeur du J1 est X alors il a gagné
            document.getElementById("winner").innerHTML="Le gagnant est  "+this.j1.name
           }else {
            document.getElementById("winner").innerHTML="Le gagnant est  "+this.j2.name

           }
           
        }else if (this.tab.game_over()==true && this.symbole==false) {
            document.getElementById("winner").style.display="";
            if(valeurPseudo("camp1") == O){
                document.getElementById("winner").innerHTML="Le gagnant est "+this.j1.name
               }else {
                document.getElementById("winner").innerHTML="Le gagnant est  "+this.j2.name
    
               }
               
        } else if(this.tab.board.tie() == false){
            document.getElementById("winner").style.display="";
            document.getElementById("winner").innerHTML="Ils n'y a pas de de gagnant";
            
        }

    }
  


}

function submitPseudo(){
    document.getElementsByTagName("table")[0].style.display=""
    document.getElementById("form-joueur").style.display="none"
}

function valeurPseudo(clas_radio){// fonction qui donne le choix fais par l'utilisateur dans l'input radio
var radios = document.getElementsByName(clas_radio);
var valeur;
 for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
           return valeur = radios[i].value;
            }

    } 

    
}


const gam1=new Game;
gam1.start();
document.getElementsByTagName("table")[0].style.display="none";
    document.getElementById("winner").style.display="none";






        