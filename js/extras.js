const container = document.querySelector('.container');
const btn = document.querySelector('.sub');
const sec = document.querySelector('section');
let faces;
let dices;
let players;
function generator(){
    players = document.getElementById('players').value;
    faces = document.getElementById('faces').value;
    dices = document.getElementById('dices').value;
    for(let i=1;i<=dices;i++){
        var element = document.createElement("div");
                element.classList.add("dice");
                container.appendChild(element);
        switch(faces){
            case '4':
                element.innerHTML = '4';
                break;
            case '5':
                element.innerHTML = '5';
                break;
            case '6':
                element.innerHTML = '6';
                break;
            case '7':
                element.innerHTML = '7';
                break;
            case '8':
                element.innerHTML = '8';
                break;
            case '9':
                element.innerHTML = '9';
                break;
            case '10':
                element.innerHTML = '10';
                break;
            case '11':
                element.innerHTML = '11';
                break;
            case '12':
                element.innerHTML = '12';
                break;
            case '13':
                element.innerHTML = '13';
                break;
            case '14':
                element.innerHTML = '14';
                break;
            case '15':
                element.innerHTML = '15';
                break;
            case '16':
                element.innerHTML = '16';
                break;
            case '17':
                element.innerHTML = '17';
                break;
            case '18':
                element.innerHTML = '18';
                break;
            case '19':
                element.innerHTML = '19';
                break;
            case '20':
                element.innerHTML = '20';
                break;
            case '21':
                element.innerHTML = '21';
                break;
            case '22':
                element.innerHTML = '22';
                break;
            case '23':
                element.innerHTML = '23';
                break;
            case '24':
                element.innerHTML = '24';
                break;
            case '25':
                element.innerHTML = '25';
                break;
        }
    }
}

btn.addEventListener('click', () => {
    let players = document.getElementById('players').value;
    let faces = document.getElementById('faces').value;
    let dices = document.getElementById('dices').value;
    if((players==""||faces==""||dices=="")||(players<=0 || players >= 7)||(dices<=0||dices>=21)||(faces<=3||faces>=26)){
        alert("Datos ingresados invalidos, por favor lee las reglas del juego.");
        location.reload();
    }else{
        sec.style.display = 'none';
        container.style.display = 'flex'; 
        generator();
        pP = new Array(players);
        for(j=0;j<players;j++){
        pP[j]=0;
    }
    }
});

const b = document.querySelector('.turn');
let number = 0;
const time = 2;
let puntaje = 0;
let tot=0;
let p = 1;
let cont = 0;
let pP;
const play = document.querySelector('.player');
const dice = document.getElementsByClassName('dice');
const total = document.querySelector('.puntTotal');
let randomValue;
play.innerHTML = 'Jugador: ' + p;

b.addEventListener('click', () => {
    puntaje=0;
    play.innerHTML = 'Jugador: ' + p;
    if(players>1){
        alert(`Ronda ${(cont+1)} del jugador ${p}`);  
        for(let i=0;i<dices;i++){
            switch(faces){
                case'4':
                    randomValue = Math.floor((Math.random()*4)+1);
                    puntaje = puntaje+randomValue;
                    dice[i].innerHTML = randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'5':
                    randomValue = Math.floor((Math.random()*5)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'6':
                    randomValue = Math.floor((Math.random()*6)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'7':
                    randomValue = Math.floor((Math.random()*7)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'8':
                    randomValue = Math.floor((Math.random()*8)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'9':
                    randomValue = Math.floor((Math.random()*9)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'10':
                    randomValue = Math.floor((Math.random()*10)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'11':
                    randomValue = Math.floor((Math.random()*11)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'12':
                    randomValue = Math.floor((Math.random()*12)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'13':
                    randomValue = Math.floor((Math.random()*13)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'14':
                    randomValue = Math.floor((Math.random()*14)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'15':
                    randomValue = Math.floor((Math.random()*15)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'16':
                    randomValue = Math.floor((Math.random()*16)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'17':
                    randomValue = Math.floor((Math.random()*17)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'18':
                    randomValue = Math.floor((Math.random()*18)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'19':
                    randomValue = Math.floor((Math.random()*19)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'20':
                    randomValue = Math.floor((Math.random()*20)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'21':
                    randomValue = Math.floor((Math.random()*21)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'22':
                    randomValue = Math.floor((Math.random()*22)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'23':
                    randomValue = Math.floor((Math.random()*23)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'24':
                    randomValue = Math.floor((Math.random()*24)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValueValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
                case'25':
                    randomValue = Math.floor((Math.random()*25)+1);
                    dice[i].innerHTML = randomValue;
                    puntaje=puntaje+randomValue;
                    pP[p-1] = pP[p-1] + randomValue;
                    break;
            }
        }
        const points = document.querySelector('.punt');
        points.innerHTML = 'Puntaje: ' + puntaje;
        total.innerHTML = 'Puntaje Total: ' + pP[p-1];
        if(p<players){
            p++;
        }else{
            p=1;
            cont++;
        }
        if(cont==3){
            var mayor = 0;
            var may = 0;
            for(var x = 0; x < pP.length; x++){
                if (pP[x] > mayor)
                {
                    mayor = pP[x];may = x;
                }
            }
            location.reload();
            alert(`Juego Terminado\n\nEl Jugador Ganador es:\n\nJugador ${(may+1)}\ncon un puntaje Total de: ${mayor} puntos`);
            
        }
    }else{
    for(let i=0;i<dices;i++){
        switch(faces){
            case'4':
                randomValue = Math.floor((Math.random()*4)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'5':
                randomValue = Math.floor((Math.random()*5)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'6':
                randomValue = Math.floor((Math.random()*6)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'7':
                randomValue = Math.floor((Math.random()*7)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'8':
                randomValue = Math.floor((Math.random()*8)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'9':
                randomValue = Math.floor((Math.random()*9)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'10':
                randomValue = Math.floor((Math.random()*10)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'11':
                randomValue = Math.floor((Math.random()*11)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'12':
                randomValue = Math.floor((Math.random()*12)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'13':
                randomValue = Math.floor((Math.random()*13)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'14':
                randomValue = Math.floor((Math.random()*14)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'15':
                randomValue = Math.floor((Math.random()*15)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'16':
                randomValue = Math.floor((Math.random()*16)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'17':
                randomValue = Math.floor((Math.random()*17)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'18':
                randomValue = Math.floor((Math.random()*18)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'19':
                randomValue = Math.floor((Math.random()*19)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'20':
                randomValue = Math.floor((Math.random()*20)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'21':
                randomValue = Math.floor((Math.random()*21)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'22':
                randomValue = Math.floor((Math.random()*22)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'23':
                randomValue = Math.floor((Math.random()*23)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
            case'24':
                randomValue = Math.floor((Math.random()*24)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValueValue;
                tot=tot+randomValue;
                break;
            case'25':
                randomValue = Math.floor((Math.random()*25)+1);
                dice[i].innerHTML = randomValue;
                puntaje=puntaje+randomValue;
                tot=tot+randomValue;
                break;
        }
        const points = document.querySelector('.punt');
        points.innerHTML = 'Puntaje: ' + puntaje;
        total.innerHTML = 'Puntaje Total: ' + tot;
    }
}
    
});

const r = document.querySelector('.reset');
r.addEventListener('click', () => { 
    location.reload();
});