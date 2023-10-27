# Getting Started with the New York Times Top Stories App

Follow these steps to set up the New York Times Top Stories application:

1. Clone the Repository:

   ```bash
   git clone <repository_url>
   ```

2. Configure Environment Variables:

   - Clone the `.env_example` file located in the root directory.
   - Generate an API key from the New York Times API and replace the value of `NY_API_KEY` in the `.env` file with your API key.
   - Set the port for the backend to run on by modifying the `PORT` variable. For example, you can set it to 4000.
   - Set the current URL of the frontend application in the `FRONTEND_URL` variable.

3. Install Packages:

   Use npm to install the required packages:

   ```bash
   npm install
   ```

4. Start the Application:

   Start the application using the following command:

   ```bash
   npm run start
   ```

Now, you're all set to run the New York Times Top Stories app. Don't forget to replace `<repository_url>` with the actual URL of your repository.
```