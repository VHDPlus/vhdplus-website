---
id: changelog
title: VHDPlus IDE Changelog
sidebar_label:  Changelog
---

## 0.10.9.0 (Upcoming)

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

- Fix a breaking bug using the VHDPlus Shield with extensions

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
