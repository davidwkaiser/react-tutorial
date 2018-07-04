FROM node:8

#Set environment variables
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin

#Set working directory to app
WORKDIR /app

#Run necessary install steps
RUN npm install -g create-react-app
RUN create-react-app react-tutorial
RUN cd react-tutorial
RUN npm install

#Copy files into app
ADD file.txt /app

#Set port
EXPOSE 3000
