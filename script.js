const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});
closeModal.addEventListener("click", () => {
  modal.close();
});

document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
      handle = e.target
    } else {
      handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
  })
  
  const throttleProgressBar = throttle(() => {
    document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  }, 250)
  window.addEventListener("resize", throttleProgressBar)
  
  document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
  
  function calculateProgressBar(progressBar) {
    progressBar.innerHTML = ""
    const slider = progressBar.closest(".row").querySelector(".slider")
    const itemCount = slider.children.length
    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    )
    let sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
  
    if (sliderIndex >= progressBarItemCount) {
      slider.style.setProperty("--slider-index", progressBarItemCount - 1)
      sliderIndex = progressBarItemCount - 1
    }
  
    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div")
      barItem.classList.add("progress-item")
      if (i === sliderIndex) {
        barItem.classList.add("active")
      }
      progressBar.append(barItem)
    }
  }

  function onHandleClick(handle) {
    const progressBar = handle.closest(".row").querySelector(".progress-bar")
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(
      getComputedStyle(slider).getPropertyValue("--slider-index")
    )
    const progressBarItemCount = progressBar.children.length
    if (handle.classList.contains("left-handle")) {
      if (sliderIndex - 1 < 0) {
        slider.style.setProperty("--slider-index", progressBarItemCount - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[progressBarItemCount - 1].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex - 1].classList.add("active")
      }
    }
  
    if (handle.classList.contains("right-handle")) {
      if (sliderIndex + 1 >= progressBarItemCount) {
        slider.style.setProperty("--slider-index", 0)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[0].classList.add("active")
      } else {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
        progressBar.children[sliderIndex].classList.remove("active")
        progressBar.children[sliderIndex + 1].classList.add("active")
      }
    }
  }
  
  function throttle(cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false
      } else {
        cb(...waitingArgs)
        waitingArgs = null
        setTimeout(timeoutFunc, delay)
      }
    }
  
    return (...args) => {
      if (shouldWait) {
        waitingArgs = args
        return
      }
  
      cb(...args)
      shouldWait = true
      setTimeout(timeoutFunc, delay)
    }
  }
/*<a href="#">
                  <img src="https://via.placeholder.com/40/00FF00?text=1" alt="">
                  <div class="content2"><h6>White hat hacking</h6><p>2020</p></div>
                </a>*/
                let topics = [{
                  id:36,
                  img:'https://via.placeholder.com/40/00FF00?text=1',
                  title:'white hat',
                  paragraph:'course created by "Med ouadjih boudraa"',
                  year:2022

                },
                {
                  id:46,
                  img:'https://via.placeholder.com/40/00FF00?text=1',
                  title:'cyber security 1',
                  paragraph:'course created by "Med ouadjih boudraa"',
                  year:2022
                },
                {
                  id:47,
                  img:'https://via.placeholder.com/40/00FF00?text=1',
                  title:'cyber security 2',
                  paragraph:'course created by "Med ouadjih boudraa"',
                  year:2022
                },
                {
                  id:456,
                  img:'https://via.placeholder.com/40/00FF00?text=1',
                  title:'OSi Modal',
                  paragraph:'course created by "Med ouadjih boudraa"',
                  year:2023
                }]

//afficher tous les elements 
let search_bx2 = document.getElementsByClassName("search_bx2")[0];
window.addEventListener("load",()=>{
  topics.forEach(element =>{
    const {img, title, paragraph} = element;
    /*
    let image = document.createElement("img");
    image.setAttribute("src", img);
    let titre = document.createElement("h6");
    titre.innerText = title;
    card.appendChild(image)
    card.appendChild(titre)
    */
   
    let card = document.createElement('a');
    card.innerHTML = `<img src="${img}" alt="">
    <div class="content2">
      <h6>${title}</h6>
  
    </div>
    `
    search_bx2.appendChild(card);
  })
})

//search filter


search.addEventListener("keyup",()=>{
   let filter = search.value.toUpperCase();
   console.log(filter)
   let a = search_bx2.getElementsByTagName('a');
   for(let i = 0; i<a.length;i++){
    let b = a[i].getElementsByClassName('content2')[0];
    let c = b.getElementsByTagName('h6')[0];

    let textValue = c.textContent || c.innerText;
    

    if(textValue.toUpperCase().indexOf(filter)> -1){
      a[i].style.display = '';
      search_bx2.style.visibility='visible';
      search_bx2.style.opacity=1;
    }
    else{
     a[i].style.display = 'none'
    }
    if(search.value == 0){
      search_bx2.style.visibility='hidden'
      }
    
}
})
//function string reverse !
const strReverse = (str) =>{ str.split("").reverse().join("")}
//function to move up
const up = document.getElementById('top')
document.addEventListener("click",()=>{
  window.scrollTo(0,0);
  strReverse('hello how are you doing')
})
