$(clickMe).on('click', function() {
    $(popover).show()
    console.log('show')
    $(document).one('click', function() {
        console.log('触发了')
        $(popover).hide()
    })
})
$(wrapper).on('click', function(e) {
    e.stopPropagation()
    console.log('阻止了冒泡')
})

///第二种方法
//$(clickMe).on('click', function() {
//   $(popover).show()
//    setTimeout(function() {
//        $(document).one('click',function(){
//            $(popover).hide()
//        })
//   },0)
//})