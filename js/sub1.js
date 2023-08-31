window.addEventListener('load',()=>{

// sub1 > sub_navi
const subNavi = document.querySelectorAll(".sub_navi_inner > ul > li");

for(let s=1; s<subNavi.length; s++){
  subNavi[s].addEventListener("click", e=>{
    e.preventDefault();

    if(e.currentTarget.classList.contains("on")){
      e.currentTarget.classList.remove("on");
    }else{
      subNavi.forEach(item=>{
        item.classList.remove("on");
      });
      e.currentTarget.classList.add("on");
    }
  });
}

});