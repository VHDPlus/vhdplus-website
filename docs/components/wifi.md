---
id: wifi
title: VHDPlus WiFi Extension
sidebar_label:  WiFi Extension
---

import Link from "@docusaurus/Link";

<Link className="button button--lg shopButton margin-bottom--lg" href="https://shop.vhdplus.com/product/vhdplus-wifi-extension/">Get this product in our shop 🛒</Link>

![WiFi Extension](/img/extensions/wifi/Wifi_Top.png)

The VHDPlus WiFi Extensions make it easy to use your FPGA as an IoT controller. You have to take a cheap ESP-01 and plug it in the connector. Then you can use the FPGA as a programmer and USB interface for the ESP8266 together with the onboard buttons. And when you only have one CRUVI connector left, you can just plug a second extension like the [SCD40 CRUVI module](https://shop.trenz-electronic.de/en/CR00040-01-40-CRUVI-module-with-CO2-sensor-SCD40) on top of the extension.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/MWZAFNWcuVk?autoplay=0&origin=http://vhdplus.com" allowFullScreen></iframe></div>

## WiFi Overview
![WiFi Overview](/img/extensions/wifi/Top_labled.png)

When you plug in the WiFi module, you have the TX and RX pin for the UART communication connected to the FPGA through the CLK and SEL CRUVI pin. GPIO 0 and 2 routed to the pins right next to the module.

The remaining CRUVI pins except for CLK and SEL are routed to the CRUVI connector on the top. You could also connect the RX and TX pin to the top, but this is not recommended.
