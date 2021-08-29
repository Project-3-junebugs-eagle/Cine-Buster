
# Cinebuster

Our idea behind Cinebuster was to recreate our own version of what Blockbuster could have become if they had adapted to E-commerce and didn't go out of business. Our application allows unregistered users to view our movie catalog, which includes a picture, title and description of the movie.

If the user decides they want to join our site, they can do so by signing up (returning users have the option of signing in, of course). Once signed in, users can change their password or sign out whenever they want.

Registered users can see see the price of each movie and add them to their cart. Users can also see the total amount of the movies and 'purchase' them from their cart. After purchasing, users can click on 'My purchases' to see the movies they have bought. 

After 'buying' a movie, users can get a refund for it. They can also write a review for each movie they've bought.

## Technologies used

 FRONT END:
 1. React
 2. JavaScript
 3. Bootstrap 
 4. HTML
 5. CSS


BACK END:
1. MongoDB
2. Mongoose
3. Express
4. Stripe


## Deployed sites

[Front end deployed](https://project-3-junebugs-eagle.github.io/project-3-client/)

[Back end - Heroku](https://git.heroku.com/secure-taiga-59525.git) 

## Back end repo link

[Back end repo](https://github.com/Project-3-junebugs-eagle/Cine-Buster)

[Front end repo](https://github.com/Project-3-junebugs-eagle/project-3-client)

## ENTITY RELATIONSHIP DIAGRAM

[Link to ERD](https://imgur.com/a/coNAFJ4)

## Routes the API expects

Our API expects the route for our cart to be /carts

Movies only has a get route which displays as /movies

Purchases has the full range of CRUD routes, the API expects get and post to display as /purchases, and update and delete to display as /purchases/:id

### Problems to be solved

1. Movie pictures are only being displayed in 'Home'. For future iterations, we want to display the pictures in the cart and 'My purchases' so users can see them there as well.
2. Fix the positioning of the buttons and price in the movie cards.
3. Center the 'Pay with card' button in 'My cart' and change the color/styling so it looks like the other ones.
4. Make color scheme more uniform.

### Planning, process, problem solving

[Suggested Schedule part 1](https://imgur.com/3B4anof)

[Suggested Schedule part 2](https://imgur.com/pPYFWCA)

[Daily Stand Up Plan](https://imgur.com/h1GQx9o)

As a team, we planned what our project would be by brainstorming our individual ideas until we made a decision. Once we had the general idea of what we wanted to do, we created our user stories, wireframe and ERD. 

The next step in our planning process was to create a suggested schedule that we could reference once we started. We also decided to have two daily stand ups where we talked about the things we had accomplished, the things we were planning to work on and any impediments we might be facing.

Since it was only three of us, we decided that it would be beneficial to do mob programming, so we took turns sharing our screens and talked through problems as a team to get our features done.
