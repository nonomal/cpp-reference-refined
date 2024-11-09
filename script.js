document.addEventListener('DOMContentLoaded', ()=>{
  // Header
  const header = document.querySelector('#cpp-head-first');
  header.style.cursor = 'pointer';
  header.onclick = ()=>document.location.href = '/';

  // Fix Navbar Position
  document.querySelector('#content')?.prepend(document.querySelector('.t-navbar') ?? '')

  // Switch language button
  const tSwitchLang = refinedCppConfig.currentLang === 'zh' ? 'English' : '中文'
  const btnSwitch = document.querySelector('#ca-nstab-main > span')
  btnSwitch.innerHTML = `<div style="
      font-size: 12px;
      cursor: pointer;
  ">${tSwitchLang}</div>`
  let preload
  
  btnSwitch.onclick = ()=>{
      document.cookie = `prefer-lang=${refinedCppConfig.currentLang === 'zh' ? 'en' : 'zh'}`
      document.location.reload()
  }
})
