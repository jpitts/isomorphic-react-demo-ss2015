# Isomorphic React Demo For S/S 2015

Demo web stack using node.js, express, isomorphic react. The modules used were fashionable in Spring/Summer 2015.

# Installation

This demo was developed using node v0.12.4. You may want to use [creationix/nvm](https://github.com/creationix/nvm) to run this version of node.

## Install Node Modules:

```
npm install
```

## Install Redis

```
./vendor/redis/bin/download-redis.sh

./vendor/redis/bin/install-redis.sh
```

## Configure

Copy the config/environment.js.default to config/development.js or other environments as needed.

One key configuration that is required in order to login is to set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRE after setting up your [Google OAuth2](https://developers.google.com/identity/protocols/OAuth2) access.


# Developing

If it is run on a modern unix system, this demo contains all of what you need to edit code, to run redis, and to run the web stack.

## To generate a convenient screen session in a terminal where your code will be edited:

```
./devel/bin/start_dev_screens.sh
```

## To run redis:

```
./vendor/redis/bin/run-redis.sh
```

## To run node in development mode:

```
node devel.js
```

Take note that the files are being watched in order to rebuild client javascript and to restart the web service.


# Overview

This is demoware, illustrating some interesting techniques for coding high-performance web apps. 

This demoware is dated, the fashion of yesteryear. Beware: they will mock you in the street and shun you from all of the good parties if you write an app like isomorphic-react-demo-ss2015 today.

# Key Techniques

## Express Routing

[Express 4 Router API](http://expressjs.com/en/4x/api.html#router)

[Learn to Use the New Router in ExpressJS 4.0](https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4)


## Isomorphic Javascript

[The future of web apps is — ready? — isomorphic JavaScript](http://venturebeat.com/2013/11/08/the-future-of-web-apps-is-ready-isomorphic-javascript/)

[Serverside React Rendering: Isomorphic JavaScript with ReactJS + Node](http://reactjsnews.com/isomorphic-javascript-with-react-node/) by David Wells, who created an important [example app](https://github.com/DavidWells/isomorphic-react-example) that parts of this demo are based on.


## Unidirectional Dataflow and Immutable Data

[Simpler UI Reasoning with Unidirectional Dataflow and Immutable Data](https://github.com/omniscientjs/omniscient/wiki/Simpler-UI-Reasoning-with-Unidirectional-Dataflow-and-Immutable-Data)


## Virtual DOM

[Why is React's concept of Virtual DOM said to be more performant than dirty model checking?](http://stackoverflow.com/a/23995928/1854279)

[Virtual DOM and diffing algorithm](https://gist.github.com/Raynos/8414846)


# A Special Note About Application Structure

The code of this demo is organized around developer concerns, embodied in entities like users and items. This is in contrast to organizing around technical concerns such as controllers, routes, models, etc). 

This structure is called Concern-Oriented Programming, the culmination of years of building web apps using frameworks and from scratch.

## Concern-Oriented Programming

The key idea behind COP is that code structure should follow "who" and "what" the app is built for, as opposed to "how" the app works. In a COP app, an entity directory would contain all client, server, and data model code relating to that general concern. This essentially flattens the file structure.

In common code structuring, web app directories and file naming say a lot about the role of the code therein. As more code is added to handle new developer concerns, the repo becomes cluttered with numerous directories.  

[](https://en.wikipedia.org/wiki/Cross-cutting_concern)

### An MVC web app, structured around the role code plays in the system:

```
app.js
|
|- routes
|  |- item.js
|  |- user.js
|
|- models
|  |- ItemModel.js
|  |- UserModel.js
|  |- UserGroupModel.js
|
|- views
|  |- item_edit.jade
|  |- user_edit.jade
|
|- public
|  |- js
|     |- item_client.js
|     |- user_client.js
```

In this case, a developer must deal with files in four directories to add or modify user functionality.

### A COP app, structured around the concerns of the developer:

```
app.js
|
|- entities
|  |
|  |- item
|     |- client.js
|     |- express_routes.js
|     |- express_handlers.js
|     |- item_edit.jade
|     |- ItemModel.js
|
|  |- user
|     |- client.js
|     |- express_routes.js
|     |- express_handlers.js
|     |- user_edit.jade
|     |- UserModel.js
|     |- UserGroupModel.js
|
|- public
|  |- js
|     |- client.js (compiled from item and user client files)
```

In this case, the developer would be primarily editing files in one directory. When an entity component must interact with another entity, it is very clear when that line is being crossed.

[Cross-cutting concerns](https://en.wikipedia.org/wiki/Cross-cutting_concern) might be better understood within a COP app. The author is not yet certain about that, but intuitively it seems so.

## Advantages of Concern-Oriented Programming

Three main advantages come from loosely structuring the app around entities:

### 1. Code is saved in a simplified file structure, improving accessibility. 

This helps new developers figure things out more quickly, and reduces the costs of maintenance. 

### 2. Developers can divide up work on a project.

Agreeing to boundaries in an app and code commits are also simplified.

### 3. Parts of the app can be more easily shared. 

For example, a user entity that depends on Express 4 / jade / React can be checked out into another project that depends on the same modules. In the future, json can describe how one entity's components may depend on another entity's components, and incorporate versioning.

### Bonus: It may be easier to create microservices out of individual entities. 

This remains to be seen.

## Possible Objections to COP

Packing files together that have different functional roles may seem inconsistent. The lack of a directory hierarchy means that the underlying structure of the application may be harder to guess at. Developers may be too free to create strange naming conventions. 

Any of these factors can make developers anxious or morose.


# Node Module Dependencies

## Gulp

Gulp is used to rebuild the client js file, including server-side React JSX rendering.

[gulp](https://github.com/gulpjs/gulp)

[gulp getting started guide](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)


## Express

[expressjs](https://github.com/expressjs/express)


## Passport

[jaredhanson/passport](https://github.com/jaredhanson/passport/tree/v0.2.2)

[passport-google-oauth2](https://github.com/jaredhanson/passport-google-oauth2)


## Jade

[pugjs/jade 0.34.1](https://github.com/pugjs/jade/tree/0.34.1)

Note: this is a very old version of Jade and will soon be updated to something more recent.


## React

[facebook/react v0.13.3](https://github.com/facebook/react/tree/v0.13.3)

[reactify v0.15.2](https://github.com/andreypopp/reactify/tree/v0.15.2)

[petehunt/node-jsx v0.13.3](https://github.com/petehunt/node-jsx/tree/169d038c398d70ac507aa63ba54a5dd00559f370)

Note: Pete Hunt has deprecated petehunt/node-jsx in favor of [Meettya/node-jsx-babel](https://github.com/Meettya/node-jsx-babel), a fork that targets React v0.14. This demo targets React v0.13, and therefore uses petehunt/node-jsx. A future version of this demo will use Meettya/node-jsx-babel.


## Bootstrap

[twbs/bootstrap](https://github.com/twbs/bootstrap)

[react-bootstrap v0.26.4](https://github.com/react-bootstrap/react-bootstrap/tree/v0.26.4)

# Credit

The "Isomorphic React" aspect of this demo is based on [davidwells/isomorphic-react-example](https://github.com/DavidWells/isomorphic-react-example). Special thanks to [David Wells](https://github.com/DavidWells/)!

# Contributors

Created and maintained by Jamie Pitts.


