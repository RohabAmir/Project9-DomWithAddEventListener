const btn=document.querySelector('button');

btn.addEventListener('mouseover', function(){
    console.log('Moused Over Me!');
    const y= Math.floor(Math.random()* window.innerHeight);
    const x= Math.floor(Math.random()* window.innerWidth);
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
});

btn.addEventListener('click' , function(){
    btn.innerText = 'YOU GOT ME!'
    document.body.style.backgroundColor='green'
});

