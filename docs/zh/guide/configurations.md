---
prev: ./using-manager
next: /zh/customization/
---

# 配置

## 设置源位置

默认下的 `PopMenu` 会将呈现在屏幕中央. 如果你希望菜单显示在自定义的位置，可以传源位置到参数中去:

例子:

```swift
final class YourViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func presentMenu(_ sender: UIButton) {
        // 使用控制器
        let actions = [...] // 添加菜单项

        // 传入一个 UIView
        let menu = PopMenuViewController(sourceView: sender, actions: actions)
        present(menu, animated: true, completion: nil)


        // ===== or =====

                
        // 使用管理器
        let manager = PopMenuManager.default
        manager.actions = [...] // 添加菜单项
        
        // 传入一个 UIView
        manager.present(sourceView: sender)
    }

}
```

-------

## 选中回调

要想知道哪个菜单项被用户选中了，一共有两种方法：
1. 使用 **Action Handlers** （闭包函数）
2. 使用 **Delegate** （委托机制）

### 闭包函数

只需传入一个闭包函数即可：

例子:
```swift
let action1 = PopMenuDefaultAction(title: "菜单1", didSelect: { action in
    // action 是一个 `PopMenuAction`, 该例子为 `PopMenuDefaultAction`

    print("\(action.title) 被选中了") // 会打印出: '菜单1 被选中了'
})
```

### 委托方法
你需要让你的 **ViewController** 遵循 `PopMenuViewControllerDelegate` 协议然后实现函数 `popMenuDidSelectItem(at index: Int)`:

例子:
```swift
class YourViewController: UIViewController {

    // 如果使用控制器的话:
    func presentMenuManually() {
        let menu = PopMenuViewController(actions: [...])

        // 设置委托对象
        menu.delegate = self

        present(menu, animated: true, completion: nil)
    }

    // 使用管理器的话:
    func presentMenuUsingManager() {
        let manager = PopMenuManager.default

        // 设置委托对象
        manager.popMenuDelegate = self

        manager.present(on: self)
    }

}

extension YourViewController: PopMenuViewControllerDelegate {

    // 当一个菜单项被选中后会调用此方法
    func popMenuDidSelectItem(_ popMenuViewController: PopMenuViewController, at index: Int) {
        // 运行逻辑...
    }

}
```

## 消失回调

如果想只在菜单消失后执行一些代码，那么可以：

```swift
// 使用控制器
menu.didDismiss = { selected in
    // `selected` 是一个布尔值，代表着是否有选中的菜单项
    
    if !selected {
        // 当用户隐藏了菜单（没有任何选择下）
    }
}

// 使用控制器
manager.popMenuDidDismiss = { selected in
    // `selected` 是一个布尔值，代表着是否有选中的菜单项

    if !selected {
        // 当用户隐藏了菜单（没有任何选择下）
    }
}
```

## 额外设置

默认下，菜单开启了滑动手势来更改目前选中的菜单项，可以在这里设置：

```swift
// 使用控制器
menu.shouldEnablePanGesture = false
// 使用管理器
manager.popMenuShouldEnablePanGesture = false
```

默认下，菜单开启了Haptics震动引擎，可以在这里设置：

```swift
// 使用控制器
menu.shouldEnableHaptics = false
// 使用管理器
manager.popMenuShouldEnableHaptics = false
```

主要的用法与设置就到此结束啦！恭喜完成了开发指南！:confetti_ball:
