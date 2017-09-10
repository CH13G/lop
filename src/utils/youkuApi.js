/**
 * Created by xdanger.liu on 2017/3/14.
 */
const YK = {};
YK.https = location.protocol == 'https:' ? 'https:' : 'http:';

const DEBUG__ = 0;

let console = window.console;
if (!console) {
  console = {};
  console.log = function () {};
}

const debug = {};
debug.log = function (log) {
  if (DEBUG__) {
    console.log(log);
  }
};
window.YKU = {};
const YKP = {
  playerType: '',

  playerState: {
    PLAYER_STATE_INIT: 'PLAYER_STATE_INIT',
    PLAYER_STATE_READY: 'PLAYER_STATE_READY',
    PLAYER_STATE_AD: 'PLAYER_STATE_AD',
    PLAYER_STATE_PLAYING: 'PLAYER_STATE_PLAYING',
    PLAYER_STATE_END: 'PLAYER_STATE_END',
    PLAYER_STATE_ERROR: 'PLAYER_STATE_ERROR',
  },

  playerCurrentState: 'PLAYER_STATE_INIT',
  isLoadFinishH5: false,
  isPC: true,
  videoList: [],
  isAndroidYouku: false,
};

const StaticDomain = `${YK.https}//player.youku.com`;

function browserRedirect() {
  const sUserAgent = navigator.userAgent.toLowerCase();
  const bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
  const bIsIphone = sUserAgent.match(/iphone/i) == 'iphone';
  const bIsMidp = sUserAgent.match(/midp/i) == 'midp';
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
  const bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
  const bIsAndroid = sUserAgent.match(/android/i) == 'android';
  const bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
  const bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
  if (bIsIpad || bIsIphoneOs || bIsIphone || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        // YKP.isPC = false;
    YKP.isSupportFlash = false;
  } else {
        // YKP.isPC = true;
    YKP.isSupportFlash = true;
  }
  const bIsYouku = sUserAgent.match(/youku/i) == 'youku';
  if (bIsAndroid) {
    if (bIsYouku) {
      YKP.isAndroidYouku = true;
    }
  }

  if (bIsIphone) {
    if (bIsYouku) {
      YKP.isIphoneYouku = true;
    }
  }
}
browserRedirect();

function createViewport() {
  if (YKP.isSupportFlash == false) {
    const oMeta = document.createElement('meta');
    oMeta.name = 'viewport';
    oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
  }
}
// createViewport();

const urlParameter = function (object) {
  const arr = [];
  for (const o in object) {
    arr.push(`${o}=${object[o]}`);
  }
  return arr.join('&');
};

window.QS = function () {
  const args = {};

  const result = window.location.search.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
  if (result != null) {
    for (let i = 0; i < result.length; i++) {
      const ele = result[i];
      const inx = ele.indexOf('=');
            // args[ele.substring(1, inx)] = ele.substring(inx + 1);
      const key = ele.substring(1, inx);
      let val = ele.substring(inx + 1);
      try {
        val = decodeURI(val);
      } catch (e) {

      }
            // 猫陆卢忙聧垄val Boolean Number Object
      val == 'true' ? val = true : (val == 'false' ? val == false : isNaN(val) ? val = parseJsonStr(val) : val = +val);
      if (typeof args[key] === 'undefined') {
        args[key] = val;
      } else if (args[key] instanceof Array) {
        args[key].push(val);
      } else {
        args[key] = [args[key], val];
      }
    }
  }
  return args;
};

function parseJsonStr(str) {
  if (typeof str !== 'string') {
    return str;
  }
  if (/{[^{^}]{0,}}/.test(str)) {
    try {
      str = JSON.parse(str);
    } catch (e) {

    }
  }
  return str;
}

const dynamicLoading = {
  css(path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
  },
  js(path, obj, attr) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    if (attr) {
      script.id = attr.id;
      script.setAttribute('pageType', attr.pageType);
      script.setAttribute('isHidden', attr.isHidden);
    }
    head.appendChild(script);

    script.onload = function () {
      if (obj) {
        obj.selectH5();
        YKP.isLoadFinishH5 = true;
      }
    };
  },
};

dynamicLoading.css(`${YK.https}//player.youku.com/unifull/css/unifull.min.css`);

