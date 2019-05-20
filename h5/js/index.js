window.onload = function () {
    //HTML  font-size属性值根据屏幕缩放
    function HTMLFontSize() {
        let win = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = win / 7.5 + 'px';
        console.log('html字体大小', document.documentElement.style.fontSize);
    }
    HTMLFontSize()

    // 音乐图标旋转开关
    let ico = document.getElementById('ico');
    let a = true; //开关
    //控制开关函数 添加移出类名
    function icoSwitch(e) {
        if (a) {
            this.classList.add('icoSwitch');
            a = !a;
        } else {
            this.classList.remove('icoSwitch');
            a = !a;
        }
    }
    //给按钮绑定触摸离开事件
    ico.addEventListener('touchend', icoSwitch, false);

    let mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // // 如果需要分页器
        // pagination: '.swiper-pagination',

        // // 如果需要前进后退按钮
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',

        // // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        // on: {
        //     init: function () {
        //         swiperAnimateCache(this); //隐藏动画元素 
        //         swiperAnimate(this); //初始化完成开始动画
        //     },
        //     slideChangeTransitionEnd: function () {
        //         swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        //         //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        //     }
        // }
    })

}