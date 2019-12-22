// pages/function/function.js



Page({
  data: {
    endDate: null,
    endTime: null,
    mhidden: true,
    question: ["每个人每天都会读到哪个英文字母？ A:Z B:H C:Q D:M", "狮子和熊比赛拉粑粑，你们猜谁赢啦？ A:熊 B:狮子 C:这题有点恶心 D:我去，我吐了", "鹦鹉、孔雀、凤凰，燕子这四只鸟哪一个最适合在饭店做服务员？ A:凤凰 B:鹦鹉 C:孔雀 D:燕子", "有一只很饿很饿的狼在地铁里遇见了3只羊，如果一站路的时间可以吃掉一只，3站过去了，请问还剩几只羊？       A:0 B:1 C:2 D:3"],
    timer:'',
    countDownNum:5,
  
  },
  onLoad:function()
  {
    let that = this
    timer: setInterval(function () {
      
      that.data.countDownNum++
     
      
    }, 1000)

  },



  handleEndTimeChange(e) {
    var that = this
    that.setData({
      endTime: e.detail.value
    })
  },


  handleEndDateChange(e) {
    this.setData({
      endDate: e.detail.value
    })

  },

  turnoff: function() {
    if (this.data.countDownNum >= 5) {
      this.setData({
        mhidden: false,
        number: Math.floor(Math.random() * 4),
        
      })
    }
      else
      {
        var shijian,
          shijian =5 - this.data.countDownNum
        wx.showModal({
          title: '时间未到',
          content: '请于5秒后继续尝试，您还有'+shijian+'秒后重试',
        })

      }
   
  },

  A: function() {
    if (this.data.number == 0)
    {
      wx.showModal({
        title: '回答正确',
        content: '一日之计在于晨，请输入ABB关闭闹钟',
      })
      this.setData({
        endDate: null,
        endTime: null
      })
    }
    else 
    {
      if (this.data.number == 0)
      {wx.showModal({
        title: '回答错误',
        content: '人还是要恰睡的嘛。',
      })
      }
      else if (this.data.number == 1)
      {
        wx.showModal({
          title: '回答错误',
          content: '很遗憾，事实（狮屎）胜于雄辩（熊便）。',
        })
      }
      else if (this.data.number == 2)
      {
        wx.showModal({
          title: '回答错误',
          content: '孔雀啊，因为孔雀会开瓶（开屏）。',
        })

      }
      else if (this.data.number == 3)
      {
        wx.showModal({
          title: '回答错误',
          content: '没想到吧，地铁不能吃东西。',
        })
      }
      this.setData({
        countDownNum:0,

      })
    }

    this.setData({
      mhidden:true,
    })
  },
  B: function () {
    if (this.data.number == 1) {
      wx.showModal({
        title: '回答正确',
        content: '靠，下次该提高难度了。请输入ABB关闭闹钟',
      })
      this.setData({
        endDate: null,
        endTime: null
      })
    }
    else {
      if (this.data.number == 0) {
        wx.showModal({
          title: '回答错误',
          content: '人还是要恰睡的嘛。',
        })
      }
      else if (this.data.number == 1) {
        wx.showModal({
          title: '回答错误',
          content: '很遗憾，事实（狮屎）胜于雄辩（熊便）。',
        })
      }
      else if (this.data.number == 2) {
        wx.showModal({
          title: '回答错误',
          content: '孔雀啊，因为孔雀会开瓶（开屏）。',
        })

      }
      else if (this.data.number == 3) {
        wx.showModal({
          title: '回答错误',
          content: '没想到吧，地铁不能吃东西。',
        })
      }
      this.setData({
        countDownNum: 0,

      })
    }

    this.setData({
      mhidden: true,
    })
  },
  C: function () {
    if (this.data.number == 2) {
      wx.showModal({
        title: '回答正确',
        content: '请输入ABB关闭闹钟',
      })
      this.setData({
        endDate: null,
        endTime: null
      })
    }
    else {
      if (this.data.number == 0) {
        wx.showModal({
          title: '回答错误',
          content: '人还是要恰睡的嘛。',
        })
      }
      else if (this.data.number == 1) {
        wx.showModal({
          title: '回答错误',
          content: '很遗憾，事实（狮屎）胜于雄辩（熊便）。',
        })
      }
      else if (this.data.number == 2) {
        wx.showModal({
          title: '回答错误',
          content: '孔雀啊，因为孔雀会开瓶（开屏）。',
        })

      }
      else if (this.data.number == 3) {
        wx.showModal({
          title: '回答错误',
          content: '没想到吧，地铁不能吃东西。',
        })
      }
      this.setData({
        countDownNum: 0,

      })
    }

    this.setData({
      mhidden: true,
    })
  },
  D: function () {
    if (this.data.number == 3) {
      wx.showModal({
        title: '回答正确',
        content: '可惜，竟然没坑到你，请输入ABB关闭闹钟',
      })
      this.setData({
        endDate: null,
        endTime: null
      })
    }
    else {
      if (this.data.number == 0) {
        wx.showModal({
          title: '回答错误',
          content: '人还是要恰睡的嘛。',
        })
      }
      else if (this.data.number == 1) {
        wx.showModal({
          title: '回答错误',
          content: '很遗憾，事实（狮屎）胜于雄辩（熊便）。',
        })
      }
      else if (this.data.number == 2) {
        wx.showModal({
          title: '回答错误',
          content: '孔雀啊，因为孔雀会开瓶（开屏）。',
        })

      }
      else if (this.data.number == 3) {
        wx.showModal({
          title: '回答错误',
          content: '没想到吧，地铁不能吃东西。',
        })
      }
      this.setData({
        countDownNum: 0,

      })
    }

    this.setData({
      mhidden: true,
    })
  }


})