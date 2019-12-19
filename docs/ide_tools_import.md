---
id: ide_tools_import
title: Import VHDL/QSYS/QIP
sidebar_label:  Import VHDL/QSYS/QIP
---

![Import](/img/ide/Import.png)

You can use this tool to import existing `VHDL`, `QSYS` or `QIP` files and convert them to be used in your project.
(VHDL Files can also be imported with the Project Explorer without converting them to VHDP. This also allows to use NewComponent)

## Import a VHDL file to use it like a VHDP file
1. Select the VHDL file
2. Choose a signal that should be connected with the CLK signal (or EMPTY to keep all inputs)
3. Press `Convert`. The converted file will be added to the active project.

## Import a QSYS or QIP file
1. Open Quartus with the current project (Tools/Open in Quartus)
2. Select a library from the IP Catalog
3. Generate the QSYS/QIP file and the VHDL file by following the assistant
4. Select the generated VHDL file and the QSYS/QIP file
5. Choose a signal that should be connected with the CLK signal (or EMPTY to keep all inputs)
6. Press `Convert`. The converted file will be added to the active project. 
If you want to change the parameters you can open the QSYS/QIP file from the project explorer. 
Make sure that the I/Os of the VHDP file are still correct. 