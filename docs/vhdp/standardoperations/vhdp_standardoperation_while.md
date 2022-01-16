---
id: while
title: Parallel While
sidebar_label:  Parallel While
---

## Definition

If you use `While` outside of a `Thread`, the VHDL `While` is used. In that section you can repeat only a finite amount of times.
If you want to use this parallel `While` in a thread, you have to write `ParWhile`.

## Example

```vhdp
Process() {
	VARIABLE counter : INTEGER := 0; 
	While (counter < 8) 
	{ 
		LED(counter) <= '1'; 
		counter := counter + 1;
	} 
}
```

OR 

```vhdp
Process() {
	Thread {
		VARIABLE counter : INTEGER := 0; 
		ParWhile (counter < 8) 
		{ 
			LED(counter) <= '1'; 
			counter := counter + 1;
		} 
	}
}
```

<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/8wJt7V7Gpb4?autoplay=0&origin=http://vhdplus.com" frameborder="0" allowFullScreen></iframe></div>