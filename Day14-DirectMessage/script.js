function displayEmoji(){
    const emoji = document.getElementById("emoji-picker");
   
    emoji.style.display = "block";
    emoji.style.position = "absolute";
    emoji.style.top = "50%";
    emoji.style.left = "50%";
    emoji.style.transform = "translate(-50%, -50%)";
    emoji.style.zIndex = "1000";
    emoji.style. backgroundColor = "white";
}
