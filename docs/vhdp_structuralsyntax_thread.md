---
id: vhdp_structuralsyntax_thread
title: Thread
sidebar_label:  Thread
---

## Definition

Thread allows programming like with process-oriented programming languages.
You can use While and Wait together with If and Case. Everything will be converted to if-structures afterwards.
Thread also converts If, Case and signal assignments to work together with the procedure operations, because the If statement
without Thread wouldn't wait for the While loop.

### What you must look for
Sometimes a signal e.g. has to be set from '0' to '1', but if you write
```vhdp
En <= '0';
En <= '1';
```
both assignments will be executed in the same cycle and a different Process would not see the change of the state.
What you can do is
```vhdp
En <= '0';
Step{ En <= '1'; }
```
This way `En <= '1'` is executed in a separate step.

**Warning**: Variables are created in the compilation process. Names of procedure operations in combination with
numbers should not be used as names for own signals or variables.


## Example
```vhdp
Process()
{
    Thread
    {
        While(Btn = '0'){}
        Led <= '1';
        Wait(10000);
        While(Btn = '1'){}
        Wait(10000);
    }
}

```
