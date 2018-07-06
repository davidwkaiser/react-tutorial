FROM node:8

#Set environment variables
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

#Set working directory to app
#WORKDIR /react-tutorial

#Run necessary install steps
RUN npm install -g create-react-app
RUN create-react-app react-tutorial

#Copy files into app
RUN mkdir react-tutorial/public
RUN mkdir react-tutorial/src
COPY public/* /react-tutorial/public
COPY src/* /react-tutorial/src
COPY *.json /react-tutorial

#Set port
EXPOSE 3000

#Prep launch
RUN cd react-tutorial
RUN npm start



