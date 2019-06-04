import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XSwitch from '@components/XSwitch'
import XTabs from '@components/XTabs'
import XMenu from '@components/XMenu'
import './index.less'

class Index extends Component {

  state = {
    siderData: [
      { id: 1, value: '今日推荐' },
      { id: 2, value: 'YITO森林' },
      { id: 3, value: '水母家族' },
      { id: 4, value: '今日推荐' },
      { id: 5, value: 'YITO森林' },
      { id: 6, value: '水母家族' },
      { id: 7, value: '今日推荐' },
      { id: 8, value: 'YITO森林' },
      { id: 9, value: '水母家族' },
    ],
    swiperSrc: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=971903522,2055241417&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=4229885950,3469296745&fm=11&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=4145206504,1491730429&fm=26&gp=0.jpg'
    ],
    list: [
      { title: '正在配送', name: "蔷薇红梅气泡", count: 2, price: 50, time: '15：30', description: '酸甜的草莓与清爽气泡的邂逅，配以淡淡的柠檬分子球。', id: 1 },
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
    // navigationBarTitleText: ''
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  /**
   * 切换开关
   * @param key 切换的开关的标识
  */
  handleXSwitchClick = (id) => {
    console.info(id)
  }

  /**
     * 切换标签页
     * @param key 切换的开关的标识
    */
  handleXTabsClick = (id) => {
    console.info(id)
  }

  render() {
    const { siderData, swiperSrc, list } = this.state
    return (
      <View className='page page-order'>
        <View className="page-header">
          <View className="page-header-content">
            星光大道店 >
          </View>
          <XSwitch
            dataSource={[{ id: 1, value: '外卖' }, { id: 2, value: '自取' }]}
            onClick={this.handleXSwitchClick}
          />
        </View>
        <View className="page-content">
          <XTabs
            dataSource={[{ id: 1, value: '生酮饮品' }, { id: 2, value: '生酮套餐' }]}
            onClick={this.handleXTabsClick}
          />
          <XMenu
            height={'calc(100vh - 92rpx - 56rpx)'}
            siderData={siderData}
            logoSrc={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559306415426&di=45afbd8b08abe9548dd8763fcd231bfa&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201801%2F16%2F001613ga63zcpop3pomkkb.jpg"}
            swiperSrc={swiperSrc}
            dataSource={list}
            onClick={this.handleXTabsClick}
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
