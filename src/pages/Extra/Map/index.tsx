import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Map } from '@tarojs/components'
import './index.less'

const prefixCls = 'page-map';
const QQMapWX = require('./_utils/qqmap-wx-jssdk.min.js');
 // 实例化API核心类
const qqmapsdk = new QQMapWX({
  key: 'CRFBZ-R3SC4-27PU7-XFOQC-NJHF3-V4BA5'
});

// qqmapsdk.search({
//   keyword: 'kfc',  //搜索关键词
//   location: '39.980014,116.313972',  //设置周边搜索中心点
//   success: function (res) { //搜索成功后的回调
//     console.info(res)
//     // var mks = []
//     // for (var i = 0; i < res.data.length; i++) {
//     //   mks.push({ // 获取返回结果，放到mks数组中
//     //     title: res.data[i].title,
//     //     id: res.data[i].id,
//     //     latitude: res.data[i].location.lat,
//     //     longitude: res.data[i].location.lng,
//     //     iconPath: "/resources/my_marker.png", //图标路径
//     //     width: 20,
//     //     height: 20
//     //   })
//     // }
//     // _this.setData({ //设置markers属性，将搜索结果显示在地图中
//     //   markers: mks
//     // })
//   },
//   fail: function (res) {
//     console.log(res);
//   },
//   complete: function (res){
//     console.log(res);
//   }
// });

class Index extends Component {

  state = {
    list: [
      { title: '正在配送', name: "蔷薇红梅气泡", count: 2, price: 50, time: '15：30', description: '加冰+5分钟气泡', id: 1 },
      { title: '制作中', name: "蓝玫瑰红梅气泡", count: 2, price: 50, time: '15：30', description: '加冰+5分钟气泡', id: 2 },
    ]
  }



  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '位置'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { list } = this.state
    return (
      <View className={`page ${prefixCls}`}>
        <View className="page-content">
          <Map
          // 右上角显示带有方向的当前定位点
           showLocation
           enableOverlooking
           enableTraffic
           includePoints
           polyline
          //  markers
          />
        </View>
        <View className="page-footer">
          {/* 历史订单 > */}
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
