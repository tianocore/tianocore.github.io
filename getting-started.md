---
layout: default
title: Getting Started
id: gettingStarted
redirect_from:
  - /projects.html
  - /contrib/getting-started.html
---
{% include site-links.md %}

If you want to compile firmware or utilities, we recommend first downloading [EDK II from github](https://github.com/tianocore/edk2){:target="_blank"} and building a sample platform ([NT32]({{wiki}}/Nt32Pkg){:target="_blank"}, [OVMF]({{wiki}}/OVMF){:target="_blank"}, [ArmVirt]({{edk2github}}/tree/master/ArmVirtPkg){:target="_blank"}, [MdePkg]({{wiki}}/MdePkg){:target="_blank"}, ...). You can also use a UEFI Development Kit ([UDK]({{wiki}}/UDK){:target="_blank"}) release, which is a stable snapshot based on [EDK II]({{wiki}}/edk-ii){:target="_blank"}.

There are multiple [hardware platforms]({{wiki}}/EDK-II-Platforms){:target="_blank"} using EDK II open source UEFI firmware, including [MinnowBoard Max/Turbot]({{wiki}}/MinnowBoardMax){:target="_blank"}, [MinnowBoard 3]({{wiki}}/MinnowBoard-3){:target="_blank"}, and [Intel® Galileo Gen 2]({{wiki}}/Galileo){:target="_blank"}. This allows you to experiment and develop UEFI features on real hardware.

TianoCore uses Bugzilla to track issues and feature requests. Please review [Reporting Issues]({{wiki}}/Reporting-Issues){:target="_blank"} and [Reporting Security Issues]({{wiki}}/Reporting-Security-Issues){:target="_blank"} for more information. If you would like to contribute code or fix issues, please see [How To Contribute]({{baseurl}}/contrib). The [Tasks]({{wiki}}/Tasks){:target="_blank"} page has a list of projects that need attention.
