import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import counterStore from './store/counter'

import './app.less'

import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/Call/index',
      'pages/Call/Feedback/index',
      'pages/Fetch/index',
      'pages/Welcome/index',
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#999999",
      selectedColor: "#1E1E1E",
      backgroundColor: "#fff",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/Welcome/index",
          iconPath: "./images/tabbar/order.png",
          selectedIconPath: "./images/tabbar/order.png",
          text: "点餐"
        },
        {
          pagePath: "pages/Fetch/index",
          iconPath: "./images/tabbar/fetch.png",
          selectedIconPath: "./images/tabbar/fetch.png",
          text: "取餐"
        },
        {
          pagePath: "pages/Call/index",
          iconPath: "./images/tabbar/my.png",
          selectedIconPath: "./images/tabbar/my.png",
          text: "我的"
        },
      ]
    }
  }

  componentDidMount() { }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
