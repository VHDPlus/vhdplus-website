---
id: ide_layout_toolbar
title: Toolbar
sidebar_label:  Toolbar
---

![Toolbar](/img/ide/Toolbar.png)

## 1. File
1. New Project
2. Open Project
3. Save current file
4. Save all open files

## 2. Compile, Program and Test
1. Undo/Redo for current file
2. Project to compile
3. Converts VHDP files to VHDL files and opens the compile window:
   1. Make sure that the path of the Quartus folder is correct
   2. Select the used FPGA
   3. Select a signal, search for the I/O to connect and press Enter
   4. Press Compile to start compiling
4. Converts VHDP files to VHDL files
5. Programs the FPGA
6. Opens the window from Quartus to program the FPGA (for more programming options)
7. Opens the NIOS II programming environment. Click [here](/docs/guide_nios2) to learn more
8. Opens the window for In-System Sources and Probes debugging (First add the ISSP library to your project and add a NewComponent in the file to debug)
9. Opens Quartus with the current project

## 3. Tools
1. [Wait Calculator](/docs/ide_tools_wait)
2. [String Converter](/docs/ide_tools_string)
3. [Import VHDL/SQYS/QIP](/docs/ide_tools_import)