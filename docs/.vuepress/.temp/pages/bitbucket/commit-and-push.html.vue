<template><h1 id="_3-commit-and-push" tabindex="-1"><a class="header-anchor" href="#_3-commit-and-push" aria-hidden="true">#</a> 3. Commit and Push</h1>
<p>This tutorial assumes you have completed the previous step Cloning a Repo.</p>
<h2 id="step-3-add-files-to-repo" tabindex="-1"><a class="header-anchor" href="#step-3-add-files-to-repo" aria-hidden="true">#</a> Step 3: Add files to repo</h2>
<p>With the repository now cloned to your local filesystem, we can start committing some files.</p>
<ol>
<li>
<p>In your terminal window, navigate to the top level of the newly cloned repository</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd ~/dev/HelloWorld/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>Enter the following on the terminal window to create a new file</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo "Hello world!" >> myfirstfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If the command line doesn’t return anything, that’s okay. It means the file was successfully created. You can always check if the file was created successfully by running</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ls -l
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You should see the newly created file &quot;myfirstfile.txt&quot;.</p>
</li>
<li>
<p>Check the status of your local repository. The git status command tells you about how your local repository is progressing in comparison with the remote server repository.</p>
<p>Your local Git client is aware that you have created a new file, so you will see something like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git status
On branch master
Initial commit
Untracked files:
    (use "git add &lt;file>..." to include in what will be committed)
        myfirstfile.txt
nothing added to commit but untracked files present (use "git add" to track)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Your Git client is telling you that the new file &quot;myfirstfile.txt&quot; is untracked, meaning that Git does not see this file as part of any previous commit. The output also helpfully tells you what to do next (e.g. add the file).</p>
</li>
<li>
<p>To tell Git to track the new file you have created, run <code>git add</code>.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git add myFirstfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This command will move changes from the working directory to the Git staging area.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The <strong>staging</strong> area is where you prepare a snapshot of a set of changes before committing them to the official history.</p>
</div>
</li>
<li>
<p>Re-check the status of the file to see if our file is now staged. You should see something like this</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git status
On branch master
Initial commit
Changes to be committed:
    (use "git rm --cached &lt;file>..." to unstage)
        new file: myfirstfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>You can see that the new file has been added (staged) and is ready to be committed.</p>
</li>
<li>
<p>Commit the file using the <code>git commit</code> command and a commit message (the <code>-m</code> argument), e.g.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git commit -m "Initial commit"
[master (root-commit) fedc3d3] Initial commit
1 file changed, 1 insertion(+)
create mode 100644 myfirstfile.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The <code>git commit</code> command has taken the staged snapshot and commits it to the project history.</p>
<div class="custom-container tip"><p class="custom-container-title">Note</p>
<p>Everything up until this point has been on your local system, and is invisible to the remote repository or indeed other collaborators. This is one of the fundamentals of the Git collaboration model.</p>
<p>Each developer has their own copy of the repository, complete with its own local history and branch structure. Users typically need to share a series of commits rather than a single changeset. Instead of committing a changeset from a working copy to the central repository, Git lets you share entire branches between repositories. You manage connections with other repositories and publish local history by &quot;pushing&quot; branches to other repositories. You see what others have contributed by &quot;pulling&quot; branches into your local repo.</p>
</div>
</li>
<li>
<p>Push your locally committed changes to Bitbucket Cloud by using the command <code>git push origin master</code>. The command specifies where you are pushing:</p>
<ul>
<li>
<p>master - The main branch on your repository (on a new repository this will be your only branch). A branch allows you to work on a set of code for your repository separate from the main codebase.</p>
</li>
<li>
<p>origin - The name of the remote server. In our case, origin is referring to Bitbucket Cloud.</p>
</li>
</ul>
<p>You should see something similar to</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git push origin master
Counting objects: 3, done.
Writing objects 100% (3/3), 253 bytes | 0 byte/s, done.
Total 3 (delta 0), reused 0 (delta 0) To https://emmap1@bitbucket.org/emmap1/HelloWorld.git
    * [new branch] master -> master
Branch master set up to track remote branch master from origin.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li>
<li>
<p>You should be able to see your commit on the Bitbucket Cloud UI using your browser.</p>
<p>Click &quot;Commits&quot; in the sidebar and you’ll see your commit in the repo.</p>
<p>Click &quot;Source&quot; in the sidebar and you’ll see your new file.</p>
</li>
</ol>
</template>
