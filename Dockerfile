# FROM node:14-alpine as build

# WORKDIR /app

# COPY package*.json ./

# # RUN npm install --force
# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:alpine

# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app for production
RUN npm run build

# Expose the port that the app will run on (typically 80 for HTTP)
EXPOSE 80

# Start the React app
CMD ["npm", "start"]
