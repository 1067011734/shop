import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import XIcon from '@components/XIcon'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'components-modal';

export interface XSwiperProps {
  // 长度
  width?: any;
  // 是否打开/显示
  isOpened?: Boolean;
  // 关闭modal
  onClose?: Function
}

class App extends Component<XSwiperProps> {

  handleClose = () => {
    const { onClose } = this.props

    onClose && onClose({ isOpened: false })
  }

  render() {
    const { width, isOpened } = this.props

    const wrapClassName = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-hidden`]: !isOpened,
    });

    const contentClassName = classNames({
      [`${prefixCls}-content-scale`]: isOpened,
      [`${prefixCls}-content`]: true,
    });

    const style = `width:${width || 'auto'}`

    return (
      <View className={wrapClassName}>
        <View className={contentClassName} style={style}>
          <View
            className={`${prefixCls}-content-close`}
            onClick={this.handleClose}
          >
            <XIcon type='close' size={48} />
          </View>
          {this.props.children}
        </View>
        <View className={`${prefixCls}-mask`} />
      </View>
    )
  }
}

export default App
