---
layout: default
title: About
id: about
redirect_from:
  - /uefi/
---
{% include site-links.md %}

Welcome to TianoCore, the community supporting an open source implementation of [UEFI]({{wiki}}/reference/specs-standards/uefi.html){:target="_blank"}. [EDK II]({{wiki}}/reference/external-resources/edk_ii.html){:target="_blank"} is a modern, feature-rich, cross-platform firmware development environment for the UEFI and [PI]({{wiki}}/reference/specs-standards/pi.html){:target="_blank"} specifications. We hope that you’ll review our [documentation]({{baseurl}}/docs), use TianoCore for [platform firmware]({{wiki}}/platforms-packages/platform-ports/edk_ii_platforms.html){:target="_blank"}, [report any issues]({{wiki}}/community/support-onboarding/reporting_issues.html){:target="_blank"} you find, and [contribute to the community]({{wiki}}/community/support-onboarding/community_support.html){:target="_blank"}.

## Downloads
If you want to compile firmware or utilities, we recommend the [Getting Started with EDK II]({{wiki}}/development/tutorials-howto/getting_started_with_edk_ii.html){:target="_blank"} page. This provides an overview of downloading [EDK II from github]({{edk2github}}){:target="_blank"} and building a sample platform ([NT32]({{wiki}}/archives/platforms-packages/nt32_pkg.html){:target="_blank"}, [OVMF]({{wiki}}/platforms-packages/platform-ports/ovmf.html){:target="_blank"}, [ArmVirt]({{edk2github}}/tree/master/ArmVirtPkg){:target="_blank"}, [MdePkg]({{wiki}}/platforms-packages/core-packages/mde_pkg.html){:target="_blank"}, ...). You can also use a UEFI Development Kit ([UDK]({{wiki}}/releases-history/archives/udk.html){:target="_blank"}) release, which is a stable snapshot based on [EDK II]({{wiki}}/reference/external-resources/edk_ii.html){:target="_blank"}.

There are multiple [hardware platforms]({{wiki}}/platforms-packages/platform-ports/edk_ii_platforms.html){:target="_blank"} using EDK II open source UEFI firmware, including [MinnowBoard Max/Turbot]({{wiki}}/platforms-packages/platform-ports/minnow_board_max.html){:target="_blank"}, [MinnowBoard 3]({{wiki}}/platforms-packages/platform-ports/minnowboard_3.html){:target="_blank"}, and [Intel® Galileo Gen 2]({{wiki}}/platforms-packages/platform-ports/galileo.html){:target="_blank"}. This allows you to experiment and develop UEFI features on real hardware.

## Contributing to TianoCore
If you would like to contribute code or fix issues, please see [How To Contribute]({{baseurl}}/contrib). The [Tasks]({{wiki}}/governance/project-management/tasks.html){:target="_blank"} page has a list of priority work items.

## Reporting Issues
TianoCore uses github issues to track issues and feature requests. Please review [Reporting Issues]({{wiki}}/community/support-onboarding/reporting_issues.html){:target="_blank"} and [Reporting Security Issues]({{wiki}}/security/processes/reporting_security_issues.html){:target="_blank"} for more information.
