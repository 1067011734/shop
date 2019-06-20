import { observable } from 'mobx'
import { unique } from '@utils/function'

const shoppingStore = observable({
  data: [],
  getItem(id) {
    const { data } = this

    const findIndex = data.findIndex(x => x.id === id)

    if (findIndex === -1) {
      return {}
    }
    return data[findIndex]
  },
  saveItem(item = {} as any) {
    if (!Object.keys(item).length) {
      return {}
    }

    const { data } = this

    let { id } = item

    const findIndex = data.findIndex(x => x.id === id)

    // 若不存在,则添加进数组
    if (findIndex === -1) {
      if (!id) {
        item.id = unique();
      }

      this.data = [...data, item]
      return
    }
    data[findIndex]=item
    this.data = [...data]
  },
  getList() {
    const { data } = this

    return [...data]
  },
  deleteItem(id) {
    const { data } = this

    this.data = data.filter(item => item.id !== id)
  },
})
export default shoppingStore
