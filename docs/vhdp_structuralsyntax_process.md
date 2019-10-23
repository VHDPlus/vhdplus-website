---
id: vhdp_structuralsyntax_process
title: Process
sidebar_label:  Process
---

## Definition

In Process, you write your code. This code gets executed every CLK cycle.

A name can be assigned to a process.
In the brackets, variables can be declared that can be assigned and read only in this process (they can be declared in
the brace too).
In the brace, the code can be written. Only If, Else, Elsif, Case, When and For should be used in the brace.
See Thread for the other operations.

## Example
```vhdp
Process <Name>(optional)
(
    VARIABLE var : NATURAL range 0 to 3 := 0;
)
{
    If (…)
    {
        …
    }
}
```

## Use different CLK
If you want to use a different CLK, surround your code with `If(rising_edge(YOURCLOCK)) { … }.`

```vhdp
If(rising_edge(YOURCLOCK))
{
    Process <Name>(optional)
    (
        ...
    )
    {
        ...
    }
}
```
