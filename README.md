# WIN Backend Engineering Interview

### Models
- Order Model
```
{
    date: {
        type: Date,
        required: true
    },
    totalfee: {
        type: Number,
        required: true
    },
    services: {
        type: id,
        ref:'service',
        required: true
    }
}
```
- Service Model
```
{
    name: {
        type: String,
        required: true
    }
}
```

### Order APIs
- Create an order
- Create a order document from request body.
  `Endpoint: BASE_URL/order/`

### POST /order/create
- Create a Order document from request body. Get serviceId and totalfee in request body only.
- Make sure the serviceId is a valid serviceId by checking the service exist in the service collection.
- Return HTTP status 201 on a succesful Order Placed. Also return the Order document. The response should be a JSON object like [this](#successful-response-structure) 

- Return HTTP status 400 for an invalid request with a response body like [this](#error-response-structure)

### GET /order/get/all
- Returns all order in the collection
- Return the HTTP status 200 if any documents are found. The response structure should be like [this](#successful-response-structure) 
- If no documents are found then return an HTTP status 404 with a response like [this](#error-response-structure) 


### PUT /order/:orderId
- Updates a order by changing the its totalfee, service.
- Check if the order exists . If it doesn't, return an HTTP status 404 with a response body like [this](#error-response-structure)
- Return an HTTP status 200 if updated successfully with a body like [this](#successful-response-structure) 
- return the updated order document. 

### DELETE /order/:orderId
- Check if the order exists it delete and return an HTTP status 200 without any response body.
- If the order document doesn't exist then return an HTTP status of 404 with a body like [this](#error-response-structure) 

## Response

### Successful Response structure
```yaml
{
  status: true,
  data: {

  }
}
```
### Error Response structure
```yaml
{
  status: false,
  msg: ""
}
```


## Collections
### order
```yaml
{
  "_id": "6412bcf9783eff332d87e6b4",
  "date": "2023-03-16T06:53:45.262Z",
  "totalfee": 250,
  "services": {
      "_id": "6412ac545e378fa7c4556bc2",
      "name": "Analysis"
  }
}
```
## Approach
- Use MongoDB as a database and expressjs for the backend framework
- dependencies are express, mongoose, and dotenv
- express for backend framework, mongoose used for connection between MongoDB and nodejs, also defining schema and model, dotenv used for .env files where environment variables are stored.
- The main module is server.js. In this module, all dependencies are required. our connection between MongoDB and nodejs is established in this module.
- all the routes are defined in the routes.js module
- there are post, get, put, and delete APIs are defined
- controllers folders are used to control the functionalities of requested API
- Models folders are used to define the schema of orders

## production ready

- Authentication: Currently, anyone can place, update or delete orders. It is important to authenticate and authorize users before allowing them to perform these actions. This can be done using techniques like JSON Web Tokens (JWT) or OAuth.
- Input Validation: Input validation is important to prevent invalid or malicious data from being stored in the database. This can be done using libraries like Joi or Express-validator.
- Error Handling: Proper error handling can help in debugging and fixing issues faster. Custom error messages can be returned for different types of errors and logs can be maintained to track errors.
- Performance Optimization: The backend can be optimized for better performance by using techniques like caching, compression, and load balancing.
- Deployment: The backend can be deployed to a cloud provider like Vercel or Heroku for better scalability, reliability, and security.
- Code Quality: The code can be reviewed and improved for better maintainability, readability, and extensibility. Tools like ESLint can be used for code linting and formatting.

By implementing these changes, the backend can be made production-ready and can handle real-world scenarios.
