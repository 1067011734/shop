import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XSwitch from '@components/XSwitch'
import XTabs from '@components/XTabs'
import { getOrderList } from '@apis/order'
import Drink from './Drink'
import Meal from './Meal'
import './index.less'

class Index extends Component {

  state = {
    tabsKey: 1,
    dataSource:{}
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

  componentDidMount() {
    this.getList()
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  getList = () => {
    getOrderList().then(data => {
      const { result } = data

      this.setState({ dataSource:result })
    })
  }

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
  handleXTabsClick = (tabsKey) => {
    this.setState({ tabsKey })
  }

  render() {
    const { dataSource, tabsKey } = this.state

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
          <View className={`${tabsKey === 1 ? '' : 'hidden'} flex-column`}>
            <Drink dataSource={dataSource} />
          </View>
          <View className={`${tabsKey === 2 ? '' : 'hidden'} flex-column`}>
            <Meal />
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
