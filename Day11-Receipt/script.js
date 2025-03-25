
const receipt = document.querySelector('.receipt');
const footer = document.querySelector('.footer');


window.onload = function(){
    receipt.style.display = 'none';
    footer.style.display = 'none';
}

function printTicket(){
    console.log("Printing Ticket")
    receipt.style.display = 'block';
    footer.style.display = 'block';

    receipt.style.animation = 'none';
    receipt.offsetHeight;
    receipt.style.animation = "print 2.5s ease-out"; 

    footer.style.animation = "none";
    footer.offsetHeight;
    footer.style.animation = "print 2.5s ease-out";

    const printSound = new Audio('media/print.mp3');
    printSound.play();

}
