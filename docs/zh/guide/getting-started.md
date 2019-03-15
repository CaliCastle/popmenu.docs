---
prev: /zh/guide/
next: ./how-to-use.md
---

# 快速上手

::: tip 试试看Example项目
下载或者fork此仓库然后打开名为 `Example` 的 Xcode 项目即可。
:::

## 环境需求

- Xcode 8.0 +
- iOS 10.0 +
- Swift 4.0 +

## 安装

### 使用 CocoaPods

使用 [**CocoaPods**](https://cocoapods.org) 安装 **PopMenu**, 添加下面的设置到你的 **Podfile** 中:

::: warning 须知
 `PopMenu` 这个库的名字被其他人使用了所以我把CocoaPods的仓库名改成了 `NewPopMenu` 所以你懂的... :sweat_smile:
:::

```ruby
# Swift 4.2 以上, Xcode 10+
pod 'NewPopMenu', '~> 2.0'

# Swift 4.1 以下
pod 'NewPopMenu', '~> 1.1'
```

### 使用Carthage

使用 [**Carthage**](https://github.com/Carthage/Carthage) 安装 **PopMenu**, 添加下面的设置到你的 **Cartfile** 中:

```ruby
github "CaliCastle/PopMenu"
```
