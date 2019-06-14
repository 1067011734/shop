import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import './index.less'

const prefixCls = 'page-address-slide';

export interface CardProps {
  // 标题
  title?: any;
  // 图片地址
  src?: any;
  // 类型
  type?: string;
}

class Index extends Component<CardProps> {

  static defaultProps = {
    title: "",
    dataSource: {},
    operation: "",
  }

  state = {
    translateX: 0,
    animate: false
  }
  // px/2=rpx
  max = 130 / 2
  touchStartX = 0
  // 上一次touch移动的长度
  moveX = 0

  componentDidMount() {
  }

  onTouchStart = (ev) => {
    const { pageX } = ev.touches[0]

    this.setState({ animate: false })

    this.touchStartX = pageX
  }

  onTouchMove = (ev) => {
    const { touchStartX, max, moveX } = this
    const { pageX } = ev.touches[0]

    const translateX = pageX - touchStartX

    // 这次touch移动的长度 +  上次touch移动的长度
    const result = translateX + moveX
    // 移动的长度大于最大值 或从 初始位置向右移动
    if (Math.abs(result) > max || result > 0) {
      return
    }


    this.setState({ translateX: result })
  }

  onTouchEnd = () => {
    const { max } = this
    const { translateX } = this.state

    let x = max
    // 滑动超过max的一半，复原
    if (Math.abs(translateX) <= (max / 2)) {
      this.setState({ translateX: 0, animate: true })
      this.moveX = 0
      return
    }
    if (Math.sign(translateX) === -1) {
      x = -(max)
    }

    this.setState({ translateX: x, animate: true })
    this.moveX = x
  }

  render() {
    const { translateX, animate } = this.state

    const wrapClassName = classnames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-animate`]: animate,
    })
    const style = `transform: translateX(${translateX * 2}rpx)`

    return (
      <View
        className={wrapClassName}
        style={style}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <View className={`${prefixCls}-content`}>
          1111bbbbbbbbbbbbbbbbbbbbbb
            </View>
        <View className={`${prefixCls}-extra`}>
          删除
            </View>
      </View>
    )
  }
}

export default Index
