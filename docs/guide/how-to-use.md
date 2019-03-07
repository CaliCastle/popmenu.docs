---
prev: ./getting-started.md
next: ./using-controller.md
---

# How to Use

Integrating **PopMenu** is extremely easy with a familiar workflow like presenting `UIAlertController` with `UIAlertAction`

Well first things first, you need to make sure `PopMenu` is properly imported:

```swift
import PopMenu
```

## Basic Usage

There are 2 ways to present the menu in your view controller:

1. **(Recommended)** Use the `PopMenuViewController` class directly

2. Use the default manager

You can, however, choose either way to have the same result, whichever works best for you.

## Which Should I Use?

1. **(Recommended)** Use the `PopMenuViewController` class directly if you want to have more control.

2. Use the default manager if you don't want to deal with newing up Controllers, and let the manager decide which view controller to be presented upon.

:::tip Use Controller When Possible
It's highly recommended to present the menu using the good ol' way of instantiating a `PopMenuViewController`
:::
