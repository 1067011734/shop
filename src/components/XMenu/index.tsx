import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less';

const prefixCls = 'components-menu';

export interface XMenuProps {
  // 数据源
  siderData?: Array<any>,
  dataSource: any,
  onClick: Function
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
    const { dataSource, siderData } = this.props;
    const { actvieKey } = this.state;

    return (
      <View className={prefixCls}>
        <View
          className={`${prefixCls}-sider`}
        >
          {
            siderData && siderData.map(item => (
              <View
                className={`${prefixCls}-sider-item ${item.id===actvieKey?`${prefixCls}-sider-item-active`:''}`}
                onClick={()=>{this.handleToggle(item.id)}}
                key={item.id}
              >
                {item.value}
              </View>
            ))
          }
        </View>
        <View
          className={`${prefixCls}-content`}
          onClick={() => { this.handleToggle(2) }}
        >
          {dataSource[1] && dataSource[1].value}
        </View>
      </View>
    )
  }
}

export default App
