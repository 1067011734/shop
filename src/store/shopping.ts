import { observable } from 'mobx'

const shoppingStore = observable({
  data: [{id:5}],
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  getItem (item){
    const { id } = item
    const { data} = this

    const findIndex = data.findIndex(x=>x.id===id)

    if (findIndex===-1){
      return {}
    }
    return data[findIndex]
  },
  saveItem (item){
    const { id } = item
    const { data} = this

    const findIndex = data.findIndex(x=>x.id===id)

    if (findIndex===-1){
      this.data=[...data,item]
      return
    }
    const result = {...data[findIndex],...item}
    this.data[findIndex]= result
  }
})
export default shoppingStore
