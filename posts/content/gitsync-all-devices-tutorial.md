---
title: How to Sync Obsidian Across All Devices Using Git, Automatically and for Free
date: 2025-07-25
socialImage: images/posts/gitsync-all-devices-tutorial.png
---

![Now also in video format!](https://youtu.be/Cu4-BPcveBI)

If you’re looking for a **seamless, automatic and totally free way to sync your Obsidian vaults across all your devices, using Git**, you’re in the right place! The main benefits of this as your sync setup are the **change history**, **freedom of choice** and the fact that it remains **completely free**. I am currently using this exact solution across all of my devices to passively keep my notes in sync.

> [!note] Obsidian Sync is a paid subscription
> If you can afford the recurring cost, please go support the Obsidian team. This guide is for people who are already familiar with Git, or who just really need a free solution.

Here, I will be taking you through: choosing a Git provider, creating a repository, setting up sync on the devices you use and inserting some initial vault contents if you already have a vault.

Read to the end for a chance to join the giveaway!

> [!warning] One expectation to set
> This isn't instant live sync. Your vault syncs on a timer, or when you open or close an app. For notes that should be more than fine.

This setup has been rock solid for me for about two years. I use it to sync my vault and to automatically update my Markdown websites.

---

## Prerequisites

### Understanding Git, Providers, Clients and Repositories

We will need a few things before getting started:

- A Git provider selected
- A repository on this provider

For those that are unfamiliar, here is a quick rundown on these concepts.<br>

- **Git** is just a piece of software that tracks changes to a folder or files. Usually that's code, but for us it's a vault. It also handles **conflicts**, which is when two devices edit the same file before they sync. Git notices this and, instead of silently picking one to keep, lets you choose which changes to retain.
- **A Git provider is sort of the equivalent to your cloud storage provider**, in that they store all your files. This would be Codeberg, GitLab, GitHub etc. You can also self-host your own server using Gogs or Gitea and keep everything completely local.
- **A Git client** is the application or UI you use to interact with Git. This avoids using the terminal, typing commands and fixing conflicts by hand. It uses Git under the hood, so it behaves exactly the same as the commands.
- **A repository (or "repo") is sort of the equivalent to a folder _inside_ your cloud storage.** Instead of having one big folder where you make subfolders for each project, like in Google Drive or Dropbox, you have a separate repo per project with its own history. For us, **one repo is one vault**. Most providers give you a few gigabytes per repo, which is plenty for notes.

There are also a few terms that get thrown around when using Git that you should be aware of.

- **Clone** is when you download a repo from your provider to a device for the first time.
- **Commit** is where you save a snapshot of your changes.
- **Push** sends that snapshot up to your provider.
- **Pull** grabs everyone else's snapshots down from the provider.

So a **pull** is like downloading the changes, and a **commit and push** is like uploading the changes. Whenever this guide says **sync**, it means pulling changes and then committing and pushing, which is a complete sync cycle.

### Choosing a Provider

**I'll be using GitHub in this guide**, mostly because that's what I already had set up. **If you're starting fresh, I'd actually point you at [Codeberg](https://codeberg.org) instead.** The steps are basically identical and the buttons and names just move around a bit. GitLab and self-hosting are also very good options.

This isn't a lock-in decision either. You can move the repo to another provider later if you want. They are just files after all.

### Creating a repository

> [!important] Prerequisites
>
> - Visit the [GitHub signup page](https://github.com/signup) and create an account!
> - If you already have an existing repository to sync from another location, you can skip this step.
>   - [What is a repository?](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)

We will be creating a new private repository to hold the files you want to sync. While this offers a relatively secure solution, keep in mind that no system is completely immune to determined attackers.

> **Log into your GitHub account**<br> > **Click your profile icon in the top right**

![Profile icon on github.com](../images/gitsync-all-devices-tutorial/404990457-5b394787-4773-4aa3-8068-41a514dfe826.png)

> **Select "Your repositories" from the sidebar**

!["Repositories" in sidebar](../images/gitsync-all-devices-tutorial/404990642-389e683a-6101-4f76-98a3-43cd6950f51a.png)

> **Click "New" to create a new repository** (or go straight to [github.com/new](https://github.com/new))

![New repository button on github.com](../images/gitsync-all-devices-tutorial/404989960-0eb2b93a-a4d7-4b5a-b37f-cb97ca38ede0.png)

> **Enter the repository details:**
>
> - Name (required)
> - Description (optional)
> - Select "Private" or "Public" based on whether you want others to have anonymous access to the contents
> - **Enable "Initialize with README"** so that your repository has some initial contents. A completely empty repo can trip up both the Obsidian-Git plugin and GitSync, so a starter file makes things easier going forward.

![[../images/gitsync-all-devices-tutorial/Timeline 1_01_02_44_09.jpg]]

> **Click "Create repository"**

![Screen Shot 2025-01-20 at 19 45 14](../images/gitsync-all-devices-tutorial/404990826-8bbb363a-3908-4682-b676-4c480557cacb.png)

**_Good to go!_** That's the shared part done, everything after this is per platform.

---

## Windows + Linux + MacOS (Obsidian-Git)

> [!important] Prerequisites
>
> - **Obsidian** installed on your desktop ([Download Obsidian](https://obsidian.md/download)).
> - Completed the [[#Prerequisites]] section

> [!important] Existing vault?
> If you have an existing vault, the first thing to do is back it up. All that means is copying your vault folder to another location so you have a second copy to restore from if anything goes wrong. We won't touch it until the very end, but better safe than sorry. If you're starting from scratch, skip ahead.

### What We're Setting Up

On desktop we'll be setting up three pieces.

1. **Git**, which does the actual tracking work
2. **A Git client** (GitHub Desktop), which gives you a GUI, especially useful for merge conflicts
3. **The Obsidian-Git plugin**, which takes care of automated sync and should mean you never actually have to open the client

Most commands and steps are exactly the same across Windows, macOS and Linux. Any differences are called out as we go.

### Opening a Terminal

In the next few steps you'll need a terminal to run a few commands. It's just for some one-time setup and should just be some copy-pasting.

- **Windows**: Install [Git for Windows](https://git-scm.com/download/win), which provides **Git Bash**. Open it from the Start menu.
- **macOS**: Open **Terminal.app** (Applications > Utilities > Terminal) or use Spotlight (`Cmd + Space`, then type "Terminal").
- **Linux**: Most distros ship with a terminal emulator preinstalled (e.g. GNOME Terminal, Konsole). Launch it from your app launcher or with `Ctrl+Alt+T`.

---

### Installing Git

"Git" is the name of the program that will be doing most of the heavy lifting in tracking the change history of your vault. Before we can do anything, we first need to make sure Git is installed on our device.

Here are the commands/steps to install Git on **Linux**, **macOS**, or **Windows**:

**Linux**<br>
Debian/Ubuntu:

```bash
sudo apt update
sudo apt install git
```

RHEL/CentOS/Fedora:

```bash
sudo dnf install git
```

Arch/Manjaro:

```bash
sudo pacman -S git
```

---

**macOS**

```bash
xcode-select --install
```

---

**Windows**<br>
Simply download and install from: [https://git-scm.com/download/win](https://git-scm.com/download/win)

### Set Your Git Identity

Your name and email get stamped on every commit, so let's set them now. Run these on all platforms (on Windows, make sure you're in **Git Bash**).

```bash
git config --global user.name "Your Username"
git config --global user.email "your@email.com"
```

> [!warning] GitHub's "Keep my email address private"
> This is **on by default for new GitHub accounts**. If it's on, using your real email here will get your pushes rejected. Go to [github.com/settings/emails](https://github.com/settings/emails) and grab the noreply address listed there. It will look something like
>
> `12345+username@users.noreply.github.com`
>
> Use that as your `user.email` instead.

### Installing GitHub Desktop

With that done, at this stage, you might want to install GitHub Desktop. This is a simple tool available on all non-mobile platforms, which makes it easier to interact with Git without requiring knowledge of commands. I will be referencing it to keep this guide user friendly, but if you have more advanced knowledge, feel free to use your own commands or tools!

You can grab it for Windows and MacOS [here](https://desktop.github.com/download/) and the Linux fork from [here](https://github.com/shiftkey/desktop)

There will be a tiny bit of setup after the install, so just follow the instructions and

- Log in to your GitHub account through the browser
- Leave the author details as default or fill them out with your username and email if it's empty

### Generate and add SSH Key for GitHub

This step is all about setting up authentication so you can interact with your GitHub account using Git, without having to enter an email or password each time. An SSH key is basically a pair of files, a private one that stays on your machine and a public one that goes to your provider so that it knows who you are.

We will need only 5 commands!

#### Generate an SSH Key

This command will generate a pair of keys that will be used for secure authentication. You should take every precaution to make sure the keys produced are kept private.

**Windows (Git Bash)** / **Linux / macOS**:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Press **Enter** to accept the default location (`~/.ssh/id_ed25519`). Set a passphrase if desired.

#### Start the SSH Agent

This command launches the background process (`ssh-agent`) that handles your private keys securely. It must be running to use SSH keys for authentication.

**Windows (Git Bash)** / **Linux / macOS**:

```bash
eval "$(ssh-agent -s)"
```

#### Add Your SSH Private Key to the Agent

Once the agent is running, this command loads your private key into it so it can be used for authentication without re-entering the passphrase each time.

**Windows (Git Bash)** / **Linux / macOS**:

```bash
ssh-add ~/.ssh/id_ed25519
```

**Windows (Git Bash)** / **Linux**:
Make sure to change out the path if you changed it from the default

```bash
echo -e "Host github.com\n HostName github.com\n User git\n IdentityFile ~/.ssh/id_ed25519\n AddKeysToAgent yes" >> ~/.ssh/config
```

**macOS**:
Make sure to change out the path if you changed it from the default

```bash
echo -e "Host github.com\n HostName github.com\n User git\n IdentityFile ~/.ssh/id_ed25519\n AddKeysToAgent yes\n UseKeyChain yes" >> ~/.ssh/config
```

**Windows (Git Bash)** / **Linux / macOS**:

```bash
chmod 600 ~/.ssh/config
```

> [!warning] If you see an error on macOS
> `Could not open a connection to your authentication agent`
> Run:
>
> ```bash
> eval "$(ssh-agent -s)"
> ```

> [!tip] On Windows
> If using PowerShell or CMD, use Git Bash instead. GitHub Desktop depends on the keys managed in Git Bash.

Test your setup using `ssh -T git@github.com`

### Copy Your SSH Public Key

Use the appropriate command to copy the public key you generated previously into your clipboard. The public key is the one, out of the pair, that you share with your Git provider.

**Windows (Git Bash)**:

```bash
clip < ~/.ssh/id_ed25519.pub
```

**macOS**:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Linux**:

```bash
xclip -sel clip < ~/.ssh/id_ed25519.pub
```

### Add the SSH Key to GitHub

Now let's give GitHub that key, so we can start accessing our account through Git.

1. Go to [https://github.com/settings/keys](https://github.com/settings/keys)
2. Click **New SSH key**
3. Paste the key, give it a title, and click **Add SSH key**

### Clone the Repository with GitHub Desktop

That's authentication officially setup for your GitHub account, so we can now move on to cloning that repository we made earlier

1. Open **GitHub Desktop**.
2. Go to **File** > **Clone Repository**.
3. ​Select the **URL** tab and enter your newly created repository url, making sure it looks like: `git@github.com:username/repo.git` (not `https://`)
   _This ensures GitHub Desktop can authenticate using your SSH key._
4. Choose a local directory for the repository (e.g., `~/Documents/my-obsidian-vault`).
5. Click **Clone**.

**Now if you go ahead and open up that folder in Obsidian, you should have that README file (from the checkbox we ticked during creation) and nothing else.**

### BONUS: Add Initial Vault Content (optional)

If you like, you can take this opportunity to load up the folder with some initial content or copy in the files from your existing vault. If you have an existing vault, **clone first, then copy your notes in from the backup you made**, rather than moving the original, so you still have that spare if anything goes wrong.

> [!tip] Hidden Folders  
> If you don’t see `.git` or `.obsidian`, enable hidden files/folders in your file explorer:
>
> - **Windows**: View > Hidden Items
> - **macOS**: `Cmd + Shift + .` in Finder
> - **Linux**: `Ctrl + H` in most file managers

Just make sure you don't overwrite or delete the `.git` or `.obsidian` folder in there (they may be hidden by default), without meaning to. `.git` is where all your history lives, and if you delete it the folder just becomes files again. `.obsidian` is your vault settings.

### Install Obsidian-Git Plugin

The last thing to do for our desktop setup is to make sure we have auto sync. For this, we will be using obsidian-git, which is an Obsidian Community Plugin that automates uploading and downloading the changes in your vault at given intervals, as well as intelligently, when you are done editing.

1. Go to **Settings** > **Community Plugins** in Obsidian and turn off **Restricted Mode** if prompted.
2. Click **Browse** and search for `Git`.
3. Install and enable the `Git` plugin.

### Configure Obsidian-Git

1. Go to **Settings** > **Git**.
2. Set the following options:
   - **Auto commit-and-sync interval (minutes)**: (e.g., 5 minutes).
   - **Auto commit-and-sync after stopping file edits**: Enabled.
   - **Commit message on auto commit-and-sync**: Customize or leave as default.
   - **Pull on startup**: Enabled.
   - **Push on commit-and-sync**: Enabled.
   - **Pull on commit-and-sync**: Enabled.
3. Save changes.

**You’re now set up to have auto sync for your Obsidian vault on desktop!**

To confirm it works, feel free to open the Git > Source Control View (`Ctrl + P`, or `Cmd + P` on macOS, then type "Git: Open source control view") and sync manually using the `Commit and Sync` button
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-arrow-up-icon lucide-circle-arrow-up"><circle cx="12" cy="12" r="10"/><path d="m16 12-4-4-4 4"/><path d="M12 16V8"/></svg>

---

## Android + iOS (GitSync)

> [!important] Prerequisites
>
> - **Obsidian** installed on your mobile device ([Download Obsidian](https://obsidian.md/download)).
> - Completed the [[#Prerequisites]] section

> [!important] Existing vault on this phone?
> Same as on desktop, back it up first by copying your vault folder somewhere else (the Files app on iOS, or any file manager on Android). If your phone doesn't have any notes on it yet, there's nothing to do.

The setup on mobile is quite different to desktop. Instead of Git, a Git client and a plugin, on mobile we just have one application doing the whole thing, which is called **GitSync**. While there are various Git clients available for Android and iOS, none offer a consistent experience across both platforms. GitSync was built specifically to solve this, providing a unified, purpose-built solution that’s easier to set up and maintain.

For transparency, GitSync is developed by me. It was a project built out of my own necessity, that, I am happy to say, people are finding useful for themselves. It started off as a very basic automated sync client just for Obsidian, and is now becoming a more fully featured Git client, while still staying easy enough for people to use for automated sync.

> [!question] Why not just use the Obsidian-Git plugin on mobile?
> While it does technically work, the Obsidian-Git documentation explicitly states that mobile is not stable, and they even list GitSync as the primary alternative. For the nerds, Obsidian-Git uses a JavaScript reimplementation of Git, which is not 100% accurate and fails especially in mobile environments. GitSync isn't limited to JavaScript and so can use a fuller implementation of Git, for faster performance and better reliability.

GitSync does have a few premium features behind a paywall, but **no part of this guide requires any of them**. It's mostly for those who want to sync multiple vaults or use very advanced Git features.

### Installing GitSync

You can find official releases of GitSync at the respective app stores:<br>

> **App Store**: https://apps.apple.com/ca/app/gitsync/id6744980427<br> > **Play Store**: https://play.google.com/store/apps/details?id=com.viscouspot.gitsync

### Setting up GitSync

> [!warning] iOS-only Required Setup
> Before setting up GitSync on iOS, we will need to do some quick setup in Obsidian
>
> 1. Open Obsidian
> 2. Click "Create a vault" (this will need to be new and separate from any vault's contents you want to sync in the end)
> 3. (Skip setting up sync if prompted)
> 4. Enter a name for your vault (e.g. "Obsidian")
> 5. **Leave it empty**, as we'll be overwriting the contents when we clone into it.

The initial GitSync onboarding aims to be a beginner-friendly setup walkthrough, so it should be very quick to get setup!

1.  **Open GitSync**
2.  Select "Let's Go" on the welcome dialog
3.  Answer how you discovered the app (optional)
4.  On the "choose your focus" page, pick **Sync mode** or **Client mode**
    - Most users, especially beginners, will prefer **Sync mode**
    - If you're a more advanced user or already very familiar with Git, I'd recommend **Client mode**, which exposes more granular sync options
5.  Feel free to skip the premium page, since we don't need that here
6.  Accept notifications permissions
    - The app uses these permissions to notify you when sync operations are occurring in the background. There is also an in-app setting to toggle these off.
7.  (_Android-Only_) Accept "all files access" permission
    - The app requires this permission to read/write your vault contents to keep it in sync
    - Android has the ability for scoped storage access, but the API for this is incomplete and slow, to the point that it cannot be used in this case.
8.  On the "almost there" dialog, you can optionally check out the wiki, or skip on ahead

**Now we will authenticate with our previously created GitHub account.** At this point, you could reuse the private key from the desktop setup with GitSync too, by utilising the SSH authentication option and importing the key. If you're using Codeberg, GitHub, GitLab or Gitea, you can also use OAuth directly, which just lets you log in through the browser. Otherwise you'll have to use an SSH key or a token through HTTPS.

However, for simplicity and speed, I will be running through the GitHub OAuth option included in the app.

9. Make sure you have the GitHub authentication option selected and click the OAuth button
10. **Authenticate in the browser with your GitHub credentials**
11. As a final step, the app will request that you fill out the author details (username & email)
    - **Please fill this out with your GitHub username and/or email address**

The next step is to clone your existing repository from GitHub. If you have used OAuth, you can simply select the repository name from the list. If you opted for SSH authentication, then just use a valid URL, as described for the desktop setup, making sure it matches the auth method you used (SSH uses the SSH URL and everything else uses the HTTPS URL).

When prompted to select a directory to clone into:
_on Android_

On Android you can put the vault almost anywhere. What I do is

1. Select **Nested clone** instead of Direct clone
2. Select the **Documents** folder

This automatically creates a folder inside Documents with the name of your repository and puts all the contents in there. **Direct clone**, which is what we use on iOS, puts the contents of the repository directly into the folder you pick, potentially prompting you to overwrite anything that exists.

_on iOS_

1. **Select the folder of the previously created Obsidian vault** (On this device > Obsidian > the name of the vault you created)
2. Select overwrite when prompted to **replace the existing contents**

Once the clone is complete, you are almost finished with your setup.

> [!warning] The plugin `obsidian-git` will interfere with GitSync, so you will need to disable it on your mobile devices!
> This can easily be done by opening your Obsidian vault on your mobile device, dismissing any popups from the plugin, scrolling to the bottom of the `Git` settings (not the Obsidian settings) and enabling `Disable on this device`
>
> ![[../images/gitsync-all-devices-tutorial/New Project(57).png]]

### Configure Background Sync

_on Android_

- **You can setup auto sync, which is ideal for Obsidian**
  - With it setup, the app will sync your vault everytime you open or close (background/foreground) a selected app; in this case Obsidian.
  - Simply:
    1. Enable the accessibility service
       - The app uses this permission to detect when a selected app has been opened or closed
    2. Add Obsidian to the application list
    3. Enable "sync on app(s) opened" and/or "sync on app(s) closed" (I enable both)
- From here, you could also optionally enable scheduled sync so periodic sync up to as often as every 15 minutes. I usually set it to once per day so that my device still syncs even if I haven't opened Obsidian that day.

_on iOS_

iOS also has app-based sync and scheduled sync, but they work in slightly different ways.

**App-based sync**

You can either have your repository sync whenever the **GitSync app itself** is opened or closed, or you can use the **Shortcuts** app to trigger a sync whenever any application is opened or closed, the same as Android. Long story short

1. Open **Shortcuts** and go to **Automation**
2. Create a new automation and select **Open App** as the trigger
3. Select **Obsidian**, and choose opening, closing or both
4. Set GitSync's **Sync Now** action as the automation action

There are further instructions in the [GitSync wiki](https://gitsync.viscouspotenti.al/wiki).

**Scheduled sync**

By default there is a very loose scheduled sync, whenever iOS allows. This is vague not because I want it to be, but because iOS is deliberately vague with developers. In theory it should run as often as every 15 minutes, but in practice it can take days or weeks and isn't predictable at all. The idea is supposed to be that the device warms up and syncs more and more often over time.

If you want something more reliable, there is a premium option that uses a server to ping your device. **I'd highly recommend using app-based sync where you can though, especially through the Shortcuts app.**

### BONUS: Add Initial Vault Content (optional)

As a bonus step, of course, **you can now copy in some initial contents to your vault directory and trigger a sync in-app**, using the "Sync Changes" button. If you have an existing vault, this is the time to copy its contents in from your backup, again making sure you don't overwrite the existing `.git` folder. You should then be able to see your changes reflected in the repository in the browser, as well as any devices set up for sync.

**You should now be setup for Obsidian vault auto sync on your mobile devices!**

---

## Final Words

**Hopefully this has been helpful in getting Obsidian set up for auto sync using Git!** If you find anything wrong with this guide or have any issues, please do leave a comment so that it can be kept up to date.

So just to recap, you now have one private repository holding your Obsidian vault. On desktop we've got Git, a Git client and the Obsidian-Git plugin running on a timer. On mobile we have GitSync alongside Obsidian, triggered by your automations. It's free on every device and it runs itself after the initial setup.

**Join the giveaway for GitSync Premium at this link:**
https://discord.com/invite/cgvjdDyzzB
One person wins GitSync Premium every week for the next three months. Head to the giveaway channel under the GitSync category to find out more.

Before you go on your way, here are a few handy links to bookmark:
Make sure to replace {username} and {repository-name} with your actual GitHub username and repository name (e.g. https://github.com/ViscousPot/GitSync):

- **Checkout your change history**
  - https://github.com/{username}/{repository-name}
- **Setup collaborative access to your repository**
  - https://github.com/{username}/{repository-name}/settings/access
- **See your contribution graph**
  - https://github.com/{username}
