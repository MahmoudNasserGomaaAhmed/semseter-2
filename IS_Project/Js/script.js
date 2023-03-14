var i=0;
var images=[];
var time=3000 ;

// image list
images[0]='photos/fayoum-block.jpeg';
images[1]='photos/img_4_1639599699622.jpg';
images[2]='photos/img_2_1639599369569.jpg';
images[3]='photos/img_3_1639599533192.jpg';
images[4]='photos/img_1_1639599280940.jpg';
//change image
function changeimg(){
    document.slide.src=images[i];
    if(i<images.length-1){
i++;

    }else{
        i=0;
    }
    setTimeout("changeimg()",time);
}
window.onload=changeimg;

