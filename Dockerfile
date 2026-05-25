# Multi-stage Dockerfile for building and running the TypeScript Node app
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Install build dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source and generate prisma client if needed
COPY . .
RUN npx prisma generate --schema=prisma/schema.prisma || true
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy built artifacts and package files
COPY --from=builder /usr/src/app/dist ./dist
COPY package.json package-lock.json* ./

# Install only production dependencies (dotenv is in dependencies)
RUN npm i --omit=dev

# Ensure firebase service JSON is available at runtime
COPY --from=builder /usr/src/app/src/assets/firebase-service.json ./src/assets/firebase-service.json

# Non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000
CMD ["node", "dist/index.js"]
