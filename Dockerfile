FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Prepare the prisma client and its schemas
RUN npx prisma generate

# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]