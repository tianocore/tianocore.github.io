---
layout: default
title: OVMF
---
{% include site-links.md %}

OVMF is an [EDK II] based project to enable UEFI support for Virtual
Machines.  OVMF contains a sample UEFI firmware for [QEMU] and [KVM].

License information:
 [BSD](http://www.opensource.org/licenses/bsd-license.php)
 (May contain an additional exception if bundled with the
 [FAT driver]({{wiki}}/Edk2-fat-driver).)

More information:
  [OVMF FAQ]({{wiki}}/OVMF FAQ),
  [How to build]({{wiki}}/How to build OVMF),
  [Boot Overview]({{wiki}}/OVMF-Boot Overview),
  [edk2-devel]

Source repositories: git
{[github](https://github.com/tianocore/edk2/tree/master/OvmfPkg),
 [bitbucket](https://bitbucket.org/tianocore/edk2/src/master/OvmfPkg),
 [sourceforge](https://sourceforge.net/p/tianocore/edk2/ci/master/tree/OvmfPkg),
 [more info]({{wiki}}/EDK2_git)},
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
