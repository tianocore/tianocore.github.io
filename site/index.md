---
layout: default
title: Tianocore web site
---
{% include site-links.md %}

Our website is open source. Let us know if you have site content or
other website improvements!

License information: [BSD](http://www.opensource.org/licenses/bsd-license.php)

Source repository: <https://github.com/tianocore/tianocore.github.io>

Note: In links and commands below, replace 'your_username' with your
github username.

### How to fork and test website changes

1. Visit [website repository page](https://github.com/tianocore/tianocore.github.io)
   and fork the repository

2. Go to the settings for your forked repo and rename it from
   tianocore.github.io to tianocore

3. Clone your forked repo. For example:

   `$`**`git clone git@github.com:your_username/tianocore.git`**

4. Checkout the gh-pages branch in your repo

   `$`**`git checkout gh-pages`**

5. (Optional) Create an empty commit for the the gh-pages to push

   If you want to test the website before making any changes, you need
   to create an empty commit and push your gh-pages branch. You can
   skip this step, make some actual changes, and push those instead.

   `$`**`git commit --allow-empty -m "Empty commit so github will build site"`**

   `$`**`git push origin gh-pages`**

   Test the website at <http://your_username.github.io/tianocore>

6. Make your changes, and then push the gh-pages branch

   `$`**`git push origin gh-pages`**

7. Test the forked website at <http://your_username.github.io/tianocore>

8. Reload the forked website at <http://your_username.github.io/tianocore>

9. Let us know about your changes on [edk2-devel]({{wiki}}/Edk2-devel)
   and we'll take a look to see if we can use them on the main site

### Local testing of website changes

You can also use jekyll to test website changes before even pushing
them to github.

If you are making lots of changes, this is a good idea, but it may
take a while to configure. For example, you'll probably need to
install jekyll and gem, and then use gem to install
jekyll-redirect-from.

Once everything it installed, you can run this command:

`$`**`jekyll serve -w .`**

When you run jekyll, it will tell you the local test url to open in
your web browser to view your website changes.

### Wiki changes

If you want to modify tianocore wiki pages, you can also use your
tianocore (website) repository. Each repository on github has a wiki
that is also a git repository. Therefore, you can copy the tianocore
wiki to your tianocore project's wiki by cloning the main wiki, and
then pushing it to your wiki:

`$`**`git clone https://github.com/tianocore/tianocore.github.io.wiki`**

`$`**`cd tianocore.github.io.wiki`**

`$`**`git remote add your_username git@github.com:your_username/tianocore.wiki.git`**

`$`**`git push your_username master`**

Now you can make changes to your own fork of the wiki, and view them
at <https://github.com/your_username/tianocore/wiki>.

Note: If you have trouble pushing to your wiki repo, you may have to
visit the wiki page, create one page, and then force push the master
branch. (It seems that github might not create the wiki git repo until
you start using the wiki.)
