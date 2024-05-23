FROM node:18
WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
# when building, env file containing firebase config values must be passed with --secret
RUN --mount=type=secret,id=env_secret,target=.env.local \
    sh -c ". ./.env.local" && npm run build
EXPOSE 3000
CMD ["npm", "start"]