import Taro, { Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'components-button';

export interface buttonProps {
  // 类型
  type?: String,
  // 子元素
  children: any;
  // 将按钮宽度调整为其父宽度的选项
  block?: Boolean
}

 class App extends Component<buttonProps, {}> {
  static defaultProps = {
    type: String,
  }

  render() {
    const { type, block } = this.props;
   console.info(this.props)
    const className = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-block`]: true,
      [`${prefixCls}-size-middle`]: true,
      // [`${prefixCls}-block`]: Boolean(block),
    });

    return (
      <Button className={className}>{this.props.children}</Button>
    )
  }
}

export default App
