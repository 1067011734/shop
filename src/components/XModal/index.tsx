import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XIcon from '@components/XIcon'
import './index.less';

const prefixCls = 'components-modal';

export interface XSwiperProps {
  // 是否显示完整
  isComplete?: Boolean;
  // 值改变触发的回调事件
  onChange?: Function
}

class App extends Component<XSwiperProps> {

  state = {
    count: 0
  }

  render() {
    const { isComplete } = this.props
    const { count } = this.state

    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-content`}>
          55555555
        </View>
        <View className={`${prefixCls}-mask`} />
      </View>
    )
  }
}

export default App
