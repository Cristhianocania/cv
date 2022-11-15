const openModal = document.querySelector('.btn_modal');
const modal = document.querySelector('.modal');

const closeModal = document.querySelector('.modal_close');

const content=document.querySelector('.services-content');


openModal.addEventListener('click',(e)=>{
e.preventDefault();
modal.classList.add('modal--show');
content.classList.add('services-content--dis')


});


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    content.classList.remove('services-content--dis')
    
    
    });