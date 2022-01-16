---
id: step
title: Step
sidebar_label:  Step
---

## Definition

Step executes the operations inside in a separate cycle.
Thread will automatically put a Step around signal assignments, but Step is needed to wait one cycle between the assignments.

## Examples

```vhdp
Thread 
{ 
	Length <= 100; 
	En <= '1'; 
	Step 
	{ 
		En <= '0'; 
	} 
}
```

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/cODE2Xrxu6M?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>