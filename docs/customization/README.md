# Make It Your Own

::: tip Pre-requisites
Customization should only be applied **before presenting** the menu, and assume that you already have either one of the following:

- a `PopMenuViewController` variable called -> `menu`
- a `PopMenuManager` variable called -> `manager`
:::

## Dismiss On Selection <Badge text="default: true"/>

If you don't want the menu to auto-dismiss once a selection has been performed, you can change the property:

```swift
menu.shouldDismissOnSelection = false

// ======= or =======

manager.popMenuShouldDismissOnSelection = false
```

## Background styles <Badge text="default: .dimmed(color: .black, opacity: 0.4)"/>

There are mainly 3 types of background styles:

- Blurred (dark, light & extra Light)
- Dimmed (color & opacity)
- None

Simply set the `popMenuBackgroundStyle` on the appearance property using `.` notation:
```swift
menu.appearance.popMenuBackgroundStyle = .blurred(.dark)
menu.appearance.popMenuBackgroundStyle = .blurred(.light)
menu.appearance.popMenuBackgroundStyle = .blurred(.extralight)
menu.appearance.popMenuBackgroundStyle = .dimmed(color: .white, opacity: 0.6)
menu.appearance.popMenuBackgroundStyle = .none()

// ======= or =======

manager.popMenuAppearance.popMenuBackgroundStyle = .blurred(.dark)
```

## Action Color <Badge text="default: white"/>

To bulk set action colors is simple and straightforward:

```swift
menu.appearance.popMenuColor.actionColor = .tint(.green) // or use Color Literals if you're using Xcode 9

// ======= or =======

manager.popMenuAppearance.popMenuColor.actionColor = .tint(.green) // or use Color Literals if you're using Xcode 9
```

To set each action with different color, you'll have to specify in the `color` parameter initializer of action `PopMenuDefaultAction`:

```swift
let actions = [
    PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray),
    PopMenuDefaultAction(title: "Another Title", image: UIImage(named: "icon"), color: .yellow)
]
```

## Background Color(s) <Badge text="default: flat dark gradient"/> 

There are 2 types of background colors:

- Solid fill (one color)
- Gradient fill (two colors)

To set the background color(s) of the menu:

```swift
menu.appearance.popMenuColor.backgroundColor = .solid(fill: .gray) // A solid gray background color
menu.appearance.popMenuColor.backgroundColor = .gradient(fill: .yellow, .pink) // A gradient from yellow to pink

// ======= or =======

manager.popMenuAppearance.popMenuColor.backgroundColor = ...
```

## Action Font <Badge text="default: .systemFont(ofSize: 16, weight: .semiBold)"/>

To set the font of all actions:

```swift
menu.appearance.popMenuFont = UIFont(name: "AvenirNext-DemiBold", size: 14)!
menu.appearance.popMenuFont = .systemFont(ofSize: 15, weight: .bold)

// ======= or =======

manager.popMenuAppearance.popMenuFont = ...
```

## Corner Radius <Badge text="default: 24"/>

To set corner radius of the menu container:

```swift
menu.appearance.popMenuCornerRadius = 10

// ======= or =======

manager.popMenuAppearance.popMenuCornerRadius = 10
```

## Action Height <Badge text="default: 50"/>

To set height of each action:

```swift
menu.appearance.popMenuActionHeight = 65

// ======= or =======

manager.popMenuAppearance.popMenuActionHeight = 65
```

## Action Item Separator <Badge text="default: none"/>

To set the action item separator:

```swift
menu.appearance.popMenuItemSeparator = .none()
menu.appearance.popMenuItemSeparator = .fill() // Default height of 0.5, white color with 0.5 opacity
menu.appearance.popMenuItemSeparator = .fill(.yellow, height: 1) // Or set it yourself

// ======= or =======

manager.popMenuAppearance.popMenuItemSeparator = ...
```

## Action Image Rendering Mode <Badge text="default: .alwaysTemplate"/>

To set the action item image rendering mode:

```swift
let action = PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray)
action.imageRenderingMode = .alwaysOriginal
```

## Action Image Sizing <Badge text="default: 27"/>

To set the action item image sizing:

```swift
let action = PopMenuDefaultAction(title: "Some Title", image: UIImage(named: "blah"), color: .gray)
action.iconWidthHeight = 45
```

## Scrollable when actions are more than 6 or custom

To set the scrolling properties:

```swift
menu.appearance.popMenuActionCountForScrollable = 10 // default 6
menu.appearance.popMenuScrollIndicatorHidden = true // default false
menu.appearance.popMenuScrollIndicatorStyle = .black // default .white

// ======= or =======

manager.popMenuAppearance.popMenuActionCountForScrollable = ... // same as above
```

## Status Bar Style <Badge text="default: automatic detection based on background color"/>

If you don't want `PopMenu` to use automatic detection to set status bar style, you can override it:

```swift
menu.appearance.popMenuStatusBarStyle = .default

// ======= or =======

manager.popMenuAppearance.popMenuStatusBarStyle = .default
```

## Missing Customization?

If there's any missing customization that you'd want `PopMenu` to have, feel free to open an issue in the official <Icon name="github" type="brand" /> [GitHub](https://github.com/CaliCastle/PopMenu/issues) repository.
