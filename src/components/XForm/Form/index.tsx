import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'components-Form';


export interface XFormProps {
  // 图标指定
  children?: any
}

export default class Form extends Component<XFormProps> {

  render() {

    return (
      <View className={prefixCls}>{this.props.children}</View>
    )
  }
}
