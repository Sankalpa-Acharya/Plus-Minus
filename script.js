console.log("My name is sankalpa acharya")
let hop=document.getElementsByClassName("hop")
let Check=true;
let array={}
let winner=""
let num=0

function Who_is_winner(){
    if(array[1]!=undefined && array[1]==array[2] && array[2]==array[3]){
        winner=array[1]
    }
    else if(array[4]!=undefined && array[4]==array[5] && array[5]==array[6]){
        winner=array[4]
    }

    
    else if(array[7]!=undefined && array[7]==array[8] && array[8]==array[9]){
        winner=array[7]
    }

    else if(array[1]!=undefined && array[1]==array[4] && array[4]==array[7]){
        winner=array[1]
    }

    else if(array[2]!=undefined && array[2]==array[5] && array[5]==array[8]){
        winner=array[2]
    }

    else if(array[3]!=undefined && array[3]==array[6] && array[6]==array[9]){
        winner=array[3]
    }

    else if(array[1]!=undefined && array[1]==array[5] && array[5]==array[9]){
        winner=array[1]
    }

    else if(array[3]!=undefined && array[3]==array[5] && array[5]==array[7]){
        winner=array[3]
    }
    else{
        for(pop in array){
            num++
        }
        if (num==45){
            winner="Draw"
        }
    }

  

}

function Who_woned(){
     if(winner=="Draw"){
        let half=document.getElementById("Title")
        half.textContent=`Oops ${winner} :(`
    }

     else if(winner!=""){
        let half=document.getElementById("Title")
        half.textContent=`Congratulation ${winner} won the game`
        confetti.start()
        setTimeout(() => {
            confetti.stop()
        }, 6000);
    }
   
}

for(let i=0; i<hop.length;i++){
   hop[i].addEventListener("click",function(){
      if(Check==true){
          let element=document.getElementsByClassName(this.className)[0];
          const value=this.id
          if (element.getElementsByTagName("p")[0]==undefined){
            element.innerHTML="<p>+</p>"
            array[value]="+"
             Check=false
             Who_is_winner()
             Who_woned()
             console.log(array)
             
             
            }
         
          
        }
        else{
            let element=document.getElementsByClassName(this.className)[0];
            if (element.getElementsByTagName("p")[0]==undefined){
                let namer=this.id
                element.innerHTML="<p>-</p>"
                 Check=true
                 array[namer]="-"
                 Who_is_winner()
                 Who_woned()
                 console.log(array)

               }
               

          
      }
   })
}

function Clicked(){
    for(let i=1; i<=9; i++){
        let ids=document.getElementById(i).getElementsByTagName("p")[0]
        if (ids!=undefined){
            ids.remove()
            confetti.stop()
            let half=document.getElementById("Title")
            half.textContent=`Plus-Minus`
            
        }

    }
    for(let i=1;i<=9;i++){
        array[i]=""
    }
   
      
}


let btn=document.getElementById("btn");
btn.addEventListener("click",Clicked)