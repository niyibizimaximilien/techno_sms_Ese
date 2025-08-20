(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Simple contact form client‑side validation + demo success message
  const form = document.getElementById('contactForm');
  if(form){
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(el=>{
        const wrapper = el.closest('.form__field');
        const err = wrapper?.querySelector('.error');
        const ok = el.type === 'email' ? /.+@.+\..+/.test(el.value.trim()) : el.value.trim().length>0;
        if(!ok){ valid=false; if(err) err.style.display='block'; } else { if(err) err.style.display='none'; }
      });
      if(valid){
        // Replace with your real backend endpoint
        status.textContent = 'Thanks! Your message has been sent.';
      } else {
        status.textContent = 'Please fix the highlighted fields.';
      }
    });
  }
})();
