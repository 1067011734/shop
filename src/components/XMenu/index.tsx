import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Image, Swiper, SwiperItem } from '@tarojs/components'
import XSwiper from '@components/XSwiper';
import hotSrc from '@images/hot.png'
import './index.less';

const prefixCls = 'components-menu';

export interface XMenuProps {
  // 数据源
  siderData?: Array<any>;
  logoSrc?: string;
  dataSource: any;
  onClick: Function;
  // 高度
  height?: string;
  // 轮播图片地址
  swiperSrc?: Array<any>;
}

class App extends Component<XMenuProps> {
  state = {
    actvieKey: 1,
  }

  /**
   * 切换侧边栏
   * @param key 切换的侧边栏的标识
  */
  handleToggle = (key) => {
    this.setState({ actvieKey: key });
    console.info(key)
  }

  render() {
    const { dataSource, siderData, logoSrc, height, swiperSrc } = this.props;
    const { actvieKey } = this.state;

    const scrollStyle = {
      height: height || 'auto'
    }
    console.info(siderData, logoSrc)

    return (
      <View className={prefixCls}>
        <ScrollView
          style={scrollStyle}
          scrollY
          className={`${prefixCls}-sider`}
        >
          {
            siderData && siderData.map(item => (
              <View
                className={`${prefixCls}-sider-item ${item.id === actvieKey ? `${prefixCls}-sider-item-active` : ''}`}
                onClick={() => { this.handleToggle(item.id) }}
                key={item.id}
              >
                {item.value}
              </View>
            ))
          }
        </ScrollView>
        <ScrollView className={`${prefixCls}-content`}>
          {logoSrc ? <Image src={logoSrc} mode="scaleToFill" /> : ''}
          <View className={`${prefixCls}-content-swiper`}>
            <XSwiper dataSource={swiperSrc} />
          </View>
          <View className={`${prefixCls}-content-list`}>
            <View className={`${prefixCls}-content-list-title`}>
              今日推荐<Image className='icon-hot' src={hotSrc}/>
          </View>
            4444
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default App
