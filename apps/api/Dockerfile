# ============================================
# GoWizzYou API — Multi-stage Dockerfile
# Node 22 Alpine (LTS)
# ============================================

# --- Stage 1: Dependencies ---
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json ./
COPY tsconfig.json tsconfig.build.json nest-cli.json ./
COPY prisma ./prisma/
RUN npm install --frozen-lockfile 2>/dev/null || npm install
RUN npx prisma generate

# --- Stage 2: Build ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- Stage 3: Production ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Security: non-root user
RUN addgroup --system --gid 1001 nestjs && \
    adduser --system --uid 1001 nestjs

# Copy built app and dependencies
COPY --from=builder --chown=nestjs:nestjs /app/dist ./dist
COPY --from=deps --chown=nestjs:nestjs /app/node_modules ./node_modules
COPY --from=deps --chown=nestjs:nestjs /app/prisma ./prisma
COPY --chown=nestjs:nestjs package.json ./

USER nestjs

EXPOSE 3001
ENV API_PORT=3001

CMD ["node", "dist/main"]
