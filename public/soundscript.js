$('.sound').on('click',function() {
 var file = $(this).data('soundfile')
 var sound = new Audio()
 sound.src = file
 sound.play()
})
