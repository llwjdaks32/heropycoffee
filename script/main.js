/* 292.p*/
const badgeEl= document.querySelector('.badges');
const topBtnEl=document.querySelector('#top_btn');

topBtnEl.addEventListener('click',function(){
    gsap.to(window, .6,{ //브라우저를 선택하여 0.6초만에
        scrollTo: 0 //스크롤 꼭대기 0까지 올라간다.
    });
}); 

window.addEventListener('scroll', function(){
    console.log(window.scrollY); //스크롤값 확인하기
    if(760<window.scrollY){
        // badgeEl.style.display='none';
        gsap.to(badgeEl,0.6,{
            opacity:0,
            display:'none'
        });
        gsap.to(topBtnEl,0.6,{
            opacity:1,
            // x:0
        });
    }else{
        // badgeEl.style.display='block';
        gsap.to(badgeEl,0.6,{
            opacity:1,
            display:'block'
        });
        gsap.to(topBtnEl,0.6,{
            opacity:0,
            // x:0
        });
    }
});

/*gsap.to(요소,시간,속성)*/ 

const fadeEl=document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl,index){
 gsap.to(fadeEl,1,{
    delay:(index+1)*0.7,//0.7초씩 느리게 시간을 추가
    opacity:1
});
});

// const promotionEl= document.querySelector("section.promotion");
// const promotionToggleBtn= document.querySelector(".n_inner__right>.material-icons");
// //토글 클릭시
// promotionToggleBtn.addEventListener('click',function(){
//     if(promotionEl.classList.contains('hide')) {
//         promotionEl.classList.remove('hide');
//     }else{
//         promotionEl.classList.add('hide');
//     }
// });

//커피프로모션 토글아이콘 클릭시 박스 숨기고/ 나타내기

const promotionEl = document.querySelector('section.promotion');
const toggleBtnEl = document.querySelector('.toggle_btn');

//토글버튼을 클릭하면 프로모션의 크기가 변한다.

toggleBtnEl.addEventListener('click',function(){
    if(promotionEl.classList.contains('hide')){//만약에 promotion클래스에 hide서식이 있다면 조건에 맞으면
        promotionEl.classList.remove('hide')//높이 663이되어야
    }else{//그렇지 않으면
        promotionEl.classList.add('hide')//높이가 0원래대로
    }
});

// 6, 7, 8, 10 컨텐츠가 화면의 80%지점에 보일 때 동작하는 스크립트
const spyEl = document.querySelectorAll('section.scroll-spy');

spyEl.forEach(function (spyEl) {

    new ScrollMagic
    .Scene({ //감시할 장면을 추가
        triggerElement: spyEl,
        triggerHook: .8 //화면의 80% 지점에서 동작
    })
    .setClassToggle(spyEl, 'show') //show클래스를 적용하거나 해제하기
    .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다
});

