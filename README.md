# webapp-filmbaaz

Make sure NodeJS is installed
Install GIT (For source control, if you need it)

For creating a new project
---------------------------
1. Create a folder with the name of your application/ or whatever.
2. Open cmd/terminal, and navigate to the aforementioned folder
3. Run npm init
4. Provide in the details when prompted. (You can skip all if you want!)
        -   This sstatement initializes your project with a package.json file. This file contains all the metadeta of yur project, along with the various dependencies! When you run npm init, package.json will be created with no dependencies. As and when you work, update package.json by adding the depndencies(either manually, or through npm)
5. Install the dependencies you need in your project by running 'npm install <dependency> --save'
        -   This adds that dependency in your project folder under a folder called node_modules
        -   Do note that --save adds that dependency in your pachake.json automatically
        -   If you use --save-dev, then the particular dependency gets added as a dev-dependency.
                =   Dev dependencies are packages which you need only during development. When you are ready to publish the app you no longer need those dependencies. Hence your final product will not contain these dependencies. 
                -   For example, you might need a server env while development(like gulp), which you would not be needing when you publish your application onto remote servers. Thus you should ideally declare gulp and its related packages as a dev dependency.
        - You can install multiple dependencies together with 'npm install <dependency1> <dependency2> <dependency3>' and so on!
6. You are ready. Create your project specific files and proceed with the development.

For cloning an existing project
--------------------------------
1. Open cmd/terminal
2. Run 'git clone [online_git_repository_link]'
        -   A new folder with the repository name will be created in your current directory
3. Run 'npm install'
        -   If the online git repository has a package.json, then it would automatically install all the required dependencies, and download them to your local node_modules folder
4. You are ready. Create your project specific files and proceed with the development.

Additional Information for webapp-filmbaaz
--------------------------------------------
1.  npm packages required in the initial stages - jquery bootstrap popper.js angular @uirouter/angularjs
        - Dev Dependencies: gulp gulp-connect (Make sure you run 'npm install -g gulp' to install gulp globally on your system). For running gulp, create a gulpfile.js file in your project root directory, and write your gulp code there.
