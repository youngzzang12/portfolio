$(function(){

  $('.nav > ul > li').mouseover(function(){
    // 서브메뉴가 아래로 내려가라.
    $(this).find('.submenu').stop().slideDown(200)
  })
  // 메뉴에 마우스가 아웃되었을때
  $('.nav > ul > li').mouseout(function(){
    //서브메뉴가 위로 올라가라.
    $('.submenu').stop().slideUp(200)
  })

  //focus가 들어왔을때 
  $('.nav > ul > li').focusin(function(){
    // 서브메뉴가 아래로 내려가라.
    $(this).find('.submenu').stop().slideDown(200)
    $(this).addClass('on')
  })

  //focus가 아웃되었을때
  $('.nav > ul > li').focusout(function(){
    $('.submenu').stop().slideUp(200)
    $(this).removeClass('on')
  })

 
  //  이벤트애니메이션
  let slide_n = 0
  setInterval(move,20000)
  move()
  function move(){
    slide_n++
    if(slide_n==2){
      $('.event_slide_wrapper').stop().css({left:0})
      slide_n = 1
    }
    console.log(slide_n)
    $('.event_slide_wrapper').stop().animate({left:-1200*slide_n},20000,'linear')
  }


    $('.event_input input').focus(function(){
      $(this).addClass('outline')
    })

    $('.event_input input').blur(function(){
        $(this).removeClass('outline')
    })

  



  // 팝업

  $('.first').click(function(){
    $('.popup').fadeIn()
  })
  $('.close').click(function(){
    $('.popup').fadeOut()
  })


})
