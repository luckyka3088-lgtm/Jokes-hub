let  next_btn = document.querySelector("#next");
let  copy_btn = document.querySelector("#copy");
let  share_btn = document.querySelector(".share");
let  hindi_btn = document.querySelector("#hindi");
let  Eng_btn = document.querySelector("#Eng");
let  guj_btn = document.querySelector("#guj");
let  pro_btn = document.querySelector("#pro");
let  fun_btn = document.querySelector("#fun");
let  school_btn = document.querySelector("#school");
let para = document.querySelector("#joke")

let lang = "hindi";
let plang ;
let catagory = "fun"
let pcatagory;

let Text = `Just tell me joke in ${lang} which is of ${catagory} catagory it should not be in dialog form remenber i am using you as api so only return joke nothing else it  should be of three line`;



document.addEventListener("DOMContentLoaded", async() => {
    if (!sessionStorage.getItem("sessionHasRun")) {
      hindi_btn.style.border = "1px solid #A855F7";
      hindi_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
      hindi_btn.style.borderRadius = "2vh";
      hindi_btn.style.backGround = "linear-gradient(90deg,#A855F7,#2196FF)";
      fun_btn.style.border = "1px solid #A855F7";
      fun_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
      fun_btn.style.borderRadius = "2vh";
      fun_btn.style.backGroundcolor = "#50817";
      let result = await askGemini(Text)
      para.innerText = result;
    
    
    
    }
});



next_btn.addEventListener("click", () => {
      para.innerHTML = `<i class="fa-solid fa-rotate-right fa-spin-snap fa-9x" style="color: rgb(44, 106, 221);" id = "spin"></i>`
  
       askGemini(Text)
        .then(result => {
            para.innerText = result;
    });
    
    
});

copy_btn.addEventListener("click",() =>{
  let text = para.innerText;
    
    navigator.clipboard.writeText(text)
    copy_btn.innerHTML = `<i class="fa-solid fa-check fa-shake" style="color: white"></i> Copied`;
    
    setTimeout(() => {
    copy_btn.innerHTML = ` <i class="fa-solid fa-copy" style="color:white;"></i> Copy `;
            }, 2000);
});


Eng_btn.addEventListener("click",() =>{
  plang = lang;
  lang = "english";
  
  Eng_btn.style.border = "1px solid #A855F7";
  Eng_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  Eng_btn.style.borderRadius = "2vh";
  Eng_btn.style.backGroundcolor = "#50817";
  
  if(plang == "hindi"){
  hindi_btn.style.border = "1px solid #B8BED3";
  hindi_btn.style.boxShadow = "0 0 10px #B8BED3";
  hindi_btn.style.borderRadius = "2vh";
  hindi_btn.style.backGroundcolor = "#50817";
  }
  
  if(plang == "guj"){
  guj_btn.style.border = "1px solid #B8BED3";
  guj_btn.style.boxShadow = "0 0 10px #B8BED3";
  guj_btn.style.borderRadius = "2vh";
  guj_btn.style.backGroundcolor = "#50817";
  }
});

hindi_btn.addEventListener("click",() =>{
  plang = lang;
  lang = "hindi";
  
  hindi_btn.style.border = "1px solid #A855F7";
  hindi_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  hindi_btn.style.borderRadius = "2vh";
  hindi_btn.style.backGroundcolor = "#50817";
  
  if(plang == "english"){
  Eng_btn.style.border = "1px solid #B8BED3";
  Eng_btn.style.boxShadow = "0 0 10px #B8BED3";
  Eng_btn.style.borderRadius = "2vh";
  Eng_btn.style.backGroundcolor = "#50817";
  }
  
  if(plang == "guj"){
  guj_btn.style.border = "1px solid #B8BED3";
  guj_btn.style.boxShadow = "0 0 10px #B8BED3";
  guj_btn.style.borderRadius = "2vh";
  guj_btn.style.backGroundcolor = "#50817";
  }
});

