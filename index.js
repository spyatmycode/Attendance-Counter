let count = document.getElementById('count');
 let peopleCount = 0;
 let btns = document.querySelectorAll('.btn')

function increment(){

   
   
    peopleCount +=1;

   count.innerText = peopleCount;





}

function decrement(){

    peopleCount -= 1

    count.innerText = peopleCount
}


let saved = document.getElementById("saved");

function save(){

    saved.textContent += (count.innerText + " - ")

    peopleCount = 0;

    count.innerText = peopleCount;

    
    
}

btns.forEach((btn)=>{

    btn.addEventListener("dblclick", ()=>{
        alert('You Double Clicked')
        decrement()
    })
    
})

 