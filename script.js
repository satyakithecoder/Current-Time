function showtime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const arr_months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const arr_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById("year-month-day").innerHTML = `Year: ${year} <br> Month: ${arr_months[month]} <br> Day: ${arr_days[day]}`;
    document.getElementById("time").textContent = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(showtime, 1000);
showtime();