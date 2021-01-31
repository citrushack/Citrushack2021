# Citrushack 2021

> Author: Rajbir Johar and Ajeet Kokatay

> Contributors:  claynaut J.S. Pescasio

## Getting Started

### Prerequisites

#### Windows

Install [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab). This is how you will be navigating to your project/repo and getting it up and running.


#### Mac

Open Terminal or install any other Command Line Interface software such as iTerm2, kitty, etc. This is how you will be navigating to your project/repo and getting it up and running.

If on Mac, install [Homebrew](https://brew.sh) as well. This is an incredibly useful package manager for Mac. If you're on the new M1 Chip, find the Terminal Application in Finder, right click it, and click start as Rosetta before installing Homebrew. You can copy and paste this line in your terminal.
- `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

### Linux

Install yarn: https://classic.yarnpkg.com/en/docs/install/#debian-stable

Clone project
- `git clone https://github.com/citrushack/Citrushack2021.git`
- `cd CitrusHack2021`
- `yarn install`
- `yarn dev`
- visit http://localhost:3000

#### All OSes

Familiarize yourself with the basic but essential Command Line operations [here](https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-navigation/cheatsheet).

Install [Git Command Line Tools](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the instructions based on your Operating System.

Install [Node.JS](https://nodejs.org/en/).

Install [Yarn](https://classic.yarnpkg.com/en/docs/getting-started) (We use Yarn for our web package manager).

Install your code editor of choice. Popular ones include VS Code, Atom, Sublime, etc.

Install atleast two to three popular browsers (Safari, Firefox, Chrome, Edge, etc). You will be testing on each browser for cross compatibility.

### Setting Up Your Local Environment

1. Open up your terminal and make a new folder called Projects using the command `mkdir Projects` (Or don't. This just helps keep all the repos in one place).
2. Change into the new directory using `cd Projects`.
3. Clone this repo by clicking the green button at the top labeled "Code" and copy the link you see.
4. Type `git clone "link"` and paste the link where "link" is without the quotation marks.
5. `ls` to list all contents of Projects. You should see a new directory with the same name as the repo.
6. `cd` into the new directory.
7. Type `yarn` to install all necessary packages. You will encounter errors but they won't affect anything.
8. Open the repo in your preferred code editor. This is where you can examine or edit code. **(Do not change or commit anything to the master branch. More on this later.)**
9. To start the project locally, run `yarn run dev` in your terminal while still inside your repo directory.
10. Open up a browser and type `http://localhost:3000` into the address bar. If everything is done correctly, you should now be able to view the project as if it were online. To quit the project, simply use the shortcut Ctrl+C in your terminal to stop the instance. 

*Steps 1-7 only need to be done once. Step 8-10 are how you will be editing and viewing the project.*

### Committing Changes

**Before you go wild on contributing:**
1. Make your own branch with `git branch name-of-branch`.
2. Change branch with `git checkout name-of-branch`.
3. View all branches and what branch you are currently on with `git branch`.

Once you've done that:
1. To check what files have been edited, use `git status`.
2. To add files to be committed, use `git add file-name` or `git add -A` to add all files.
3. To commit files, use `git commit -m "Write a useful message here to show what changes you have made"`. Include the quotation marks. Ensure to commit frequently so as to record what changes you've made.
4. To upload your commits onto Github, use `git push`. If it's your first time pushing commits from a new branch, use `git push -u origin name-of-branch` to push your entire local branch to Github.
5. Go to the repo on Github and click on "Pull Requests" at the top. Start a new pull request and compare your branch to master and on the righthand side, assign the webdev leads to review your code. Then finally, click Open Pull Request. **Under no circumstances should you click Merge.**

### Tech Stack
- [NextJS](https://nextjs.org) - The frontend framework used for this project. Highly recommend reading through the docs and going through the tutorial to familiarize yourself with the structure of the project.
- Strapi - Used for the backend

### 3rd Party Packages
- what-input - removes default border when elements are selected such as buttons.
- react-scroll - used to scroll to different sections via navbar
- react-accessible-accordion - used for accordion component
- ogl - used for the custom mouse trails
- tsparticles - used for the particles
