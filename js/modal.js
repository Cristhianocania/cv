const openModal = document.querySelector('#btn');
const modal = document.querySelector('#m');
const closeModal = document.querySelector('#close');


const openModal2 = document.querySelector('#btn2');
const modal2 = document.querySelector('#m2');
const closeModal2 = document.querySelector('#close2');


const openModal3 = document.querySelector('#btn3');
const modal3 = document.querySelector('#m3');
const closeModal3 = document.querySelector('#close3');

const openModal4= document.querySelector('#btn4');
const modal4 = document.querySelector('#m4');
const closeModal4 = document.querySelector('#close4');

const openModal5= document.querySelector('#btn5');
const modal5 = document.querySelector('#m5');
const closeModal5 = document.querySelector('#close5');




const menu =document.getElementById('navigation-bar');
const content=document.querySelector('.services-content');



openModal.addEventListener('click',(e)=>{
e.preventDefault();
modal.classList.add('modal--show');
content.classList.add('services-content--dis');
menu.hidden=true;


    });


closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
    content.classList.remove('services-content--dis');
    menu.hidden=false;

    
    });




    openModal2.addEventListener('click',(e)=>{
        e.preventDefault();
        modal2.classList.add('modal--show');
        content.classList.add('services-content--dis');
        menu.hidden=true;
        
        
        });
        
        
    closeModal2.addEventListener('click',(e)=>{
            e.preventDefault();
            modal2.classList.remove('modal--show');
            content.classList.remove('services-content--dis');
            menu.hidden=false;
        
            
            });



            openModal3.addEventListener('click',(e)=>{
                e.preventDefault();
                modal3.classList.add('modal--show');
                content.classList.add('services-content--dis');
                menu.hidden=true;
                
                
                });
                
                
            closeModal3.addEventListener('click',(e)=>{
                    e.preventDefault();
                    modal3.classList.remove('modal--show');
                    content.classList.remove('services-content--dis');
                    menu.hidden=false;
                
                    
                    });


                    openModal4.addEventListener('click',(e)=>{
                        e.preventDefault();
                        modal4.classList.add('modal--show');
                        content.classList.add('services-content--dis');
                        menu.hidden=true;
                        
                        
                        });
                        
                        
                    closeModal4.addEventListener('click',(e)=>{
                            e.preventDefault();
                            modal4.classList.remove('modal--show');
                            content.classList.remove('services-content--dis');
                            menu.hidden=false;
                        
                            
                            });



                            openModal5.addEventListener('click',(e)=>{
                                e.preventDefault();
                                modal5.classList.add('modal--show');
                                content.classList.add('services-content--dis');
                                menu.hidden=true;
                                
                                
                                });
                                
                                
                            closeModal5.addEventListener('click',(e)=>{
                                    e.preventDefault();
                                    modal5.classList.remove('modal--show');
                                    content.classList.remove('services-content--dis')
                                    menu.hidden=false;
                                
                                    
                                    });