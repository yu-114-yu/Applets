//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: 'yujias',
    stars: [
      {id: 1, name: 'a', age: 18},
      {id: 2, name: 'b', age: 12},
      {id: 3, name: 'c', age: 15},
      {id: 4, name: 'd', age: 16}
    ],
    counter: 0
  },
  count() {
    // this.data.counter++
    // console.log(this.data.counter);
    
    this.setData({
      counter: this.data.counter + 1
    })
  },
  jian() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handle(event) {
    console.log(event);
  },
  onLoad() {
    // wx.request({
    //   url: 'http://123/207.32.32:8000/recommend',
    //   success: (res) => {
    //     console.log(res);
        
    //   }
    // })
  }
})

