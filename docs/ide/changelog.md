---
id: changelog
title: VHDPlus IDE Changelog
sidebar_label:  Changelog
---

## 0.11.1.7

- Add CYC5000 GUI
- Fix Generic Code generation

## 0.11.1.6

- Add Insert Key functionality
- Fix Auto signal connection

## 0.11.1.3

- Fix VHDP Support throwing wrong exceptions for using Record types inside ParFor Loops
- Sync Output/Serial Monitor Font Size with Editor

## 0.11.1.2

- Correct wrong default value for GHDL Options

## 0.11.1.1

- Add SimulationOptions for GHDL allowing to add e.g. `--stop-sim` arguments
- Fix not being able to type spaces in settings
- Give clearer message when GTKWave fails to start

## 0.11.1.0

- Add tooltip to description in errorlist
- New Verilog/Systemverilog package 

## 0.11.0.9

- Fix infinite loop while importing an existing folder into itself
- Projects will now exclude files that failed to load while compiling

## 0.11.0.8

- Fix ModelSim Path detection

## 0.11.0.7

- Add VHDP component completion for VHDL
- Fix changing themes on Windows
- Slightly improved startup time
- Fix removing/updating library packages

## 0.11.0.6 (Windows only)

- Fix crash on startup trying to load light/superdark theme

## 0.11.0.5

- Fix terminal on Linux
- Fix freeze when creating projects on Windows
- Fix string converter
- Fix mousewheel scrolling inside dropdown menus

## 0.11.0.4

- Fix Modelsim for Linux
- Add GHDP creation for VHDL and Verilog
- Fix a possible crash on Undo/Redo operations

## 0.11.0.3

- Fix serial monitor options
- Drastically improve project load times

## 0.11.0.2

- Fix pin order after disconnecting connections
- Fix crash while editing files outside of projects
- Fix using .vhdl files

## 0.11.0.1

- Generate templates with vhdl
- Fix crash on deleting arduino sketches
- Prevent loading the same project twice

## 0.11

- Fix long term programming for CYC1000

## 0.10.9.9

- Fix possible rendering crash while resizing

## 0.10.9.8

- Fix Modelsim simulation with GHDP
- Fix backup system in case IDE crashes
- Added border to floating tools on linux/macos to prevent buggy drag behaviour
- Fix selection scrolling in editview

## 0.10.9.7

- Fixed signal I/O creation in some cases
- Improved dark terminal colors in dark mode
- Fix NIOS Debugging on Linux

## 0.10.9.6

- Fix broken programmer
- Fix serial monitor negative baudrate crash
- Fix NIOS bsp generation

## 0.10.9.5

### Breaking ⚠️
This update changes the way settings are loaded. 
This means your current settings may be lost. This is a one time change that had to be done before 1.0, sorry 🥲.
Some packages may have to be reinstalled too in order to set their paths again.

### GHDL with GHW
This update adds the option to use the GHW file format with GHDL. This increases simulation speed by almost 50%, but requires GTKWave to run.
It can be activated with `Settings -> Use GTKWave` and `Settings -> Use GHDL GHW` after installing GTKWave.

### Other changes
- Added option to restore package paths
- Internal refactorings
- Fixed operator correction in certain situations

## 0.10.9.4

- Correct wrong cruvi LS definitions on Max10 boards
- Fix saving in create window
- Add error on missing components

## 0.10.9.3

- Fix missing cruvi extension views

## 0.10.9.2

- Fix errorlist style and sorting
- Drastically improved performance on files with lots of errors
- Fixed a possible crash

## 0.10.9.1

- Fix button visibility if no project is open
- Hint when trying to open new project in Quartus
- Fix possible crash

## 0.10.9.0

### New Toolbar Design
We simplified the design to make it more minimalistic.
This way the IDE should feel more familiar for beginners. Shortcuts, to control Arduino or NIOS CPUs are only shown when you really need them.
This change is still experimental and we expect to improve it in future releases.

