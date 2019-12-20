---
id: vhdp_datatypes_stdlogic
title: STD_LOGIC and STD_LOGIC_VECTOR
sidebar_label:  STD_LOGIC and STD_LOGIC_VECTOR
---

## Definition

STD_LOGIC is often used, because it allows to set or read all possible states of an input or output. For example, for I2C, the output must switch between '0' and 'Z' (not connected to GND or 3V3). In addition, it is helpful to know if an input has a different state.

STD_LOGIC can be used like BIT, but with the different states<br/>
'U' <- Uninitialized <br/>
'X' <- Unknown <br/>
'0' <- Low <br/>
'1' <- High <br/>
'Z' <- High Impedance <br/>
'W' <- Weak Unknown <br/>
'L' <- Weak Low <br/>
'H' <- Weak High <br/>
'-' <- Don't Care<br/>