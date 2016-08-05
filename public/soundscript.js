$('.sound').on('click',function(evt) {
  $(this).mouseleave(function (evt){
    $(evt.target).css('background-image','url()')
  })
 var file = $(this).data('soundfile')
 var sound = new Audio()
 var image = $(this).data('image')
 console.log(image)
 $(evt.target).css('background-image', 'url(midi8.png)')
 sound.src = file
 sound.play()
})
