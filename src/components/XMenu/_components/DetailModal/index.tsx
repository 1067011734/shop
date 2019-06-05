import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import XRolling from '@components/XRolling'
import XModal from '@components/XModal'
import Item from './Item'
import './index.less'

const prefixCls = 'components-menu-modal-detail';

export interface CardProps {
  // 数据源
  dataSource?: any;
  // 操作
  operation?: any;
}

class Index extends Component<CardProps> {

  static defaultProps = {
    title: "",
    dataSource: {},
    operation: ""
  }

  state = {
    specsData: [
      { id: 1, value: '三分钟气泡', type: 2 },
      { id: 2, value: '五分钟气泡', type: 3 },
    ],
    specsActvieKey: null
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
    const { type } = item
    this.setState({ specsActvieKey: type })
  }

  render() {
    const { dataSource, operation } = this.props
    const { specsData, specsActvieKey } = this.state

    return (
      <XModal>
        <View className={`${prefixCls}`}>
          <View className={`${prefixCls}-header`}>
            <Image src={dataSource.src || "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559141090669&di=dac14b86f6855b4f3453f03f773a6c3b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201509%2F28%2F20150928012450_HzGKk.jpeg"} mode="aspectFit" />
          </View>
          <View className={`${prefixCls}-body`}>
            <View className={`${prefixCls}-body-name`}>
              {dataSource.name}
            </View>
            <Item
              title="规格"
              dataSource={specsData}
              activeKey={specsActvieKey}
              onClick= {this.handleSpecsClick}
            />
            <View className={`${prefixCls}-body-description`}>
              {dataSource.description}
            </View>
            <View className={`${prefixCls}-body-footer`}>
              <View className={`${prefixCls}-body-footer-price`}>
                ￥ {dataSource.price}
              </View>
              <View className={`${prefixCls}-body-footer-plus`}>
                <XRolling onChange={this.handleRolling} />
              </View>
            </View>
          </View>
        </View>
      </XModal>
    )
  }
}

export default Index
