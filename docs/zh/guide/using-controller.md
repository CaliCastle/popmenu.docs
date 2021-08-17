---
prev: ./how-to-use.md
next: ./using-manager.md
---

# 用法 - 控制器

新建一个控制器非常容易：

```swift
let menuViewController = PopMenuViewController()
```

除此之外，你也可以同时传入所有的菜单项 （action）:

```swift
let menuViewController = PopMenuViewController(actions: [
    PopMenuDefaultAction(title: "标题1", image: UIImage(named: "icon")),
    PopMenuDefaultAction(title: "标题2", image: UIImage(named: "icon"))
])
```

最后就差展示出菜单，你只需要调用 `present` 方法即可：

```swift
final class YourViewController: UIViewController {

...
    // 展示一个弹出菜单
    func presentMenu() {
        let menuViewController = PopMenuViewController(actions: [
            PopMenuDefaultAction(title: "标题1", image: UIImage(named: "icon")),
            PopMenuDefaultAction(title: "标题2", image: UIImage(named: "icon"))
        ])

        present(menuViewController, animated: true, completion: nil)
    }
...

}
```
