
$(function(){
   
    // 메뉴
    let links = gsap.utils.toArray('#parallax__nav ul li a')
    // console.log(links);
    links.forEach(link=>{
        let element = link.getAttribute('href') //#section1,...#section9
        // console.log(element)
        let linkST = ScrollTrigger.create({
            trigger:element,
            start:"top top",
        })

        ScrollTrigger.create({
            trigger:element,
            start:"top center",
            end:"bottom center",
            onToggle: self => setActive(link)
            //해당 sectoin에 들어갔을때 자신의 상태를 true/false로 반환해줘라(시작했으면 true/끝났으면  false)
        })

        //클릭할때 화면이 해당하는 #section.top값으로 이동
        link.addEventListener('click', e=>{
            e.preventDefault(); //링크차단
            gsap.to(window,{
                duration:1,
                scrollTo:linkST.start,
                overwrite:"auto", /* 애니메이션이 여러번발생해서 에러처럼 보이는것을 방지하기위해 한번만 실행 */
            })
        })
    })
    
    //해당하는 link에 클래스 추가/모든 link에 클래스 제거
    function setActive(link){
        links.forEach(el => el.classList.remove('active'))
        link.classList.add('active')
    }
    $('#parallax__title').hide()
    $(window).scroll(function(){
        let cScroll = $(this).scrollTop()
    let offset =  $('#section2').offset().top //0,918,1836....
    if(cScroll >=offset){
        $('#parallax__title').show()
    }else{
        $('#parallax__title').hide() 
    }

    
    console.log(cScroll);
})
    
// section3 스와이퍼
var swiper = new Swiper(".web_slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });


    // 텍스트애니메이션
    gsap.from('.t1',{
        y:-500,
        autoAlpha:0,
        duration:2,
    })

    const targets = gsap.utils.toArray(".split")

    targets.forEach(target=>{
        let SplitClient = new SplitType(target, {type:"lines, words, chars"})
        let lines = SplitClient.lines;
        let words = SplitClient.words;
        let chars = SplitClient.chars;

        gsap.from(chars,{
            yPercent:100,
            autoAlpha:0,
            delay:2,
            duration:2,
            ease:"circ.out",
            stagger:{
                amount:1,
                from:"random",
            },
            scrollTrigger:{
                trigger:target,
                start:"top bottom",
                end:"+=400",
                // markers:true,
            }
        })
    })
   $('.t3').click(function(){
    let offset =  $('#section2').offset().top 
    $('html,body').animate({scrollTop:offset})
   })

   //컬러박스
    $('.detail_list a').colorbox();
    $('.design_page a').colorbox();
})
