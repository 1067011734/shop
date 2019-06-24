import Taro, { Component } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
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
  // mobx 购物数据
  shoppingStore?: any
  // 饮品需求数据源
  requireData?: any;
}

@inject('shoppingStore')
@observer
class Index extends Component<CardProps> {

  static defaultProps = {
    requireData: [],
    dataSource: {}
  }

  state = {
    // 点餐数量
    count: 0,
    isOpened: null,
    // 选中的需求
    selectedRequired: {}
  }

  componentDidMount() {
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.isOpened !== prevState.isOpened) {
      return ({
        isOpened: nextProps.isOpened,
        count: 0
      })
    }
    return null
  }


  /**
  * 改变饮料杯数触发事件
  * @param item 被选钟规格的数据
  */
  handleRollingChange = (count) => {
    this.setState({ count })
  }


  /**
    * 选择饮品需求点击触发
    * @param { String} field 该需求的标示
    * @param { Object } item  该需求的详细数据
  */
  handleRequiredClick = (field, item) => {
    const { selectedRequired } = this.state
    const { label, value } = item

    this.setState({
      selectedRequired: {
        ...selectedRequired,
        [field]: { label, value }
      }
    })
  }

  /**
   * 关闭modal
   * @param item 被选钟规格的数据
  */
  handleCloseModal = () => {
    const { onClose } = this.props

    onClose && onClose({ isOpened: false })
  }

  /**
   * 加入购物车
   * @param item 被选钟规格的数据
  */
  handleShopping = () => {
    const { onClose, dataSource, shoppingStore } = this.props
    const { count } = this.state
    const { id } = dataSource

    const data = { id, count }

    shoppingStore.saveItem(data)

    onClose && onClose({ isOpened: false })
  }

  /**
  * 获得该饮品的需求选项列表
  */
  getRequireList = () => {
    const { requireData, dataSource } = this.props

    if (!requireData.length || !Object.keys(dataSource).length) {
      return []
    }

    const { requireType } = dataSource


    return requireData.filter(item => requireType.includes(item.type))
  }

  /**
   * 总结用户的需求
   */
  getNeeds = (list = [] as any) => {
    if (!list.length) {
      return []
    }

    const { selectedRequired } = this.state

    return list.map(item => selectedRequired[item.field] && selectedRequired[item.field].label)
  }

  render() {
    const { dataSource = {}, isOpened, shoppingStore } = this.props
    const { count, selectedRequired } = this.state

    const detailData = shoppingStore.getItem(dataSource)

    const xRollingCount = count || detailData.count
    const requireList = this.getRequireList()
    const need = this.getNeeds(requireList).filter(Boolean).join(',')

    return (
      <XModal
        width={'calc(100vw - 60rpx)'}
        isOpened={isOpened}
        onClose={this.handleCloseModal}
        mode="scale"
      >
        <View className={`${prefixCls}`}>
          <View className={`${prefixCls}-header`}>
            <Image src={dataSource.src} mode="scaleToFill" />
          </View>
          <View className={`${prefixCls}-body`}>
            <View className={`${prefixCls}-body-name`}>
              {dataSource.name}
            </View>
            {requireList && requireList.length && requireList.map(item => (
              <Item
                title={item.title}
                dataSource={item.list}
                key={item.type}
                activeKey={selectedRequired[item.field] && selectedRequired[item.field].value}
                onClick={(data) => { this.handleRequiredClick(item.field, data) }}
              />
            ))}
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
                  {need}
                </View>
              </View>
              <View className={`${prefixCls}-footer-calc-plus`}>
                <XRolling
                  onChange={this.handleRollingChange}
                  min={1}
                  count={xRollingCount}
                />
              </View>
            </View>
            <View className={`${prefixCls}-footer-btn`}>
              <XButton block size="middle" onClick={this.handleShopping}>加入购物车</XButton>
            </View>
          </View>
        </View>
      </XModal>
    )
  }
}

export default Index
