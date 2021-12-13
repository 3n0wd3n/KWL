//select DOM

// --- modals
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
// -- offer
const academy = document.querySelectorAll('.academy').forEach(element => {
  element.addEventListener('click', academyFunction)
})
const horse = document.querySelectorAll('.horses').forEach(element => {
  element.addEventListener('click', horseFunction)
})
const consulting = document.querySelectorAll('.consulting').forEach(element => {
  element.addEventListener('click', consultingFunction)
})

const contacts_e = document.querySelector('.fa-envelope')
const contacts_p = document.querySelector('.fa-phone')
const contacts_i = document.querySelector('.fa-instagram')

document.addEventListener('scroll', showContacts)

function showContacts(){
  // console.log(contacts)
  if (scrollY >= 1031 && scrollY <= 1973){
    contacts_i.style.color = "#e0ac7b"
    contacts_p.style.color = "#e0ac7b"
    contacts_e.style.color = "#e0ac7b"
  }
  else{
    contacts_i.style.color = 'black'
    contacts_p.style.color = "black"
    contacts_e.style.color = "black"
  }
}

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