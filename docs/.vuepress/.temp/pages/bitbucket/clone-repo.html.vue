<template><h1 id="_2-cloning-a-git-repository" tabindex="-1"><a class="header-anchor" href="#_2-cloning-a-git-repository" aria-hidden="true">#</a> 2. Cloning a Git repository</h1>
<p>This tutorial assumes you have completed the previous step <RouterLink to="/bitbucket/create-repo.html#create-a-new-repository">Creating a Repo</RouterLink>.</p>
<p>Now that you have an empty repository on Bitbucket Cloud, you can &quot;clone&quot; that repository to your local filesystem, add files to it, commit them and then push back to the remote server.</p>
<h2 id="step-2-clone-repository-to-local-filesystem" tabindex="-1"><a class="header-anchor" href="#step-2-clone-repository-to-local-filesystem" aria-hidden="true">#</a> Step 2: Clone repository to local filesystem</h2>
<p>When you clone a repository, you are creating a connection between Bitbucket Cloud and your local system. In Git terminology, the remote server is referred to as &quot;origin&quot;.</p>
<p>Open a browser and a terminal window (e.g. Git Bash) from your desktop. After opening the terminal window do the following:</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>The commands documented below are designed for use with Git Bash (Windows), macOS Terminal and Linux (Bash). If you use Windows CMD Prompt then the syntax may need to be altered.</p>
</div>
<ol>
<li>Navigation to your home directory</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2">
<li>Create a new directory for your local repos. As you use Git and Bitbucket more, it is likely you will have multiple code repositories, so it is useful to segregate them into their own directory from the start.</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>Navigate to the new directory</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="4">
<li>
<p>Using a web browser, navigate to your Bitbucket Cloud HelloWorld repository.</p>
</li>
<li>
<p>Click the &quot;clone&quot; button in the top right corner.</p>
<p>Bitbucket will display the &quot;Clone this repository&quot; dialog box. Set the protocol to HTTPS and copy the clone command.</p>
</li>
<li>
<p>In your terminal window, paste the command you copied from Bitbucket and hit return (or enter).</p>
</li>
<li>
<p>You will be asked for your Bitbucket password. Enter it and click return (enter).</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>If you encounter a password error, e.g.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git clone https://emmap1@bitbucket.org/emmap1/HelloWorld.git
Cloning into 'HelloWorld'...
fatal: could not read Password for 'https://emmap@bitbucket.org': No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Run the following on the command line:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git config --global core.askpass
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Then go back to Step 6 and repeat the clone process. You should now be prompted for a password.</p>
</div>
</li>
</ol>
<p>At this point your terminal should look similar to this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ cd ~/dev
$ git clone https://emmap1@bitbucket.org/emmap1/HelloWorld.git
Cloning into 'HelloWorld'...
Password
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="8">
<li>Check to see if your dev directory now has a copy of the HelloWorld project in it:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></template>
