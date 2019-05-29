import { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

const prefixCls = 'fetch-food-card';

export interface cardProps {
  // 数据源
  dataSource: any;
}

class Index extends Component<cardProps> {

  static defaultProps = {
    title: "",
    dataSource: {}
  }

  state = {}

  componentDidMount() {
  }

  render() {
    const { dataSource } = this.props

    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-title`}>
          <View className={`${prefixCls}-title-content`}>
            {dataSource.title}
          </View>
          <View className={`${prefixCls}-title-description`}>
            预计{dataSource.time}送达
          </View>
        </View>
        <View className={`${prefixCls}-main`}>
          <Image src={dataSource.src} mode="aspectFit" />
          <View className={`${prefixCls}-main-body`}>
            <View className={`${prefixCls}-main-body-content`}>
              <View className={`${prefixCls}-main-body-content-name`}>
                {dataSource.name}
              </View>
              <View className={`${prefixCls}-main-body-content-count`}>
                x{dataSource.count}
              </View>
            </View>
            <View className={`${prefixCls}-main-body-footer`}>
            <View className={`${prefixCls}-main-body-footer-description`}>
                {dataSource.description}
              </View>
              <View className={`${prefixCls}-main-body-footer-price`}>
                ￥{dataSource.price}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
