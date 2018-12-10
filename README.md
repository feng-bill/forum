**Start this app in dev environment** You need to do the following
You might need to **install Node** on your computer before starting this application. 

1. cd into v1.0, type
npm install

2. cd into v1.0/client, type
npm install

3. To start the application - Run:
npm run dev

**Client folder**
We will be using React for front-end in the client folder.
1. node_modules folder: node packages that comes with node application
2. public folder: contains the public sorce code. It starts the application, and it calls <div id="root"></div> which will run rest of the code.
3. src folder: contains all the front end code.
* **action folder**
See README in the folder
* assets
Contains all the picture assets.
* components:
* * auth folder:
contains Login and Register page.
* * common folder:
contains all the forms style. So all forms or input field can have the same style. Code can also be cleaner. Part of code resue. 
* * create-profile folder:
container page that is dedicated to creating use profile. A information input page. 
* * dashboard folder:
displaying personal dashboard. Depending on the state of user. If the user have profile it will ask for information. If user do have information, then display user information.
* * layout folder:
It consist of the basic directory for all pages. Such as Foot and Header. About page will display about us. Landing folder is simply what the user will see when first land. TabCSS is there for holding css for Tab. 
* post
* * CommentFeed
* * CommentForum
* * CommentItem
* * Post
* posts
* * PostFeed
* * PostForm
* * PostItem
* * Posts
* search

* **reducers folder**
See README in the folder



The reason we are using Redux is to share our data between components. Not only this is what large application uses, but working with Redux now will help us learn in the future. 
⋅⋅⋅ We will have several state such as Auth, Error, Post, and Profile state
