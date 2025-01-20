FROM node:22.13-alpine3.21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json if they exist
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the container
COPY src/express-server.js .

# Expose the port the Express server will run on
EXPOSE 3000

# Define the command to run the Node.js server
CMD ["node", "express-server.js"]