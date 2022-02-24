// // document.body.style.backgroundColor='red'


// //  let check=document.querySelectorAll('.btn')[1]


// // function col(){
// //     document.body.style.backgroundColor='yellow'
// // }

// // check.addEventListener('click', col)



// let any=document.body.querySelector('.message')

// console.log(any.textContent='i changed it'); 


// let inp=document.querySelector('.guess')

// // del=inp.value=20

// // console.log(del);


// let btn=document.querySelector('.check')

// function che(){

//     if(inp.value==''){

//         any.textContent='Please enter a number'
//     }
//     else{
//         any.textContent='Correct score'
//     }
    
// }

// btn.addEventListener('click', che)

let numberGenerator=Math.ceil(Math.random()*20) 


console.log(numberGenerator);


let score=20
let highScore=0
let msg=document.querySelector('.message')
let num=document.querySelector('.number')
let btn=document.querySelector('.check')
let sscore=document.querySelector('.score')
let high=document.querySelector('.highscore')
let aga=document.querySelector('.again')
let data=Number(document.querySelector('.guess').value)

let body=document.body.style.backgroundColor

function chat(message){
    msg.textContent=message
}

function cheq(){
    data=Number(document.querySelector('.guess').value)

    if(!data){

        chat('Type a number')
        document.body.style.backgroundColor='black'
        num.textContent='?'
       
    }
    else if(data===numberGenerator){
        chat('correct')
        num.textContent=numberGenerator
        document.body.style.backgroundColor='green'
       
        sscore.textContent=score
        
        confirm()
        

    }else{
        chat('Try again')
        document.body.style.backgroundColor='red'
        num.textContent='?'

        score--

        sscore.textContent=score

        if(score<1){
            num.textContent='Game Over'
            sscore.textContent=0
            num.classList.add('numberover')
        }


    }

}

btn.addEventListener('click',cheq)

aga.addEventListener('click', function(){
    numberGenerator=Math.ceil(Math.random()*20) 
    console.log(numberGenerator);
    document.body.style.backgroundColor= '#222'
    score=20
    num.textContent='?'
    chat('Type a number')
    sscore.textContent=20
    num.classList.remove('numberover')
})


function confirm(){
    if(numberGenerator<high.textContent){  
        high.textContent=high.textContent    
    }
    else if(sscore.textContent>high.textContent){        
        high.textContent=numberGenerator
    }  
}