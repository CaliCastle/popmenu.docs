---
prev: ./getting-started.md
next: ./using-controller.md
---

# 如何使用

将 **PopMenu** 嵌入到你现有的项目中是非常容易的，用法就像 `UIAlertController` 与 `UIAlertAction`

最重要的是, 必须确保 `PopMenu` 已经被引入:

```swift
import PopMenu
```

## 基本用法

总共有 两种 基本用法来弹出菜单:

1. **(推荐)** 直接使用 `PopMenuViewController` 类

2. 使用默认的管理器

不过当然了，你喜欢哪种完全取决于你，看个人偏好

## 我到底该选择哪个？

1. **(推荐)** 直接使用 `PopMenuViewController` 类的好处是你可以有完整的控制，因为所有的API完全都可用，不需要额外设置.

2. 使用默认的 `管理器` 的好处是不直接与控制器打交道， 而让控制器去决定在目前最顶端的控制器来展示弹出菜单

:::tip 尽量使用 `控制器`
It's highly recommended to present the menu using the good ol' way of instantiating a `PopMenuViewController`
:::
