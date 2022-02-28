# KetoKitchen #

## General Assembly SEI | Project Three | Exaclidraw / Mongoose / Mongo / Express.js / Node.js / React / Bootstrap / CSS | Four members | 1 Week ##

Link: https://ketokitchen-proj-three-sei.netlify.app/

### Overview ###

KetoKitchen is a full stack MERN webapp where users can find Keto based recipes. Users can create authenticated profiles, browse recipes from four different courses, filter, search and bookmark their favourites. 

All recipes include details of cooking time, instructions, macros and number of calories. 

This was a group project of four myself included, my fellow teammates are [Aromi Afolabi](https://github.com/aromiafolabi), [John Davies](https://github.com/tigeryant) and [Deniss Bulai](https://github.com/astounded2006).

## Project Brief & MVP ##

• Create a full-stack MERN webapp

• Hook up front & backend 

• Include a functional front-end  

• KISS and DRY Code

• Deploy for public access.

## Technologies Used ##

• Express.js
• Node.js
• React.js
• Mongo
• Mongoose
• JavaScript
• Sass
• Bootstrap


## Planning ##

In a group meeting, we collectively decided on the functionality of the app, what we wanted to achieve, the design/layout and lastly how we were to split tasks and coordinate the roles. I then created the main homepage wireframe on exaclidraw.

  <p align="center">
  <img src="https://i.imgur.com/dWyuxtP.png" width="700">
  </p>

  [John Davies](https://github.com/tigeryant) created the wireframe for the page that displays recipes. 
  
  <p align="center">
  <img src="https://i.imgur.com/nJSXgoR.png" width="700">
  </p>


## Back-end process ##

We decided we'd collectively work on the back-end. Given the timeframe we had, we knew it was best to have our server fully built and ready to be accepting requests from our frontend before we split tasks. This worked very well for us as we did not take a lot of time to build it as our skill sets were pooled together. This also helped us prevent running into a lot of issues and bugs when building our frontend.

We began by building our schemas and inputting all the data types we wanted available for requests on the frontend. 

We had three Schemas models in total. One for our recipes, one for recipes comments and one for the users. 

### Recipes Model: ###

```js
const recipeSchema = new mongoose.Schema({
  course: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  prepTime: { type: Number, required: true },
  calories: { type: Number, required: true },
  protein: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fats: { type: Number, required: true },
  ingredients: { type: Array, required: true },
  preparation: { type: Array, required: true },
  comments: [commentSchema],

  // we can remove these two fields and what it relates to in seeds.js
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  favouritedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User', required: true }], // important
})
```
### Recipe comments model: ###

```js
const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 200 },
  rating: { type: Number, required: false, min: 1, max: 5 },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})
```

### Users Model ###

```js
const userSchema = new mongoose.Schema({
  firstName: { type: String, unique: false, maxlength: 50, required: true },
  lastName: { type: String, unique: false, maxlength: 50, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, maxlength: 50, required: true },
  password: { type: String, required: true },
  profileImage: { type: String, required: false },
  isAdmin: { type: Boolean, default: false },
})
```
We then began to input our data in accordance with our schema, we split the courses between us (breakfast, lunch, dinner, snacks) for time efficiency. Each course has 10 recipes. Later, we seeded. 

 We then added routes, authentication and request functions. 

Lastly, we added error handling and secure routes for functions that were accessed by authorised users only. 

Secure Routes:
```js
export default async function secureRoute(req, _res, next) {
  try {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
      throw new Unauthorized()
    }
    const token = req.headers.authorization.replace('Bearer ', '')

    const payload = jwt.verify(token, secret)

    const user = await User.findById(payload.sub)

    if (!user) {
      throw new Unauthorized()
    }

    req.currentUser = user
    req.currentUserId = user._id

    next()
  } catch (err) {
    next(err)
  }
}
```

Authentication:
```js
async function registerUser(req, res, next) {
  try {
    const createdUser = await User.create(req.body)
    return res.status(201).json({
      message: `Welcome ${createdUser.username}`,
    })
  } catch (err) {
    next(err)
  }
}

async function loginUser(req, res, next) {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      throw new Unauthorized()
    }

    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })

    return res.status(202).json({
      message: `Welcome Back ${userToLogin.username}`,
      token,
      _id: userToLogin._id, // test, (actually this is necessary)
      userInfo: userToLogin, // test
    })
  } catch (err) {
    next(err)
  }
}

export default {
  register: registerUser,
  login: loginUser,
}
```

## Front-End process ##

For the front-end, we divided the pages between us. I worked on styling most of the pages in addition to working on the favourites feature, search and login/register pages. 


## Screenshots ##

**Home page:**

<p align="center">
  <img src="https://i.imgur.com/uAXHDqI.png" width="700">
  </p>

**Login page:**

<p align="center">
  <img src="https://i.imgur.com/CDAv135.png" width="700">
  </p>

**Recipes page:** 

<p align="center">
  <img src="https://i.imgur.com/M0s06Jz.jpg" width="700">
  </p>



## Challenges ##

Our main challenge on this project was working with version control. It was our first time working with it and we collectively ran into issues often but by the end of the week we all strongly understood how to work with it. 

## Wins ##

• Building a MERN app in a short period of time was a great win.
• Learning how to work with github version control.

## Key Learnings ##

• Team collaboration 

• Building Schemas, middleware, routing

• Git, Github and version control

• working with express.js 

## Known bugs ##

• Favourites feature, if a user favourites a recipe on the show page, then moves to another page, and then returns to the show page, the favourites button will still display its ‘unfavourited’ state. This is due to a problem with the default state of the ‘isFavourited’ variable.


## Future Features ## 
• Better responsiveness 

• Better UI

• Add custom ingredients to a shopping list 









