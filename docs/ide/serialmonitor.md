---
id: serialmonitor
title: Serial Monitor
sidebar_label:  Serial Monitor
---

## Connect with your FPGA

1. Make sure that you have the correct driver installed.
2. (Linux only) You will need permissions to use the Serial port. You can permanently gain the required permission by adding yourself to the `dialout` group.
   To do this, open your terminal and execute `sudo usermod -a -G dialout $USER`. You will have to logout and login after doing this for changes to take effect.
3. Open VHDPlus IDE and select the SerialMonitor. If it is not visible just use `View` -> `Serial Monitor` to activate it.

![Show Serial Monitor](/img/ide/ShowSerialMonitor.png)

4. Select `Baud Rate` and `Serial Port`. The Baud Rate should match the one you are using in your [UART Interface](#) (Documentation coming soon).

![Select Baud Rate and Serial Port](/img/ide/SerialMonitorSelect.PNG)


## Test if everything works

You can use this simple code to see if everything works. 
1. Create an empty project and paste this into the main VHDP file.
```vhdp
/*
Simple Serial Monitor example
 */

Main
(
    SIN : IN STD_LOGIC;
    SOUT : OUT STD_LOGIC;
)
{
    SOUT <= SIN; --Redirect input directly to output
}
```
2. Compile the project and program your FPGA.
3. Use the steps [above](#connect-with-your-fpga) to connect with your FPGA. The `Baud Rate` should not matter in this case since we use no [UART Interface](#).
4. Use the textbox and send something. If everything works as expected, the string you sent should get redirected and written into the Serial Monitor.
