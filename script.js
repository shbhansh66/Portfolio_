
// Display and aur white by OS

 const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

function setDarkandLight(){
  if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("bg-gray-900","text-white");
    document.body.classList.remove("bg-white","text-black");
      moon.classList.add("hidden");  
    sun.classList.remove("hidden"); 
  }
  else{
    document.body.classList.add("bg-white" ,"text-black");
    document.body.classList.remove("bg-gray-900","text-white");
   
    moon.classList.remove("hidden"); 
     sun.classList.add("hidden");
  }
}

setDarkandLight();

// how to get OS display mode dark or light in js no code only property

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(){
  setDarkandLight();
})

document.body.classList.add(localStorage.getItem("theme"));


 
 
  sun.addEventListener("click", () =>{
    if(document.body.classList.contains("bg-gray-900")){
    sun.classList.add("hidden");  
    moon.classList.remove("hidden"); 
    document.body.classList.add("bg-white", "text-black");
    
    
    document.body.classList.remove("bg-gray-900", "text-white");

   Name.classList.add("text-yellow-500");
    localStorage.setItem("theme","bg-white","text-black")
    }
  }); 

  moon.addEventListener("click", () => {
     if(document.body.classList.contains("bg-white")){
    moon.classList.add("hidden");  
    sun.classList.remove("hidden"); 
    document.body.classList.add("bg-gray-900", "text-white"); 
    document.body.classList.remove("bg-white", "text-black");
     Name.classList.remove("text-yellow-500");
     localStorage.setItem("theme","bg-gray-900","text-white");
     }
  });

 const speaker1=document.querySelector("#speaker1");
    const speaker2=document.querySelector("#speaker2");
    const Name=document.querySelector("#Name");


 // JavaScript se audio element banaya
 const song=document.createElement("audio");
 song.setAttribute("src","./music/relax1.mp3");
 song.setAttribute("loop","true");
 song.setAttribute("preload","auto");


 
  // Speaker1 pe click  play audio
  speaker1.addEventListener("click", () => {
    speaker1.classList.add("hidden");
    speaker2.classList.remove("hidden");
    song.play();
  });

  // Speaker2 pe click -> stop audio
  speaker2.addEventListener("click", () => {
    speaker2.classList.add("hidden");
    speaker1.classList.remove("hidden");
    song.pause();
    song.currentTime = 0; // reset to beginning
  });


  // Reusme Download

  
  const cancel=document.querySelector("#cancel_1");
  const resume_img=document.querySelector("#resume_img");
  
  cancel.addEventListener("click",()=>{
    resume_img.classList.add("hidden");
    cancel.classList.add("hidden");
  })
  
  function showResume() {
   resume_img.classList.remove("hidden");
   cancel.classList.remove("hidden");
 }




  // Latest Works

  const latest=document.querySelector("#latest_work");
  latest.addEventListener("click", ()=>{
    
    window.scrollTo({
      top: 700,       // pixels niche
      behavior: "smooth"
    });
  
  });


  



  


// Initialize Swiper  swiper website se uthaya hai 

     var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 150,
        stretch: 0,
        depth: 100,
        
        slideShadows: true,
        clickable:true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
         
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
       navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
      },
    });
  

   // Certificate show

const cancel1=document.querySelector("#cancel_2");
const certificate_img=document.querySelector("#certificate_img");
const certificate_show=document.querySelector("#certificate_show");
  
   
 certificate_show.addEventListener("click", () => {
let slidesArray = Array.from(swiper.slides);  
let slide = slidesArray[index];  

if (slide) {
  let imgTag = slide.querySelector("img");
  if (imgTag) {
    certificate_img.src = imgTag.src;
    certificate_img.classList.remove("hidden");
    console.log("Image Loaded:", imgTag.src);
  }
}
});


// Textarea

let character=document.querySelector("#character_count");
let textarea=document.querySelector("textarea");

textarea.addEventListener("input",function(dets){
  let n=400-textarea.value.length;
  if(n>0){
  character.textContent=n;
  }
  else{
      textarea.value = textarea.value.substring(0, 400);
    character.textContent = 0;
  }
})

// Name input in contact


let hide= document.querySelector("#hide");
let nm=document.querySelector("#name")
let form=document.querySelector("form");

form.addEventListener("submit",function(dets){
 dets.preventDefault();
    hide.classList.remove("hidden");
  
})

