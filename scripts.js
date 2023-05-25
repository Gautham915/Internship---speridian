const logoButton= document.querySelectorAll('[data-modal-target]')
const closeButton= document.getElementById("close--button")
logoButton.forEach(button =>{
    button.addEventListener('click', () =>{
        const msger = document.querySelector(button.dataset.modalTarget)
        openModal(msger)
    })
})

closeButton.addEventListener('click', () =>{
    const msger = closeButton.closest('.msger')
    msger.classList.remove('active')
    document.getElementById("logo--button").className="logo--button"
}) 
 

function openModal(msger) {
    if (msger == null)
     return
    else
    {
  msger.classList.add('active');
   document.getElementById("logo--button").className="logo--button active"
}
  }


  