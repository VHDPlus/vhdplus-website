---
id: ide_layout_library
title: Library Explorer
sidebar_label:  Library Explorer
---

**&#x26A0; We might change the way libraries work until release 1.0!**

<img style="margin: 0" src="/docs/assets/ide/Libraries.PNG"></img>

## Add to project
1. Rightclick file or folder
2. Select Add to project. The file or folder will get copied to your project
3. (Optional) Open the imported file(s) in `Libraries` folder for instructions

## Custom libraries
You can import custom libraries to be used from the library explorer.
That way you can easily use your written libraries
They are stored in `Documents/VHDPlus/Libraries` on Windows or `home/VHDPlus/Libraries` on Linux.

### Create custom library
Libraries in VHDPlus are loaded just like normal projects.
1. Create a new project
2. Create/Import all files you want to include.
3. If the library is ready you can add it to the explorer like explained below.

### Add custom library

1. Navigate to `Documents/VHDPlus/Libraries` on Windows or `home/VHDPlus/Libraries` on Linux
2. Create a new folder for your library. 
3. Paste the files relevant for the library in the folder. **This should not include irrelevant files/folders!** 
   Normal structure would be at least one `*.vhdpproj` with at least one `*.vhdp`
4. Reload the libraries by rightclicking somewhere in the library explorer and hitting `refresh` or restart

## Other functions
1. Preview (opens the file as **read-only** to check the content)
2. Open in file explorer (view the selected folder/file in the file explorer)
3. Refresh (reloads the custom libraries)