function searchItem() {
const searchItem=document.querySelector("input").value;
const items=document.querySelectorAll("li");
items.forEach((item)=>{
if(! item.textContent.includes(searchItem)) {
    item.style.display='None'
}else{
    item.style.display=''
}
});

}

    