<h1>Simple example of GraphQL implementation with Ruby on Rails and ReactJS</h1>

![Technologies used](https://raw.githubusercontent.com/mdeket/rails-reactjs-graphql/master/client/movies_reactjs_apollo/public/stack.png)

This simple app represent an example of how GraphQL queries and mutations can be implemented. I used Movies as entity, and have only implemented Create and Read operations. Rest of operations (update, delete) can be done based on these two.

<h2> Installation and configuration </h2>
What will you need to get this thing running:

Ruby: 2.3.1

Rails: 5.0.2

NodeJS: 6.10.2

Tip: Use ruby version manager ([RVM](https://rvm.io/)) and node version manager ([NVM](https://github.com/creationix/nvm#installation)), they're easy to install and will make you life easier.

Data is stored in SQLite database, but if you want you can set it up to work with any other DB you want using Rails' [Active Record](http://guides.rubyonrails.org/active_record_basics.html). AR facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system...

After installations and configurations of ruby, rails and nodejs you can move on. 
First open up your console, position yourself in root of the project and type:
```
bundle install
```
to install the dependencies specified in Gemfile. Then do
```
rake db:migrate
```
so Rails could create your db and do migrations for Movies table.
Next thing is to put some initial data in your db. I've prepared top 5 rated movies from IMDB as seed data.
Run ```rake db:seed``` to populate Movies table, and then ```rails s``` to start server at http://localhost:3000

This project supports both, server-side and client-side rendering. If you want to continue with developemnt of this project I would recommend client-side rendering.
<h4>Option #1: Client-side rendering</h4>

Position yourself to root_folder/client/movie_reactjs_apollo/ and type
```
npm install
```
to install all packages needed to run the client app. When npm finishes, type
```
npm start
```
to start node server. 
If you've already started rails app, then node will ask you to change its default port (:3000) to some random port, just hit enter and node will do the magic. 
Client and server can talk even though they're at different domains(ports in this case). This is possible because of Rack CORS Middleware. Rack::Cors provides support for Cross-Origin Resource Sharing (CORS) for Rack compatible web applications. For this example I enabled requests from any domain, but it's definitely not recommended for production!

<h4>Option #2: Server-side rendering</h4>

Position yourself to root_folder/client/movie_reactjs_apollo/ and type
```
npm run build
``` 
and node will do optimization of the files and export reactjs application to public folder of Rails application. Then just start Rails app and you will have server and client running at the same address, http://localhost:3000 

<h4>Option #3: Not interested in client app? Not a problem, I've got you covered.</h4>
If you like using [Postman](https://www.getpostman.com/) I have just a thing for you.
In root folder of project there is a file named
```
RailsGraphQL.postman_collection.json
```
that you can import in [Postman](https://www.getpostman.com/) and send requests that I already created for you.

But if you prefer using something new, cool and writing queries on your own with help of autocomplete, then just start rails app, open your favorite browser and navigate to http://localhost:3000/graphiql
GraphiQL is an in-browser IDE for exploring GraphQL. You can read more about GraphiQL in this [post](https://medium.com/the-graphqlhub/graphiql-graphql-s-killer-app-9896242b2125) that Clay Allsopp wrote.
By the default for this project graphiql is set to do the quering only, but if you want do see how mutations work then open routes.rb file in root_foler/config and change line 9, graphql_path to '/graphql/mutations' and restart the app.


<h2> A bit more about the project... </h2>
For GraphQL I've used a standard [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) gem. All of GraphQL configuration files can be found in app/models/graph folder.
For communication between client and server this app uses [apollo-client](https://github.com/apollographql/apollo-client).
There is only two queries written for client app, one for quering movies by id and one for creating a new movie.
I've added optimistic response to mutation for creating a new movie. Because apollo caches request to make our apps faster and more fluid, we have to tell apollo that mutation happened and that something has changed. You can read more about this subject [here](http://dev.apollodata.com/react/optimistic-ui.html#optimistic-advanced) 
