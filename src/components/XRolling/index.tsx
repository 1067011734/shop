import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XIcon from '@components/XIcon'
import './index.less';

const prefixCls = 'components-rolling';

export interface XSwiperProps {
  // 是否显示完整
  isComplete?: Boolean;
  // 值改变触发的回调事件
  onChange?: Function;
  // 点击事件
  onClick?: Function
  // 阻止事件传播
  stopPropagation?: Boolean
}

class App extends Component<XSwiperProps> {

  state = {
    count: 0
  }

  handleIncrease = () => {
    const { onChange } = this.props
    const { count } = this.state

    const result = count + 1

    this.setState({
      count: result
    }, () => {
      onChange && onChange(result)
    })
  }

  handleReduce = () => {
    const { onChange } = this.props
    const { count } = this.state

    const result = count - 1

    if (result < 0) {
      return
    }

    this.setState({
      count: result
    }, () => {
      onChange && onChange(result)
    })
  }

  handleClick = (event) => {
    const { stopPropagation } = this.props
    const { onClick } = this.props

    stopPropagation && event.stopPropagation()


    onClick && onClick(event)
  }

  render() {
    const { isComplete } = this.props
    const { count } = this.state

    return (
      <View className={prefixCls} onClick={this.handleClick}>
        <View className={`${prefixCls}-reduce ${isComplete === false && !count ? `${prefixCls}-hidden` : ''}`} onClick={this.handleReduce}>
          <XIcon type='reduce' size={48} />
        </View>
        <View className={`${prefixCls}-count ${isComplete === false && !count ? `${prefixCls}-hidden` : ''}`}>
          {count}
        </View>
        <View className={`${prefixCls}-plus`} onClick={this.handleIncrease}>
          <XIcon type='plus' size={48} />
        </View>
      </View>
    )
  }
}

export default App
