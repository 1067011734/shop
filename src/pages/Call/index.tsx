import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAvatar, AtButton, AtMessage, AtDivider } from 'taro-ui'
import { getUserData } from '@apis/user'
import Card from '@components/Card'
import TabsBar from '@components/TabsBar'
import './index.less'

const prefixCls = 'page-call';

class Index extends Component {
  state = {
    // 用户头像
    avatarUrl: '',
    // 用户姓名
    nickName: '-',
  }

  // 电话
  phoneNumber = '02155381603';

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '我们的家'
  }
  componentDidMount() {
    getUserData({ id: 444 }, { loading: true }).then((data) => {
      console.info(data)
    })
    // Taro.showToast({
    //   title: '成功',
    //   icon: 'error',
    //   duration: 2000
    // })
    // Taro.openLocation({
    //   latitude:30,
    //   longitude:40,
    //   scale: 18
    // })
  }

  componentWillUnmount() { }

  componentDidShow() {
    console.info(this.$router.params)
  }
  /**
   *  获取用户信息
   */
  getUserInfo = (data) => {
    if (!data) {
      return;
    }

    const { userInfo } = data.detail
    const { avatarUrl, nickName } = userInfo

    this.setState({
      avatarUrl,
      nickName
    }, () => {
      Taro.atMessage({
        'message': '获取用户信息成功',
        'type': 'info',
      })
    })
  }

  /**
   * 打电话
   */
  handlePhone = () => {
    const { phoneNumber } = this

    Taro.makePhoneCall({ phoneNumber })
  }

  handleFeedback = () => {
    Taro.navigateTo({
      url: `/pages/Call/Feedback/index?itemId=6666777`
    })
  }

  render() {
    const { avatarUrl, nickName } = this.state

    return (
      <View className={`page page-inline ${prefixCls}`}>
        <AtMessage />
        <View className="page-header">
          <View className="page-header-description">
            <View className="name"><span>Hello,</span>{nickName}</View>
            <View className="welcome"><span>👉</span>今晚一起来吃鸡吧！</View>
          </View>
          <View className="page-header-avatar">
            <AtAvatar
              size="large"
              circle
              image={avatarUrl}
            ></AtAvatar>
          </View>
        </View>
        <View className="page-content">
          <AtDivider content='我们的安全保证' />
          <TabsBar
            data={
              [
                { label: '措施安全', src: 'https://salary-assets-front.dingtalent.com/img/201809/DT989Vlgi6Qw73p9t757GR8121r.png' },
                { label: '数据安全', src: 'https://salary-assets-front.dingtalent.com/img/201809/DT6d7O258l9h3E702oHA1h7680a.png' },
                { label: '权限安全', src: 'https://salary-assets-front.dingtalent.com/img/201809/DT1S2j98o7y863eV7o02NH5L63i.png' },
              ]
            }
          />
          <Card title='联系我们'
            data={
              [
                { label: '电话', value: '021-5538 1603' },
                { label: '地址', value: '上海市虹口区周家嘴路546号江园二楼B201室' },
                { label: '邮箱', value: 'marketing@wowoohr.com' },
              ]
            }
          >
          </Card>
        </View>
        <View className="page-footer">
          <AtButton openType="getUserInfo" onGetUserInfo={this.getUserInfo}>允许获取用户信息</AtButton>
          <AtButton type='secondary' onClick={this.handlePhone}>马上联系</AtButton>
          <AtButton type='primary' onClick={this.handleFeedback}>提交反馈意见</AtButton>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
