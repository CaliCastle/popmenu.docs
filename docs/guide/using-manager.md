---
prev: ./using-controller.md
next: ./configurations
---

# Using - Manager

Here's what you need to start using `PopMenuManager`'s default singleton with no additional setup required:

```swift
let manager = PopMenuManager.default
```

Then, add **actions** to the manager directly:

```swift
manager.actions = [
    PopMenuDefaultAction(title: "Action Title 1"), // Text only action
    PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon") // Text and image action
]
```

Or if you prefer the way similar to presenting a `UIAlertController` with `UIAlertAction`, you can add each action by:

```swift
let action1 = PopMenuDefaultAction(title: "Action Title 1", image: UIImage(named: "icon"))
let action2 = PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon"))

manager.addAction(action1)
manager.addAction(action2)
```

There! That's how you set the actions for the menu using the manager.

Now all you have to do is to simply call `present()` on the manager, either pass the view controller in the `on` argument or `PopMenuManager` will automatically fetch the current top view controller to present the menu on top (_use at your own risk because it might fail_):

```swift
// Show menu without specifying which controller
manager.present()

// Or you can specify the controller to present on
manager.present(on: self)
```

:::tip Recommendation
Even though both should **work fine**, but still, using `manager.present(on: ...)` to specify which view controller would be a **safer** way to go for presenting.
:::
