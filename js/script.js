const dice = document.querySelector('.dice');
const b = document.querySelector('.turn');
let number = 0;
const time = 2;
b.addEventListener('click', () => {

    dice.style.transition = '';
    dice.style.transform = `translateY(200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    
    setTimeout(() => {
        dice.style.transition = `transform ${time}s`;
        let randomValue = Math.floor((Math.random()*6)+1);
        while(number==randomValue){
            randomValue = Math.floor((Math.random()*6)+1);
        }
        number=randomValue;

        
        switch(randomValue){
            case 1:
                dice.style.transform = `translateY(200px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 2:
                dice.style.transform = `translateY(200px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 3:
                dice.style.transform = `translateY(200px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
                break;
            case 4:
                dice.style.transform = `translateY(200px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
                break;
            case 5:
                dice.style.transform = `translateY(200px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
                break;
            case 6:
                dice.style.transform = `translateY(200px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
                break;
        };
    }, time*10)
});