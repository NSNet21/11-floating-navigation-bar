const list = document.getElementsByClassName("list");

function addActive() {
  for (let i = 0; i < list.length; i++) {
    const isActive = this.classList.contains("active");
    if (!isActive) {
      for (let j = 0; j < list.length; j++) {
        list[j].classList.remove("active");
      }
      this.classList.add("active");
    } else if (isActive) {
      return;
    }
  }
}

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", addActive);
}


