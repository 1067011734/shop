import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

const prefixCls = 'components-Form-Item';


export interface XFormItemProps {
  // 标题
  title?: string
}

export default class XFormItem extends Component<XFormItemProps> {


  render() {
    const { title } = this.props

    return (
      <View className={prefixCls}>
        <View className={`${prefixCls}-title`}>
          {title}
        </View>
        <View className={`${prefixCls}-content`}>
        </View>
      </View>
    )
  }
}


