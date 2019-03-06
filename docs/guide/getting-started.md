# Getting Started

## Example Project

::: tip
Download or fork the repo and open the given `Example` Xcode project to try it out yourself!
:::

## Installation

### For CocoaPods

Install **PopMenu** using [**CocoaPods**](https://cocoapods.org), add it to your **Podfile**:

> ‼️ `PopMenu` was actually taken so let's call it `NewPopMenu` 'cause why not?

```ruby
# For Swift 4.2, Xcode 10+
pod 'NewPopMenu', '~> 2.0'

# For Swift 4.1 and under
pod 'NewPopMenu', '~> 1.1'
```

### For Carthage

Install **PopMenu** using [**Carthage**](https://github.com/Carthage/Carthage), add it to your **Cartfile**:

```ruby
github "CaliCastle/PopMenu"
```

## <a name="requirements"></a> ⚠️ Requirements

* Xcode 8.0 +
* iOS 9.0 +
* Swift 4.0 +

## <a name="how-to"></a> 👨🏻‍💻 How to Use

Integrating **PopMenu** is extremely easy with a familiar workflow like presenting `UIAlertController` with `UIAlertAction`

### Import Library

```swift
import PopMenu
```

### Basic Usage

There are 2 ways to present the menu in your view controller:

1. **Use the default manager**

2. **Use the `PopMenuViewController` class directly**

You can, however, choose either way to have the same result, whichever works best for you.

#### Which Should I Use?

1. Use the default manager if you want quick setup and present menu seamlessly.
 
2. Use the `PopMenuViewController` class directly if you want to have more control.

**If you don't want to scroll, click the link to jump forward:**

[Basic Usage - Using Manager](#using-manager)

[Basic Usage - Using Controller (Recommended)](#using-controller)

-------

### <a name="using-manager"></a> Basic Usage - Using Manager

The quickest way would be to use `PopMenuManager`'s _**default**_ singleton with no additional setup required:

```swift
let manager = PopMenuManager.default
```

Add **actions** if you're using the manager:

```swift
manager.actions = [
    PopMenuDefaultAction(title: "Action Title 1"), // Text only action
    PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon") // Text and image action
]
```

Or if you prefer the good ol' way similar to presenting a `UIAlertController` with `UIAlertAction`, you can add each action like that:

```swift
let action1 = PopMenuDefaultAction(title: "Action Title 1", image: UIImage(named: "icon"))
let action2 = PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon"))

manager.addAction(action1)
manager.addAction(action2)
```

That's how you set the actions for the menu.

Now all you have to do is to simply call `present()` on the manager, either pass the view controller in the `on` argument or PopMenuManager will automatically fetch the current top view controller to present the menu on top:

```swift
// Show menu without specifying which controller
manager.present()

// Or you can specify the controller to present on
manager.present(on: self)
```

Both should **work just fine**, but still, using `manager.present(on: ...)` manually would be a _**safer**_ way to go for presenting.

-------

### <a name="using-controller"></a> Basic Usage - Using Controller

If you are using `PopMenuManager` to handle PopMenu, you can skip this section.

Manually initialize the controller:

```swift
let menuViewController = PopMenuViewController()
```

Add actions inside the initializer:

```swift
let menuViewController = PopMenuViewController(actions: [
    PopMenuDefaultAction(title: "Action Title 1", image: UIImage(named: "icon"),
    PopMenuDefaultAction(title: "Action Title 2", image: UIImage(named: "icon")
])
```

Finally, to present the menu all you have to do is call `present` method in your **ViewController** like a normal view controller:

```swift
class ViewController: UIViewController {

...
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

### Source View

By default, `PopMenu` will present in the center of your screen. If you want it to display on the relative position of a view that the user tapped, you can pass the source view in like this:

```swift
class ViewController: UIViewController {

    @IBOutlet var aButton: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()

        aButton.addTarget()
    }

    @objc private func presentMenu() {
        // The manager way
        let manager = PopMenuManager.default
        manager.actions = [...]
        
        // Pass the UIView in present method
        manager.present(sourceView: aButton)


        // ===== or =====


        // The manual way
        let actions = [...]

        // Pass the UIView in init
        let menu = PopMenuViewController(sourceView: aButton, actions: actions)
        present(menu, animated: true, completion: nil)
    }

}
```

-------

### Selection Callback

In order to know which action button is tapped, there are two ways of doing that:
- Action Handler
- Delegate

### Action Handler

Simply pass the handler when instanstiating the action:

```swift
let action1 = PopMenuDefaultAction(title: "Action 1", didSelect: { action in
    // action is a `PopMenuAction`, in this case it's a `PopMenuDefaultAction`

    // Print out: 'Action 1 is tapped'
    print("\(action.title) is tapped")
})
```

### Delegate Method
 You'll need to comform to `PopMenuViewControllerDelegate` protocol and then implement the method `popMenuDidSelectItem(at index: Int)` in your view controller:

```swift
class ViewController: UIViewController {
    
    // Use manager to present menu.
    func presentMenuUsingManager() {
        let manager = PopMenuManager.default

        // Set delegate for callback
        manager.popMenuDelegate = self

        manager.present(on: self)
    }

    // Or manually init:
    func presentMenuManually() {
        let menu = PopMenuViewController(actions: [...])

        // Set delegate for callback
        menu.delegate = self

        present(menu, animated: true, completion: nil)
    }

}

extension ViewController: PopMenuViewControllerDelegate {

    func popMenuDidSelectItem(_ popMenuViewController: PopMenuViewController, at index: Int) {
        // Do stuff here...
    }
    
}
```
### Dismissal Callback

If you'd want more control to do additional steps when the menu is dismssed, you can do it like this:

```swift
// The manager way
manager.popMenuDidDismiss = { selected in
    // `selected` is a bool indicating if a selection has been made

    if !selected {
        // When the user tapped outside of the menu
    }
}
```

### Configurations

By default, PopMenu has pan gesture enabled, you can toggle it here:

```swift
// The manager way
manager.popMenuShouldEnablePanGesture = false
// The manual way
menu.shouldEnablePanGesture = false
```
By default, PopMenu has haptics enabled, you can toggle it here:

```swift
// The manager way
manager.popMenuShouldEnableHaptics = false
// The manual way
menu.shouldEnableHaptics = false
```


That's basically it! Congrats!

----------

## 💪🏻 Contribute

Thank you if you are interested in contributing to the project, I appreaciate it!

Before committing any changes, please make sure to read the [Contribution Guidelines](https://github.com/CaliCastle/PopMenu/blob/master/CONTRIBUTING.md) first, thank you!

## 📗 Check Documentation

Documentation and references is available at [**https://calicastle.github.io/PopMenu/**](https://calicastle.github.io/PopMenu/)
