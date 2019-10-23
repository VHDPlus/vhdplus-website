---
id: vhdp_structuralsyntax_generate
title: Generate
sidebar_label:  Generate
---

## Definition

Allows to add a component or an operation to the project multiple times or if a condition is met.

## Example
```vhdp
Generate (for i in 0 to 7) 
{ 
	NewComponent PWM_Generator 
	( 
		Duty => dutySig(i), 
		PWM_Out(0) => LEDs(i), 
	);
}

Generate (if i < 8) 
{ 
	exampleSignal <= TO_INTEGER(UNSIGNED(exampleArray(i)));
}
```

