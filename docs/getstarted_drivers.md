---
id: getstarted_drivers
title: Install Drivers
sidebar_label: Install Drivers
---

## Download the Drivers

Download the newest Arrow USB Programmer driver for **your operating system** from <a href="https://shop.trenz-electronic.de/de/Download/?path=Trenz_Electronic/Software/Drivers/Arrow_USB_Programmer/Arrow_USB_Programmer_2.3" target="_blank">here</a>.

## Installation

Make sure you have **superuser rights** and have [Quartus](#) already installed.
   
### Windows

1. Unzip the downloaded file.
2. Execute the `.exe` and follow the steps from the installer

### Linux
These steps are provided by <a href="https://shop.trenz-electronic.de" target="_blank">Trenz Electronics</a> and can be found in the `Readme` file downloaded with the driver package.

1. Unzip the downloaded file.
2. Copy the unzipped file `libjtag_hw_arrow.so` to the directory `linux64`
    of the **Quartus installation directory**. By default this is folder is located at `/usr/local/intelFPGA_lite/19.1/quartus/linux64`.
3. We need to make sure the Arrow USB Programmer is not linked to a virtual COM port. One way to do this is to create a `.rules` file for the programmer. 

To do this paste [this](assets/getstarted/51-arrow-programmer.rules) file to the `/etc/udev/rules.d/` directory **OR** create the file `51-arrow-programmer.rules` there yourself with the following content:
```
# Arrow-USB-Programmer
 SUBSYSTEM=="usb",\
 ENV{DEVTYPE}=="usb_device",\
 ATTR{idVendor}=="0403",\
 ATTR{idProduct}=="6010",\
 MODE="0666",\
 NAME="bus/usb/$env{BUSNUM}/$env{DEVNUM}",\
 RUN+="/bin/chmod 0666 %c"
 
# Interface number zero is a JTAG.
 SUBSYSTEM=="usb",\
 ATTRS{idVendor}=="0403",\
 ATTRS{idProduct}=="6010",\
 ATTR{interface}=="Arrow USB Blaster",\
 ATTR{bInterfaceNumber}=="00",\
 RUN="/bin/sh -c 'echo $kernel > /sys/bus/usb/drivers/ftdi_sio/unbind'"
```

4. Logout and back in for changes to take effect