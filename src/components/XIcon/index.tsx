import Taro, { Component } from '@tarojs/taro'
import { Image } from '@tarojs/components'
import hotSrc from '@images/hot.png'
import './index.less';

const prefixCls = 'components-icon';

const typeList = {
  hot: hotSrc,
}

export interface XSwiperProps {
  // 图标指定
  type?: any;
  // 大小
  size?: any;
  // 间隔
  gutter?: number | boolean
}

class App extends Component<XSwiperProps> {

  getSize = (size) => {
    let width = 0;
    let height = 0;

    if (Object.prototype.toString.call(size) === "[object Array]" && size.length === 2) {
      [width, height] = size
    }
    if (Object.prototype.toString.call(size) === "[object Number]") {
      width = size
      height = size
    }

    return [width,height]
  }

  getGutter = (gutter) => {
    let result = 0
    if (Object.prototype.toString.call(gutter) === "[object Boolean]") {
      result = 5
    }
    if (Object.prototype.toString.call(gutter) === "[object Number]") {
      result = gutter
    }
    return result
  }

  render() {
    const { type, size, gutter } = this.props;

    const [width,height] = this.getSize(size)

    const magrinLeft = this.getGutter(gutter);

    const style = `width: ${width}rpx; height: ${height}rpx;margin-left:${magrinLeft}rpx`

    return (
      <Image className={prefixCls} style={style} src={typeList[type]} />
    )
  }
}

export default App
