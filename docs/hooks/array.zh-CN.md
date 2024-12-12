---
order: 5
title: useArray
---

` useArray` 用于方便对数组格式的数据进行操作。

- `object`类型的用`ahooks`的`useSetState`

## 用法

```ts
  const [newses, { push, remove, unshift, up, down, pop, shift, reverse, sort }] = useArray([
    { id: 1, content: t('page.home.projectNews.desc1'), time: '2021-05-28 22:22:22' },
    { id: 2, content: t('page.home.projectNews.desc2'), time: '2023-10-27 10:24:54' },
    { id: 3, content: t('page.home.projectNews.desc3'), time: '2021-10-31 22:43:12' },
    { id: 4, content: t('page.home.projectNews.desc4'), time: '2022-11-03 20:33:31' },
    { id: 5, content: t('page.home.projectNews.desc5'), time: '2021-11-07 22:45:32' }
  ]);
```
### API

```ts
const [arrayState, actions] = useArray<T, K>(
  initialArray: T[], // 初始数组
  key?: K,           // 唯一标识字段，默认是 'id'
);

const [state,{
  updateState: (newState: T[]) => void,
  push: (...newItems: T[]) => void,
  unshift: (...newItems: T[]) => void,
  remove: (itemKey: T[K]) => void,
  up: (itemKey: T[K]) => void,
  down: (itemKey: T[K]) => void,
  pop: () => void,
  shift: () => void,
  reverse: () => void,
  clear: () => void,
  sort: (compareFn?: (a: T, b: T) => number) => void,
  splice: (start: number, deleteCount?: number, ...items: T[]) => void,
  reset: () => void,
  findItem: (key: T[K]) => T | undefined,
}] = actions;
```

### Result

| 参数          | 说明                                                                         | 类型                                              |
| ------------- | ---------------------------------------------------------------------------- | ------------------------------------------------- |
| state    | 当前的数组状态                                                              | `T[]`                                            |
| updateState   | 更新整个数组状态                                                            | `(newState: T[]) => void`                        |
| push          | 添加元素到数组末尾，同时确保唯一性                                          | `(...newItems: T[]) => void`                     |
| unshift       | 添加元素到数组开头，同时确保唯一性                                          | `(...newItems: T[]) => void`                     |
| remove        | 根据唯一键移除数组中的元素                                                  | `(itemKey: T[K]) => void`                        |
| up            | 将指定元素上移一位                                                          | `(itemKey: T[K]) => void`                        |
| down          | 将指定元素下移一位                                                          | `(itemKey: T[K]) => void`                        |
| pop           | 移除数组的最后一个元素                                                      | `() => void`                                     |
| shift         | 移除数组的第一个元素                                                        | `() => void`                                     |
| reverse       | 反转数组                                                                    | `() => void`                                     |
| clear         | 清空数组                                                                    | `() => void`                                     |
| sort          | 对数组进行排序                                                              | `(compareFn?: (a: T, b: T) => number) => void`   |
| splice        | 使用数组的 `splice` 方法插入或删除元素                                      | `(start: number, deleteCount?: number, ...items: T[]) => void` |
| reset         | 重置数组到初始状态                                                          | `() => void`                                     |
| findItem      | 根据唯一键查找数组中的某个元素                                              | `(key: T[K]) => T | undefined`                  |



- 详细代码示例可参考：[useArray](https://github.com/mufeng889/react-soybean-admin/blob/master/src/pages/home/modules/ProjectNews.tsx)

- [效果展示](https://react-soybean.ohh-889.com/home)
