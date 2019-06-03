import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import XButton from '@components/XButton'
import './index.less'

const prefixCls = 'components-menu-card';

export interface CardProps {
  // 数据源
  dataSource?: any;
  // 操作
  operation: any;
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

  render() {
    const { dataSource, operation } = this.props

    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}`}>
        <View className={`${prefixCls}-header`}>
        <Image src={dataSource.src || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559141090669&di=dac14b86f6855b4f3453f03f773a6c3b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928012450_HzGKk.jpeg"} mode="aspectFit" />
        </View>
          <View className={`${prefixCls}-body`}>
            <View className={`${prefixCls}-body-content`}>
              <View className={`${prefixCls}-body-content-name`}>
                {dataSource.name}
              </View>
              <View className={`${prefixCls}-body-content-count`}>
                x{dataSource.count}
              </View>
            </View>
            <View className={`${prefixCls}-body-footer`}>
              <View className={`${prefixCls}-body-footer-description`}>
                {dataSource.description}
              </View>
              <View className={`${prefixCls}-body-footer-price`}>
                ￥ {dataSource.price}
              </View>
            </View>
          </View>
        </View>
        <View className={`${prefixCls}-footer`}>
          <XButton>{operation}</XButton>
        </View>
      </View>
    )
  }
}

export default Index
