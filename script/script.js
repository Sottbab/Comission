$(document).ready(function(){

  //slide- 대문, 샘플 탭 
  setInterval(function(){
    $('.film').delay(2300);
    $('.film').animate({'marginLeft':
'-1200px'},700);
    $('.film').delay(2300);
    $('.film').animate({'marginLeft':
'-2400px'},700);
   /* $('.film').delay(2300);
    $('.film').animate({'marginLeft':
'-3600px'},700);*/
    $('.film').delay(2300);
    $('.film').animate({'marginLeft':
'0px'},700);
  });

  //tab
  $('.drawing_title').addClass('active');
  $('.cartoon_title').click(function(){
    $('.drawing').hide();
    $('.cartoon').show();

    $('.drawing_title').removeClass('active');
    $('.cartoon_title').addClass('active');
  });
  $('.drawing_title').click(function(){
    $('.cartoon').hide();
    $('.drawing').show();

    $('.cartoon_title').removeClass('active');
    $('.drawing_title').addClass('active');
  });

    //scroll
    $(window).scroll(function(){ //화면 스크롤 시 
        //보임 
        if ($(this).scrollTop() >= Math.ceil($('.shortcut').offset().top))
            {
                //이것(화면)의 바닥이 >= '.샘플 탭 위'의 .바닥에 닿으면 
                $('.notice,.sample').slideDown(500);
                $('.explain').delay(100);
                 $('.explain').animate({left:'800px'},400);
                //설명 칸을 왼쪽으로 400픽셀만큼 등장시키기 
                $('.contact').delay(200);
                $('.contact').slideDown(500);
                $('.to_top').slideDown(200);
            }
    });
       
    
    $('.menu li,.pre_notice>ul>li>a,.direct>a').mouseover(function(){
        $('.notice,.sample,.contact').show();
    });
     $('.menu li,.pre_notice>ul>li>a,.direct>a').click(function(){
          $('.explain').animate({left:'800px'},400);
    });
});