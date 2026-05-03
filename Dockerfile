FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Final Stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./

# Tell Selise we are using port 80
EXPOSE 80

# Force Next.js to start on port 80 and accept external connections
CMD ["npm", "start", "--", "-p", "80", "-H", "0.0.0.0"]