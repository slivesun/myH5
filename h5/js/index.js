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
ico.addEventListener('touchend', icoSwitch, false)