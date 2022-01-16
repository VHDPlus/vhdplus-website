---
id: if
title: If, Else and Elsif
sidebar_label:  If, Else and Elsif
---

## Definition

If, Else and Elsif can be used like without Thread, but you can use Wait, While... inside and next to it. 

## Examples

```vhdp
Thread 
{ 
	If (BTN = '1') 
	{ 
		LED <= '1'; 
	} 
	Wait (10000);
}
```
Without Thread, the If would ignore procedure operations and would not wait after checking.
This example checks every 10000 cycles if BTN is high and sets LED high if true.

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/cODE2Xrxu6M?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>