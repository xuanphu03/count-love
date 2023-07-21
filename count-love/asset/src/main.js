document.addEventListener('DOMContentLoaded', function() {
    var days = document.getElementById('count-time');
    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    var timeStart = new Date(2023, 5, 0);
    var dateTime = document.getElementById('dateTime');
    console.log(timeStart);
    var blockQuote = document.getElementById('blockquote');

    function countTimes() {
        var timeNow = new Date();
        var countTimes = (timeNow - timeStart) / 86400000;
        var runHour = timeNow.getHours();
        var runMinute = timeNow.getMinutes();
        var runSecond = timeNow.getSeconds();
        days.firstChild.textContent = Math.floor(countTimes);
        if (runHour < 10) {
            hour.firstChild.textContent = `0${runHour}`;
        } else {
            hour.firstChild.textContent = runHour;
        };

        if (runMinute < 10) {
            minute.firstChild.textContent = `0${runMinute}`;
        } else {
            minute.firstChild.textContent = runMinute;
        };

        if (runSecond < 10) {
            second.firstChild.textContent = `0${runSecond}`;
        } else {
            second.firstChild.textContent = runSecond;
        };
        if (timeNow.getDate() < 10) {
            dateTime.innerText = `0${timeNow.getDate()}/${timeNow.getMonth()}/${timeNow.getFullYear()}`;
        } else {
            dateTime.innerText = `${timeNow.getDate()}/${timeNow.getMonth()}/${timeNow.getFullYear()}`;
        }
        if (timeNow.getMonth() < 10) {
            dateTime.innerText = `${timeNow.getDate()}/0${timeNow.getMonth() + 1}/${timeNow.getFullYear()}`;
        } else {
            dateTime.innerText = `${timeNow.getDate()}/${timeNow.getMonth()}/${timeNow.getFullYear()}`;
        }
    };

    countTimes();
    setInterval(countTimes, 1000);

    var blockQuotes = [
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "You've gotta dance like there's nobody watching,\
        Love like you'll never be hurt,\
        Sing like there's nobody listening,\
        And live like it's heaven on earth.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "It is better to be hated for what you are than to be loved for what you are not.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "Tình yêu không phải là tìm thấy một ai đó hoàn hảo. Mà là học cách để nhìn thấy những điều tuyệt vời từ một người không hoàn hảo.",
        "Đừng vì cô đơn mà yêu sai một người. Cũng đừng vì yêu sai một người mà chịu cả đời cô đơn.",
        "Chỉ cần yêu thật lòng thì mối tình thứ mấy cũng là “Tình đầu”!"
    ]
    
    let random = Math.random() * blockQuotes.length;
    blockQuote.innerText = blockQuotes[Math.floor(random)];
}, false);