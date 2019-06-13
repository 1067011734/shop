/**
 * 计算数组的和
 * @param arry 数组,数组元素
 * @param index 计算下标在index之内数组的和，默认最大
 */
export const Count = (arry, index = -1, gutter = 0) => {
  let result = 0
  const length = index < 0 ? arry.length : index
  for (let i = 0; i <= length; i++) {
    result += arry[i]
  }
  return result + gutter
}

/**
 * 返回一个随机key
 */
export const unique = () => {
  return Math.round(new Date().getTime() + (Math.random() * 1000));
}
