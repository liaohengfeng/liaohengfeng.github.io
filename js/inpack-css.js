if (window.location.pathname == "/music/") document.write('<link rel="stylesheet" href="/js/music.css">');
if (window.location.pathname != "/") document.write('<link rel="stylesheet" href="/js/hover.css">');
let lantern = new Lantern('lantern-wrapper', {
    date: { // 日期格式：'月-日'
        from: '12-28',  // 开始悬挂灯笼的日期
        to: '1-17'  // 结束悬挂灯笼的日期
    },
    postion: {
        zIndex: 10, // 整个灯笼的 z-index 属性
        lanternRL: [10, 150, 150, 10],  // 灯笼距离边界的距离：左侧灯笼距离左边的距离，右侧登录距离右侧的距离；页面灯笼从左往右依次设置
        lanternTop: 0 // 灯笼距离顶部的距离。你也可以使用数组从左往右依次设置每个灯笼的距顶距离，例如：[0, 100, 200, 300]
    },
    content: '新春快乐' // 灯笼内显示的文字，只会截取前四个字符
});
