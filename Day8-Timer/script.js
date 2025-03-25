document.addEventListener("DOMContentLoaded", () => {
    var deadLine = new Date("May 23, 2025 00:00:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let t = deadLine - now;

        // Getting value of days, hours, minutes, seconds
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t % (1000 * 60)) / 1000);

        // Displaying the result
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // Output for over time
        if (t < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});
