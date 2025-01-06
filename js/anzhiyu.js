var anzhiyu = {
  // 音乐节目切换背景
  changeMusicBg: function (isChangeBg = true) {
    if (window.location.pathname != "/music/") {
      return;
    }
    const anMusicBg = document.getElementById("an_music_bg");
    if (isChangeBg) {
      // player listswitch 会进入此处
      const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
      anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
    } else {
      // 第一次进入，绑定事件，改背景
      let timer = setInterval(() => {
        const musiccover = document.querySelector("#anMusic-page .aplayer-pic");
        // 确保player加载完成
        if (musiccover) {
          clearInterval(timer);
          anMusicBg.style.backgroundImage = musiccover.style.backgroundImage;
          // 绑定事件
          anzhiyu.addEventListenerChangeMusicBg();
        }
      }, 100);
    }
  },
  addEventListenerChangeMusicBg: function () {
    const anMusicPage = document.getElementById("anMusic-page");
    const aplayerIconMenu = anMusicPage.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");

    var musicVolume = 0.8;
    anMusicPage.querySelector("meting-js").aplayer.volume(0.8, true);
    anMusicPage.querySelector("meting-js").aplayer.on("loadeddata", function () {
      anzhiyu.changeMusicBg();
      console.info("player loadeddata");
    });

    aplayerIconMenu.addEventListener("click", function () {
      document.getElementById("menu-mask").style.display = "block";
      document.getElementById("menu-mask").style.animation = "0.5s ease 0s 1 normal none running to_show";
    });

    document.getElementById("menu-mask").addEventListener("click", function () {
      if (window.location.pathname != "/music/") return;
      anMusicPage.querySelector(".aplayer-list").classList.remove("aplayer-list-hide");
    });
    document.addEventListener("keydown", function (event) {
        // console.log("dsassd");
        //暂停开启音乐
        if (event.code === "Space") {
            event.preventDefault();
            anMusicPage.querySelector("meting-js").aplayer.toggle();
        }
        //切换下一曲
        if (event.keyCode === 39) {
            event.preventDefault();
            anMusicPage.querySelector("meting-js").aplayer.skipForward();
        }
        //切换上一曲
        if (event.keyCode === 37) {
            event.preventDefault();
            anMusicPage.querySelector("meting-js").aplayer.skipBack();
        }
        //增加音量
        if (event.keyCode === 38) {
            // console.log(musicVolume);
            if (musicVolume < 1) {
                musicVolume += 0.1;
                anMusicPage.querySelector("meting-js").aplayer.volume(musicVolume, true);
                // console.log(musicVolume);
            }
        }
        //减小音量
        if (event.keyCode === 40) {
            if (musicVolume > 0) {
                musicVolume += -0.1;
                anMusicPage.querySelector("meting-js").aplayer.volume(musicVolume, true);
                // console.log(musicVolume);
            }
        }
    });
  },
};

// 调用
anzhiyu.changeMusicBg(false);
