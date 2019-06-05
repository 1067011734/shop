import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'
import XSwiper from '@components/XSwiper';
import XIcon from '@components/XIcon';
import Card from './_components/Card';
import DetailModal from './_components/DetailModal';
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
    // modal是否打开
    isOpened: false,
    // 餐品详情
    detailData:{}
  }

  /**
   * 切换侧边栏
   * @param key 切换的侧边栏的标识
  */
  handleToggle = (key) => {
    this.setState({ actvieKey: key });
    console.info(key)
  }

  /**
   * 关闭modal
   * @params item 被选钟规格的数据
  */
  handleCloseModal = () => {
    this.setState({ isOpened: false })
  }

  /**
    * 点击餐品
    * @params item 被点击的餐品数据
  */
  handleCardClick = (item) => {
    console.info(item)
    this.setState({ detailData:item,isOpened: true })
  }

  render() {
    const { dataSource, siderData, logoSrc, height, swiperSrc } = this.props;
    const { actvieKey, isOpened, detailData} = this.state;

    const scrollStyle = {
      height: height || 'auto'
    }
    console.info(detailData)

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
        <ScrollView
          className={`${prefixCls}-content`}
          style={scrollStyle}
          scrollY
        >
          <View className={`${prefixCls}-content-inner`}>
            <View className={`${prefixCls}-content-banner`}>
              {logoSrc ? <Image src={logoSrc} mode="scaleToFill" /> : ''}
            </View>
            <View className={`${prefixCls}-content-swiper`}>
              <XSwiper dataSource={swiperSrc} />
            </View>
            <View className={`${prefixCls}-content-list`}>
              <View className={`${prefixCls}-content-list-title`}>
                今日推荐<XIcon type='hot' size={[13, 15]} gutter />
              </View>
              {
                dataSource && dataSource.map(item =>
                  <Card
                    dataSource={item}
                    key={item.id}
                    onClick={this.handleCardClick}
                  />
                )
              }
            </View>
          </View>
        </ScrollView>
        <DetailModal
          dataSource={detailData}
          isOpened={isOpened}
          onClose={this.handleCloseModal}
        ></DetailModal>
      </View>
    )
  }
}

export default App
