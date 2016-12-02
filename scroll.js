var page = 2;
$(document).ready(function() {
    var my_booking_ajax_url = $("#my_booking_ajax_url").val();
    //监听滚动条，动态加载列表数据
    window.onscroll = function () {
        if (getScrollTop() + getClientHeight() === getScrollHeight()) {
            layer.load(2, {time: 1 * 1000});
            $.ajax({
                url: my_booking_ajax_url,
                data: {'is_ajax':1,'page':page},
                type: 'get',
                async: true,
                dataType: 'html',
                success: function (data) {
                    console.log(data);
                    if (data != '') {
                        page++;
						//append_list 列表class
                        $(".append_list").append(data);
                    }
                }
            });
        }
    }
});



/**
 * Created by Rg on 2016/10/7.
 */
//获取滚动条当前的位置
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

//获取当前可是范围的高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    }
    else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
}

//获取文档完整的高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}