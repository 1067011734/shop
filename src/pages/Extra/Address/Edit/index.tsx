import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Input, Switch } from '@tarojs/components'
import XForm from '@components/XForm/Form'
import XFormItem from '@components/XForm/FormItem'
import XButton from '@components/XButton'
import { phoneReg } from '@utils/regularConfig'
import './index.less'

const prefixCls = 'page-address';
console.info(phoneReg)

class Index extends Component {

  state = {
    address: '',
    phone: "",
    name: ""
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '新增地址'
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    const { status } = this.$router.params

    if (!status) {
      return
    }
    if (status === 'edit') {
      Taro.setNavigationBarTitle({
        title: '修改地址'
      })
      return
    }
  }

  componentDidHide() { }

  /**
  * 选择收获地址
  */
  chooseLocation = () => {
    Taro.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
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

  handleInput = (e, key) => {
    const { value } = e.detail
    this.setState({ [key]: value })
  }

  /**
   * 保存提交
   */
  handleSubmit = () => {
    const { name, phone } = this.state
    // if (!name) {
    //   Taro.showToast({
    //     title: '请填写姓名',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return
    // }
    // if (!phoneReg.test(phone)) {
    //   Taro.showToast({
    //     title: '请填写正确的中国大陆地区手机号',
    //     icon: 'none',
    //     duration: 2000
    //   })
    //   return
    // }
    Taro.navigateBack()
  }

  render() {
    const { address, phone } = this.state
    return (
      <View className={`page ${prefixCls}`}>
        <View className="page-content">
          <View className="page-content-top">
            <XForm>
              <XFormItem>
                <Input placeholder="收货人" onInput={(e) => { this.handleInput(e, 'name') }}></Input>
              </XFormItem>
              <XFormItem>
                <Input placeholder="手机号码" type="number" value={phone} onInput={(e) => { this.handleInput(e, 'phone') }}></Input>
              </XFormItem>
              <XFormItem>
                <View className={`${prefixCls}-location`} onClick={this.chooseLocation}>
                  <View className={`${prefixCls}-location-content`}>
                    {address ? address :
                      <View className='placeholder'>收货地址</View>
                    }
                  </View>
                  <View className={`${prefixCls}-location-extra`}>
                    选择
                </View>
                </View>
              </XFormItem>
              <XFormItem border={false}>
                <Input placeholder="详细地址：如道路、门牌号、小区、楼栋号等"></Input>
              </XFormItem>
            </XForm>
          </View>
          <XFormItem title="设置为默认地址"  >
            {/* <Input placeholder="请输入收货人"></Input> */}
            <View className={`${prefixCls}-switch`}>
              <Switch color="#f8d0b7" checked />
            </View>
          </XFormItem>
        </View>
        <View className="page-footer">
          <XButton type="black" size="big" block onClick={this.handleSubmit}>保存</XButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
