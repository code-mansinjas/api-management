# Stage 1: Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY tsconfig.json ./
COPY src ./src

# Build the application
RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary files from the build stage
COPY package.json package-lock.json ./
COPY --from=builder /app/dist ./dist

# Install only production dependencies
RUN npm install --production

# Expose the port using the environment variable from .env
EXPOSE ${MAIN_PORT}

# Start the application using the environment variable for entry
CMD ["node", "dist/index.js"]
