---
id: extension_bluetooth
title: Bluetooth Extension
---

**⚠ THIS DOCUMENTATION IS INCOMPLETE!**

![Bluetooth Extension](/img/extensions/bluetooth/Items1.png)

With the Bluetooth Extension Board you can send data via Bluetooth to e.g. a smartphone or another Bluetooth module.
The data can be easily transferred with a UART interface.

Unlike normal HC-05 modules, this module can be disconnected from the power supply via the ON / OFF input. So you can save power and with the Bluetooth Component you can configure the module automatically without AT commands.
You can configure the name, pin, UART, role (Master/Slave) and Slave to connect.

## Design
![Bluetooth Extension](/img/extensions/bluetooth/Items.png)

## Implementation

```vhdp
NewComponent Bluetooth_Controller 
(
	Module_Name      => x"564844505f536c617665",			--VHDP_Slave
	Module_Role      => x"30",								--Master (30 = Slave)
	Connect_Addr  	 => x"393864332c33312c663533663862",	--98d3,31,f53f8b (Address to connect)
	Module_Pin       => x"30303030",						--0000
	Module_Baudrate  => x"3338343030",						--38400
	Module_Stop      => x"30",								--1 Bit
	Module_Parity    => x"30",								--None
	--0 = Reset, 1 = Clear Paired Devices, 2 = Name, 3 = Role (Slave/Master), 4 = Connect to bound addresses, 5 = Address to connect, 6 = Pin, 7 = UART
	Change           => "11111110",							--Configurations to transmitt
	
	CLK_Frequency    => 50000000,
	Baudrate         => 38400,
	Parity           => 0,
	Parity_EO        => '0',
	RX_Timeout       => 100,

	Reset            => NOT rst,
	Config           => NOT btn,
	Power            => Bluetooth_Controller_Power,
	RX               => RX,
	TX               => TX,
	Mode             => Mode,
	ON_OFF           => ON_OFF,
	TX_Comp          => '1',
);
```
1. Name, role, address of the device to be connected, pin and UART settings can be specified. (With string converter, text can be converted into HEX for the FPGA)
2. With Change, you can set the configurations to transmitt by writing a 1 at the individual positions (0 Reset, 1 Delete paired devices, 2 Name, 3 Role, 4 Whether paired devices should be connected (Master), 5 Address of the device to be connected (Master) , 6 pin and 7 UART settings)
3. Connect IOs from Component, compile and upload
4. Connect the module and by a change of Config from '0' to '1' (for example by a button) the transmission is started

## Send data
```vhdp
--CODE INCOMPLETE!
```

* With power, the power can be turned off. The data is transmitted with a UART interface (115200 baud would have to be configured first)
* If data is to be transmitted between two modules: Set one to master (x "31) and one to slave (x" 30 ") and specify the slave's Bluetooth address at the master The address can be found with an app (12: 34: 56: AB: CD: EF = 1234.56, abcdef).
* Alternatively, you can exchange data directly with a Slave HC-05 with a Bluetooth Terminal App.

## Procedure

![Procedure](/img/extensions/bluetooth/Items2.png)

## Links
* <a href="https://www.teachmemicro.com/hc-05-bluetooth-command-list/" target="_blank">AT-Commands</a>
* <a href="https://howtomechatronics.com/tutorials/arduino/how-to-configure-pair-two-hc-05-bluetooth-module-master-slave-commands/" target="_blank">Connect Guide</a>