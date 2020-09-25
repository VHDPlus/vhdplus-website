---
id: component
title: Component
sidebar_label:  Component
---

## Definition

Component is a component for your FPGA design.
It works the same as Main except of three main differences: 
- It has a name
- You can add [Generic](/docs/vhdp/structuralsyntax/generic) to set parameters of the component 
- The I/Os will be connected to Signals in a different Component or in Main.


You can add an instance with [NewComponent](/docs/vhdp/structuralsyntax/newcomponent)



## Example
```vhdp
Component <Name>
(
    Generic ( CLK_Frequency : NATURAL := 50000000; );
    LED : OUT STD_LOGIC := '0';
    En : IN STD_LOGIC := '0';
)
{
    ...
}
```
