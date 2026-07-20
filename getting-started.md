---
layout: default
title: Getting Started
id: gettingStarted
redirect_from:
  - /projects.html
  - /contrib/getting-started.html
---
{% include site-links.md %}

If you want to compile firmware or utilities, we recommend first downloading [EDK II from github]({{wiki}}/development/tutorials-howto/getting_started_with_edk_ii.html){:target="_blank"} and building a sample platform ([EmulatorPkg]({{wiki}}/platforms-packages/platform-ports/emulator_pkg.html){:target="_blank"}, [OVMF]({{wiki}}/platforms-packages/platform-ports/ovmf.html){:target="_blank"}, [ArmVirt]({{edk2github}}/tree/master/ArmVirtPkg){:target="_blank"}, [MdePkg]({{wiki}}/platforms-packages/core-packages/mde_pkg.html){:target="_blank"}, ...). You can also use a UEFI Development Kit ([UDK]({{wiki}}/releases-history/archives/udk.html){:target="_blank"}) release, which is a stable snapshot based on [EDK II]({{wiki}}/reference/external-resources/edk_ii.html){:target="_blank"}.

There are multiple [hardware platforms]({{wiki}}/platforms-packages/platform-ports/edk_ii_platforms.html){:target="_blank"} using EDK II open source UEFI firmware, including [MinPlatform Open Boards]({{wiki}}/development/design-architecture/minimum_platform_architecture_minplatform.html), [MinnowBoard Max/Turbot]({{wiki}}/platforms-packages/platform-ports/minnow_board_max.html){:target="_blank"}, [MinnowBoard 3]({{wiki}}/platforms-packages/platform-ports/minnowboard_3.html){:target="_blank"}, and [Intel® Galileo Gen 2]({{wiki}}/platforms-packages/platform-ports/galileo.html){:target="_blank"}. This allows you to experiment and develop UEFI features on real hardware.

TianoCore uses github issues to track issues and feature requests. Please review [Reporting Issues]({{wiki}}/community/support-onboarding/reporting_issues.html){:target="_blank"} and [Reporting Security Issues]({{wiki}}/security/processes/reporting_security_issues.html){:target="_blank"} for more information. If you would like to contribute code or fix issues, please see [How To Contribute]({{baseurl}}/contrib). The [Tasks]({{wiki}}/governance/project-management/tasks.html){:target="_blank"} page has a list of projects that need attention.

## Training
Training on UEFI and EDK II : See [Training]({{wiki}}/community/support-onboarding/training.html){:target="_blank"}