FROM node:15-alpine AS deps
WORKDIR /app
COPY .package.json yarn.lock ./
RUN yarn install --frozen-lockfile --prod

FROM node:15-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
