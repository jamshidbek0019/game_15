let InA= document.getElementsByClassName("button1")

let b;

let a = new Array("",1,2,3, 4,5,6,7, 8,9,10,11, 12,13,14,15)

let timeinterval
let timeM = 0 
let timeReal=""

function Refresh(){
    a.sort(function () {
        return Math.random() - 0.5;})
        for(let i = 0; i < 16; i++){
            InA[i].value = a[i];
    }

    timeM = 0;
    document.getElementById("boshlash").value = "00:00:00"
    clearInterval(timeinterval)
    timeinterval = null; 

    }
function AddZeros(num){
    return String(num).padStart(2,'0')
}
function timeRecord() {
    if (timeinterval) {
        return
    }
    timeinterval = setInterval(function () {
        timeM++;
        let timeMs = AddZeros(timeM % 100);
        let timeSecond = AddZeros(parseInt(timeM / 100) % 60);
        let timeMinuts = AddZeros(parseInt(timeM / 6000));

    
    timeReal = timeMinuts+ ":"+timeSecond+":"+timeMs
    
    document.getElementById("boshlash").value = timeReal;
  }, 10);


  for(let i=0; i<16; i++){
    InA[i].addEventListener("click", function Changefunc(){ 
   if(i>0 )   {       
       if(InA[i-1].value == "" && i != 4  && i != 8  && i != 12){
          InA[i-1].value= InA[i].value;
          InA[i].value=""
          }} 
   if(i!=15)
       if(InA[i+1].value == "" && i!=3  && i != 7  && i != 11 ){
          InA[i+1].value= InA[i].value;
          InA[i].value=""
          } 
          if(i<12) 
   if(InA[i+4].value == ""){
          InA[i+4].value= InA[i].value;
          InA[i].value = ""
          }   
   if(i>3){   
       if(InA[i-4].value == ""  ){
          InA[i-4].value= InA[i].value;
          InA[i].value=""
          } }        
    }) 
   }
  }
function dateEnd(){
    let t=0;
    b = [1,2,3, 4,5,6,7, 8,9,10,11, 12,13,14,15,""]
    for (let i=0; i<16; i++){
        if( b[i] == InA[i].value) {
            t++;
        }}

    if(t==16){
        document.getElementById("TimeEnd").innerHTML =  "Time spent "+timeReal;
        timeM = 0;
        document.getElementById("boshlash").value =timeReal
        clearInterval(timeinterval)
        timeinterval = null; 
    }
    else         
    document.getElementById("TimeEnd").innerHTML = "Siz o'yinni tugatmadingiz"

        }
