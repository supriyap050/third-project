function send(){
    const notificationDiv=document.querySelector('.notification');

    notificationDiv.classList.add('show')

    const prossesBar=document.querySelector('.process');
    prossesBar.classList.add('start')

setTimeout(()=>{
notificationDiv.classList.remove('show')
 prossesBar.classList.remove('start')
},3000);




}
