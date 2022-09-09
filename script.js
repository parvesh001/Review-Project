//letting array of reviewers
let reviewers = [
  {
    id: 0,
    rImage: "profile pictures/1.jpg",
    name: "Seeu Marry",
    position: "Political Science Professor",
    intro:
      "Seeu Marry sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 1,
    rImage: "profile pictures/2.jpg",
    name: "Neha Saksena",
    position: "Regional Director",
    intro:
      "Neha Saksena sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 2,
    rImage: "profile pictures/3.jpg",
    name: "Diksha Sharma",
    position: "Coordinator",
    intro:
      "Diksha Sharma sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 3,
    rImage: "profile pictures/4.jpg",
    name: "Diva Mehta",
    position: "Human Resource Department",
    intro:
      "Diva Mehta sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 4,
    rImage: "profile pictures/5.jpg",
    name: "Sakshi Mehra",
    position: "Charter Accountant",
    intro:
      "Sakshi Mehra sit amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
  {
    id: 5,
    rImage: "profile pictures/6.jpg",
    name: "Jasmeen Frandevis",
    position: "Web Developer",
    intro:
      "Jasmeen Frandevis amet consectetur adipisicing elit. Perferendis et quisquam voluptate ipsa ab. Illum, sequi! Doloremque praesentium blanditiis quasi ipsum natus assumenda placeat repudiandae? Magnam error rerum deserunt blanditiis.",
  },
];

//targeting relevant things
let img = document.getElementById("img");
let rName = document.getElementById("name");
let position = document.getElementById("position");
let intro = document.getElementById("sm-intro");
let person  = document.getElementById('reviewer');

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.getElementById("randomBtn");

//first algorithm (simple but very heavy)
let index = 0;
nextBtn.addEventListener('click', () => {
    index++;
    if(index > reviewers.length){
         index = 0;
    }
    let currentReviewer = reviewers[index];
    img.src = currentReviewer.rImage;
    rName.textContent = currentReviewer.name;
    position.textContent = currentReviewer.position;
    intro.textContent = currentReviewer.intro;
})
prevBtn.addEventListener('click', () => {
    index--;
    if(index < 0){
        index = reviewers.length;
   }
    let currentReviewer = reviewers[index];

    img.src = currentReviewer.rImage;
     rName.textContent = rName.textContent = currentReviewer.name;
    position.textContent = currentReviewer.position;
    intro.textContent = currentReviewer.intro;
})
randomBtn.addEventListener('click',()=>{
    let randomN = Math.floor(Math.random()*reviewers.length +1);
    let currentReviewer = reviewers[randomN];
    img.src = currentReviewer.rImage;
    rName.textContent = currentReviewer.name;
    position.textContent = currentReviewer.position;
    intro.textContent = currentReviewer.intro;
});



/*//second algorithm(little heavy and simple)

let btns = document.querySelectorAll(".btn");
let index = 0;

btns.forEach((element) => {
  element.addEventListener("click", (element) => {
    currentEl = element.currentTarget;
    if (currentEl.classList.contains("next")) {
      index++;
      if (index > reviewers.length) {
        index = 0;
      }
    } else if (currentEl.classList.contains("prev")) {
      index--;
      if(index < 0){
        index = reviewers.length;
      }
    }else{
      let randomN = Math.floor(Math.random() * reviewers.length + 1);
      index = randomN;
    }
    
    let currentReviewer = reviewers[index];
    person.setAttribute('id', currentReviewer.id);
    img.src = currentReviewer.rImage;
    rName.textContent = currentReviewer.name;
    position.textContent = currentReviewer.position;
    intro.textContent = currentReviewer.intro;
  });
});

// randomBtn.addEventListener("click", () => {
//   let randomN = Math.floor(Math.random() * reviewers.length + 1);
//   let currentReviewer = reviewers[randomN];
//   img.src = currentReviewer.rImage;
//   rName.textContent = currentReviewer.name;
//   position.textContent = currentReviewer.position;
//   intro.textContent = currentReviewer.intro;
// });*/



//third algorithm(little simple but not heavy)

/*function myReviewers(pera){
    let currentReviewer = reviewers[pera];
    img.src = currentReviewer.rImage;
    rName.textContent = currentReviewer.name;
    position.textContent = currentReviewer.position;
    intro.textContent = currentReviewer.intro;
}

let index = 0;

nextBtn.addEventListener('click', ()=>{
    index++;
    if(index > reviewers.length -1){
        index = 0;
    }
    myReviewers(index)
})

prevBtn.addEventListener('click', ( )=>{
    index--;
    if(index < 0){
        index = reviewers.length -1;
    }
    myReviewers(index)
})

randomBtn.addEventListener('click',()=>{
    let randomN = Math.floor(Math.random()*reviewers.length +1);
    myReviewers(randomN);
})*/
