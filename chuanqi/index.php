<?php
header("Cache-Control: no-cache");
require_once "/www/web/www_yx_com/public_html/core/jssdk.php";
$jssdk = new JSSDK();
$signPackage = $jssdk->GetSignPackage();

//获取链接参数


?>
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <title>答不对10道题，敢说你玩过传奇？</title>
    <meta name="viewport" content="width=device-width,user-scalable=0,initial-scale=1,minimum-scale=1,maximum-scale=1,minimal-ui">
    <link rel="stylesheet" type="text/css" href="assets/css/main.1428056073145.css">
    <script src="jquery-1.11.2.min.js"></script>

</head>
<body>
<div id="grid">
    <div class="page cur" id="p1">
        <div class="logo"><img src="assets/images/images/first_logo.png" alt=""></div>
        <div class="txtfirst"><img src="assets/images/images/first_wenzi.png" alt=""></div>
        <div id="start" class="btn_first"><img src="assets/images/images/first_btn.png" alt=""></div>
    </div>
    <div class="page" id="p2">
        <div class="logohead"><img src="assets/images/logo.png"></div>
        <div class="panel2">
            <div class="p3_title">
                <p>试题一</p>
            </div>
            <p class="question">裁决之杖是哪个职业的武器？</p>
            <p class="question1">(拖动武器到正确的职业身上)</p>
            <div id="move" style="position:absolute;width:20%;top:110px;left:39%;"><img id="kni" src="assets/images/knife.png"   /></div>

            <ul class="answer1" style="height:auto;padding: 3px ;margin-left: 18px;margin-top: 70px">
                <li id="num1" style="float: left;margin-left: 4px;width: 30%" ><img src="assets/images/man1.png"  style="width: 90%"></li>
                <li id="num2" style="float: left;margin-left: 4px;width: 30%" ><img src="assets/images/man2.png"  style="width: 90%"></li>
                <li id="num3" style="float: left;margin-left: 4px;width: 30%" ><img src="assets/images/man3.png"  style="width: 90%"></li>
            </ul>
        </div>
        <script>

            /*  $(function(){
             var _move=false;//移动标记
             var _x,_y;//鼠标离控件左上角的相对位置
             $("#move").click(function(){
             //alert("click");//点击（松开后触发）
             }).touchstart(function(e){
             e.stopPropagation();

             _move=true;
             _x=e.pageX-parseInt($("#move").css("left"));
             _y=e.pageY-parseInt($("#move").css("top"));
             $("#move").fadeTo(20, 0.5);//点击后开始拖动并透明显示
             });
             $(document).mousemove(function(e){
             e.stopPropagation();

             if(_move){
             var x=e.pageX-_x;//移动时根据鼠标位置计算控件左上角的绝对位置
             var y=e.pageY-_y;
             $("#move").css({top:y,left:x});//控件新位置
             }
             }).mouseup(function(){
             _move=false;
             $("#move").fadeTo("fast", 1);//松开鼠标后停止移动并恢复成不透明
             });
             });*/
        </script>
    </div>
    <div class="page" id="p3">
        <div class="panel">
            <div class="p3_title">
                <p>试题二</p>
            </div>
            <p class="question">传奇是由___公司推出的网络游戏</p>
            <ul class="answer">
                <li>A) 西木</li>
                <li>B) 暴雪</li>
                <li data-an="1">C) 盛大</li>
                <li>D) 微软</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p4">
        <div class="panel">
            <div class="p3_title">
                <p>试题三</p>
            </div>
            <p class="question">传奇中共有___种职业可供选择</p>
            <ul class="answer">
                <li>A) 2</li>
                <li data-an="1">B) 3</li>
                <li>C) 4</li>
                <li>D) N</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p5">
        <div class="panel">
            <div class="p3_title">
                <p>试题四</p>
            </div>
            <p class="question">传奇中武士经常被人称为___</p>
            <ul class="answer">
                <li data-an="1">A) 肉盾</li>
                <li>B) 地主</li>
                <li>C) 小M</li>
                <li>D) 奶妈</li>
            </ul>
        </div>
    </div>
    <!-- <div class="page" id="p6">
         <div class="panel">
             <div class="p3_title">
                 <p>试题五</p>
             </div>
             <p class="question">下列道士职业可以学习的是___</p>
             <ul class="answer">
                 <li>A) 野蛮冲撞</li>
                 <li data-an="1">B) 隐身术</li>
                 <li>C) 圣言术</li>
                 <li>D) 科学技术</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p7">
         <div class="panel">
             <div class="p3_title">
                 <p>试题六</p>
             </div>
             <p class="question">下列物品可以使武器加幸运的是___</p>
             <ul class="answer">
                 <li>A) 战神油</li>
                 <li>B) 神水</li>
                 <li data-an="1">C) 祝福油</li>
                 <li>D) 花生油</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p8">
         <div class="panel">
             <div class="p3_title">
                 <p>试题七</p>
             </div>
             <p class="question">下列首饰中等级要求在20以上(包括20级)的是___</p>
             <ul class="answer">
                 <li>A) 大手镯</li>
                 <li>B) 小手镯</li>
                 <li>C) 牛角戒指</li>
                 <li data-an="1">D) 记忆项链</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p9">
         <div class="panel">
             <div class="p3_title">
                 <p>试题八</p>
             </div>
             <p class="question">下列武器适合战士使用的是___</p>
             <ul class="answer">
                 <li>A) 龙纹剑</li>
                 <li data-an="1">B) 练狱</li>
                 <li>C) 降魔</li>
                 <li>D) 骨玉权杖</li>
             </ul>
         </div>
     </div>-->
    <div class="page" id="p6">
        <div class="panel">
            <div class="p3_title">
                <p>试题五</p>
            </div>
            <p class="question">“帮人超重，4000一捆”是什么意思___</p>
            <ul class="answer">
                <li>A) 帮别人捡装备</li>
                <li>B) 帮别人开传送门</li>
                <li data-an="1">C) 帮别人带药</li>
                <li>D) 帮别人打boss</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p7">
        <div class="panel">
            <div class="p3_title">
                <p>试题六</p>
            </div>
            <p class="question">下列武器中攻击上限最高的是___</p>
            <ul class="answer">
                <li data-an="1">A) 屠龙刀</li>
                <li>B) 裁决之杖</li>
                <li>C) 倚天剑</li>
                <li>D) 血饮</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p8">
        <div class="panel">
            <div class="p3_title">
                <p>试题七</p>
            </div>
            <p class="question">练级过程中，你看见个道士经过，会说___</p>
            <ul class="answer">
                <li data-an="1">A) 大哥，给加个Buff！</li>
                <li> B) 大哥，给做点水！</li>
                <li>C) +++++++</li>
                <li>D) 约么</li>
            </ul>
        </div>
    </div>
    <!-- <div class="page" id="p13">
         <div class="panel">
             <div class="p3_title">
                 <p>试题十二</p>
             </div>
             <p class="question">传奇中3种职业的最终技能之一的是___</p>
             <ul class="answer">
                 <li data-an="1">A) 烈火剑法 </li>
                 <li>B) 召唤骷髅</li>
                 <li>C) 雷电术</li>
                 <li>D) 九阴白骨爪</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p14">
         <div class="panel">
             <div class="p3_title">
                 <p>试题十三</p>
             </div>
             <p class="question">传奇中法师的技能“火墙”在___级时可以修炼第2重</p>
             <ul class="answer">
                 <li>A) 22</li>
                 <li data-an="1">B) 24</li>
                 <li>C) 26</li>
                 <li>D) 30</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p15">
         <div class="panel">
             <div class="p3_title">
                 <p>试题十四</p>
             </div>
             <p class="question">不是传奇中盟重省石墓内出现的怪物是___</p>
             <ul class="answer">
                 <li>A) 红野猪</li>
                 <li>B) 蝎蛇</li>
                 <li data-an="1">C) 大老鼠</li>
                 <li>D) 黑色恶蛆</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p16">
         <div class="panel">
             <div class="p3_title">
                 <p>试题十五</p>
             </div>
             <p class="question">下列怪物属BOSS级的是___</p>
             <ul class="answer">
                 <li data-an="1">A) 白野猪</li>
                 <li>B) 黑野猪</li>
                 <li>C) 沃马卫士</li>
                 <li>D) 幻影蜘蛛</li>
             </ul>
         </div>
     </div>
     <div class="page" id="p17">
         <div class="panel">
             <div class="p3_title">
                 <p>试题十六</p>
             </div>
             <p class="question">祖马教主现身时的状态是___</p>
             <ul class="answer">
                 <li>A) 石头 站着</li>
                 <li data-an="1">B) 石头 趴着</li>
                 <li>C) 未石化 闲逛</li>
                 <li>D) 未石化 发呆</li>
             </ul>
         </div>
     </div>-->
    <div class="page" id="p9">
        <div class="panel">
            <div class="p3_title">
                <p>试题八</p>
            </div>
            <p class="question">号称法师克星的是___</p>
            <ul class="answer">
                <li>A) 幸运9战士BB</li>
                <li data-an="1">B) 触龙神</li>
                <li>C) 魔龙教主 </li>
                <li>D) 祖玛教主</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p10">
        <div class="panel">
            <div class="p3_title">
                <p>试题九</p>
            </div>
            <p class="question">以上这张地图是哪</p>
            <ul class="answer">
                <li>A) 长安</li>
                <li>B) 土城</li>
                <li data-an="1">C) 沙巴克</li>
                <li>D) 暴风城</li>
            </ul>
        </div>
    </div>
    <!--<div class="page" id="p20">
        <div class="panel">
            <div class="p3_title">
                <p>试题十九</p>
            </div>
            <p class="question">在传奇49大谜中祁福项链是干什么的?___</p>
            <ul class="answer">
                <li>A) 升武器的</li>
                <li>B) 锻造武器的</li>
                <li data-an="1">C) 升级勋章的</li>
                <li>D) 合魔龙装备的</li>
            </ul>
        </div>
    </div>-->
    <div class="page" id="p11">
        <div class="panel">
            <div class="p3_title">
                <p>试题十</p>
            </div>
            <p class="question">尸王的职业是___</p>
            <ul class="answer">
                <li data-an="1">A) 卖书的</li>
                <li>B) 卖卫生纸的</li>
                <li>C) 卖内裤的</li>
                <li>D) 僵尸的爹</li>
            </ul>
        </div>
    </div>
    <!--<div class="page" id="p22">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十一</p>
            </div>
            <p class="question">请问赤月恶魔多少小时刷一次?___</p>
            <ul class="answer">
                <li>A) 10</li>
                <li>B) 8</li>
                <li data-an="1">C) 6 </li>
                <li>D) 4</li>
            </ul>
        </div>
    </div>-->
    <div class="page" id="p12">
        <div class="panel">
            <div class="p3_title">
                <p>试题十一</p>
            </div>
            <p class="question">请问以下那型怪物不惜牺牲自己,主动向人类拼命而同归于尽?(选D者,拉出去毙了)</p>
            <ul class="answer">
                <li>A) 爆牙蜘蛛</li>
                <li data-an="1">B) 爆烈蜘蛛</li>
                <li>C) 血巨人</li>
                <li>D) 黑野猪</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p13">
        <div class="panel">
            <div class="p3_title">
                <p>试题十二</p>
            </div>
            <p class="question">请问白野猪手里拿着什么武器?</p>
            <ul class="answer">
                <li data-an="1">A) 流星锤</li>
                <li>B) 炼狱 </li>
                <li>C) 青红偃月刀</li>
                <li>D) 修罗</li>
            </ul>
        </div>
    </div>
    <!--<div class="page" id="p25">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十四</p>
            </div>
            <p class="question">下面哪个城市没有城门</p>
            <ul class="answer">
                <li>A) 比奇城</li>
                <li>B) 白日门</li>
                <li data-an="1">C) 土城</li>
                <li>D) 沙巴克</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p26">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十五</p>
            </div>
            <p class="question">沙巴克攻城战期间，沙巴克里的下面哪个NPC会消失</p>
            <ul class="answer">
                <li>A) 铁匠</li>
                <li>B) 首饰 </li>
                <li>C) 杂货店</li>
                <li data-an="1">D) 全部NPC都消失</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p27">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十六</p>
            </div>
            <p class="question">升级武器的铁匠在哪里找？</p>
            <ul class="answer">
                <li>A) 沃玛森林</li>
                <li>B) 白日门</li>
                <li>C) 毒蛇峡谷</li>
                <li data-an="1">D) 沙巴克</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p28">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十七</p>
            </div>
            <p class="question">巨型多角虫是哪个地图的特产？</p>
            <ul class="answer">
                <li>A) 封魔谷</li>
                <li>B) 毒蛇峡谷</li>
                <li data-an="1">C) 盟重省</li>
                <li>D) 比奇省</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p29">
        <div class="panel">
            <div class="p3_title">
                <p>试题二十八</p>
            </div>
            <p class="question">触龙神刷新的地图叫什么？</p>
            <ul class="answer">
                <li data-an="1">A) 死亡棺材</li>
                <li>B) 生死之间</li>
                <li> C) 紫水晶屋</li>
                <li>D) 幽冥圣域</li>
            </ul>
        </div>
    </div>-->
    <div class="page" id="p14">
        <div class="panel">
            <div class="p3_title">
                <p>试题十三</p>
            </div>
            <p class="question">如果你听到行会里大喊“堵住门,占药店！”请问现在几点了？</p>
            <ul class="answer">
                <li>A) 7点</li>
                <li data-an="1">B) 8点</li>
                <li>C) 9点</li>
                <li>D) 7:30</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p15">
        <div class="panel">
            <div class="p3_title">
                <p>试题十四</p>
            </div>
            <p class="question">以下哪个昵称是传奇的神级玩家?</p>
            <ul class="answer">
                <li data-an="1">A) 小虾米</li>
                <li>B) V少</li>
                <li>C) 皇族天赐</li>
                <li>D) 王大妈</li>
            </ul>
        </div>
    </div>
    <div class="page" id="p16">
        <div class="panel">
            <div class="p3_title">
                <p>试题十五</p>
            </div>
            <p class="question">某人被欺负了，大喊了一声 “有种你丫别跑，我大哥带狗的！”请问他大哥什么职业？</p>
            <ul class="answer">
                <li>A) 战士</li>
                <li data-an="1">B) 道士</li>
                <li>C) 法师</li>
                <li>D) 城管</li>
            </ul>
        </div>
    </div>





    <div class="page" id="p17">
        <div class="logohead2"><img src="assets/images/logo.png"></div>

        <div class="panel3">
            <div class="p3_title">
                <p>恭喜你</p>
            </div>
            <p id="result" class="question">你共答对了n道题，当前成为传奇初级玩家</p>
        </div>
        <div id="share" class="btn_last1" onclick="shareto();"><img src="assets/images/btn3.png" alt=""></div>
        <div id="again" class="btn_last2" onclick="location.reload();"><img src="assets/images/btn1.png" alt=""></div>
        <div id="load" class="btn_last3"><img src="assets/images/btn2.png" alt=""></div>
        <p class="wenzi1">传奇手游《屠龙之刃》震撼公测！</p>
        <p class="wenzi2">“兄弟，我回来了！你在哪里？”</p>

    </div>
  </div>
  <div id="sharepic" style="position: fixed;top:0;left: 0;width: 100%;display: none;" onclick="hidepic();"><img src="share.png" width="100%"></div>
  <!--
    <audio src="assets/media/music.mp3" id="audio" autoplay loop style="display:none"></audio>
  -->
  <audio src="back.mp3" id="audio" autoplay loop style="display:none"></audio>

  </body>
