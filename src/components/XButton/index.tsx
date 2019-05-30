import Taro, { Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import classNames from 'classnames';
import './index.less';

const prefixCls = 'components-button';

export interface buttonProps {
  // 类型
  type: String,
  // 子元素
  children: any;
}

 class App extends Component<buttonProps, {}> {
  static defaultProps = {
    type: String,
  }

  render() {
    const { type } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true
    });

    return (
      <Button className={className}>{this.props.children}</Button>
    )
  }
}

export default App
