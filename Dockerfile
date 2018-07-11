FROM node:8

#Set environment variables
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

#Set working directory to app
#WORKDIR /react-tutorial

#Run necessary install steps
RUN npm install --save create-react-app
RUN npm install --save create-react-class
RUN create-react-app react-tutorial

#Copy files into app
COPY public/* /react-tutorial/public/
COPY src/* /react-tutorial/src/
COPY *.json /react-tutorial/

#Update everything
RUN cd /react-tutorial/
RUN npm install

#Set port
EXPOSE 3000

#Launch
CMD cd react-tutorial && npm start



