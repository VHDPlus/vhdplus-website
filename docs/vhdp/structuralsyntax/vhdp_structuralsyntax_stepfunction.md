---
id: stepfunction
title: SeqFunction
sidebar_label:  SeqFunction
---

## Definition

SeqFunctions can be used for implementing frequently used algorithms in your code that also uses e.g. While or
Wait.

The content inside the function is inserted at the position of `NewFunction` and names of the parameters are replaced
with the connected signals. 

Instead of a `return value` you can assign the value to a `parameter` and read the value of
the connected signal inside the Process. Variables that are declared in the function are added to the process
variables and can also be used in the Process too.

### Advanced usage

If you add FunctionContent in the function, the sections outside of FunctionContent will be added outside
of the Process where you add NewFunction.

## Example
```vhdp
SeqFunction printChar
(
    char : STD_LOGIC_VECTOR(7 downto 0);
    ena  : STD_LOGIC;
    busy : STD_LOGIC;
    data : STD_LOGIC_VECTOR(7 downto 0);
)
{
    While(busy = '1') {}
    data <= char;
    ena <= '1';
    While(busy = '0') {}
    ena <= '0';
    While(busy = '1') {}
}
NewFunction printChar (x”56”, UART_Enable, UART_Busy, UART_Data);
```
