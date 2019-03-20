# 可更换样式大全

::: tip 须知
更换样式必须发生在**展示菜单之前**，并且满足以下其中之一的需求：

假如
- 有一个 `PopMenuViewController` 的变量名为 -> `menu`
- 有一个 `PopMenuManager` 的变量名为 -> `manager`
:::

## 选中后自动隐藏 <Badge text="默认: true"/>

如果你不想让菜单在选中菜单项后自动隐藏，那么可以：

```swift
menu.shouldDismissOnSelection = false

// ======= 或者 =======

manager.popMenuShouldDismissOnSelection = false
```

## 背景样式 <Badge text="默认: .dimmed(color: .black, opacity: 0.4)"/>

一共有三种背景样式

- 高斯模糊 (暗, 亮 & 非常亮)
- 聚焦效果 (颜色 和 透明度)
- 无背景

只需要设置 `popMenuBackgroundStyle` 即可:
```swift
menu.appearance.popMenuBackgroundStyle = .blurred(.dark)
menu.appearance.popMenuBackgroundStyle = .blurred(.light)
menu.appearance.popMenuBackgroundStyle = .blurred(.extralight)
menu.appearance.popMenuBackgroundStyle = .dimmed(color: .white, opacity: 0.6)
menu.appearance.popMenuBackgroundStyle = .none()

// ======= 或者 =======

manager.popMenuAppearance.popMenuBackgroundStyle = .blurred(.dark)
```

## 菜单项颜色 <Badge text="默认: white"/>

如果想设置多个菜单项的颜色的话：

```swift
menu.appearance.popMenuColor.actionColor = .tint(.green) // 或者如果是Xcode 9以后的话也可以用自选颜色

// ======= 或者 =======

manager.popMenuAppearance.popMenuColor.actionColor = .tint(.green) // 或者如果是Xcode 9以后的话也可以用自选颜色
```

如果需要给单独菜单项设置不同颜色的话，你需要在菜单项 `PopMenuDefaultAction` 的init中传入 `color`:

```swift
let actions = [
    PopMenuDefaultAction(title: "随机标题", image: UIImage(named: "blah"), color: .gray),
    PopMenuDefaultAction(title: "又是一个标题", image: UIImage(named: "icon"), color: .yellow)
]
```

## 菜单内背景颜色 <Badge text="默认: 扁平风黑色渐变"/> 

一共有两种菜单内背景色:

- 纯色填充
- 渐变填充

非常简单:

```swift
menu.appearance.popMenuColor.backgroundColor = .solid(fill: .gray) // 一个纯灰色的菜单背景色
menu.appearance.popMenuColor.backgroundColor = .gradient(fill: .yellow, .pink) // 一个从粉色到黄色渐变的背景

// ======= 或者 =======

manager.popMenuAppearance.popMenuColor.backgroundColor = ...
```

## 菜单项字体 <Badge text="默认: .systemFont(ofSize: 16, weight: .semiBold)"/>

设置自定义字体:

```swift
menu.appearance.popMenuFont = UIFont(name: "AvenirNext-DemiBold", size: 14)!
menu.appearance.popMenuFont = .systemFont(ofSize: 15, weight: .bold)

// ======= 或者 =======

manager.popMenuAppearance.popMenuFont = ...
```

## 圆角半径 <Badge text="默认: 24"/>


```swift
menu.appearance.popMenuCornerRadius = 10

// ======= 或者 =======

manager.popMenuAppearance.popMenuCornerRadius = 10
```

## 菜单项高度 <Badge text="默认: 50"/>

每个菜单项的高度:

```swift
menu.appearance.popMenuActionHeight = 65

// ======= 或者 =======

manager.popMenuAppearance.popMenuActionHeight = 65
```

## 菜单项分割线 <Badge text="默认: 无"/>

指定菜单项的分割线:

```swift
menu.appearance.popMenuItemSeparator = .none()
menu.appearance.popMenuItemSeparator = .fill() // 默认线高度为0.5, 白色以及0.5的透明度
menu.appearance.popMenuItemSeparator = .fill(.yellow, height: 1) // 或者任何颜色与高度

// ======= 或者 =======

manager.popMenuAppearance.popMenuItemSeparator = ...
```

## 菜单项图片渲染模式 <Badge text="默认: .alwaysTemplate"/>

设置单独菜单项的渲染模式:

```swift
let action = PopMenuDefaultAction(title: "一个标题", image: UIImage(named: "blah"), color: .gray)
action.imageRenderingMode = .alwaysOriginal
```

## 菜单项图片大小 <Badge text="默认: 27"/>

设置单独菜单项的图片大小:

```swift
let action = PopMenuDefaultAction(title: "一个标题", image: UIImage(named: "blah"), color: .gray)
action.iconWidthHeight = 45
```

## 当菜单项过多自动滑动

设置菜单的滑动功能:

```swift
menu.appearance.popMenuActionCountForScrollable = 10 // 默认 6
menu.appearance.popMenuScrollIndicatorHidden = true // 默认 false
menu.appearance.popMenuScrollIndicatorStyle = .black // 默认 .white

// ======= 或者 =======

manager.popMenuAppearance.popMenuActionCountForScrollable = ... // same as above
```

## 状态栏样式 <Badge text="默认: 自定根据背景色检测"/>

If you don't want `PopMenu` to use automatic detection to set status bar style, you can override it:

```swift
menu.appearance.popMenuStatusBarStyle = .default

// ======= 或者 =======

manager.popMenuAppearance.popMenuStatusBarStyle = .default
```

## 缺失其他自定义？

如果有任何你希望能设置的自定义参数并不在以上的列表中，欢迎前往官方Repo提交新issue <Icon name="github" type="brand" /> [GitHub](https://github.com/CaliCastle/PopMenu/issues)
