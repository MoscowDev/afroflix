let cill = document.getElementsByClassName("collapsable")

for(let i=0;i<cill.length; i++){
    cill[i].addEventListener("click", function(){
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if(content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    })
}

console.log('A')
setTimeout(()=>console.log('i am a king'), 20000)
console.log('B');