This `Dockerfile` is located in the `docker/next/` directory and is used specifically for the Next.js application in the project. 

# **Overview**

This Dockerfile utilizes a multi-stage build process. In a multi-stage build, you use multiple `FROM` statements in your Dockerfile. Each `FROM` statement can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image.

Multi-stage builds are useful to anyone who has struggled to optimize Dockerfiles while keeping them easy to read and maintain.

# **Breakdown of the Dockerfile**

Below is a line-by-line explanation of each part of the `Dockerfile`.

```Dockerfile
# ---- Build Stage ----
FROM node:24-alpine AS builder
```

This is the first stage of the multi-stage build. It uses the `node:24-alpine` Docker image as the base image. This image includes Node.js based on version 24 and uses Alpine, a lightweight Docker image. The stage is named `builder`.

```Dockerfile
WORKDIR /app
```

Set the working directory to `/app`. All the instructions that follow in the `Dockerfile` will be run from this directory.

```Dockerfile
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
```

Enables Corepack to use the project's configured `pnpm` package manager, and copies `package.json` and `pnpm-lock.yaml` from your host to your image filesystem.

```Dockerfile
RUN pnpm install --frozen-lockfile
```

Run the `pnpm install --frozen-lockfile` command inside your image filesystem which deterministically installs dependencies from the lockfile.

```Dockerfile
COPY . .
```

Copy everything from the current directory in your host to the `WORKDIR` in your image filesystem.

```Dockerfile
RUN pnpm build
```

This step will create an optimized production build of your Next.js application.

```Dockerfile
# ---- Release Stage ----
FROM node:24-alpine AS release
```

This begins the second stage of the multi-stage build, also using `node:24-alpine` as the base image, named as `release`.

```Dockerfile
WORKDIR /app
```

Sets the working directory to `/app`.

```Dockerfile
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
```

Enables Corepack and copies `package.json` and `pnpm-lock.yaml` from the host.

```Dockerfile
RUN pnpm install --prod --frozen-lockfile
```

This will install only production dependencies needed for running the application, and not devDependencies, creating a leaner image.

```Dockerfile
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
```

These lines copy the built Next.js application and public assets from the `builder` stage into the `release` stage.

```Dockerfile
EXPOSE 3000
```

This informs Docker that the container listens on port 3000 at runtime.

```Dockerfile
CMD ["pnpm", "start"]
```

Provides the entrypoint command to run the production server.

In conclusion, this Dockerfile leverages the multi-stage build feature with `pnpm` to create a lean, production-ready Docker image of your Next.js application.
