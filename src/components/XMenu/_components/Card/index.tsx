import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import XRolling from '@components/XRolling'
import './index.less'

const prefixCls = 'components-menu-card';

export interface CardProps {
  // 数据源
  dataSource?: any;
  // 点击事件
  onClick?: Function;
}

class Index extends Component<CardProps> {

  static defaultProps = {
    title: "",
    dataSource: {},
    operation: ""
  }

  state = {}

  componentDidMount() {
  }

  handleRolling = (count) => {
    console.info(count)
  }

  handleWrapClick = (item) => {
    const { onClick } = this.props

    onClick && onClick(item)
  }

  render() {
    const { dataSource } = this.props

    return (
      <View className={`${prefixCls}`} onClick={() => { this.handleWrapClick(dataSource) }}>
        <View className={`${prefixCls}-header`}>
          <Image src={dataSource.src} mode="scaleToFill" />
        </View>
        <View className={`${prefixCls}-body`}>
          <View className={`${prefixCls}-body-name`}>
            {dataSource.name}
          </View>
          <View className={`${prefixCls}-body-description`}>
            {dataSource.description}
          </View>
          <View className={`${prefixCls}-body-footer`}>
            <View className={`${prefixCls}-body-footer-price`}>
              ￥ {dataSource.price}
            </View>
            <View className={`${prefixCls}-body-footer-plus`}>
              <XRolling
                isComplete={false}
                onChange={this.handleRolling}
                stopPropagation
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
