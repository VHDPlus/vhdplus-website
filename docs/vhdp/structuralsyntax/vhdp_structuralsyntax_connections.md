---
id: connections
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

## CRUVI

To connect CRUVI extensions for every development board use these names as pins:

LS_1-8 (1 SDA, 2 SCL, 3 D3, 4 SEL, 5 D2, 6 D1, 7 CLK, 8 D0)<br/>
HS_Dif_1-24 (1 B0_P, 2 B0_N, ..., 13 A0_P, 14 A0_N, ...)<br/>
HS_Ale (SMD_Alert)<br/>
HS_SDA (SMD_SDA)<br/>
HS_SCL (SMD_SCL)<br/>
HS_Ref (REFCLK)<br/>
HS_HSM (HSMIO)<br/>
HS_HSO (HSO)<br/>
HS_HSR (HSRST)<br/>
HS_HSI (HSI)<br/>
HS_Low_1-5 (1 DI, 2 DO, 3 SEL, 4 TMODE, 5 SCK)<br/>

