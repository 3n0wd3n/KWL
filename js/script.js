//select DOM

// --- modals
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
// -- offer
const academy = document.querySelector('.academy')
const horse = document.querySelector('.horses')
const consulting = document.querySelector('.consulting')

//event listeners
academy.addEventListener('click', academyFunction)
horse.addEventListener('click', horseFunction)
consulting.addEventListener('click', consultingFunction)

function academyFunction(){
    console.log("academie")
    var academyDiv = document.querySelector('.content_acad')
    var horseDiv = document.querySelector('.content_hors')
    var consultingDiv = document.querySelector('.content_cons')
    academyDiv.style.display = 'flex';
    horseDiv.style.display = 'none';
    consultingDiv.style.display = 'none';
}

function horseFunction(){
    console.log("horse")
    var academyDiv = document.querySelector('.content_acad')
    var horseDiv = document.querySelector('.content_hors')
    var consultingDiv = document.querySelector('.content_cons')
    academyDiv.style.display = 'none';
    horseDiv.style.display = 'flex';
    consultingDiv.style.display = 'none';
}

function consultingFunction(){
    console.log("consulting")
    var academyDiv = document.querySelector('.content_acad')
    var horseDiv = document.querySelector('.content_hors')
    var consultingDiv = document.querySelector('.content_cons')
    academyDiv.style.display = 'none';
    horseDiv.style.display = 'none';
    consultingDiv.style.display = 'flex';
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}