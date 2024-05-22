let team1=document.querySelectorAll(".team1");
let images=document.querySelectorAll(".picture");

for (let i=0; i<team1.length; i++){
  let playername=team1[i]
  let img=images[i]
  playername.addEventListener("click", function(e){
   e.stopPropagation()
   img.style.display="block"
  })
  document.addEventListener("click",function(e){
    if(!img.contains(e.target) && !playername.contains(e.target)){
    img.style.display="none"
    }
  })
}