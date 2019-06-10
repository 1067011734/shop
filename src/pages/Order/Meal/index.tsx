import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

export interface IndexProps{
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
    return (
      <View className="page-content-meal">
        套餐
      </View>
    )
  }
}

export default Index
