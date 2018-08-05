let time = 0;
const timer = setInterval(() => {
    time += 2;
    console.log(`${time} second have passed`);
    if(time > 5){
        clearInterval(timer);
    }
} ,2000);