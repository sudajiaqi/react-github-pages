# react-github-pages


## Introduction

Blog is based on GitHub Pages and GitHub API, implementation no backend, dynamically publish blog system.
The data is  stored in the GitHub Gists and  add and update by GitHub API .
Leave your stars if you like. ╭(●｀∀´●)╯╰(●’◡’●)╮

## Demo

[https://godmoonlight.github.io/](https://godmoonlight.github.io/)


## Feature

   - [x]  Based on GitHub Pages, no backend
   - [x]  dynamically publish blog 
   - [x]  Single Page Application


## Use Quickly


Click the "`+`" next GitHub avatar, choice ` Import repository`,
fill `https://github.com/GodMoonLight/godmoonlight.github.io.git ` as clone URL,
fill `yourGitHubName.github.io` as repository name.


Now `https://yourGitHubName.github.io` is your blog.

e.g.
```
https://godmoonlight.github.io
```

#### get Token

`github` > `settings` > `Developer settings` > `Personal access tokens` check `gist` permission to get a new Token

#### set Token

In you Blog, click the you avatar in the nav, the click `Setting` to the Setting Page to add Token.

### Development

[https://github.com/GodMoonLight/react-github-pages](https://github.com/GodMoonLight/react-github-pages).


1. install dependencies
    ```bash
    yarn install
    ```

2. development

    - config the file `config/dev.env`
    ```.env
    ## the name of github
    USER_NAME=
    ## your avatar
    AVATAR=
    ```
    - run the following command
    ```bash
    yarn dev
    ```

3. prod

    - config the file `config/prod.env`
    ```.env
    ## the name of github
    USER_NAME=
    ## your avatar
    AVATAR=
    ```
    - run the following command
    ```bash
    yarn prod
    ```


4. deploy

    Use [gh-pages](https://www.npmjs.com/package/gh-pages) to
     deploy files packaged by webpack to a github repo.
    
    in the file `package.json`-> `script`, 
    change the url of repo and run it.

    ```
    "deploy": "gh-pages -d dist -r git@github.com:GodMoonLight/godmoonlight.github.io.git -b master",
    ```
    #### gh-pages Command
    
    ```
    Usage: gh-pages [options]
    
    Options:
      -V, --version            output the version number
      -d, --dist <dist>        Base directory for all source files
      -s, --src <src>          Pattern used to select which files to publish (default: "**/*")
      -b, --branch <branch>    Name of the branch you are pushing to (default: "gh-pages")
      -e, --dest <dest>        Target directory within the destination branch (relative to the root) (default: ".")
      -a, --add                Only add, and never remove existing files
      -x, --silent             Do not output the repository url
      -m, --message <message>  commit message (default: "Updates")
      -g, --tag <tag>          add tag to commit
      --git <git>              Path to git executable (default: "git")
      -t, --dotfiles           Include dotfiles
      -r, --repo <repo>        URL of the repository you are pushing to
      -p, --depth <depth>      depth for clone (default: 1)
      -o, --remote <name>      The name of the remote (default: "origin")
      -u, --user <address>     The name and email of the user (defaults to the git config).  Format is "Your Name <email@example.com>".
      -v, --remove <pattern>   Remove files that match the given pattern (ignored if used together with --add). (default: ".")
      -n, --no-push            Commit only (with no push)
      -h, --help               output usage information
    ```
