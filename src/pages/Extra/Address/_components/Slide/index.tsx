import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import './index.less'

const prefixCls = 'page-address-slide';

export interface SlideProps {
  // 名字
  name?: any;
  // 电话
  phone?: any;
  // 地址
  address?: string;
  // 删除事件
  onDelete?: Function;
  // 编辑事件
  onEdit?: Function;
}

export default class Index extends Component<SlideProps> {

  static defaultProps = {
    name: "",
    phone: '',
    address: "",
    onDelete: () => { },
    onEdit: () => { },
  }

  state = {
    // 元素在水平方形移动的长度，单位为px
    translateX: 0,
    animate: false
  }
  // 单位为px;px/2=rpx
  max = 0
  // 手指触摸动作开始pagex坐标
  touchStartX = 0
  // 上一次touch移动的长度
  moveX = 0

  componentDidMount() {
    this.getMax()
  }

  getMax = () => {
    const query = Taro.createSelectorQuery().in(this.$scope)
    query.select(`.${prefixCls}-delete`)
      .boundingClientRect((rect: any) => {
        const { width } = rect
        this.max = width
      })
      .exec()
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

  /**
   * 编辑地址
  */
  handleEdit = () => {
    const { name, phone, address,onEdit } = this.props

    onEdit && onEdit(name, phone, address)
  }

  /**
   * 删除地址
  */
  handleDelete = () => {
    const { name, phone, address,onDelete } = this.props

    onDelete && onDelete(name, phone, address)
  }

  render() {
    const { name, phone, address } = this.props
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
          <View className={`${prefixCls}-content-read`}>
            <View className={`${prefixCls}-content-read-top`}>
              <View className={`${prefixCls}-content-read-top-name`}>
                {name}
              </View>
              <View className={`${prefixCls}-content-read-top-phone`}>
                {phone}
              </View>
            </View>
            <View className={`${prefixCls}-content-read-bottom`}>
              {address}
            </View>
          </View>
          <View className={`${prefixCls}-content-edit`} onClick={this.handleEdit}>
            编辑
        </View>
        </View>
        <View className={`${prefixCls}-delete`} onClick={this.handleDelete}>
          删除
            </View>
      </View>
    )
  }
}
