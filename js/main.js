const slide_w = document.querySelector('.slide-wrapper');
const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('.slide li');
const r_btn = document.querySelector('.next');
const l_btn = document.querySelector('.prev');
const img_n = slide_img.length;//목록개수
console.log(img_n);
const img_w = 300;//이미지 한장 너비
const m = 30; // 마진값
const s_con = 3; //보여줄 개수

let count = 0;

//감싸는 부모요소의 너비를 구학
slide.style.width = (img_w+m)*img_n - m +'px';
//1620 = (300+30)*5-30px

//함수작성
function mslide(n){
  slide.style.left = -(img_w+m)*n + 'px';
  count = n;
  console.log(slide.style.left)
  
}
//3초마다 mslide를 호출하여 자동으로 움직이게함

var Timer = setInterval(function(){
  if(count < img_n-s_con){
    mslide(count+1);
    
  }
  else{
    mslide(0);
  }
},3000)

//버튼 클릭시해당 방향으로 움직이게 하기
l_btn.addEventListener('click',function(){
  if(count > 0){
    mslide(count-1);
    
  }
  else{
    mslide(img_n-s_con);
  }
})
r_btn.addEventListener('click',function(){
  if(count < img_n-s_con){
    mslide(count+1);
    
  }
  else{
    mslide(0);
  }
})


