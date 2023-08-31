window.addEventListener('load',()=>{

// 탑메뉴
const btnTop =document.querySelector(".top_menu > dd.lang");

btnTop.addEventListener("click", (e)=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
});

// 주메뉴
const headerWrap = document.querySelector('.header_wrap');
const gnbMenu = document.querySelectorAll('nav.gnb>ul>li');

let bnnW = document.body.clientWidth;
window.addEventListener("resize", () => {
  bnnW = document.body.clientWidth;
  if(bnnW<637){
    headerWrap.style.height = "94px";
  } else{
    headerWrap.style.height = "191px";
  }
});

for(var i=0; i<gnbMenu.length; i++){
    gnbMenu[i].addEventListener("mouseover",(e)=>{
        e.currentTarget.classList.add("on");
        var ht = e.currentTarget.children[1].offsetHeight;
        console.log(ht);
    
        headerWrap.style.height = `${ht+220}px`;
    });

    //mouseout
     gnbMenu[i].addEventListener('mouseout',(e)=>{
        e.currentTarget.classList.remove("on");
        headerWrap.style.height = "191px";
     });

    //focus
        gnbMenu[i].children[0].addEventListener("focus",(e)=>{
        e.currentTarget.parentElement.classList.add("on");
        var ht = e.currentTarget.nextElementSibling.offsetHeight;
        headerWrap.style.height = `${ht+220}px`;
      });
    //blur
      gnbMenu[i].children[0].addEventListener("blur",(e)=>{
        e.currentTarget.parentElement.classList.remove("on");
        headerWrap.style.height = "191px";
      });
}

// main_visual
const btnNext = document.querySelector("a.btn_next");
const btnPrev = document.querySelector("a.btn_prev");
const slideEach = document.querySelectorAll("li.slide");
const slideRoll = document.querySelectorAll(".slide_roll li");
const btnPlay = document.querySelector(".btn_play");

let bnnNum = 0;
let lastNum = slideEach.length-1;


function slideAll(name, bnnNum, className){
  name.forEach(item=>{
    item.classList.remove(className);
  });
  name[bnnNum].classList.add(className); 
}

// next버튼 클릭
btnNext.addEventListener("click", (e)=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum>lastNum){
    bnnNum=0;
  }
  slideAll(slideEach, bnnNum, "active");
  slideAll(slideRoll, bnnNum, "on");
  secBlack(bnnNum);
});

// prev버튼 클릭
btnPrev.addEventListener("click", (e)=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0){
    bnnNum=lastNum;
  }

  slideAll(slideEach, bnnNum, "active");
  slideAll(slideRoll, bnnNum, "on");
  secBlack(bnnNum);
});

// 오토배너
function autoBanner(){
  bnnNum++;
  if(bnnNum>lastNum){
    bnnNum=0;
  }
  slideAll(slideEach, bnnNum, "active");
  slideAll(slideRoll, bnnNum, "on");
  autoBnn = setTimeout(autoBanner, 5000);
  secBlack(bnnNum);
}

let autoBnn = setTimeout(autoBanner, 5000);

//배너 재생/멈춤 버튼
let flag = true;
btnPlay.addEventListener("click", e=>{
  e.preventDefault();
  if(flag){
    btnPlay.classList.add("on");
    clearTimeout(autoBnn);
    flag=false;
  }else {
    btnPlay.classList.remove("on");
    autoBnn = setTimeout(autoBanner, 5000);
    flag=true;
  }
});

// 슬라이드 버튼 클릭 > 해당 슬라이드 이동
for(let i=0; i<slideEach.length; i++){
  slideRoll[i].addEventListener("click", e=>{
    e.preventDefault();
    slideAll(slideEach, i, "active");
    slideAll(slideRoll, i, "on");
    secBlack(i);
  });
}

// 배너 블랙
const arrowA = document.querySelectorAll(".slide_arrow > a");
const rollingA = document.querySelectorAll(".slide_roll > ul > li > a");

