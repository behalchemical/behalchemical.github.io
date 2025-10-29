
// Small interactions for the Behal Chemicals starter site
document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  // Basic validation/feedback - in production, hook to your backend or Formspree
  alert('Thanks — we received your request! We will contact you soon.');
  form.reset();
}

// mobile menu toggle
document.querySelectorAll('.mobile-menu').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });
});
