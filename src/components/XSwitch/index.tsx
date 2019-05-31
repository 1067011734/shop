import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'components-switch';

export interface XSwitchProps {
  // 数据源
  dataSource: any,
  onClick: Function
}

class App extends Component<XSwitchProps> {
  state = {
    actvieKey: 1
  }

  /**
   * 切换选项
   * @param key 切换的选项标示
  */
  handleToggle = (key) => {
    const { onClick } = this.props

    this.setState({ actvieKey: key },()=>{
      onClick(key)
    });
  }

  render() {
    const { dataSource } = this.props;
    const { actvieKey } = this.state;

    return (
      <View className={prefixCls}>
        <View
          className={`${prefixCls}-arrow-left ${actvieKey == 1 ? `${prefixCls}-arrow-active` : ''}`}
          onClick={() => { this.handleToggle(1) }}
        >
          {dataSource[0] && dataSource[0].value}
        </View>
        <View
          className={`${prefixCls}-arrow-right ${actvieKey == 2 ? `${prefixCls}-arrow-active` : ''}`}
          onClick={() => { this.handleToggle(2) }}
        >
          {dataSource[1] && dataSource[1].value}
        </View>
      </View>
    )
  }
}

export default App
