var bgImages = {
                '#p1-1':'img/a1.jpg',
                '#p1-2':'img/a2.jpg',
                '#p2-1':'img/a3.jpg',
                //'#p2-2':'img/a4.jpg',
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
                '#p3-10':'img/a15.jpg',
                '#p4-1':'img/b1.jpg',
                '#p5-1':'img/b2.jpg',
                '#p5-2':'img/b3.jpg',
                '#p5-3':'img/b4.jpg',
                '#p5-4':'img/b5.jpg',
                '#p5-5':'img/b6.jpg',
                '#p5-6':'img/b7.jpg',
                '#p5-7':'img/b8.jpg',
                '#p5-8':'img/b9.jpg',
                '#p5-9':'img/b10.jpg',
                '#p5-10':'img/b11.jpg',
                '#p5-11':'img/b12.jpg',
                '#p6-1':'img/b13.jpg',
                '#p6-2':'img/b14.jpg'
}

//nImages = $('.slide').length;
nImages = Object.keys(bgImages).length
loadedImgs = 0;
/* OLD LOOP
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
        console.log(img.src, curSlide)
    })
})*/

//NEW LOOP
for(var key in bgImages){
    if(bgImages.hasOwnProperty(key)){
        var curSlide = $(key);
        var img = new Image();
        var bgImg = bgImages[key];
        curSlide.css('backgroundImage', 'url(' + bgImg + ')');

        $(img).load(function(){

            loadedImgs++;

            if(nImages == loadedImgs){
                $('#container').css('visibility','visible');
                $('#loader-cont').fadeOut(1000);
                $('#choco-menu').css('display','block');
            }
            var percentage = Math.round((loadedImgs / nImages) * 100);
            $('.loader-inner .title .number').text( percentage + '%');
            $('#load-bar').css('width', percentage + '%');
        })
    img.src = bgImages[key];
    }   
}