---
id: teamexplorer
title: Team Explorer
sidebar_label: Team Explorer
---

> :warning: This page is under construction

<img src="/img/ide/TeamExplorer.PNG"></img>

## How the Team Explorer works
The Team Explorer features an integrated source control using Git.
It helps you keeping track of changes in your project, comparing and syncing them with Git providers like Github, Azure or others.
This way you can not only make sure that your code is safe, but also helps you to work comfortably on your projects with a team.
If you already have experience with Git in other IDEs like Visual Studio Code you should feel used to the Team Explorer immediately.

## Get Started



### Create new a new repository
1. Create a new project or select the project you want to be in the new repository
2. Open the Team Explorer `View -> Team Explorer`
3. If your active project is not in a repository already it should look like this:
   
![TeamExplorer Empty](/img/ide/TeamExplorerEmpty.PNG)

4. Click on the button `Initialize Repository`.
5. You now have created an empty repository. You can now see a list with files that got detected as changes. You can now commit these files to the repository by simply entering a message in the `Message for commit...` box and clicking on the ✓ button. This will stage and commit all changes.

![TeamExplorer New Repository](/img/ide/TeamExplorerNewRepository.PNG)

1. Done! The repository got created at the same directory as your project. This is enough to track changes locally, but if you want to sync your changes with providers like Github 

### Clone an exising repository
1. Get the URL of the repository you want to clone. It should look like this: `https://github.com/leonbeier/VHDPlus_Libraries_and_Examples`
2. Open the Team Explorer `View -> Team Explorer`
3. Open the Menu using the ☰ Button on the right of the Team Explorer view and select Clone
4. A dialog will pop up asking you for the URL to the repository you want to clone. Paste the URL and confirm with `Enter` or pressing `OK` 
5. A new dialog will pop up asking you to select the location for the cloned repository. Leave it as default or select a new directory using the folder icon on the right and confirm to start cloning.
6. Once it finished cloning successfully a window will pop up showing the cloned repository. There you can select the project you want to open.