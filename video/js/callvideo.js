/**
 * Created by 夏小川 on 2015/3/24.
 */
function call(){
    var myVideo = document.getElementById('srcopen');
    var tol=0;
    //获取video元素

    myVideo.addEventListener("loadedmetadata", function(){
    //要执行的代码
        tol=myVideo.duration;
     });

}
function playBysecond(time1){
    var myVideo = document.getElementById('srcopen');
     myVideo.currentTime=time1;
}