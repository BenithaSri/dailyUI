function printTicket(){
    console.log("Printing Ticket");

    const receipt = document.querySelector('.receipt');

    receipt.style.animation = 'none';
    receipt.offsetHeight;
    receipt.style.animation = "print 2.5s ease-out"; 

    const printSound = new Audio('media/print.mp3');
    printSound.play();

}
