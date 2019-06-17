import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XButton from '@components/XButton'
import Slide from '../_components/Slide'
import Empty from '../_components/Empty'
import './index.less'

const prefixCls = 'page-address-list';

class Index extends Component {

  state = {
    address: '',
    list: [
      { id: "2", name: '张三', phone: "17483928445", address: "绿城未来park" }
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
    navigationBarTitleText: '我的地址'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    console.info(222,this)
    this.setState({ list:[] })
    // setTimeout(() => {
    //   this.setState({ list:[
    //     { id: "2", name: '张三', phone: "17483928445", address: "绿城未来park" }
    //   ] })
    // }, 0);

  }

  componentDidHide() { }

  /**
  * 选择收获地址
  */
  chooseLocation = () => {
    Taro.getLocation({
      // 返回可以用于wx.openLocation的经纬度
      type: 'gcj02',
      success: res => {
        const { latitude, longitude } = res
        this.setState({ latitude, longitude })
        Taro.chooseLocation({
          success: res => {
            const { address } = res

            this.setState({ address })
          }
        })
      }
    })
  }

  /**
   * 保存提交
   */
  handleSubmit = () => {
    Taro.navigateTo({
      url: "/pages/Extra/Address/Edit/index"
    })
  }

  handleAddressEdit = () => {
    Taro.navigateTo({
      url: "/pages/Extra/Address/Edit/index"
    })
  }

  render() {
    const { list } = this.state
    return (
      <View className={`page ${prefixCls}`}>
        <View className="page-content">
          {
            list.length ? list.map(x => (
              <Slide
                dataSource={x}
                onEdit={this.handleAddressEdit}
                key={x.id}
              />
            )):
            <Empty dataSource={['暂无地址信息','请点击底部按钮添加地址']}>
            </Empty>
          }
        </View>
        <View className="page-footer">
          <XButton type="black" size="big" block onClick={this.handleSubmit}>添加地址</XButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
