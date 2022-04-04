# 3. Commit and Push
This tutorial assumes you have completed the previous step Cloning a Repo.

## Step 3: Add files to repo
With the repository now cloned to your local filesystem, we can start committing some files.

1. In your terminal window, navigate to the top level of the newly cloned repository
    ```
    cd ~/dev/HelloWorld/
    ```

2. Enter the following on the terminal window to create a new file
    ```
    echo "Hello world!" >> myfirstfile.txt
    ```

    If the command line doesn’t return anything, that’s okay. It means the file was successfully created. You can always check if the file was created successfully by running
    ```
    ls -l
    ```
    You should see the newly created file "myfirstfile.txt".

3. Check the status of your local repository. The git status command tells you about how your local repository is progressing in comparison with the remote server repository.

    Your local Git client is aware that you have created a new file, so you will see something like this:

    ```
    $ git status
    On branch master
    Initial commit
    Untracked files:
        (use "git add <file>..." to include in what will be committed)
            myfirstfile.txt
    nothing added to commit but untracked files present (use "git add" to track)
    ```

    Your Git client is telling you that the new file "myfirstfile.txt" is untracked, meaning that Git does not see this file as part of any previous commit. The output also helpfully tells you what to do next (e.g. add the file).

4. To tell Git to track the new file you have created, run `git add`.
    ```
    git add myFirstfile.txt
    ```
    This command will move changes from the working directory to the Git staging area.

    ::: tip
    The **staging** area is where you prepare a snapshot of a set of changes before committing them to the official history.
    :::

5. Re-check the status of the file to see if our file is now staged. You should see something like this
    ```
    $ git status
    On branch master
    Initial commit
    Changes to be committed:
        (use "git rm --cached <file>..." to unstage)
            new file: myfirstfile.txt
    ```
    You can see that the new file has been added (staged) and is ready to be committed.

6. Commit the file using the `git commit` command and a commit message (the `-m` argument), e.g.
    ```
    $ git commit -m "Initial commit"
    [master (root-commit) fedc3d3] Initial commit
    1 file changed, 1 insertion(+)
    create mode 100644 myfirstfile.txt
    ```
    The `git commit` command has taken the staged snapshot and commits it to the project history.

    ::: tip Note
    Everything up until this point has been on your local system, and is invisible to the remote repository or indeed other collaborators. This is one of the fundamentals of the Git collaboration model.

    Each developer has their own copy of the repository, complete with its own local history and branch structure. Users typically need to share a series of commits rather than a single changeset. Instead of committing a changeset from a working copy to the central repository, Git lets you share entire branches between repositories. You manage connections with other repositories and publish local history by "pushing" branches to other repositories. You see what others have contributed by "pulling" branches into your local repo.
    :::

7. Push your locally committed changes to Bitbucket Cloud by using the command `git push origin master`. The command specifies where you are pushing:

    - master - The main branch on your repository (on a new repository this will be your only branch). A branch allows you to work on a set of code for your repository separate from the main codebase.

    - origin - The name of the remote server. In our case, origin is referring to Bitbucket Cloud.

    You should see something similar to
    ```
    $ git push origin master
    Counting objects: 3, done.
    Writing objects 100% (3/3), 253 bytes | 0 byte/s, done.
    Total 3 (delta 0), reused 0 (delta 0) To https://emmap1@bitbucket.org/emmap1/HelloWorld.git
        * [new branch] master -> master
    Branch master set up to track remote branch master from origin.
    ```

8. You should be able to see your commit on the Bitbucket Cloud UI using your browser.

    Click "Commits" in the sidebar and you’ll see your commit in the repo.

    Click "Source" in the sidebar and you’ll see your new file.