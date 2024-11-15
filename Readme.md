# HealthCheckPro Admin

## Project Setup

### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- `MONGO_URI`: The URI for connecting to your MongoDB database.
- `PORT`: The port number on which the server will run. Default is `5000`.
- `JWT_SECRET_KEY`: The secret key used for signing JSON Web Tokens.
- `JWT_EXPIRES_IN`: The expiration time for JSON Web Tokens. Default is `30d`.
- `NODE_ENV`: The environment in which the application is running. Default is `development`.

### Example `.env` file

```dotenv
MONGO_URI = your-mongo-uri
PORT = 5000
JWT_SECRET_KEY = secret
JWT_EXPIRES_IN = 30d
NODE_ENV = development
```

### Running the Project

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Create a `.env` file in the root directory and add the environment variables as shown above.
4. Start the server using `npm start`.

### License

This project is licensed under the MIT License.