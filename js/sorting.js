const sortBy = document.getElementById('hoverClick');
const sortByList = sortBy.nextElementSibling.firstElementChild.children;
const sortByLists = [...sortByList];

sortByLists.forEach((v) => {
  v.onclick = (e) => {
    sortBy.innerHTML = `${v.innerText} <i class="fa fa-chevron-down" aria-hidden="true"></i>`;
  }
})
