---
id: vhdp_structuralsyntax_connections
title: Connections
sidebar_label:  Connections
---

## Definition

Connections can be used to help with connecting the Component I/Os with the correct FPGA I/Os. If there are I/Os in
Main with the same name that aren't already connected, they will be connected automatically with the given FPGA
Pins.

## Example
```vhdp
Connections
{
    RX => D5,
    TX => F4,
}
```

