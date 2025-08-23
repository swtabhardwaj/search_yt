const searchInput = document.getElementById('search')
const userList = document.getElementById('user-list')
const listItems = document.getElementsByTagName('li')

searchInput.addEventListener('keyup',function(){
    const filter = searchInput.value.toLowerCase()
    console.log(filter)
    Array.from(listItems).forEach((item)=>{
        text = item.textContent.toLowerCase()
        if(text.includes(filter)){
            item.classList.remove('hidden')
        }
        else{
            item.classList.add('hidden')
        }    })

})
