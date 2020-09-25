---
id: main
title: Main
sidebar_label:  Main
---

## Definition

Main translates to the top-level entity in VHDL. This is the main file for the project.

**A CLK input is always created and used for all processes as default.**

## Example
```vhdp
Main
(
    LED : OUT STD_LOGIC := '0';
)
{
    ...
}

```

