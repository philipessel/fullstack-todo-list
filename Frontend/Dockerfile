# Use Node.js as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the application
RUN npm run build

# Use a lightweight server for serving static files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default web server port
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
