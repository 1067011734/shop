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
    const { siderData } = this.state
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
            siderData={siderData}
            dataSource={[{ id: 1, value: '生酮饮品' }, { id: 2, value: '生酮套餐' }]}
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
