---
title: "Meet GitSync"
date: 2026-04-04
socialImage: images/posts/gitsync-devlog-0.png
---

![Now also in video format!](https://www.youtube.com/watch?v=TyWK6Rjqtys)

Hi, I'm Vis and I've been working on a mobile git client called **GitSync** as a solo developer for about 2 years now. This devlog series is going to give you a peek behind the curtain at how the project is built and how it evolves over time.

This is devlog 0, the starting point. If you've been sent here from another devlog, welcome, **this is the reference post** that covers what GitSync is, how it works under the hood, and how you can get involved. So let's get into it.

---

## What is GitSync?

GitSync is a **mobile git client for Android and iOS** that lets you sync folders between git repositories and local directories on your phone or tablet. It's particularly popular with Obsidian users who want to keep their notes synced across devices using git, but it's useful for anyone who wants to access or interact with their repos on the go. It actually won the **2024 Gem of the Year** award for Obsidian tools, which was a really nice surprise.

Now I want to be clear, **this is not a terminal or CLI experience**. It's a proper graphical mobile app designed for ease of use. There are two UI modes: **sync mode**, which is simpler and focused on automated background syncing, and **client mode**, which behaves more like a full git client for when you want more control.

In sync mode, you get **automatic syncing whenever you open or close the app**, scheduled background sync on a set interval, and triggers through quick tiles on Android or Shortcuts on iOS so you can build your own automations around it.

Client mode gives you **full git operations** like clone, fetch, pull, stage, commit, push, plus merge conflict resolution including line-by-line, commit actions like amend, revert and cherry-pick, and even integration with your git provider so you can view and manage issues, pull requests, tags, and releases right from the app.

Both modes support **HTTP, SSH, and OAuth authentication** for GitHub, GitLab, and Gitea, along with things like signed commits, author configuration, and gitignore editing.

The app is **free to download and use**, and the free version covers the core syncing experience with a single repository. There's also a **premium unlock, a one-time purchase, no subscription,** that opens up power-user features like multiple repositories, custom scheduled sync on iOS, git filter support for things like LFS and git-crypt, file management tools, commit diffs, home screen widgets, and more.

The code is **open source under GPL-3.0**, which also means it's auditable and there's no data collection or cloud dependency. Your repos stay between you and your git provider.

## Where to Get It

You can grab GitSync on the [Google Play Store](https://play.google.com/store/apps/details?id=com.viscouspot.gitsync), the [Apple App Store](https://apps.apple.com/ca/app/gitsync/id6744980427), or through [Izzy On Droid](https://apt.izzysoft.de/fdroid/index/apk/com.viscouspot.gitsync) for those who prefer that. It supports **Android 6+ and iOS 12+**. You can also check out the [website](https://gitsync.viscouspotenti.al/), the [wiki](https://gitsync.viscouspotenti.al/wiki), or the [GitHub repo](https://github.com/ViscousPot/GitSync) which has over 1.5k stars to date.

Getting started is pretty straightforward. You pick your auth method, clone or create a repo, point it at a local folder, and you're syncing.

## How It's Built

Ok so let's take a peek under the hood. GitSync is a **Flutter** project, so the UI is written in **Dart**. The reason I went with Flutter is that it lets me target both Android and iOS from a single codebase.

For the actual git operations, I chose to use **Rust** with the **git2-rs** library. Rust handles all the heavy lifting when it comes to interacting with git. The two layers are connected through **flutter_rust_bridge**, which generates the bindings between Dart and Rust.

There's also a small amount of Kotlin and Swift for platform-specific things on Android and iOS respectively, but the vast majority of the app lives in Dart and Rust.

As for my dev setup, I use the **Zed** editor and **Waydroid** as my Android emulator on Linux. I might do a separate post on the Waydroid setup at some point if people are interested, but I won't go into detail here.

## How to Contribute

**The biggest thing right now is translations.** GitSync uses `.arb` files for localisation, located in `lib/l10n/` in the repo. Right now the app is available in English, Spanish, Chinese, Russian, and German, but I would love to support more languages so if you're interested in adding one, please do reach out.

Of course, **code contributions are also very welcome**. The project is open source and PRs are always appreciated. Check out the [GitHub repo](https://github.com/ViscousPot/GitSync) to get started.

And if you'd like to support the project financially, I have a **GitHub Sponsors** page set up at [github.com/sponsors/ViscousPot](https://github.com/sponsors/ViscousPot). It genuinely helps keep the project moving forward and I really appreciate anyone who does. You can also sponsor to unlock premium!

## Reporting Bugs & Suggesting Features

If you come across any bugs, the best way to report them is either by email at **bugs.viscouspotential@gmail.com** or by dropping a message in the [Discord](https://discord.com/invite/cgvjdDyzzB). To help me get to it quickly, it's really useful to include your device model, OS version, steps to reproduce the issue, and any error messages or screenshots you can grab.

And if you have ideas for new features, I'm always looking for suggestions. You can leave them in the comments, on the Discord, or as a GitHub issue. I read all of them.

## Conclusion

Speaking of the Discord, if you want to stay up to date with the project or just hang out, feel free to join the [server](https://discord.com/invite/cgvjdDyzzB). It's where most of the community discussion happens.

In the next devlog, we'll be tackling **merge conflict resolution on mobile**, so stay tuned for that.

Whether you just found this or you were sent here from a future devlog, I hope this gives you a good sense of what GitSync is all about!
