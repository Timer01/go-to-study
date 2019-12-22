//index.js
const app = getApp()

Page({
  data: {
    mhidden:true,
    array: [0],//默认显示一个
    inputVal: []//所有input的内容

  },

  go:function(){
    wx.navigateTo({
      url: '/pages/function/function',
    })
  },
  changemodal:function(){
    var old = this.data.array;
    if(old.length<11)
    {old.push(1);
      this.setData({
        array: old
      })
      }
    else {
      wx.showModal({
        title: '提示',
        content: '当前计划过多，请完成后再添加哦！',
        success: function (res) { },
      })
      }//这里不管push什么，只要数组长度增加1就行
    this.setData({
      mhidden:true
    });
  },


  modalcancel:function(){
    this.setData({
      mhidden:true
    });
  },
  tap:function(){
    this.setData({
      mhidden:false
    });
  },
  getInputVal: function (e) {
    var nowIdx = e.currentTarget.dataset.idx;//获取当前索引
    var val = e.detail.value;//获取输入的值
    var oldVal = this.data.inputVal;
    oldVal[nowIdx] = val;//修改对应索引值的内容
    this.setData({
      inputVal: oldVal
    })
  },
  //添加input
  //删除input
  delInput: function (e) {
    var nowidx = e.currentTarget.dataset.idx;//当前索引
    var oldInputVal = this.data.inputVal;//所有的input值
    var oldarr = this.data.array;//循环内容
    oldarr.splice(nowidx, 1);    //删除当前索引的内容，这样就能删除view了
    oldInputVal.splice(nowidx, 1);//view删除了对应的input值也要删掉
    if (oldarr.length < 1) {
      oldarr = [0]  //如果循环内容长度为0即删完了，必须要留一个默认的。这里oldarr只要是数组并且长度为1，里面的值随便是什么
    }
    this.setData({
      array: oldarr,
      inputVal: oldInputVal
    })
  }
})