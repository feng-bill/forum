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
* **assets**
Contains all the picture assets.
* **components**:
* * **auth** folder:
contains Login and Register page.
* * **common** folder:
contains all the forms style. So all forms or input field can have the same style. Code can also be cleaner. Part of code resue. 
* * **create-profile** folder:
container page that is dedicated to creating use profile. A information input page. 
* * **dashboard** folder:
displaying personal dashboard. Depending on the state of user. If the user have profile it will ask for information. If user do have information, then display user information.
* * **layout** folder:
It consist of the basic directory for all pages. Such as Foot and Header. About page will display about us. Landing folder is simply what the user will see when first land. TabCSS is there for holding css for Tab. 
* **post** folder
contain individual post item, with comments
* * **CommentFeed**
responsible mapping out all the comments
* * **CommentForum**
responsbile showing a box for posting a comment
* * **CommentItem**
responsbile for show how a comment is like
* * **Post**
responsible gathering all the comment material and put together. Similar to a parent wrapper.
* **posts**
contain All posts
* * **PostFeed**
responsible mapping out all the posts
* * **PostForm**
responsbile showing a box for posting a post
* * **PostItem**
responsbile for show how a item is like
* * **Posts**
responsible gathering all the posts material and put together. Similar to a parent wrapper.

* **search**
Similar to how Post work. This is responsible for showing posts that came back from the search query

* **reducers folder**
See README in the folder

* **App.js**
Main app, reponsbile deciding all routes. Private and Public route

* **index.js**
Using ```document.getElementById("root"));``` call root index.html and display/render ```<App />``` 

* **store.js**
This is a must component of Redux. Uses to Store holds the state tree of the application. 

4. **config**
keys for connecting to databse, Mongo

5. **models**
Items's schema. Shows whats necessary and what is not. How things are structured. 

6. **routes**
contains all the backend api routes. Inside contains more information for each route. 

7. **validation**
simply being called to check for input validation.

8. **server.js**
connets to databse and call on api when is being called. 