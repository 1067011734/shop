import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import XRolling from '@components/XRolling'
import XModal from '@components/XModal'
import XButton from '@components/XButton'
import Item from './Item'
import './index.less'

const prefixCls = 'components-menu-modal-detail';

export interface CardProps {
  // 数据源
  dataSource?: any;
  // 是否打开/显示
  isOpened?: Boolean;
  // 关闭modal
  onClose?: Function
}

class Index extends Component<CardProps> {

  state = {
    // 规格类型
    specsData: [
      { id: 1, value: '三分钟气泡', type: 2 },
      { id: 2, value: '五分钟气泡', type: 3 },
    ],
    // 选中的规格标识
    specsActvieKey: { value: '', type: null },
    // 温度类型
    temperatureData: [
      { id: 1, value: '正常冰(推荐)', type: 2 },
      { id: 2, value: '少冰', type: 3 },
      { id: 3, value: '少少冰', type: 4 },
      { id: 4, value: '去冰', type: 5 },
      { id: 5, value: '多冰', type: 6 },
      { id: 6, value: '不加冰', type: 7 },
    ],
    // 选中的温度标识
    temperatureActvieKey: { value: '', type: null },
  }

  componentDidMount() {
  }

  handleRolling = (count) => {
    console.info(count)
  }

  /**
   * 规格
   * @params item 被选钟规格的数据
  */
  handleSpecsClick = (item) => {
    const { type, value } = item
    this.setState({ specsActvieKey: { type, value } })
  }

  /**
   * 规格
   * @params item 被选钟规格的数据
  */
  handleTemperatureClick = (item) => {
    const { type, value } = item
    this.setState({ temperatureActvieKey: { type, value } })
  }

  /**
   * 关闭modal
   * @params item 被选钟规格的数据
  */
  handleCloseModal = () => {
    const { onClose } = this.props

    onClose && onClose({ isOpened: false })
  }

  render() {
    const { dataSource, isOpened } = this.props
    const { specsData, specsActvieKey, temperatureData, temperatureActvieKey } = this.state
    // 需求描述
    const requestDescription = [specsActvieKey, temperatureActvieKey].map(x => x.value).filter(Boolean).join(',')

    return (
      <XModal
        width={'calc(100vw - 60rpx)'}
        isOpened={isOpened}
        onClose={this.handleCloseModal}
      >
        <View className={`${prefixCls}`}>
          <View className={`${prefixCls}-header`}>
            <Image src={dataSource.src} mode="scaleToFill" />
          </View>
          <View className={`${prefixCls}-body`}>
            <View className={`${prefixCls}-body-name`}>
              {dataSource.name}
            </View>
            <Item
              title="规格"
              dataSource={specsData}
              activeKey={specsActvieKey.type}
              onClick={this.handleSpecsClick}
            />
            <Item
              title="温度"
              dataSource={temperatureData}
              activeKey={temperatureActvieKey.type}
              onClick={this.handleTemperatureClick}
            />
            <View className={`${prefixCls}-body-description`}>
              <View className={`${prefixCls}-body-description-title`}>
                饮品描述
            </View>
              <View className={`${prefixCls}-body-description-content`}>
                {dataSource.description}
              </View>
            </View>
          </View>
          <View className={`${prefixCls}-footer`}>
            <View className={`${prefixCls}-footer-calc`}>
              <View className={`${prefixCls}-footer-calc-content`}>
                <View className={`${prefixCls}-footer-calc-content-price`}>
                  ￥ {dataSource.price}
                </View>
                <View className={`${prefixCls}-footer-calc-content-description`}>
                  {requestDescription}
                </View>
              </View>
              <View className={`${prefixCls}-footer-calc-plus`}>
                <XRolling onChange={this.handleRolling} />
              </View>
            </View>
            <View className={`${prefixCls}-footer-btn`}>
              <XButton block size="middle">加入购物车</XButton>
            </View>
          </View>
        </View>
      </XModal>
    )
  }
}

export default Index
