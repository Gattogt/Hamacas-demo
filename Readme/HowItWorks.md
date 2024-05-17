# This is the process

### `Mongoose`

First we make use of mongoose to connect to our data base through our app so that we start to create querys and so on. `await mongoose.connect(process.env.MONGO_URI)`

We will continued using mongoose `const exampleSchema = new mongoose.Schema({})` to create the skeleton and fields that our data will have
`const Example = new mongoose.model('Example', exampleSchema)`

### `Middleware`

Then we will create middlewares for:
[Auth]:
[AsyncHandler]:
[Error]:

### `Server`;

The server

### `Pagination`

[.skip(pageSize*(page-1))] the value calculated is the value of the pages that it needs to skip to get to the next one.

### `Rotuing Pagination`

First we have to go to productsApiSlice in the frontend where ge get all the products en el reducer getProducts.

Una ves estando alli bamos a desestructurar pageNumber de el constructor = query({pageNumber})=> ... tambien bamos a agregar otro objeto con su respectivo campo [params:{pageNumber}].
The query to our backend is constructed for us by using RTK Query.
So while we never actually write a request to /api/products?pageNumber=2
RTK Query constructs that url for us when we pass a params object to the Query.

este pageNumber lo obtendremos de la ruta que creamos en index.js <Route path='/page/:pageNumber' element={<HomeScreen />} /> `:pageNumber` es una parte dinamica en la ruta lod que es necesario por que en el siguiente paso debemos de ir HomeScreen.jsx y obtener este `:pageNumber` atraves de el useParams hook.
