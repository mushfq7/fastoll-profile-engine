# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy the rest of your code and build the static 'out' folder
COPY . .
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine
# Copy the static files from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 for the Selise routing network
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]