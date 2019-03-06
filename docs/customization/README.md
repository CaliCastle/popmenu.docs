# Make It Your Own

### Before moving on, customization should be applied before presenting the menu, and assume that you already have a:

variable of `PopMenuManager.default` called -> **`manager`**.

**----- or -----**

variable of `PopMenuViewController` called -> **`menu`**.

<br>

Action Dismissal // Default: true
---------

If you don't want the menu to auto-dismiss once a selection has been performed, you can change the property:

```swift
// The manager way
manager.popMenuShouldDismissOnSelection = false

// The manual way
menu.shouldDismissOnSelection = false
```

Background styles // Default: .dimmed(color: .black, opacity: 0.4)
---------

There are mainly 3 types of background styles:

- Blurred (dark, light & extra Light)
- Dimmed (color & opacity)
- None

Simply set the `popMenuBackgroundStyle` on the appearance property using `.` notation:
```swift
// The manager way
manager.popMenuAppearance.popMenuBackgroundStyle = .blurred(.dark)
manager.popMenuAppearance.popMenuBackgroundStyle = .blurred(.light)
manager.popMenuAppearance.popMenuBackgroundStyle = .blurred(.extralight)
manager.popMenuAppearance.popMenuBackgroundStyle = .dimmed(color: .white, opacity: 0.6)
manager.popMenuAppearance.popMenuBackgroundStyle = .none()

// The manual way, same to the code above
menu.appearance.popMenuBackgroundStyle = .blurred(.dark)
```

Action Color // Default: white
---------

To bulk set action colors is simple and straightforward:

```swift
// The manager way
manager.popMenuAppearance.popMenuColor.actionColor = .tint(.green) // or use Color Literals if you're using Xcode 9

// The manual way
menu.appearance.popMenuColor.actionColor = .tint(.green)
```

To set each action with different color, you'll have to specify in the `color` parameter initializer of action `PopMenuDefaultAction`:

```swift
let actions = [
    PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray),
    PopMenuDefaultAction(title: "Another Title", image: UIImage(named: "icon"), color: .yellow)
]
```

Background Color(s) // Default: flat black gradient
---------

There are 2 types of background colors:

- Solid fill (one color)
- Gradient fill (two colors)

To set the background color(s) of the menu:

```swift
// The manager way
manager.popMenuAppearance.popMenuColor.backgroundColor = .solid(fill: .gray) // A solid gray background color
manager.popMenuAppearance.popMenuColor.backgroundColor = .gradient(fill: .yellow, .pink) // A gradient from yellow to pink

// The manual way
menu.appearance.popMenuColor.backgroundColor = ...
```

Action Font // Default: .systemFont(ofSize: 16, weight: .semiBold)
---------

To set the font of all actions:

```swift
// The manager way
manager.popMenuAppearance.popMenuFont = UIFont(name: "AvenirNext-DemiBold", size: 14)!
manager.popMenuAppearance.popMenuFont = .systemFont(ofSize: 15, weight: .bold)

// The manual way
menu.appearance.popMenuFont = UIFont(name: "AvenirNext-DemiBold", size: 14)!
```

Corner Radius // Default: 24
---------

To set corner radius of the menu container:

```swift
// The manager way
manager.popMenuAppearance.popMenuCornerRadius = 10

// The manual way
menu.appearance.popMenuCornerRadius = 10
```

Action Height // Default: 50
---------

To set height of each action:

```swift
// The manager way
manager.popMenuAppearance.popMenuActionHeight = 65

// The manual way
menu.appearance.popMenuActionHeight = 65
```

Action Item Separator // Default: none
---------

To set the action item separator:

```swift
// The manager way
manager.popMenuAppearance.popMenuItemSeparator = .none()
manager.popMenuAppearance.popMenuItemSeparator = .fill() // Default height of 0.5, white color with 0.5 opacity
manager.popMenuAppearance.popMenuItemSeparator = .fill(.yellow, height: 1) // Or set it yourself

// The manual way
menu.appearance.popMenuItemSeparator = ...
```
Action Image Rendering Mode // Default: .alwaysTemplate
---------

To set the action item image rendering mode:

```swift
let action = PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray)
action.imageRenderingMode = .alwaysOriginal
```
Action Image Sizing // Default: 27 pt
---------

To set the action item image sizing:

```swift
let action = PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray)
action.iconWidthHeight = 45
```
Scrollable when actions are more than 6 or custom
---------

To set the scrolling properties:

```swift
// The manual way
menu.appearance.popMenuActionCountForScrollable = 10 // default 6
menu.appearance.popMenuScrollIndicatorHidden = true // default false
menu.appearance.popMenuScrollIndicatorStyle = .black // default .white
```
Status Bar Style // Default: automatic detection based on background color
---------

If you don't want `PopMenu` to use automatic detection to set status bar style, you can override it:

```swift
manager.popMenuAppearance.popMenuStatusBarStyle = .default

// The manual way
menu.appearance.popMenuStatusBarStyle = .default
```
More customization coming, stay tuned...