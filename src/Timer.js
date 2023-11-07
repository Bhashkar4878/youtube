import { useState } from "react";

function Timer(){

    const [second, setSeconds] = useState(10);
    return (
        <div>
            <h1 class="head">Countdown to Diwali 2023</h1>
            <div class="countdown" id="countdown"></div>
        </div>
    );
}
        function updateCountdown() {

            var diwaliDate = new Date("2023-11-12T00:00:00Z");
            
            var now = new Date();
            
            var timeDiff = diwaliDate - now;
            
            var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
        }

        setInterval(updateCountdown, 1000);

export default Timer;