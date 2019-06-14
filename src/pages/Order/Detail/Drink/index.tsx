import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XMenu from '@components/XMenu'
import './index.less'

export interface IndexProps {
  dataSource?: any
}

class Index extends Component<IndexProps> {

  state = {
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { dataSource={} } = this.props
    const { siderData = [], swiperSrc=[], contentData = [], logoSrc="" } = dataSource
    return (
      <View className="page-content-drink">
        <XMenu
          height={'calc(100vh - 92rpx - 56rpx)'}
          siderData={siderData}
          logoSrc={logoSrc}
          swiperSrc={swiperSrc}
          dataSource={contentData}
        />
      </View>
    )
  }
}

export default Index
