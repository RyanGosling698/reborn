document.getElementById("open-modal-btn").addEventListener("click",function(){
    document.getElementById("modal-window").classList.add("open")
})

document.getElementById("close-modul-window").addEventListener("click",function(){
    document.getElementById("modal-window").classList.remove("open")
})

document.getElementById("open-modal-btn2").addEventListener("click",function(){
    document.getElementById("modal-window2").classList.add("open")
})

document.getElementById("close-modul-window2").addEventListener("click",function(){
    document.getElementById("modal-window2").classList.remove("open")
})



// Закрыть модальное окно при нажатии на клавишу "Esc"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        document.getElementById("modal-window2").classList.remove("open")
        document.getElementById("modal-window").classList.remove("open")
        document.getElementById("password").value = "";
        document.getElementById("password__2").value = "";
        document.getElementById("password__3").value = "";
        document.getElementById("email__1").value = "";
        document.getElementById("email").value = "";
    }
});

// Закрыть модальное окно при клике вне элемента (за пределами модального окна)
document.addEventListener('click', (event) => {
    if (event.target === any ) {
        document.getElementById("modal-window2").classList.remove("open")
        document.getElementById("modal-window").classList.remove("open")
        
        
    }
});

function closeModal() {
    modal.classList.remove('open');
    // Удалить модальное окно из DOM
    modal.remove();
}




let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.main-nav')

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
    
})