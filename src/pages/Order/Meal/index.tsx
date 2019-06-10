import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XSwiper from '@components/XSwiper';
import './index.less'

export interface IndexProps {
  dataSource?: any
}

class Index extends Component<IndexProps> {

  state = {
    swiperSrc: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=971903522,2055241417&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=4229885950,3469296745&fm=11&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=4145206504,1491730429&fm=26&gp=0.jpg'
    ],
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { swiperSrc } = this.state
    console.info(swiperSrc)
    return (
      <View className="page-content-meal">
        <XSwiper dataSource={swiperSrc} />
        套餐233
      </View>
    )
  }
}

export default Index
