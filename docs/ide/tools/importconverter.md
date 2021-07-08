---
id: importconverter
title: Import HDL Files or IP Cores
sidebar_label:  Import HDL Files or IP Cores
---

## Video Guides

### VHDL with the VHDPlus IDE
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/Nxp7IDpnrrg?autoplay=0&origin=http://vhdplus.com" allowFullScreen></iframe></div>
<br/>

### Verilog with the VHDPlus IDE
<div class="fluidMedia"><iframe id="ytplayer" type="text/html" width="100%" src="https://www.youtube.com/embed/JdirLzs9wv4?autoplay=0&origin=http://vhdplus.com" allowFullScreen></iframe></div>


## Import a HDL file (VHDL, Verilog)
![Import](/img/ide/Import2.png)
1. Right-click the project or a folder in the project explorer
2. Click on "Import existing file/s"
3. Set HDL Files as filter and select the HDL file to import
4. Now when you write `NewComponent` in your VHDP code, the VHDL component should show up

## Import other HDL files
1. Right-click the project or a folder in the project explorer
2. Click on "Import existing file/s"
3. Set All Files as filter and select the HDL file to import
4. To add the file like a VHDP `Component`, you have to write a VHDP interface:
   1. Create a new VHDP file
   2. Rename it so the file extension is .qsys.vhdp
   3. Add a `Component` in the file with the name of the component in the HDL file and add the signals and generic parameters from the HDL file
5. Now when you write `NewComponent` in your VHDP code, the new component should show up

Example for DVI_OUT.v:
```vhdp
Component DVI_OUT
(
    iPCLK  : IN STD_LOGIC;
    iSCLK  : IN STD_LOGIC;
    
    iRED   : IN STD_LOGIC_VECTOR(7 downto 0);
    iGRN   : IN STD_LOGIC_VECTOR(7 downto 0);
    iBLU   : IN STD_LOGIC_VECTOR(7 downto 0);
    iHS    : IN STD_LOGIC;
    iVS    : IN STD_LOGIC;
    iDE    : IN STD_LOGIC;
    
    oDVI_DATA : OUT STD_LOGIC_VECTOR(2 downto 0);
    oDVI_CLK  : OUT STD_LOGIC;
    iDVI_HPD  : IN  STD_LOGIC;
)
{
    
}
```

![Import](/img/ide/Import.png)

You can use this tool to import existing `VHDL` files or Intel FPGA IP Cores and convert them to be used in your project.

## Convert a VHDL file to use it like a VHDP file
1. Select the VHDL file
2. Choose a signal that should be connected with the CLK signal (or EMPTY to keep all inputs)
3. Press `Convert`. The converted file will be added to the active project.

## Import an Intel FPGA IP Cores
1. Open Quartus with the current project (Tools/Open in Quartus)
2. Select an IP Core from the IP Catalog (Tools/IP Catalog)
3. Generate the QSYS/QIP file and the VHDL file by following the assistant
4. Go to the import tool and select the generated VHDL file and the QSYS/QIP file
5. Choose a signal that should be connected with the CLK signal (or EMPTY to keep all inputs)
6. Press `Convert`. The QSYS/QIP file will be added to the project as link to the IP Core and a VHDP file will be generated as interface so you can use the IP Core in the VHDP files. 
If you want to change the parameters you can open the QSYS/QIP file from the project explorer. 
Make sure that the I/Os of the VHDP file are still correct. 