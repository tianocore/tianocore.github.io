---
layout: default
title: Security
---
{% include site-links.md %}
<img src="https://raw.githubusercontent.com/tianocore/tianocore.github.io/master/images/SecurityPix.JPG" >

Security advisory page:

If you wish to describe a security issue regarding the code on tianocore.org, please use the "<b>Report</b>" button below. Please include the paths of the modules you believe are involved and a detailed description of the issue. The mail is reflected to the relevant tianocore module owners and architects, who will reply with confirmation and may also continue the thread if they have follow up questions or information. 


 <a href="mailto:tianocore-security@lists.sourceforge.net?subject=Tianocore%20Security%20Report%20Message">
<img src="https://raw.githubusercontent.com/tianocore/tianocore.github.io/master/images/Report-button2.jpg" /></a>


<ul>
				
<li><b>IMPORTANT:</b> All mail sent via this reflector are 
				TianoCore Contribution Agreement 1.0 <a href="{{wiki}}/Code_Contributions" title="Code_Contributions"> Code                    Contributions </a>
				</li>
			</ul>
<ul>
				
<li><b>IMPORTANT:</b> Please consider encrypting your message. 
				We support S/MIME. If you do not have encryption available, 
				describe the issue in generalities to establish the 
				converstation. We can then work out some mutually agreeable 
				method of encrypting the details in subsequent private 
				conversations. 
				</li>
			</ul>
			
<ul>
				
<li><b>IMPORTANT:</b> Please indicate in your initial mail if 
				you are asking for any embargo on the information in the mail or 
				on fixes associated with the report (ahead of a security 
				conference, for example). We do not make assurances that all 
				such requests will be granted. </li>
			</ul>


<li><b>Common practice in the software community when managing a 
security issue is:</b> 
</li>

<ol>
<li>Receive or discover an issue. </li>
<li>Rank the issue using DREAD or CVSS or ... </li>
<li>If the issue is low risk, simply provide a fix via the 
site's non-security bug fixing methods </li>
<li>Describe the issue,its vulnerabilities, and the fix to the 
site's trusted users </li>
<li>Embargo the fix from the open site to give time for the 
users to review and apply the fix and provide the fixed update 
to their customers. </li>
<li>After the embargo is complete, the complete vulnerability is 
described on the site. </li>
</ol>

----

We are aware that BIOS/Boot firmware is rarely updated by consumers or by enterprise IT departments. This makes the embargo generally impractical. It also makes the complete vulnerability description counterproductive. So, this site operates under the following modified version:


<li><b>Modified Steps: </b>
</li>

<ol>
<li><i>same as Step 1 above</i> </li>
<li><i>same as Step 2 above</i> </li>
				
<li><i>same as Step 3 above</i> </li>
				
<li>Describe the issue, its vulernabilities, and the fix to the 
				site's trusted users. The users have 1 week to provide comments 
				and request an embargo. </li>
				
<li>If reasonable rationale is provided for an embargo, the 
				embargo occurs (as in <i>step 5</i> above). </li>
				
<li>The issue is fixed in the public tree, but only the normal 
				bug description is provided. </li>
				
<li>A list of all issues fixed in designated files are provided 
				via a pdf on this page. </li>
</ol>
(As noted above, the embargo in <i>step 5</i> may also be requested as a part of the initial issue report.)

Designated files (<i>step 7</i>) are indicated by a comment in the header that the file may process untrusted input. These files are so designated because they protect the assets in the tianocore.org threat model. See (<a class="external free" href="http://www.uefi.org/sites/default/files/resources/Intel-UEFI-ThreatModel.pdf">http://www.uefi.org/sites/default/files/resources/Intel-UEFI-ThreatModel.pdf</a>) for information on the assets. If you believe other files should be so designated, please use the report button to provide the path. The "untrusted input" header comment is also used to indicate that the files so marked have had focused security reviews and may require security reviews when changes are made.

As implied in (<i>step 4</i>) above, <a class="external free" href="http://tianocore.org"> http://tianocore.org</a> maintains a list of trusted users who receive early notification of vulnerabilities so that implementations using tianocore.org code may be upgraded and distributed prior to open notification. By joining the list, you agree to limit disclosure of any issues reported by the reflector to those necessary to fix and manage the issue. Failure to effectively manage this confidential information may result in your removal from the reflector. The list is managed by the trusted users on the list itself. Those managing the list reserve the right to limit the size and membership of the list.

To request to join the list, use the REPORT button with "<b>JOIN</b>" as the first word in the mail subject title. To remove yourself from the list, use the REPORT button with "<b>LEAVE</b>" as the first word in the mail subject title.
