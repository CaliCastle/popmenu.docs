---
prev: ./how-to-use.md
next: ./using-manager.md
---

# Using - Controller

Here's what you need to instantiate the menu by controller:

```swift
let menuViewController = PopMenuViewController()
```

Additionally, you can create actions by passing the actions in the initializer:

```swift
let menuViewController = PopMenuViewController(actions: [
    PopMenuDefaultAction(title: "Action Title 1", image: UIImage(named: "icon"),
    PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon")
])
```

Finally, to present the menu all you have to do is call `present` method in your own **ViewController** like a normal view controller:

```swift
final class YourViewController: UIViewController {

...
    // Example method to present a pop menu
    func presentMenu() {
        let menuViewController = PopMenuViewController(actions: [
            PopMenuDefaultAction(title: "Action Title 1", image: UIImage(named: "icon"),
            PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon"))
        ])

        present(menuViewController, animated: true, completion: nil)
    }
...

}
```