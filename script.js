const b=document.querySelector('.menu-button'),n=document.querySelector('.nav');b?.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b?.setAttribute('aria-expanded','false')}));const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

// Formspree contact forms
window.formspree=window.formspree||function(){(formspree.q=formspree.q||[]).push(arguments)};
document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('.sts-contact-form').forEach((form,i)=>{if(!form.id)form.id=`sts-contact-form-${i}`;formspree('initForm',{formElement:`#${form.id}`,formId:'xqpzykad'});});});
