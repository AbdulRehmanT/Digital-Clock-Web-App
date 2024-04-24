function clock(){
    let hour = document.getElementById('hour');
    let minutes = document.getElementById('minute');
    let seconds = document.getElementById('second');


    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = h % 12;
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s; 
    
    

    setTimeout(clock,1000);
}

clock();
