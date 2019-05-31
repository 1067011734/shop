import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'components-tabs';

export interface XTabsProps {
  // 数据源
  dataSource: any,
  onClick: Function
}

class App extends Component<XTabsProps> {
  state = {
    actvieKey: 1
  }

  /**
   * 切换开关
   * @param key 切换的开关的标识
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
          className={`${prefixCls}-left ${actvieKey == 1 ? `${prefixCls}-active` : ''}`}
          onClick={() => { this.handleToggle(1) }}
        >
          {dataSource[0] && dataSource[0].value}
        </View>
        <View
          className={`${prefixCls}-right ${actvieKey == 2 ? `${prefixCls}-active` : ''}`}
          onClick={() => { this.handleToggle(2) }}
        >
          {dataSource[1] && dataSource[1].value}
        </View>
      </View>
    )
  }
}

export default App
