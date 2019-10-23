---
id: vhdp_structuralsyntax_generic
title: Generic
sidebar_label:  Generic
---

## Definition

Generic is used to set parameters of a [Component](/docs/vhdp_structuralsyntax_component), like the number of inputs to debounce or the clock frequency.

## Example
```vhdp
Component <Name>
(
    Generic 
    (
        CLK_Frequency : NATURAL := 12000000;
        Inputs range 1 to 8 : NATURAL;
        Error_Correction : BOOLEAN := false;
    );
    …
)
NewComponent <Name>
(
    CLK_Frequency => 50000000,
    Inputs => 1,
    --Error_Correction is false if not set
    …
);
```

