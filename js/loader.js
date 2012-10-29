nImages = $('.slide').length;
loadedImgs = 0;
var bgImages = ['img/bbb.png','img/bbb2.png','img/bbb3.png'];

$('.slide').each(function(i){
    var curSlide = $(this);
    var img = new Image();
    
    $(img).load(function(){
        curSlide.css('backgroundImage', 'url(' + img.src + ')');
        loadedImgs++;
        if(nImages == loadedImgs){
            $('#container').css('visibility','visible');
            $('#loader-cont').fadeOut(1000);
        }
        $('.loader-inner .title').text('loading...' + ((loadedImgs / nImages) * 100) + '%');
    })
    img.src = bgImages[ i % 3 ];
})    
