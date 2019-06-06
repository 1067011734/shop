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
  block?: Boolean;
  // 尺寸大小
  size?: string;
  // 点击事件
  onClick?: Function
}

 class App extends Component<buttonProps, {}> {
  static defaultProps = {
    type: String,
  }

  handleClick = () =>{
    const { onClick} = this.props;

    onClick && onClick()
  }

  render() {
    const { type, block, size } = this.props;

    const className = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-size-middle`]: size==='middle',
      // [`${prefixCls}-block`]: Boolean(block),
    });

    return (
      <Button className={className} onClick={this.handleClick}>{this.props.children}</Button>
    )
  }
}

export default App
