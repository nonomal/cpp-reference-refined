document.addEventListener('load', ()=>{
  const header = document.querySelector('#cpp-head-first');
  header.style.cursor = 'pointer'
  header.onclick = ()=>document.location.href = '/'
})