const YoukuPlayerSelect = function (params) {
  YK.initConfig = params;
  this._vid = params.vid;
  this._target = params.target;
  this._partnerId = params.partnerId;
  this._videoFlag = params.videoFlag;
  if (params.client_id) {
        // 鍏煎openapi涓殑client_id鐨勮缃�
    this._partnerId = params.client_id;
  }

  if (!(this._vid && this._target && this._partnerId)) {
    alert(
            '[Fail]The params of {vid,target,client_id} are necessary !',
        );
    return;
  }

  this._events = params.events;
  YK.playerEvents = params.events;

  this._id = params.id;
  if (this._id == null) this._id = 'youku-player';
  YKP.playerId = this._id;
  this._width = params.width;
  this._height = params.height;
  this._expand = params.expand;
  if (params.width == null || params.height == null) {
        // 瀹介珮鎸囧畾涓嶅叏锛岄粯璁や负0
    if (params.expand == null) {
      this._expand = 0;
    }
  } else {
        // 瀹介珮閮芥寚瀹氾紝榛樿涓�1
    if (params.expand == null) {
      this._expand = 1;
    }
  }

    // this._prefer = (params.prefer ? params.prefer.toLowerCase() : "flash");
  this._starttime = params.starttime;
  this._password = params.password;
  this._poster = params.poster;
  this._autoplay = !!params.autoplay; // 0 ,1 ,true ,false,'true','false'..
  this._canWide = params.canWide;
  if (typeof params.show_related !== 'undefined') {
    this._showRelated = !!params.show_related;
  }

  this._embed_content = params.embed_content;
  this._embed_vid = params.embed_vid;
  this._cancelFullScreen = params.cancelFullScreen;
  this._source = params.source;
  this._newPlayer = params.newPlayer;
  this._winType = params.wintype;

    // 鎾斁椤典笓闂ㄥ弬鏁�
  this._playlistconfig = params.playlistconfig;
  this._isMobile = YKP.isMobile;
  this._isMobileIOS = YKP.isMobileIOS;

    // this._weixin = params.weixin;
  YK.isWeixin = YKP.isWeixin; // false;
    // 寰俊涓撶敤鍙傛暟
  if (typeof params.weixin !== 'undefined') {
    YK.isWeixin = !!params.weixin; //! !氓陇鈥撁┢捖ぢ� 氓鈥β� weixin=fasle 盲鹿鸥氓聫炉盲禄楼莽鈥澟该︹€⑺�
  }

  this._loop = !!params.loop || false;
    // more ..

  this._playerType = '';
};
YoukuPlayerSelect.prototype = {
  isSupportFlash() {
    return YKP.isSupportFlash;
  }, // todo
  playerType() {
    if (this._playerType != '') return this._playerType;
    if (this.isSupportFlash()) {
      this._playerType = 'flash';
    } else {
      this._playerType = 'h5';
    }
    return this._playerType;
  },
  select() {
        // debug.log('playerType = ' + this.playerType());
        /**
         if (this.isThirdParty()) {
            var self = this;
            this.processThirdParty(function(e) {
                self.selectHandler();
            });
            return;
        }
         */
    this.selectHandler();
  },
  selectHandler() {
    if (this.playerType() == 'h5') {
      YKP.playerType = 'h5';
      dynamicLoading.js(`${YK.https}//static.youku.com/h5/html/sb/ykbannerLoader/ykbannerLoader.min.js`, null, { id: 'ykbannerLoader', pageType: 'player', isHidden: true });
      if (YKP.isLoadFinishH5) {
        this.selectH5();
      } else {
        dynamicLoading.js(`${YK.https}//player.youku.com/unifull/js/unifull.min.js`, this);
      }
    } else if (this.playerType() == 'flash') {
      YKP.playerType = 'flash';
      this.selectFlash();
    }

    if (this._events && this._events.onPlayerReady) {
      const callback = this._events.onPlayerReady;
      if (YKP.playerType == 'h5') {
        var check = setInterval(() => {
                    // if ($(YKP.playerId)) {
                    //     YKP.playerCurrentState = YKP.playerState.PLAYER_STATE_READY;
                    //     debug.log(YKP.playerCurrentState);

          try {
                        //    LocalStorage.appendItem('phase', 'playerready');
            callback();
          } catch (e) {}
          clearInterval(check);
                    // }
        }, 500);
      } else if (YKP.playerType == 'flash') {
        var check = setInterval(() => {
                    //   if (YKU.swfLoaded == 1) {
                    //      YKP.playerCurrentState = YKP.playerState.PLAYER_STATE_READY;
                    //      debug.log(YKP.playerCurrentState);

          try {
                        //   LocalStorage.appendItem('phase', 'playerready');
            callback();
          } catch (e) {

          }
          clearInterval(check);
                    //  }
        }, 500);
      } else {

      }
    }
  },
  selectH5() {
    const self = this;
    const playerDom = document.getElementById(this._target);
    if (this._width > 0 && this._height > 0) {
      playerDom.style.width = `${this._width}px`;
      playerDom.style.height = `${this._height}px`;
    } else {
            // var cw = document.documentElement.clientWidth;
            // var ch = document.documentElement.clientHeight;
      const cw = playerDom.style.offsetWidth;
      const ch = playerDom.style.offsetHeight;
      function resize(playerDom) {
                // playerDom.style.width = cw + "px";
                // playerDom.style.height = 9 * cw / 16 + "px";

        playerDom.style.width = `${cw}px`;
        playerDom.style.height = `${ch}px`;
      }
      resize(playerDom);
    }

    let closeFullFullScreen = 0;
    if (self._cancelFullScreen == 1 && YKP.isAndroidYouku) {
      closeFullFullScreen = 1;
    }

    const config = {
      videoId: self._vid, // 瑙嗛id
      ccode: '0590', // 娓犻亾id
      client_id: self._partnerId, // 浼橀叿瑙嗛浜戝垱寤哄簲鐢ㄧ殑client_id
      control: {
        laguange: '', // 榛樿浣跨敤鐨勮瑷€绫诲瀷
        hd: 'mp4hd', // 榛樿浣跨敤鐨勭爜鐜�
                //   hd:"m3u8",
        autoplay: false, // 鏄惁鑷姩鎾斁
      },
      logconfig: {

      }, // 缁熻鎵╁睍鍙傛暟锛屽寘鎷琣plus鎺ュ彛涓殑鍏ㄥ眬瀵硅薄鏃舵暟鎹紝鐢ㄤ簬浼犻€掔粰缁熻鎺ュ彛
      adConfig: {

      }, // 骞垮憡鎵╁睍鍙傛暟
      password: self._password, // 瑙嗛鎾斁瀵嗙爜锛岀敤浜庡姞瀵嗚棰戯紙杩欎釜鏄惁鍙互浼犲叆鏆傚畾锛�
      wintype: '', // 姣忕鍥哄畾鐨勫弬鏁帮紝澶氱敤浜庣粺璁★紝涓嶇‘瀹氭槸鍚﹁繕闇€瑕�
      type: '', // 鎾斁绫诲瀷锛坧c,pad,mobile锛夋殏瀹�,
      events: self._events,

      embed_vid: self._embed_vid,
      embed_content: self._embed_content,
      source: self._source,
      closeFullFullScreen,
      isIphoneYouku: YKP.isIphoneYouku,
    };
    this._h5player = YKPlayer.Player(this._target, config);
  },

  onorientationchange() {
        // var self = this;
    const playerDom = document.getElementById(this._target);
    setTimeout(() => {
      const cw = document.documentElement.clientWidth;
      const ch = document.documentElement.clientHeight;
      playerDom.style.width = `${cw}px`;
      playerDom.style.height = `${9 * cw / 16}px`;
    }, 300);
  },
  isThirdParty() {
    const cid = this._partnerId;
    if (cid != null && (`${cid}`).length == 16) {
      return true;
    }

    return false;
  },
  selectFlash() {
        // 宓屽叆浠ュ悗浼氳皟鐢ㄥ閮ㄧ殑閭ｄ釜 onYoukuPlayerReady()鍑芥暟

    const flashvars = {
      imglogo: this._poster || '',
            //    isAutoPlay: this._autoplay||false,
            //    isShowRelatedVideo: this._showRelated===false?false:true,
      partnerId: this._partnerId,
    };
    if (this._loop) {
      flashvars.isLoop = 'true';
    }
    if (YK.initConfig.firsttime != null) {
      flashvars.firsttime = YK.initConfig.firsttime;
    }
        // if (this._autoplay != null) {
        //    flashvars.isAutoPlay = this._autoplay;
        // }
    if (YK.initConfig.embsig != null) {
      flashvars.embsig = YK.initConfig.embsig;
    }

    if (YK.initConfig.password != null) {
      flashvars.passwordstr = YK.initConfig.password;
    }
    if (YK.initConfig.styleid != null) {
      flashvars.styleid = YK.initConfig.styleid;
    }
    if (YK.initConfig.vext != null) {
      flashvars.vext = YK.initConfig.vext;
    }
        // //360鍏ㄦ櫙 鎺ュ彛鏉ュ彇涓嶉渶瑕�
        // if(YK.initConfig.panorama) {
        //    flashvars.panorama = YK.initConfig.panorama;
        // }
    for (var key in YK.initConfig.adconfig) {
      flashvars[key] = YK.initConfig.adconfig[key];
    }
    for (var key in YK.initConfig.flashconfig) {
      flashvars[key] = YK.initConfig.flashconfig[key];
    }

    const urlParam = {
      sid: this._vid,
      isAutoPlay: this._autoplay,
      isShowRelatedVideo: this._showRelated,
      winType: this._winType,
      newPlayer: this._newPlayer,
      videoFlag: this._videoFlag,
    };
        // var partner = "";
    if (this.isThirdParty() && !flashvars.delayload) {
            // 16浣� 16杩涘埗鐨勬暟瀛�
            // partner = "/partnerid/" + this._partnerId;
      urlParam.partnerid = this._partnerId;
    }

    let src = `${StaticDomain}/player.php/`;
    for (var k in urlParam) {
      var value = urlParam[k];
      if (typeof value !== 'undefined' && value !== '') {
        src += `${k}/${value}/`;
      }
    }
    src += 'v.swf';

        // if (YK.initConfig.flashsrc) {
        //    src = YK.initConfig.flashsrc;
        // }

    if (YK.initConfig.events) {
            /**
             var onPlayerReady = YK.initConfig.events.onPlayerReady;
             if ('function' == typeof onPlayerReady && 'undefined' == typeof window.onPlayerReady) {
                window.onPlayerReady = function(obj) {
                    onPlayerReady(obj);
                }
            }*/

      const onPlayStart = YK.initConfig.events.onPlayStart;
      if (typeof onPlayStart === 'function' && typeof window.onPlayerStart === 'undefined') {
        window.onPlayerStart = function (obj) {
          onPlayStart(obj);
        };
      }

      const onPlayEnd = YK.initConfig.events.onPlayEnd;
      if (typeof onPlayEnd === 'function' && typeof window.onPlayerComplete === 'undefined') {
        window.onPlayerComplete = function (obj) {
          onPlayEnd(obj);
        };
      }

      const onPlay = YK.initConfig.events.onPlay;
      if (typeof onPlay === 'function' && typeof window.onPlay === 'undefined') {
        window.onPlay = function (obj) {
          onPlay(obj);
        };
      }

      const onPause = YK.initConfig.events.onPause;
      if (typeof onPause === 'function' && typeof window.onPause === 'undefined') {
        window.onPause = function (obj) {
          onPause(obj);
        };
      }

      const onWaiting = YK.initConfig.events.onWaiting;
      if (typeof onWaiting === 'function' && typeof window.onWaiting === 'undefined') {
        window.onWaiting = function (obj) {
          onWaiting(obj);
        };
      }

      const onFullScreen = YK.initConfig.events.onFullScreen;
      if (typeof onFullScreen === 'function' && typeof window.onFullScreen === 'undefined') {
        window.onFullScreen = function (obj) {
          onFullScreen(obj);
        };
      }

      const onPlayError = YK.initConfig.events.onPlayError;
      if (typeof onPlayError === 'function' && typeof window.onPlayerError === 'undefined') {
        window.onPlayerError = function (obj) {
          const _code = obj.code || '1000';
          if (_code == '4000') { // 闇€瑕佸瘑鐮�
            return;
          }
          onPlayError(obj.message || '鎾斁鍑洪敊', obj);
        };
      }
    }

    const param = {
      allowFullScreen: true,
      allowScriptAccess: 'always',
      movie: src,
      flashvars,
    };

    if (YK.initConfig.wmode) {
      param.wmode = YK.initConfig.wmode;
    }
    const flashparam = YK.initConfig.flashparam;
    if (flashparam && typeof flashparam === 'object') {
      for (var k in flashparam) {
        param[k] = flashparam[k];
      }
    }
    let flashtxt = '';
    for (var key in param) {
      var value = param[key];
      if (typeof value === 'object') {
        value = urlParameter(value);
      }
      flashtxt += `<param name=${key} value=${value}>`;
    }

    flashtxt += decodeURI(YK.initConfig.flashext || '');

        // flashvars = urlParameter(flashvars);
        // $(this._target).innerHTML =  "<embed id="+this._id+" src=" + src + " allowFullScreen=\"true\" quality=\"high\" width=100% height=100% align=\"middle\" allowScriptAccess=\"always\" type=\"application/x-shockwave-flash\" flashvars="+flashvars+">";
    document.getElementById(this._target).innerHTML =
            `<object type=application/x-shockwave-flash data= ${src} width=100% height=100% id=${this._id}>${
            // "<param name=allowFullScreen value=true><param name=allowScriptAccess value=always><param name=movie value=" +
            // src + "><param name=flashvars value=" + flashvars + ">" +
            //    decodeURI(YK.initConfig.flashext || '')
            flashtxt
            }</object>`;
    if (this._expand) {
      document.getElementById(this._target).style.width = `${this._width}px`;
      document.getElementById(this._target).style.height = `${this._height}px`;
    }
  },
};

