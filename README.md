# Project REST-Rant

REST-Rant is an app where users can review restaurants.

### Description

REST-Rant allows users to browse and review restaurants. Users can view a list of places, see details about each place including comments from other users, add new places, edit existing places, and leave comments about their dining experiences.

### Setup

- First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

- Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=rest_rant_user
DB_PASSWORD=password
DB_DATABASE=rest_rant
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### Technologies :

- Frontend: React
- Backend: Node.js, Express
- Database: PostgreSQL

### API Endpoints(http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /places                              | Places index page                         |
| POST   | /places                              | Create new place                          |
| GET    | /places/:placeId                     | Details about a particular place          |
| PUT    | /places/:placeId                     | Update a particular place                 |
| DELETE | /places/:placeId                     | Delete a particular place                 |
| POST   | /places/:placeId/comments            | Create a comment about a particular place |
| DELETE | /places/:placeId/comments/:commentId | Delete a comment about a particular place |


### App Routes(http://localhost:3000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /places               | `places/PlaceIndex.js`    | List of places                                                                  |
| /places/new           | `places/NewPlaceForm.js`  | Form for creating a new place                                                   |
| /places/:placeId      | `places/PlaceDetails.js`  | Details of a place, including it's comments, and a form to create a new comment |
| /places/:placeId/edit | `places/EditPlaceForm.js` | Form for editing a place                                                        |

### Coding Standards

- Follow consistent coding standards throughout the project.
- Ensure code readability and maintainability.
- Document code appropriately to facilitate understanding.

### Contributions

Contributions to REST-Rant are welcome! To contribute:

1.	Fork the repository.
2.	Create a new branch for your feature or bug fix.
3.	Commit your changes and push to your fork.
4.	Submit a pull request with a clear description of your changes.

### Issues

There are currently no persistent bugs in the application. However, here are some features that we plan to implement in the future:

- User authentication and authorization
- Sorting and filtering of places
- Improved user interface and design enhancements

Feel free to open new issues for any bugs or feature requests you encounter. We appreciate your feedback!