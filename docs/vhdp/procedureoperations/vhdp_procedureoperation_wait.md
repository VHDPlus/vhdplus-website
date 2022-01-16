---
id: wait
title: Wait
sidebar_label:  Wait
---

## Definition

With this section you can wait for a number of CLK cycles between two operations.
If your clock frequency is 12MHz, you can write 1s, 100ms or 10ns and this will be corrected to the cycle count.

## Examples

```vhdp
Thread 
{ 
	LED <= '1'; 
	Wait(1000); 
	LED <= '0'; 
	Wait(1000);
}
```
This Example creates a blinking LED

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/cODE2Xrxu6M?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>