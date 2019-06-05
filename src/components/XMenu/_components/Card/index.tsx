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
          <Image src={dataSource.src || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559141090669&di=dac14b86f6855b4f3453f03f773a6c3b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928012450_HzGKk.jpeg"} mode="aspectFit" />
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
