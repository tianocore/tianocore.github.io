---
layout: acgRedirect
acgRedirectUrl: https://www.tianocore.org/tianocore-wiki.github.io/platforms-packages/platform-ports/ovmf.html
title: OVMF
---
{% include site-links.md %}

OVMF is an [EDK II] based project to enable UEFI support for Virtual
Machines.  OVMF contains a sample UEFI firmware for [QEMU] and [KVM].

License information:
  [BSD+Patent]((https://opensource.org/licenses/BSDplusPatent)

More information:
  [OVMF FAQ]({{wiki}}/reference/faqs-glossaries/ovmf_faq.html),
  [How to build]({{wiki}}/development/tutorials-howto/how_to_build_ovmf.html),
  [Boot Overview]({{wiki}}/platforms-packages/platform-ports/ovmf_boot_overview.html),
  [edk2-devel]

Source repositories: git
{[github](https://github.com/tianocore/edk2/tree/master/OvmfPkg),
 [bitbucket](https://bitbucket.org/tianocore/edk2/src/master/OvmfPkg),
 [sourceforge](https://sourceforge.net/p/tianocore/edk2/ci/master/tree/OvmfPkg),
 [more info]({{wiki}}/development/tutorials-howto/edk2_git.html)},
svn
{[sourceforge](https://svn.code.sf.net/p/edk2/code/trunk/edk2/OvmfPkg)}

### See Also
* [http://www.linux-kvm.org/page/OVMF](http://www.linux-kvm.org/page/OVMF)
* [http://wiki.xen.org/wiki/OVMF](http://wiki.xen.org/wiki/OVMF)
* Gerd Hoffmann's OVMF builds: [https://www.kraxel.org/repos/](https://www.kraxel.org/repos/)
  * These images are automatically built and track the latest OVMF code in the
    EDK II tree.
  * Some of these builds include a seabios CSM and can boot non-UEFI "legacy"
    operating systems. (Note: seabios is
    [GPLv3](https://opensource.org/licenses/GPL-3.0) licensed.)
  * If your OS doesn't work with RPM repositories, then you can
    manually download and decompress the RPM files under
    [jenkins/edk2](https://www.kraxel.org/repos/jenkins/edk2/)
