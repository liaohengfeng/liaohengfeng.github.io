var d = new Date();
m=d.getMonth()+1;
dd=d.getDate();
y=d.getFullYear();

//cookie函数
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        break;
            default:
                return 0;
            break;
    }
}
//纪念日
if(m==9&&dd==18){
    console.log("勿忘国耻，振兴中华！\n\n今天是1931年9月18日九一八事变"+(y-1931).toString()+"周年纪念日！\n=================================================================")
    document.getElementsByTagName("html")[0].setAttribute("style","filter: grayscale(100%);");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("今天是1931年9月18日九一八事变"+(y-1931).toString()+"周年纪念日。\n勿忘国耻，振兴中华！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==3&&dd==21){
    Swal.fire("今天是2023年3月21日AK King组事件"+(y-2023).toString()+"周年纪念日。\n勿忘国耻，振我大明！");
    document.getElementsByTagName("html")[0].setAttribute("style","filter: grayscale(100%);");
    if(sessionStorage.getItem("isPopupWindow")!="3"){
        console.log("勿忘国耻，振我大明！\n\n今天是2023年3月21日AKing组事件"+(y-2023).toString()+"周年纪念日！\n=================================================================")
        sessionStorage.setItem("isPopupWindow","3");
    }
}

//生日
if(m==3&&dd==14){//yzq生日
    Swal.fire("今天是杨梓骞的生日，让我们祝杨梓骞永远快乐！\n让我们在 ACM 赛场上见！");
    if(sessionStorage.getItem("isPopupWindow")!="2"){
        console.log("今天是杨梓骞的生日，让我们祝杨梓骞永远快乐！\n让我们在 ACM 赛场上见！");
        sessionStorage.setItem("isPopupWindow","2");
    }
}
if(m==3&&dd==31){//myq生日
    Swal.fire("今天是梅胤清的生日，让我们祝梅胤清永远快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="2"){
        console.log("今天是梅胤清的生日，让我们祝梅胤清永远快乐！");
        sessionStorage.setItem("isPopupWindow","2");
    }
}


//节假日
if(m==10&&dd<=5){//国庆节
    console.log("祖国"+(y-1949).toString()+"岁生日快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("祖国"+(y-1949).toString()+"岁生日快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==8&&dd==15){//搞来玩的，鬼子投降
    console.log("鬼子投降"+(y-1945).toString()+"年了！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("鬼子投降"+(y-1945).toString()+"年了！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}

if(m==1&&dd==1){//元旦节
    console.log(y.toString()+"年元旦快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1")
    {
        Swal.fire(y.toString()+"年元旦快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==3&&dd==8){//妇女节
    console.log("各位女神们，妇女节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("各位女神们，妇女节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
l=["震惊！微软让Minecraft Java免费了！","Minecraft竟然违背Mojang的原则发布2.0！","非常抱歉，因为不可控原因，博客将于明天停止运营，再见","好消息，日本没了！","美国垮了，背后原因竟是时刻心心念念想着祖国的川普！","微软垮了！"]

if(m==4&&dd==1){//愚人节，随机谎话
    Swal.fire(l[randomNum(0,l.length-1)]);
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        console.log(l[randomNum(0,l.length-1)]);
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==5&&dd==1){//劳动节
    console.log("劳动节快乐！为助力各行各业发展辛勤工作的人们致敬！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("劳动节快乐！为助力各行各业发展辛勤工作的人们致敬！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==5&&dd==4){//青年节
    console.log("为有思想政治觉悟，拥护中国共产党，追求无产阶级、共产主义、马克思主义的青年们致敬！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("为有思想政治觉悟，拥护中国共产党，追求无产阶级、共产主义、马克思主义的青年们致敬");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==6&&dd==1){//儿童节
    console.log("各位小朋友们，儿童节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("各位小朋友们，儿童节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if(m==7&&dd==1){//建党节
    console.log("中国共产党"+(y-1921).toString()+"岁生日快乐");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("中国共产党"+(y-1921).toString()+"岁生日快乐");
        sessionStorage.setItem("isPopupWindow","1");
    }
}

//传统节日部分

if(m==4&&dd==4||(m==4&&dd==5)){//清明节
    console.log("清明安康");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("清明安康");
        sessionStorage.setItem("isPopupWindow","1");
    }
}

var calendar=function(){"use strict";var b={lunarInfo:[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,92821,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,37600,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],solarMonth:[31,28,31,30,31,30,31,31,30,31,30,31],Gan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],Zhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],Animals:["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],festival:{"1-1":{title:"元旦节"},"2-14":{title:"情人节"},"5-1":{title:"劳动节"},"5-4":{title:"青年节"},"6-1":{title:"儿童节"},"9-10":{title:"教师节"},"10-1":{title:"国庆节"},"12-25":{title:"圣诞节"},"3-8":{title:"妇女节"},"3-12":{title:"植树节"},"4-1":{title:"愚人节"},"5-12":{title:"护士节"},"7-1":{title:"建党节"},"8-1":{title:"建军节"},"12-24":{title:"平安夜"}},lFestival:{"12-30":{title:"除夕"},"1-1":{title:"春节"},"1-15":{title:"元宵节"},"2-2":{title:"龙抬头"},"5-5":{title:"端午节"},"7-7":{title:"七夕节"},"7-15":{title:"中元节"},"8-15":{title:"中秋节"},"9-9":{title:"重阳节"},"10-1":{title:"寒衣节"},"10-15":{title:"下元节"},"12-8":{title:"腊八节"},"12-23":{title:"北方小年"},"12-24":{title:"南方小年"}},solarTerm:["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],sTermInfo:["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],nStr1:["日","一","二","三","四","五","六","七","八","九","十"],nStr2:["初","十","廿","卅"],nStr3:["正","二","三","四","五","六","七","八","九","十","冬","腊"],getFestival:function(){return this.festival},getLunarFestival:function(){return this.lFestival},setFestival:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.festival=b},setLunarFestival:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.lFestival=b},lYearDays:function(b){var f,e=348;for(f=32768;f>8;f>>=1)e+=this.lunarInfo[b-1900]&f?1:0;return e+this.leapDays(b)},leapMonth:function(b){return 15&this.lunarInfo[b-1900]},leapDays:function(b){return this.leapMonth(b)?65536&this.lunarInfo[b-1900]?30:29:0},monthDays:function(b,f){return f>12||f<1?-1:this.lunarInfo[b-1900]&65536>>f?30:29},solarDays:function(b,f){if(f>12||f<1)return-1;var e=f-1;return 1===e?b%4==0&&b%100!=0||b%400==0?29:28:this.solarMonth[e]},toGanZhiYear:function(b){var f=(b-3)%10,e=(b-3)%12;return 0===f&&(f=10),0===e&&(e=12),this.Gan[f-1]+this.Zhi[e-1]},toAstro:function(b,f){return"摩羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手摩羯".substr(2*b-(f<[20,19,21,21,21,22,23,23,23,23,22,22][b-1]?2:0),2)+"座"},toGanZhi:function(b){return this.Gan[b%10]+this.Zhi[b%12]},getTerm:function(b,f){if(b<1900||b>2100||f<1||f>24)return-1;for(var e=this.sTermInfo[b-1900],c=[],t=0;t<e.length;t+=5){var a=parseInt("0x"+e.substr(t,5)).toString();c.push(a[0],a.substr(1,2),a[3],a.substr(4,2))}return parseInt(c[f-1])},toChinaMonth:function(b){if(b>12||b<1)return-1;var f=this.nStr3[b-1];return f+="月"},toChinaDay:function(b){var f;switch(b){case 10:f="初十";break;case 20:f="二十";break;case 30:f="三十";break;default:f=this.nStr2[Math.floor(b/10)],f+=this.nStr1[b%10]}return f},getAnimal:function(b){return this.Animals[(b-4)%12]},solar2lunar:function(b,f,e){var c,t=parseInt(b),a=parseInt(f),r=parseInt(e);if(t<1900||t>2100)return-1;if(1900===t&&1===a&&r<31)return-1;var n,i,d=0;t=(c=t?new Date(t,parseInt(a)-1,r):new Date).getFullYear(),a=c.getMonth()+1,r=c.getDate();var s=(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate())-Date.UTC(1900,0,31))/864e5;for(n=1900;n<2101&&s>0;n++)s-=d=this.lYearDays(n);s<0&&(s+=d,n--);var l=new Date,h=!1;l.getFullYear()===t&&l.getMonth()+1===a&&l.getDate()===r&&(h=!0);var o=c.getDay(),u=this.nStr1[o];0===o&&(o=7);var v=n;i=this.leapMonth(n);var D=!1;for(n=1;n<13&&s>0;n++)i>0&&n===i+1&&!1===D?(--n,D=!0,d=this.leapDays(v)):d=this.monthDays(v,n),!0===D&&n===i+1&&(D=!1),s-=d;0===s&&i>0&&n===i+1&&(D?D=!1:(D=!0,--n)),s<0&&(s+=d,--n);var g=n,y=s+1,p=a-1,m=this.toGanZhiYear(v),I=this.getTerm(t,2*a-1),M=this.getTerm(t,2*a),T=this.toGanZhi(12*(t-1900)+a+11);r>=I&&(T=this.toGanZhi(12*(t-1900)+a+12));var C=!1,F=null;I===r&&(C=!0,F=this.solarTerm[2*a-2]),M===r&&(C=!0,F=this.solarTerm[2*a-1]);var Y=Date.UTC(t,p,1,0,0,0,0)/864e5+25567+10,G=this.toGanZhi(Y+r-1),Z=this.toAstro(a,r),S=t+"-"+a+"-"+r,A=v+"-"+g+"-"+y,U=this.festival,k=this.lFestival,w=a+"-"+r,z=g+"-"+y;return 12===g&&29===y&&29===this.monthDays(v,g)&&(z="12-30"),{date:S,lunarDate:A,festival:U[w]?U[w].title:null,lunarFestival:k[z]?k[z].title:null,lYear:v,lMonth:g,lDay:y,Animal:this.getAnimal(v),IMonthCn:(D?"闰":"")+this.toChinaMonth(g),IDayCn:this.toChinaDay(y),cYear:t,cMonth:a,cDay:r,gzYear:m,gzMonth:T,gzDay:G,isToday:h,isLeap:D,nWeek:o,ncWeek:"星期"+u,isTerm:C,Term:F,astro:Z}},lunar2solar:function(b,f,e,c){b=parseInt(b),f=parseInt(f),e=parseInt(e),c=!!c;var t=this.leapMonth(b);if(this.leapDays(b),c&&t!==f)return-1;if(2100===b&&12===f&&e>1||1900===b&&1===f&&e<31)return-1;var a=this.monthDays(b,f),r=a;if(c&&(r=this.leapDays(b,f)),b<1900||b>2100||e>r)return-1;var n,i=0;for(n=1900;n<b;n++)i+=this.lYearDays(n);var d=0,s=!1;for(n=1;n<f;n++)d=this.leapMonth(b),s||d<=n&&d>0&&(i+=this.leapDays(b),s=!0),i+=this.monthDays(b,n);c&&(i+=a);var l=Date.UTC(1900,1,30,0,0,0),h=new Date(864e5*(i+e-31)+l),o=h.getUTCFullYear(),u=h.getUTCMonth()+1,v=h.getUTCDate();return this.solar2lunar(o,u,v)}};return b}();

var lunar=calendar.solar2lunar(y,m,dd);
var Iy=lunar.gzYear;
var Im=lunar.IMonthCn;
var Id=lunar.IDayCn;

console.log("今天是"+Iy+"年"+Im+Id+" ");

if((Im=="正月"&&Id=="初六")||(Im=="正月"&&Id=="初五")||(Im=="正月"&&Id=="初四")||(Im=="正月"&&Id=="初三")||(Im=="正月"&&Id=="初二")||(Im=="正月"&&Id=="初一")||(Im=="腊月"&&Id=="三十")||(Im=="腊月"&&Id=="廿九")){
    //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
    Swal.fire(y.toString()+"年新年快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        console.log(y.toString()+"年新年快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="正月"&&Id=="十五")){
    //元宵节
    console.log("元宵节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("元宵节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="正月"&&Id=="十五")){
    //元宵节
    Swal.fire("元宵节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        console.log("元宵节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="五月"&&Id=="初五")){
    //端午节
    console.log("端午节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("端午节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="七月"&&Id=="初七")){
    //七夕节
    Swal.fire("七夕节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        console.log("七夕节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="八月"&&Id=="十五")){
    //中秋节
    console.log("中秋节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("中秋节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
if((Im=="九月"&&Id=="初九")){
    //重阳节
    console.log("重阳节快乐！");
    if(sessionStorage.getItem("isPopupWindow")!="1"){
        Swal.fire("重阳节快乐！");
        sessionStorage.setItem("isPopupWindow","1");
    }
}