</html>
<script>
    function shareto(){
        $("#sharepic").fadeIn();
    }
    function hidepic(){
        $("#sharepic").fadeOut();
    }
</script>

<script src="assets/js/main.1428056073145.js"></script>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    var xbtitle="还记得吗？十四年前，有一款游戏它叫【传奇】";
    var xbdesc ="还记得吗？十四年前，有一款游戏它叫【传奇】";
    var xbimgUrl="http://www.gdiy.me/case/chuanqi/assets/images/logo.png";//游戏logo
    var xblink="http://www.gdiy.me/case/chuanqi/index.php"; //游戏链接



    wx.config({
        //debug: true,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [ 'onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo']
    });
    wx.ready(function () {
        // 在这里调用 API
        wx.onMenuShareTimeline({   //朋友圈
            title: xbdesc, // 分享标题
            desc:xbdesc , // 分享描述
            link: xblink, // 分享链接
            imgUrl: xbimgUrl, // 分享图标
            //type: '', // 分享类型,music、video或link,不填默认为link
            //dataUrl: '', // 如果type是music或video,则要提供数据链接,默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                // alert("分享成功");
               // window.location=xbhref
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                //alert("分享取消");
               // window.location=xblink
            }
        });

        wx.onMenuShareAppMessage({
            title: xbtitle, // 分享标题
            desc:xbdesc , // 分享描述
            link: xblink, // 分享链接
            imgUrl:xbimgUrl, // 分享图标
            type: '', // 分享类型,music、video或link,不填默认为link
            dataUrl: '', // 如果type是music或video,则要提供数据链接,默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                // alert("分享成功");
               /// window.location=xbhref
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                //alert("分享取消");
               // window.location=xblink
            }
        });
    });
</script>
<div style="display:none">
    <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1255577044'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1255577044' type='text/javascript'%3E%3C/script%3E"));</script>

    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=39768531" charset="UTF-8"></script>
</div>
