
# Clarivate Test

REST API for user listing in node js



## Documentation

[](https://linktodocumentation)
prerequisite : Assuming Node js installed on system
https://nodejs.org/en/download/prebuilt-installer


## Deployment

If Module folder already created Clarivate 
then  run command 
```bash
  cd Clarivate
```
otherwise
```bash
  mkdir Clarivate
```
Go inside Clarivate dir
```bash
  Cd Clarivate
```
Clone backend Repository
```bash
  git clone https://github.com/saurabhseth394/backend.git
```
backend dir coming inside clarivate dir

Run Command

```bash
  cd backend
  npm i
```
Run Node server
```bash
nodemon server.js
```
The server will run separately.
Message will show 

database connected successfully!

server running on port 5000

## Test User Api after server run
Open thunder client tool or postman tool

select GET request

```bash
Hit url: http://localhost:5000/v1/api/user
```

It will response you all users stored in database My-account if exist

#Completed Node js backend server Setup