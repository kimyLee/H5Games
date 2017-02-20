/**
 * Created by 夏小川 on 2015/6/21.
 */
function sumbit(){

        var name=$("#name").val();
        var phone=$("#phone").val();
        var province=$("#province").val();
        var city=$("#city").val();
        var note=$("#note").val();
    //alert(province);
   // alert(city);
        if(name==""||name==null)
        {
            ShowSuccessMessage("姓名不能为空", 3000); // 第二个参数life是指消息显示时间

            return false;
        }else
        {
            if(phone==""||phone==null||isNaN(phone))
            {
                //alert("号码格式有错");
                ShowSuccessMessage("号码格式有错", 3000); // 第二个参数life是指消息显示时间

                return false;
			}else{
                 $.ajax({
                 type: "GET",
                 url: "",
                 dataType:'json',
                 data:{
                 "name": name,
                 "cellphone": phone,
                 "province": province,
                 "city": city,
                 "note": note
                 },
                 success: function(data){
                // alert(data.text);
                    if (data.code ==1002) {
                        ShowSuccessMessage("报名成功", 3000);
                        return true;
                    }
                    else{
                        if(data.code==1001) {
                            ShowSuccessMessage("输入格式有误", 3000);
                            return false;
                        }
                        else {
                            ShowSuccessMessage("报名失败", 3000);
                            return false;
                        }

                    }
                 }

                 });


            }
        }

    }
//提示成功
ShowSuccessMessage = function(message, life) {
    var time = 2000;
    if (!life) {
        time = life;
    }

    if ($("#tip_message").text().length > 0) {
        var msgstr = "<span>" + message + "</span>";
        $("#tip_message").empty().append(msgstr);
    } else {
        var msgstr = "<div id='tip_message'><span>" + message + "</span></div>";
        $("body").append(msgstr);
    }

    $("#tip_message").fadeIn(time);

    setTimeout($("#tip_message").fadeOut(time), time);

};

//提示错误信息
ShowErrorMessage = function(message, life) {
    ShowSuccessMessage(message, life);

};
