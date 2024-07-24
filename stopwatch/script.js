// script.js
document.addEventListener('DOMContentLoaded', () => {
    let startTime;
    let updatedTime;
    let difference;
    let tInterval;
    let running = false;
    let lapCount = 1;
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const milliseconds = document.getElementById('milliseconds');
    const lapList = document.getElementById('lapList');
    
    function startTimer() {
        if (!running) {
            running = true;
            startTime = new Date().getTime();
            tInterval = setInterval(getShowTime, 1);
        }
    }

    function stopTimer() {
        if (running) {
            running = false;
            clearInterval(tInterval);
        }
    }

    function resetTimer() {
        stopTimer();
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        milliseconds.textContent = '00';
        lapList.innerHTML = '';
        lapCount = 1;
    }

    function getShowTime() {
        updatedTime = new Date().getTime();
        difference = updatedTime - startTime;

        let hoursValue = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutesValue = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secondsValue = Math.floor((difference % (1000 * 60)) / 1000);
        let millisecondsValue = Math.floor(difference % 1000 / 10);

        hours.textContent = (hoursValue < 10) ? '0' + hoursValue : hoursValue;
        minutes.textContent = (minutesValue < 10) ? '0' + minutesValue : minutesValue;
        seconds.textContent = (secondsValue < 10) ? '0' + secondsValue : secondsValue;
        milliseconds.textContent = (millisecondsValue < 10) ? '0' + millisecondsValue : millisecondsValue;
    }

    function addLap() {
        if (running) {
            const li = document.createElement('li');
            li.textContent = `Lap ${lapCount}: ${hours.textContent}:${minutes.textContent}:${seconds.textContent}:${milliseconds.textContent}`;
            lapList.appendChild(li);
            lapCount++;
        }
    }

    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('pause').addEventListener('click', stopTimer);
    document.getElementById('reset').addEventListener('click', resetTimer);
    document.getElementById('lap').addEventListener('click', addLap);
});
