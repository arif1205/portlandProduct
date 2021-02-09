let hoveItemList = document.querySelectorAll('#submenu-hover-item');
let hoverItem = [...hoveItemList];

hoverItem.forEach((v, i) => {
  v.addEventListener('click', () => {
    const hoverContent = v.nextElementSibling;
    let count = hoverContent.children.length;
    let height = hoverContent.clientHeight;
    // collapse all first 
    hoverItem.forEach((value) => {
      value.nextElementSibling.style.height = '0';
    })


    if(height == 0) {
      hoverContent.style.height = `${count*50}px`;
      v.firstElementChild.style.transform = ` translateY(-50%) rotate(90deg)`;
    } else {
      hoverContent.style.height = `${count*0}px`;
      v.firstElementChild.style.transform = `translateY(-50%) rotate(0deg)`;
    }
  })
})