$(function () {
    $('.silder_btn').click(function () {
        Show()
    })
    $('.mask').click(function (){
        Hide()})
    function Show() {
        $('.mask').fadeIn()
        $('.silder').css('right', 0)
    }
    function Hide() {
        $('.mask').fadeOut()
        $('.silder').css('right', -300 + 'px')
    }
    $('.top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 300)
    })
})