// 高清方案
var scale = 1 / window.devicePixelRatio;
var metaEl = document.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = document.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    document.head.appendChild(metaEl);
  }
metaEl.setAttribute('content', 'width=device-width,initial-scale=' +
    scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
// 字体自适应html（rem）
//--基准以750像素计算 
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';