If you find any bugs or need help, please join our [Discord](https://vhdplus.com/discord)!

### Fixes
- Huge performance improvements
- Fix IO Voltage not set in new projects
- Fix fullscreen glitches after minimizing
- Fix folding in line comments
- Fix long term programming for official hardware
- Fix detecting external file changes
- Fix cyc1000 and max1000 16k pin definitions
- VHDP support improvements
- Fix image viewer for linux/macos
- Fix NIOS Debugger on quartus 18

### Misc
- Huge performance improvements
- Make Verilog and Systemverilog support more usable (still bad though :/ )
- Hundreds of small changes and improvements

We are getting closer to the 1.0 release. To get an update on our current situation and future plans, please read our [blog](https://vhdplus.com/blog/)!

## 0.10.8.3

- Fix wrong max1000 cruvi pin definition
- Fix resolving array declarations of externally defined record types
- Fix vhdl / verilog component detection
- Allow adding libraries as shared files

## 0.10.8.2

- Fix GHDP
- Fix declaration of Function overloads
- Check for correct function return types
- Fix declaration of multiple variables using `,`

## 0.10.8.1

- Linux / MacOS hotfix

## 0.10.8.0

- Fix VHDP Package support
- Add missing types / functions
- Fix VHDL / Verilog component auto signal creation
- Fix shared files
- Added option to exclude files from quartus compilation
- Fix auto operator after AND
- Working functions in packages
- Improved checks for declarations
- Hugely improved type checks
- Changed highlighting for functions

## 0.10.7.9

- Fix max1000 and cyc1000 gui

## 0.10.7.8

- Lots of small VHDP Language support improvements
- Legend for graphical I/O connection
- Improved Scrollbar hints (Show search results)
- Connections can now use ';' instead of ','
- Performance improvements

## 0.10.7.7

- Fix permission issue that prevented loading FPGAs

## 0.10.7.6

- [BREAKING] Changed the way to load FPGAs
- Analyzer and Language support fixes fixes
- Better handling of subtypes
- Code completion after operators
- Fix highlighting

## 0.10.7.5

- Fix operator correction for signals

## 0.10.7.4

- Fix a breaking bug using the Shield with extensions

## 0.10.7.3

- Fix some issues with automatic signal generation
- Updated description for Wait
- Linux/MacOS compatibility fixes

## 0.10.7.2

- Fix serial monitor not changing baud rate without refresh

## 0.10.7.1 (Linux only)

- Fix missing library on some distros

## 0.10.7.0

- Improve readability for terminal in lightmode (darker colors)
- Fix VHDL formatting for "else generate"
- Create arduino project automatically when selecting WiFi extension

## 0.10.6.9

- Fix invisible simulator byteblocks

## 0.10.6.8

- Improved hover information for VHDP
- Fixed an issue where generated VHDL files were used like normal project files
- Fixed issues with CLRF line endings
- Minor style fixes

## 0.10.6.7

- Fixed a crash while using search
- Fixed automatic signal creation for vhdl and verilog libraries
- Support us by voting at https://www.outofthebox.nrw/detail/93 ❤️

## 0.10.6.6

- Fixed some issues with auto indent for VHDL
- Minor style changes
- Small performance improvements

## 0.10.6.5

### VHDP Analyzer
- Fixed a possible crash for huge files
- Improved Segment Check
- Added Subtype

### Miscellaneous
- New, cleaned up and futureproof `.vhdpproj` format.
- Fixed failing Arrow USB Driver installation on some Linux distros
- Fixed a bug where the Team Explorer failed to produce a comparison
- Reduced Package Manager lag while extracting packages
- Drastically improved editor initialization time
- Improved editor performance
- Fixed Quartus Project import

## 0.10.6.4 (Linux only hotfix)

- Added a workaround for some Linux distros having trouble loading system fonts.

## 0.10.6.3

- Added built-in changelog
- Improved completion speed