guj_btn.addEventListener("click",() =>{
  plang = lang;
  lang = "guj";
  
  guj_btn.style.border = "1px solid #A855F7";
  guj_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  guj_btn.style.borderRadius = "2vh";
  guj_btn.style.backGroundcolor = "#50817";
  
  if(plang == "hindi"){
  hindi_btn.style.border = "1px solid #B8BED3";
  hindi_btn.style.boxShadow = "0 0 10px #B8BED3";
  hindi_btn.style.borderRadius = "2vh";
  hindi_btn.style.backGroundcolor = "#50817";
  }
  
  if(plang == "english"){
  Eng_btn.style.border = "1px solid #B8BED3";
  Eng_btn.style.boxShadow = "0 0 10px #B8BED3";
  Eng_btn.style.borderRadius = "2vh";
  Eng_btn.style.backGroundcolor = "#50817";
  }
});

fun_btn.addEventListener("click",() =>{
  pcatagory = catagory;
  catagory = "fun";
  
  fun_btn.style.border = "1px solid #A855F7";
  fun_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  fun_btn.style.borderRadius = "2vh";
  fun_btn.style.backGroundcolor = "#50817";
  
  if(pcatagory == "pro"){
  pro_btn.style.border = "1px solid #B8BED3";
  pro_btn.style.boxShadow = "0 0 10px #B8BED3";
  pro_btn.style.borderRadius = "2vh";
  pro_btn.style.backGroundcolor = "#50817";
  }
  
  if(pcatagory == "school"){
  school_btn.style.border = "1px solid #B8BED3";
  school_btn.style.boxShadow = "0 0 10px #B8BED3";
  school_btn.style.borderRadius = "2vh";
  school_btn.style.backGroundcolor = "#50817";
  }
});

pro_btn.addEventListener("click",() =>{
  pcatagory = catagory;
  catagory = "pro";
  
  pro_btn.style.border = "1px solid #A855F7";
  pro_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  pro_btn.style.borderRadius = "2vh";
  pro_btn.style.backGroundcolor = "#50817";
  
  if(pcatagory == "fun"){
  fun_btn.style.border = "1px solid #B8BED3";
  fun_btn.style.boxShadow = "0 0 10px #B8BED3";
  fun_btn.style.borderRadius = "2vh";
  fun_btn.style.backGroundcolor = "#50817";
  }
  
  if(pcatagory == "school"){
  school_btn.style.border = "1px solid #B8BED3";
  school_btn.style.boxShadow = "0 0 10px #B8BED3";
  school_btn.style.borderRadius = "2vh";
  school_btn.style.backGroundcolor = "#50817";
  }
});

school_btn.addEventListener("click",() =>{
  pcatagory = catagory;
  catagory = "school";
  
  school_btn.style.border = "1px solid #A855F7";
  school_btn.style.boxShadow = "0 0 15px rgba(168, 85, 247, 0.60)";
  school_btn.style.borderRadius = "2vh";
  school_btn.style.backGroundcolor = "#50817";
  
  if(pcatagory == "pro"){
  pro_btn.style.border = "1px solid #B8BED3";
  pro_btn.style.boxShadow = "0 0 10px #B8BED3";
  pro_btn.style.borderRadius = "2vh";
  pro_btn.style.backGroundcolor = "#50817";
  }
  
  if(pcatagory == "fun"){
  fun_btn.style.border = "1px solid #B8BED3";
  fun_btn.style.boxShadow = "0 0 10px #B8BED3";
  fun_btn.style.borderRadius = "2vh";
  fun_btn.style.backGroundcolor = "#50817";
  }
});




share_btn.addEventListener("click", async () => {

    let jokeText = para.innerText;

    if (navigator.share) {

        try {
            await navigator.share({
                title: "Funny Joke 😂",
                text: jokeText
            });

        } catch (error) {
            console.log("Share cancelled");
        }

    } else {
        alert("Sharing is not supported on this browser.");
    }

});
