let hoverClick = document.querySelectorAll('#hoverClick');

[...hoverClick].forEach((v, i) => {
  v.addEventListener('click', (e) => {
    /// remove all 
    [...hoverClick].forEach((value, index) => {
      if (index != i) {
        let a = value.nextElementSibling;
        a.classList.add('match-list-item-invisible');
        a.classList.remove('match-list-item-visible');
        value.firstElementChild.style.transform = `rotate(0deg)`;
      }
    })
    // remove all done


    let hoverItem = v.nextElementSibling;
    if (hoverItem.classList.contains('match-list-item-invisible')) {
      hoverItem.classList.add('match-list-item-visible');
      hoverItem.classList.remove('match-list-item-invisible');
      e.target.firstElementChild.style.transform = `rotate(180deg)`;
    } else {
      hoverItem.classList.add('match-list-item-invisible');
      hoverItem.classList.remove('match-list-item-visible');
      e.target.firstElementChild.style.transform = `rotate(0deg)`;
    }
  })
})

window.onclick = (e) => {
  const targetElement = e.target;
  function winClick () {
    for (let index = 0; index < [...hoverClick].length; index++) {
      if (targetElement == [...hoverClick][index]) {
        return false;
      }
    }
    return true;
  };
  const isCollapsible = winClick();
  if (isCollapsible) {
    [...hoverClick].forEach((value) => {
      let a = value.nextElementSibling;
      a.classList.add('match-list-item-invisible');
      a.classList.remove('match-list-item-visible');
      value.firstElementChild.style.transform = `rotate(0deg)`;
    })
  }
}