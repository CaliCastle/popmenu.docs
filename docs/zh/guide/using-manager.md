---
prev: ./using-controller.md
next: ./configurations
---

# 用法 - 管理器

使用 `PopMenuManager` 默认的 单例 即可：

```swift
let manager = PopMenuManager.default
```

然后，添加菜单项：

```swift
manager.actions = [
    PopMenuDefaultAction(title: "标题1"), // 纯文字
    PopMenuDefaultAction(title: "标题2", image: UIImage(named: "icon") // 文字与图标
]
```

或者如果你更喜欢 `UIAlertController` 跟 `UIAlertAction` 的设置方法， 那你也可以这样：

```swift
let action1 = PopMenuDefaultAction(title: "标题1", image: UIImage(named: "icon"))
let action2 = PopMenuDefaultAction(title: "标题2", image: UIImage(named: "icon"))

manager.addAction(action1)
manager.addAction(action2)
```

就是这么简单！使用管理器其实就是一个控制器的快捷方式

最后你只需要调用控制器的 `present()` 方法，要么在 `on` 中传入你想展示菜单的视图控制器 或者 `PopMenuManager` 会自动获取视图最顶的控制器来展示 (_注意可能会失败_):

```swift
// 什么都不声明地展示菜单
manager.present()

// 或者传入控制器
manager.present(on: self)
```

:::tip 推荐
尽管上面两种 **都可以成功展示控制器**, 但是使用 `manager.present(on: ...)` 来传入控制器实例是更加 **安全** 的。
:::
