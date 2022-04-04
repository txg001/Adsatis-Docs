# 2. Cloning a Git repository

This tutorial assumes you have completed the previous step [Creating a Repo](./create-repo.md#create-a-new-repository).

Now that you have an empty repository on Bitbucket Cloud, you can "clone" that repository to your local filesystem, add files to it, commit them and then push back to the remote server.

## Step 2: Clone repository to local filesystem

When you clone a repository, you are creating a connection between Bitbucket Cloud and your local system. In Git terminology, the remote server is referred to as "origin".

Open a browser and a terminal window (e.g. Git Bash) from your desktop. After opening the terminal window do the following:

::: tip Note
The commands documented below are designed for use with Git Bash (Windows), macOS Terminal and Linux (Bash). If you use Windows CMD Prompt then the syntax may need to be altered.
:::

1. Navigation to your home directory
````
cd ~
````

2. Create a new directory for your local repos. As you use Git and Bitbucket more, it is likely you will have multiple code repositories, so it is useful to segregate them into their own directory from the start.

````
mkdir dev
````

3. Navigate to the new directory
````
cd ~/dev
````

4. Using a web browser, navigate to your Bitbucket Cloud HelloWorld repository.

5. Click the "clone" button in the top right corner.

     Bitbucket will display the "Clone this repository" dialog box. Set the protocol to HTTPS and copy the clone command.

6. In your terminal window, paste the command you copied from Bitbucket and hit return (or enter).

7. You will be asked for your Bitbucket password. Enter it and click return (enter).

    ::: warning
    If you encounter a password error, e.g.
    ````
    $ git clone https://emmap1@bitbucket.org/emmap1/HelloWorld.git
    Cloning into 'HelloWorld'...
    fatal: could not read Password for 'https://emmap@bitbucket.org': No such file or directory
    ````

    Run the following on the command line:

    ````
    git config --global core.askpass
    ````

    Then go back to Step 6 and repeat the clone process. You should now be prompted for a password.
    :::

At this point your terminal should look similar to this:
````
$ cd ~/dev
$ git clone https://emmap1@bitbucket.org/emmap1/HelloWorld.git
Cloning into 'HelloWorld'...
Password
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
````

8. Check to see if your dev directory now has a copy of the HelloWorld project in it:
````
ls -l
````