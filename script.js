let enots = [];

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function CheckEnot(n){
    console.log(enots);
}

for(let i=0; i<9; i++){
    enots.push(0);
}

enots[Math.round(Math.random() * 8)]=1;
let divs = document.querySelectorAll('.grid div');

for (let i=0, max=divs.length; i < max; i++) {
        divs[i].style.background = getRandomColor();
        divs[i].addEventListener("click",function CheckEnot(){
        if(enots[parseInt(divs[i].getAttribute('data-id'))]==0){
            divs[i].className='de';
            let dobr_enots = document.querySelectorAll('.de');
            if(dobr_enots.length == 8){
                showWinModal();
            }
        }else{
            divs[i].className='she';
            let dobr_enots = document.querySelectorAll('.de');
            for (let bz=0, max=dobr_enots.length; bz < max; bz++) {
                dobr_enots[bz].className='not_de';
            }
            showLoseModal();
          }
        });
}