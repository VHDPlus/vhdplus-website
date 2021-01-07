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

## Onboard Hardware

SDRAM:<br/>
SDRAM_ADD_0-12 (Address)<br/>
SDRAM_BAN_0-1 (Bank Select)<br/>
SDRAM_CAS (Column Address Strobe)<br/>
SDRAM_CLK (Clock)<br/>
SDRAM_RAS (Row Address Strobe)<br/>
SDRAM_WEN (Write Enable)<br/>
SDRAM_DQM_0-1 (I/O Mask)<br/>
SDRAM_DAT_0-15 (Data)<br/>

SPI Flash:<br/>
Flash_1-4 (1 CLK, 2 MISO, 3 MOSI, 4 SS)<br/>

USB to Serial:<br/>
UART_RX<br/>
UART_TX<br/>

LED:<br/>
LED_1-8 (Depending on LEDs available)<br/>

Button:<br/>
BTN_1-8 (Depending on buttons available)<br/>
