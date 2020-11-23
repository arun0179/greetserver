FROM node

RUN git clone \
    https://github.com/arun0179/greetserver.git
WORKDIR /greetserver

RUN npm install
EXPOSE 9000
CMD ["npm", "start"]