/**
 * 浠ヤ笅鏄粺涓€鐨勬帴鍙ｏ紝鐢ㄤ簬澶栭儴缁熶竴鎿嶄綔 Flash 鍜� H5鎾斁鍣�
 *   鐩存帴浼犲叆鍙傛暟杩涜鍒濆鍖�
 *    -- api document --
 *   //open.youku.com/docs/api/player
 *   鐢ㄦ埛鍚嶏細api
 *   瀵嗙爜锛歽oukuopenapi
 *
 */
YKU.Player = function (target, config) {
  config.target = target;
  this.select = new YoukuPlayerSelect(config);
  this.select.select();
  this._player = '';
};
YKU.Player.prototype = {
  player() {
    if (this._player != '') {
      return this._player;
    }
    if (YKP.playerType == 'h5') {
      this._player = new YKH5Player(this.select._h5player);
    } else if (YKP.playerType == 'flash') {
      this._player = new YKFlashPlayer();
    } else {
      this._player = 'error';
    }
    return this._player;
  },
    // @deprecated
  resize(width, height) {
    this.player().resize(width, height);
  },
  currentTime() {
    return this.player().currentTime();
  },
  totalTime() {
    return this.player().totalTime();
  },
  playVideo() {
    this.player().playVideo();
  },
  startPlayVideo() {
    this.player().startPlayVideo();
  },
  pauseVideo() {
    this.player().pauseVideo();
  },
  seekTo(timeoffset) {
    this.player().seekTo(timeoffset);
  },
  hideControls() {
    this.player().hideControls();
  },
  showControls() {
    this.player().showControls();
  },
    /** mute:function(){},
     unmute:function(){},
     setVolume:function(){},
     getVideoMetaData:function(){},*/
  playVideoById(vid) {
    this.player().playVideoById(vid);
  },
    // special api for youku h5,not open api
  switchFullScreen() {
    try {
      this.player().switchFullScreen();
    } catch (e) {

    }
  },

};