function secBlack(bannerNumber){
  if(slideEach[bannerNumber].classList.contains('black')){
    arrowA.forEach(item => {
      item.classList.add("black")
    });
    rollingA.forEach(item => {
      item.classList.add("black")
    });
    btnPlay.classList.add("black");
  }else{
    arrowA.forEach(item => {
      item.classList.remove("black")
    });
    rollingA.forEach((item)=>{
      item.classList.remove("black");
    });
    btnPlay.classList.remove("black");
  }
  slideRoll.forEach((item)=>{
  item.classList.remove("on");
});
slideRoll[bannerNumber].classList.add("on");
}


// content3 신제품 슬라이드
const con3Frame = document.querySelector("ul.new_slide");
const con3Each = document.querySelectorAll("ul.new_slide > li");

let lastNUM = con3Each.length-1; //0,1,2
let conNum = 0;
let conW = document.querySelector(".content3 > ul > li:first-child").offsetWidth; 

function autoSlide3(){
  conNum++;
  if(conNum>lastNUM) {
    conNum = 0;
  }
  con3Frame.style.transform = `translateX(${conW*-conNum}px)`
  autoSlide = setTimeout(autoSlide3, 5000);
}
let autoSlide = setTimeout(autoSlide3, 5000);


//content4 배너 슬라이드
const conNextBtn = document.querySelector("a.event_next");
const conPrevBtn =  document.querySelector("a.event_prev");
const con4Frame = document.querySelector(".content4 > ul");
const con4Each = document.querySelectorAll(".content4 > ul > li");
const eventImage = document.querySelectorAll(".content4 > ul > li > a > img");

let con4LastNum = con4Each.length-1;
let con4Num = 0;
let con4W = document.querySelector(".content4").clientWidth;

// next버튼 클릭
conNextBtn.addEventListener("click", e=>{
  e.preventDefault();
  con4Num++;
  if(con4Num>con4LastNum){
    con4Num=0;
  }
  con4Frame.style.left = `${con4W*-con4Num}px`;
});

// prev버튼 클릭
conPrevBtn.addEventListener("click", e=>{
  e.preventDefault();
  con4Num--;
  if(con4Num<0){
    con4Num=con4LastNum;
  }
  con4Frame.style.left = `${con4W*-con4Num}px`;
});

// 오토배너
function autoSlide4(){
  con4Num++;
  if(con4Num>con4LastNum) {
    con4Num = 0;
  }
  con4Frame.style.left = `${con4W*-con4Num}px`;
  auto4Slide = setTimeout(autoSlide4, 8000);
}
let auto4Slide = setTimeout(autoSlide4, 8000);

//con5 인기상품
const bestWrap = document.querySelector("div.best_items > ul");
const bestSection = document.querySelectorAll("div.best_items > ul > li");
const bestPrev = document.querySelector("a.best_prev");
const bestNext = document.querySelector("a.best_next");

window.addEventListener('resize',()=>{
  
  let bestNum = 0;
  let bestCount = bestSection.length;

  let bestWrapWidth = 344;
  let bestWrapMargin = 68;

  bestWrap.style.width = (bestWrapWidth + bestWrapMargin)*bestCount - bestWrapMargin + 'px';

  eventW = document.body.clientWidth;


  if(eventW < 640){
    //모바일
    bestWrap.style.transform = `translateX(110px)`;
    bestSlide(110);
    bestSection[0].classList.add("on");
    bestSection[1].classList.remove("on");
  }else if(eventW > 640 && eventW < 1024){
    //태블릿
    bestWrap.style.transform = `translateX(320px)`;
    bestSlide(320);
    bestSection[0].classList.add("on");
    bestSection[1].classList.remove("on");
  }else{
    //pc
    bestSlide(412);
    bestSection[0].classList.remove("on");
  }

  function bestSlide(liWidth){
    function moveSlide(num){
      bestWrap.style.transform = `translateX(${(-num*412)+liWidth}px)`;
      bestWrap.style.transition = 'transform 0.3s linear 0.1s';
      bestNum = num;
    }

    bestSection[0].classList.add('on');
  
    bestNext.addEventListener('click',(e)=>{
      e.preventDefault();
    
      if(bestNum < bestCount-1){
        moveSlide(bestNum+1);
        console.log(bestNum+1);
      }else{
        moveSlide(bestNum);
      }
    
      bestSection.forEach(item =>{
        item.classList.remove("on");
      });
    
      bestSection[bestNum].classList.add("on");
    });
    
    bestPrev.addEventListener('click',(e)=>{
      e.preventDefault();
    
      if(bestNum <= 0){
        moveSlide(bestNum);
      }else{
        moveSlide(bestNum-1);
        console.log(bestNum-1);
      }
    
      bestSection.forEach(item =>{
        item.classList.remove("on");
      });
    
      bestSection[bestNum].classList.add("on"); 
    });
  }
});


