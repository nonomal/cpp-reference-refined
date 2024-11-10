document.addEventListener('DOMContentLoaded', ()=>{
  // Header
  const header = document.querySelector('#cpp-head-first');
  header.style.cursor = 'pointer';
  header.onclick = ()=>document.location.href = '/';

  // Fix Navbar Position
  document.querySelector('#content')?.prepend(document.querySelector('.t-navbar') ?? '')

  // Switch language button
  const langContentCache = {}
  const runLanguagePreload = async (languageToPreload = (refinedCppConfig.currentLang === 'en' ? 'zh' : 'en')) => {
      const elem = document.createElement('div')
      elem.innerHTML = await fetch('?lang='+languageToPreload).then(v=>v.text())
      langContentCache[languageToPreload] = elem.querySelector('#content').innerHTML
  }
  runLanguagePreload();
  
  const contentDom = document.querySelector('#content')
  langContentCache[refinedCppConfig.currentLang] = contentDom.innerHTML
  
  const tSwitchLang = ()=>refinedCppConfig.currentLang === 'zh' ? 'English' : '中文'
  const btnSwitch = document.querySelector('#ca-nstab-main > span')
  btnSwitch.innerHTML = `<div style="
      font-size: 12px;
      cursor: pointer;
  " class="btnSwitchLang">${tSwitchLang()}</div>`
  
  btnSwitch.onclick = () => {
      const targetLang = refinedCppConfig.currentLang === 'zh' ? 'en' : 'zh';
      document.cookie = `prefer-lang=${targetLang}`
      if (langContentCache[targetLang]) {
        refinedCppConfig.currentLang = targetLang
        contentDom.innerHTML = langContentCache[targetLang]
        document.querySelector('.btnSwitchLang').innerText = tSwitchLang();
      } else
        document.location.reload()
  }
})