var YKFlashPlayer = function () {
  this._player = document.getElementById(YKP.playerId);
};
YKFlashPlayer.prototype = {
  resize(width, height) {
    this._player.style.width = `${width}px`;
    this._player.style.height = `${height}px`;
  },
  currentTime() {
    const arr = this._player.getPlayerState().split('|');
    if (arr.length >= 3) { return arr[2]; } else { return -1; }
  },
  totalTime() {
    const arr = this._player.getPlayerState().split('|');
    if (arr.length >= 4) { return arr[3]; } else { return -1; }
  },
  playVideo() {
    this._player.pauseVideo(false);
  },
  pauseVideo() {
    this._player.pauseVideo(true);
  },
  seekTo(timeoffset) {
    this._player.nsseek(timeoffset);
  },
  playVideoById(vid) { // encoded vid  氓颅鈥斆γぢ嘎裁ヂ铰⒚ヂ悸徝♀€瀡id
    this._player.playVideoByID(vid);
  },
  hideControls() {
    this._player.showControlBar(false);
  },
  showControls() {
    this._player.showControlBar(true);
  },
  state() {
    this._player.state();
  },
};

/**
 * @param player  YoukuHTML5Player
 */
var YKH5Player = function (player) {
  this._player = player;
};
YKH5Player.prototype = {
  currentTime() {
    return this._player.currentTime;
  },
  totalTime() {
    return this._player.totalTime;
  },
  playVideo() {
    this._player.play();
  },

  pauseVideo() {
    this._player.pause();
  },

  seekTo(timeoffset) {
    try {
            //  this._player.currentTime = timeoffset;
      this._player.seek(timeoffset);
    } catch (e) {}
  },
};

/**
 * 鎵цjavascript鏍囩涓殑浠ｇ爜
 */
function executeScript() {
  let _scripts = document.getElementsByTagName('script'),
    _len = _scripts.length;
  for (let i = 0; i < _len; i++) {
    if (_scripts[i].src.indexOf('//player.youku.com/jsapi') > -1) {
      eval(_scripts[i].innerHTML);
      break;
    }
  }
}
executeScript();
