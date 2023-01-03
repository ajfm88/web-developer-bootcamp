<div align="center">
  <img width="200" src="public/favicon/android-chrome-512x512.png" alt="YelpCamp logo">

# [YelpCamp]()

</div>

## 💡Lessons Learned

- First full-stack web application
- Introduction to [Express.js](https://expressjs.com)
- Introduction to [MongoDB](https://www.mongodb.com) database design
- Introduction to [Bootstrap 5](https://getbootstrap.com)
- Optimizing performance, security, and accessibility using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- Integration testing with [Jest](https://jestjs.io)
- Automated code review with [Codacy](https://app.codacy.com/project/badge/Coverage/6272d48144774479b06e9b4b2caea0d6) and [CodeClimate](https://codeclimate.com/github/JacobGrisham/YelpCamp/maintainability)
- Continuous Integration and Continuous Deployment with [CircleCI](https://app.circleci.com/pipelines/github/JacobGrisham/YelpCamp)
- Deploying app to [Heroku](https://www.heroku.com/) and Database to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudflare](https://www.cloudflare.com/) as a Content Delivery Network in conjunction with custom [Google Domain](https://domains.google/) and Heroku
- Creating the background SVG illustration with [Inkscape](https://inkscape.org/)

## 🛠 Technologies

| Front-End   | Back-End  | Database | Deployment    | Testing    |
| ----------- | --------- | -------- | ------------- | ---------- |
| HTML5       | Node.js   | Mongoose | Render        | Jest       |
| CSS3        | ExpressJS | MongoDB  | MongoDB Atlas | Lighthouse |
| Bootstrap 5 | EJS       | .        |               | .          |
| Javascript  | .         | .        | Git           | .          |

## ⚖️ Methodology

- Used a [Model-View-Controller (MVC)](https://martinfowler.com/eaaDev/uiArchs.html#ModelViewController) [Monolithic Architecture](https://www.youtube.com/watch?v=qYhRvH9tJKw) since it's the most simple architecture to gain an introduction to full-stack web development. Building a MVC Monolith allows one to gain a perspective on the range of achitectures, particularly the lower-end of the range. The Monolith Architecture falls short in scalability and separation of front-end and back-end. The MVC Architecture falls short when the application begins to grow in complexity with the addition of services that could stand on thier own. The MVC Architecture is [perhaps best used for simple proof-of-concept projects](https://www.youtube.com/watch?v=rckfN7xFig0), like this one.
- [Bootstrap 5](https://getbootstrap.com) as the CSS framework to keep the UI simple and quick to build. Since the website takes a performance hit for loading Bootstrap, took full advantage of advanced Bootstrap features such as [custom validation](https://getbootstrap.com/docs/5.0/forms/validation) for all forms and [animated form input](https://getbootstrap.com/docs/4.0/examples/floating-labels) for the login and register pages.
- [Express.js](https://expressjs.com) as the Node.js application framework since it's a lightweight framework, which is ideal for gaining an understanding of how to build the backend from scratch. Compared to a framework like [Nest.js](https://nestjs.com) or even [Django](https://www.djangoproject.com), Express.js doesn't have many features out of the box.
- [PassportJs](https://github.com/jaredhanson/passport) for the authentication and authorization.
- NoSQL database for the flexibility compared to a SQL database, [MongoDB](https://www.mongodb.com) in particular because of its prevalence in the industry.
- [Embedded Javascript Templates (EJS)](https://ejs.co) as the front-end templating language for more DRY code compared to plain HTML and for dynamic user-experiences. This is a simple templating language, similar to [Jinja](https://jinja.palletsprojects.com/en/3.0.x) for Python. Both however fall short on front-end scalability, modularity, and performance compared to a framework like [React](https://reactjs.org). Working with simple templating languges helps to remind me the benefits of working with a framework like React.
- [Render](https://render.com) as the cloud hosting provider.
- [Inkscape](https://inkscape.org) to create SVG illustrations from scratch to gain a deeper understanding of SVG. I don't plan on creating SVG graphics from scratch often, but now that I know how to do it, I can easily edit existing SVGs. If I'm unable to find an open-source SVG, now I can always create one exactly as needed.

## ⚙️ Features

- Login, sign-up, Admin role
- RESTful routes (Create, Read, Update, Delete) for campgrounds, comments, and reviews
- Create and Update forms have both client-side and server-side validation
- Create routes have authentication
- Update, and Delete routes have authentication and authorization
- [Google Maps API](https://developers.google.com/maps/documentation)

## 🧭 Folder/File Structure

(ignoring image and SEO files)

```
|-- README.md
|-- app.js
|-- globalConfig.json
|-- index.test.js
|-- jest-mongodb-config.js
|-- jest.config.js
|-- middleware
|   `-- index.js
|-- models
|   |-- campground.js
|   |-- comment.js
|   |-- review.js
|   `-- user.js
|-- package-lock.json
|-- package.json
|-- public
|   `-- stylesheets
|       |-- analytics.js
|       |-- main.css
|-- routes
|   |-- campgrounds.js
|   |-- comments.js
|   |-- index.js
|   `-- reviews.js
`-- views
    |-- campgrounds
    |   |-- edit.ejs
    |   |-- index.ejs
    |   |-- new.ejs
    |   `-- show.ejs
    |-- comments
    |   |-- edit.ejs
    |   `-- new.ejs
    |-- landing.ejs
    |-- login.ejs
    |-- partials
    |   |-- footer.ejs
    |   `-- header.ejs
    |-- register.ejs
    |-- reviews
    |   |-- edit.ejs
    |   |-- index.ejs
    |   `-- new.ejs
    `-- users
        `-- show.ejs
```

## 🚀 Getting Started

### To run this project on your system:

Create an .env file and add values to the following variables:

```
GEOCODER_API_KEY=
API_KEY=
DATABASEURL=
PASSPORT_SECRET=
ADMIN_CODE=
```

Make sure you have [MongoDB](https://docs.mongodb.com/manual/installation) installed on your system
In a terminal window, initialize a MongoDB Database

```
$ ./mongod
```

In a second terminal window, access the MongoDB Database with Mongoose

```
$ mongoose
```

In a third terminal window, install dependencies using npm:

```
$ npm install
```

And then run the application with

```
$ npm start
```

or for hot reloading (recommended)

```
$ nodemon app.js
```

## 👨‍💻 YelpCamp Development Process

## Initial Setup

- Add Landing Page
- Add Campgrounds Page that lists all campgrounds

Each Campground has:

- Name
- Image

## Layout and Basic Styling

- Create header and footer partials
- Add in Bootstrap

## Creating New Campgrounds

- Setup new campground POST route
- Add in body-parser
- Setup route to show form
- Add basic unstyled form

## Style the campgrounds page

- Add a better header/title
- Make campgrounds display in a grid

## Style the Navbar and Form

- Add a navbar to all templates
- Style the new campground form

## Add Mongoose

- Install and configure Mongoose
- Setup campground model
- Use campground model inside of routes

## Show Page

- Review the RESTful routes we've seen so far
- Add description to the campground model
- Show db.collection.drop()
- Add a show route/template

## Refactor Mongoose Code

- Create a models directory
- Use module.exports
- Require everything correctly!

## Add Seeds File

- Add a seeds.js file
- Run the seeds file every time the server starts

## Add the Comment model!

- Make comment errors go away!
- Display comments on campground show page

## Comment New/Create

- Discuss nested routes
- Add the comment new and create routes
- Add the new comment form

## Style Show Page

- Add sidebar to show page
- Display comments nicely

## Finish Styling Show Page

- Add public directory
- Add custom stylesheet

## Authentication Pt. 1 - Add User Model

- Install all packages needed for auth
- Define User model

## Authentication Pt. 2 - Register

- Configure Passport
- Add register routes
- Add register template

## Authentication Pt. 3 - Login

- Add login routes
- Add login template

## Authentication Pt. 4 - Logout/Navbar

- Add logout route
- Prevent user from adding a comment if not signed in
- Add links to navbar

## Authentication Pt. 5 - Show/Hide Links

- Show/hide auth links in navbar

## Refactor The Routes

- Use Express router to reoragnize all routes

## Users + Comments

- Associate users and comments
- Save author's name to a comment automatically

## Users + Campgrounds

- Prevent an unauthenticated user from creating a campground
- Save username+id to newly created campground

## Editing Campgrounds

- Add Method-Override
- Add Edit Route for Campgrounds
- Add Link to Edit Page
- Add Update Route

## Deleting Campgrounds

- Add Destroy Route
- Add Delete button

## Authorization Part 1: Campgrounds

- User can only edit his/her campgrounds
- User can only delete his/her campgrounds
- Hide/Show edit and delete buttons

## Editing Comments

- Add Edit route for comments
- Add Edit button
- Add Update route

Campground Edit Route: /campgrounds/:id/edit
Comment Edit Route: /campgrounds/:id/comments/:comment_id/edit

## Deleting Comments

- Add Destroy route
- Add Delete button

Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

## Authorization Part 2: Comments

- User can only edit his/her comments
- User can only delete his/her comments
- Hide/Show edit and delete buttons
- Refactor Middleware to a single file

## Adding in Flash!

- Demo working version
- Install and configure connect-flash
- Add bootstrap alerts to header

## Adding dynamic price tag

- Show user-defined price
- Edit new or old price
- Change model for campground
