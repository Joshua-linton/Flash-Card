var cards = document.getElementsByClassName('card');
for(var cardIndex in cards){
    var button = cards[cardIndex].querySelector('.card-button');
    button.addEventListener('click', function(event){
        var currentButton =  event.target;
        var currnentCard = currentButton.parentNode;
        var currentAswer =  currnentCard.querySelector('.card-answer');
        if(currentButton.innerHTML == 'Show'){

            currentAswer.style.display = 'block';
            currentButton.innerHTML = 'Hide';
        }else if( currentButton.innerHTML == 'Hide'){
            currentAswer.style.display = 'None';
            currentButton.innerHTML = 'Show';
    
        }
    });
}