// content6 드래그 슬라이드
const kitchenItems = document.querySelector(".content6 > div");
const kitchenItem = document.querySelectorAll(".content6 > div > ul > li > div");

let isDown = false;
let startX;
let scrollLeft;

kitchenItems.addEventListener('mousedown',(e)=>{
  
  isDown=true;
  kitchenItems.classList.add("active");

  startX = e.pageX - kitchenItems.offsetLeft;
  console.log(startX);
  
  scrollLeft = kitchenItems.scrollLeft;

  kitchenItem.unbind("click").bind('dblclick',(e)=>{
    e.preventDefault();
  });
});

kitchenItems.addEventListener('mouseleave',()=>{
  isDown = false;
  kitchenItems.classList.remove("active");
});

kitchenItems.addEventListener('mouseup',()=>{
  isDown = false;
  kitchenItems.classList.remove("active");
});

kitchenItems.addEventListener('mousemove',(e)=>{
  if(!isDown) return;

  e.preventDefault();

  const x = e.pageX - kitchenItems.offsetLeft;
  const walk = (x - startX)*3;

  kitchenItems.scrollLeft = scrollLeft - walk;

  kitchenItem.unbind("click").bind('dblclick',(e)=>{
    e.preventDefault();
  });
});


// content7 탭메뉴
const group = document.querySelectorAll(".sns_menu > li > a");
const daily = document.querySelectorAll("ul.sns_detail > li.daily");
const today = document.querySelectorAll("ul.sns_detail > li.today");
const plate = document.querySelectorAll("ul.sns_detail > li.plate");
const together = document.querySelectorAll("ul.sns_detail > li.together");
const all = document.querySelectorAll(".sns_detail > li")

for(let k=0; k<group.length; k++){
  group[k].addEventListener('click',(e)=>{
    e.preventDefault();

    group.forEach((item)=>{
      item.classList.remove("on");
    });
    e.currentTarget.classList.add("on");

    all.forEach((item)=>{
      item.style.display = "none";
    });

    let className = e.currentTarget.parentElement.getAttribute("class");
    console.log(className);

    function snsCon(Name){
      Name.forEach((item)=>{
        item.style.display = "block";
      });
    }

    switch(className){
      case "all":
        snsCon(all);
      break;

      case "daily":
        snsCon(daily);
      break;

      case "today":
        snsCon(today);
      break;

      case "plate":
        snsCon(plate);
      break;

      case "together":
        snsCon(together);
      break;

      default:
        console.log("error");
      break;
    }
  });
}

// 탑버튼
const topBtn = document.querySelector('a.btn_top');

topBtn.addEventListener('click',(e)=>{
  e.preventDefault();

  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

});

window.addEventListener('scroll',()=>{
  let scrollHt = window.scrollY;
  console.log(scrollHt);

  if(scrollHt <= 0){
    topBtn.classList.remove('on');
    topBtn.classList.remove('ab');
  }else if(scrollHt > 0 && scrollHt < 6300){
    topBtn.classList.add('on');
    topBtn.classList.remove('ab');
  }else{
    topBtn.classList.add("on");
    topBtn.classList.add("ab");
  }
});

});