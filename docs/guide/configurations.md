---
prev: ./using-manager
next: /customization/
---

# Configurations

## Source View

By default, `PopMenu` will present in the center of your screen. If you want it to display the menu where the user tapped, you can pass the source view in like this:

Example usage:

```swift
final class YourViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func presentMenu(_ sender: UIButton) {
        // Using Controller
        let actions = [...] // add your actions here

        // Pass the UIView in init
        let menu = PopMenuViewController(sourceView: sender, actions: actions)
        present(menu, animated: true, completion: nil)


        // ===== or =====


        // Using Manager
        let manager = PopMenuManager.default
        manager.actions = [...] // add your actions here

        // Pass the UIView in the `present` method
        manager.present(sourceView: sender)
    }

}
```

-------

## Gesture Driven Presentation

Providing a Source View is a good way to show PopMenu on a particular view. However, if your source view is large or you're showing pop menu in response to a Gesture Recognizition, you can present the PopMenu with `UIGestureRecognizer` instance when presenting the PopMenu with `PopMenuManager`. It will use the location of touch as reference location to present PopMenu.

Example Usage:
```swift

final class YourViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        setupGestureRecognizer()
    }

    private func setupGestureRecognizer() {
        let longPressGesture = UILongPressGestureRecognizer(target: self, action: #selector(didLongPressImage)))
        myLargeImageView.addGestureRecognizer(longPressGesture)
    }
}

extension YourViewController: UIGestureRecognizerDelegate {
    @objc func didLongPressImage(_ sender: UIGestureRecognizer) {
        let manager = PopMenuManager.default
        manager.actions = [...] // add your actions here

        // Pass the UIGestureRecognizer to the `present` method
        manager.present(with: sender)
    }
}
```

-------

## Selection Callback

In order to know which menu item was tapped, there are two ways of accomplishing that:
1. Using **Action Handlers**
2. Using **Delegate**

## Action Handler

Simply pass the handler when instantiating the action:

Example:
```swift
let action1 = PopMenuDefaultAction(title: "Action 1", didSelect: { action in
    // action is a `PopMenuAction`, in this case it's a `PopMenuDefaultAction`

    print("\(action.title) is tapped") // will print out: 'Action 1 is tapped'
})
```

## Delegate Method
 You'll need to conform your own **ViewController** to the `PopMenuViewControllerDelegate` protocol and then implement the method `popMenuDidSelectItem(at index: Int)`:

Example:
```swift
class YourViewController: UIViewController {

    // If you're using Controller to show menu:
    func presentMenuManually() {
        let menu = PopMenuViewController(actions: [...])

        // Set delegate for callback
        menu.delegate = self

        present(menu, animated: true, completion: nil)
    }

    // or if you're using Manager to present menu:
    func presentMenuUsingManager() {
        let manager = PopMenuManager.default

        // Set delegate for callback
        manager.popMenuDelegate = self

        manager.present(on: self)
    }

}

extension YourViewController: PopMenuViewControllerDelegate {

    // This will be called when a menu action was selected
    func popMenuDidSelectItem(_ popMenuViewController: PopMenuViewController, at index: Int) {
        // Do stuff here...
    }

}
```

## Dismissal Callback

If you'd want more control to execute some code when the menu is dismissed, you can use the handler callback:

```swift
// If using Controller
menu.didDismiss = { selected in
    // `selected` is a bool indicating if a selection has been made

    if !selected {
        // When the user tapped outside of the menu
    }
}

// If using Manager
manager.popMenuDidDismiss = { selected in
    // `selected` is a bool indicating if a selection has been made

    if !selected {
        // When the user tapped outside of the menu
    }
}
```

## Configurations

By default, PopMenu has pan gesture enabled, you can toggle it here:

```swift
// If using Controller
menu.shouldEnablePanGesture = false
// If using Manager
manager.popMenuShouldEnablePanGesture = false
```
By default, PopMenu has haptics enabled, you can toggle it here:

```swift
// If using Controller
menu.shouldEnableHaptics = false
// If using Manager
manager.popMenuShouldEnableHaptics = false
```

That's basically it! You've completed the guides on how to use `PopMenu`, congrats :confetti_ball: !
