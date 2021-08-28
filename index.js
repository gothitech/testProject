const txt = document.getElementById('text');
const txt_slider_div = document.getElementById('txt_lsider_div');


// slider two
const txt_slider_main_div = document.getElementById('text-slider-main');

const textSliderTwo = document.getElementById('text-slider1-content');

const total_width = txt_slider_main_div.clientWidth;

textSliderTwo.style.transform = 'translateX(-' + textSliderTwo.clientWidth +'px)';
// textSliderTwo.style.transform = 'translateX(' + total_width +'px)';
// 1904
// 702
// 1904-702
// 1202
// 2606
console.log(total_width);
console.log(textSliderTwo.clientWidth);
var x = 702-30;

var y = 30;

const sliderFunc = (element)=>{
    // element.style.position = 'relative';
    // element.style.transform = 'translateX(-'+ (x) +'px)';
    x = x - 30;
    if(x <= 0){
        element.style.transform = 'translateX('+ (y) +'px)';
        y = y + 30;
        if(y >= 1904){
            element.style.transform = 'translateX(-'+ 2606+702 +'px)';
            y = 30;
            x = 702 - 30;
            // break
        }
    }else{
        element.style.position = 'relative';
        element.style.transform = 'translateX(-'+ (x) +'px)';
    }
};


setInterval(() => {
    sliderFunc(textSliderTwo);
    console.log("I am calling");
}, 150);

