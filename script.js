document.addEventListener('DOMContentLoaded', ()=>{
  // Header
  const header = document.querySelector('#cpp-head-first');
  header.style.cursor = 'pointer';
  header.onclick = ()=>document.location.href = '/';

  // Fix Navbar Position
  document.querySelector('#content')?.prepend(document.querySelector('.t-navbar') ?? '')
})
