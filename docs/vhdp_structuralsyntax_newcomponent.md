---
id: vhdp_structuralsyntax_newcomponent
title: New Component
sidebar_label:  New Component
---

## Definition

NewComponent adds an instance of a [Component](/docs/vhdp_structuralsyntax_component) in a different `Component` or in `Main`


In front of NewComponent stands the `name` of the Component.
In the brackets, parameters from [Generic](/docs/vhdp_structuralsyntax_generic) can be assigned to values, constants or can be removed to use the default
value (in the example 50000000 from Component).

The I/Os can be assigned to values, constants, signals and outputs can be removed if not used


## Example
```vhdp
NewComponent <Name>
(
    CLK_Frequency => 50000000,
    LED => LED,
    En => '1',
);
```