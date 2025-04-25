# requirements 
    node v20.18.3

# how to run 
    `npm install`
    `npm run dev`


# api documentation endpoints

`Products`

`POST | /api/products | Create a new product`

`PUT | /api/products/:id | Edit an existing product`

`DELETE | /api/products/:id | Delete a product`

`GET | /api/products | Get all products (public)`

`Users`

`POST | /api/users/signup | Register a new user`

`POST | /api/users/login | User login`

`GET | /api/users/me | Verify user session`

# any assumptions or decisions made
For dev assessment

`Zustand for global state in auth, added localstorage for token so when user refresh it will get the default token from the localstorage first if it exist`

`axios for http call, can make a separate utils to integrate the token for the http client in future`

`Tailwind CSS for faster prototyping a simple UI for the assessment`

`The search feature for product can be added later on as the backend is ready to receive search queries `


