nImages = $('.slide').length;
loadedImgs = 0;

var bgImages = {
                '#p1-1':'img/a1.jpg',
                '#p1-2':'img/a2.jpg',
                '#p2-1':'img/a3.jpg',
                '#p2-2':'img/a4.jpg',
                '#p2-3':'img/a5.jpg',
                '#p3-1':'img/a6.jpg',
                '#p3-2':'img/a7.jpg',
                '#p3-3':'img/a8.jpg',
                '#p3-4':'img/a9.jpg',
                '#p3-5':'img/a10.jpg',
                '#p3-6':'img/a11.jpg',
                '#p3-7':'img/a12.jpg',
                '#p3-8':'img/a13.jpg',
                '#p3-9':'img/a14.jpg',
                '#p3-10':'img/a15.jpg'
}


$('.project').each(function(i){
    i = i + 1;
    var curP = $(this);
    curP.find('.slide').each(function(q){
        q = q + 1;
        curS = $(this);
        var curSlideIndex = '#p' + i + '-' + q;
        var curSlide = $(curSlideIndex);
        var img = new Image();

        $(img).load(function(){
            curSlide.css('backgroundImage', 'url(' + img.src + ')');
            loadedImgs++;
            if(nImages == loadedImgs){
                $('#container').css('visibility','visible');
                $('#loader-cont').fadeOut(1000);
            }
            $('.loader-inner .title .number').text( Math.round((loadedImgs / nImages) * 100) + '%');
        })
        img.src = bgImages[curSlideIndex];
        
    })
})
