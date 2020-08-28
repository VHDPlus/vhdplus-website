---
id: vhdp_structuralsyntax_function
title: Function
sidebar_label:  Function
---

## Definition

Functions can be used for implementing frequently used algorithms in your code. It takes zero or more values and
always returns a value.

### Limitation
You can only use `If`, `Case` or `For`, because the function has to run in one cycle.

If `While` and `Wait` are needed for the algorithm you will have to use [SeqFunction](/docs/vhdp_structuralsyntax_stepfunction)

## Example
```vhdp
Function add_two (return INTEGER; value_in : INTEGER)
{
    VARIABLE example_var : INTEGER;
    example_var := value_in;
    For(i IN 0 TO 1)
    {
        example_var := example_var + 1;
    }
    return example_var;
}
```

If you want to use the function with signal declarations, write the Function in AttributeDeclaration to keep the order of the declarations (first function and than signal)