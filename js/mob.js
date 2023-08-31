window.addEventListener('load',()=>{

// 모바일
const body = document.querySelector("body");
const mobBg = document.querySelector('.bg');
const mob = document.querySelector(".mob");
const btnOpen = document.querySelector("div.mobBtn");
const imgClose = document.querySelector("div.mobBtn > a > img"); 

btnOpen.addEventListener("click", (e)=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");

  if(btnOpen.classList.contains('on')){
    btnOpen.setAttribute('title',"메뉴 전체보기 닫기");
    mobBg.classList.add('on');
    body.classList.add("on");
    mob.classList.add('on');
    imgClose.setAttribute("src","images/m_close.png");
  }else{
    btnOpen.setAttribute('title',"메뉴 전체보기 열기");
    mobBg.classList.remove('on');
    body.classList.remove("on");
    mob.classList.remove('on');
    imgClose.setAttribute("src","images/icon_all.png");
  }
});

// 모바일 주메뉴
const mobGnb = document.querySelectorAll(".mob_gnb > ul > li");
const mobCon = document.querySelectorAll(".mob_gnb > ul > li .sub_m");

for(var m=0; m<mobGnb.length; m++){
  mobGnb[m].addEventListener("click", (e)=>{
    e.preventDefault();

    if(e.currentTarget.classList.contains("on")){
      e. currentTarget.classList.remove("on");
    }else{
      mobGnb.forEach(item=>{
        item.classList.remove("on");
      });
      e.currentTarget.classList.add("on");
    }
  });
}

});