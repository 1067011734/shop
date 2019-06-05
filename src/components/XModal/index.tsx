import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'components-modal';

export interface XSwiperProps {
  // 长度
  width?: any;
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
    const { width } = this.props
    const { count } = this.state

    const style = `width:${width || 'auto'}`

    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-content`} style={style}>
          {this.props.children}
        </View>
        <View className={`${prefixCls}-mask`} />
      </View>
    )
  }
}

export default App
