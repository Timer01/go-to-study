// pages/sousuo/sousuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhouji:["周一","周二","周三","周四","周五","周末"],
  },

  send: function () {

    var theBaiDuAPPkey = "hW27qCl6UfGGSaUr46AqRrGQGORzBGt6" //百度的AK, 此处要替换为你自己的APPKey

    //调用百度天气API
    wx.request({
      url: 'https://api.map.baidu.com/telematics/v3/weather?location=%E5%8C%97%E4%BA%AC&output=json&ak=' + theBaiDuAPPkey, //百度天气API

      success: (res) => {
        console.log(`APPKey: ${theBaiDuAPPkey}`, res.data)
        console.log(res)
        // 利用正则字符串从百度天气API的返回数据中截出今天的温度数据
        try {
          var str = res.data.results[0].weather_data[0].date;
          var tmp1 = str.match(/实时.+/);
          var tmp2 = tmp1[0].substring(3, tmp1[0].length - 2);
          var tmp = +tmp2;
        } catch (e) {
          throw new Error(e)
        }

        //温度高于设置的门限值
        wx.showModal({
          title: '今日天气',
          content: `今日温度：${res.data.results[0].weather_data[0].temperature}  天气：${res.data.results[0].weather_data[0].weather}\r\n温馨提示：${res.data.results[0].index[0].des} \r\n时间:${res.data.results[0].weather_data[0].date}`
        })
          //规则为低于门限报警，于是报警
      },
    
        
      

      fail: function (res) {
        console.log("请求失败", res)
      }
    })
  },
  change:function(e){
    switch(e.detail.value){
      case "0":
      wx.showModal({
        title: '周一',
        content: '暂未录入，敬请期待',
    });
    break;
      case "1":
        wx.showModal({
          title: '周二',
          content: '暂未录入，敬请期待',
        });
        break;
      case "2":
        wx.showModal({
          title: '周三',
          content: '暂未录入，敬请期待',
        });
        break;
      case "3":
        wx.showModal({
          title: '周四',
          content: '暂未录入，敬请期待',
        });
        break;
      case "4":
        wx.showModal({
          title: '周五',
          content: '暂未录入，敬请期待',
        });
        break;
        case "5":
        wx.showModal({
          title: '周末',
          content: '今天是周末，爱去哪儿去哪儿。（滑稽）',
        });
        break;
  }
  }


})