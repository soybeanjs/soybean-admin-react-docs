---
order: 4
title: useAuth
---

`useAuth` 用于根据后端返回的用户信息判断用户是否有某些按钮权限

## 用法

```ts
  const { hasAuth } = useAuth();
  // 例如用户管理的删除按钮权限
    {hasAuth('USER_DEL') && <Button>删除</Button>}
```
