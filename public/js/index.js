$('.bars').click(function() {
	$('.moh-nav').toggleClass('active')
})

$('.moh-nav, .mohnavi-wrapper .moh-close').click(function() {
	$('.moh-nav').removeClass('active')
})

$(".header-wrapper .monavi").click(function(){
	$('.monavi-wrapper').removeClass('active')
})



$('.modal-wrapper').click(function(){
	$(this).css('display', 'none')
})

$('.img-wrapper > .img-wrap > img').click(function(){
	var src = $(this).attr('src')
	var desc = $(this).attr('alt')
	$('.modal-wrapper').css('display', 'block')    /* 일단 큰 틀이 먼저 보여지면서 만들어져야 아래의 트랜지션을 수행할 수 있음 */
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(0)')
	$('.modal-wrapper .modal-wrap').css('transform')    /* transform을 한번 더 입력해줘야 0값을 인식하여 반영됨 */
	$('.modal-wrapper .modal-img').attr('src', src)
	$('.modal-wrapper .modal-title').text(desc)
	$('.modal-wrapper .modal-wrap').css('transform', 'scale(1)')
})