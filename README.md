![](https://i.imgur.com/9hcTC79.jpg)

# Greatreads

## An opinionated, minimalist way to keep track of your reading! :books:

### [Live here!](https://tranquil-cove-15629.herokuapp.com/)\*

---

![](https://img.shields.io/badge/Backend_Environment-Node-green.svg?style=for-the-badge)
![](https://img.shields.io/badge/Server_Framework-Express-blue.svg?style=for-the-badge)
![](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg?style=for-the-badge)
![](https://img.shields.io/badge/API_Testing-Postman-orange.svg?style=for-the-badge)
![](https://img.shields.io/badge/Front_End-React-blue.svg?style=for-the-badge)
![](https://img.shields.io/badge/State_Management-Redux-blueviolet.svg?style=for-the-badge)
![](https://img.shields.io/badge/Package_Management-NPM-red.svg?style=for-the-badge)
![](https://img.shields.io/badge/Deployed_on-Heroku-blueviolet.svg?style=for-the-badge)
![](https://img.shields.io/badge/Motivated_by-Coffee-critical.svg?style=for-the-badge)

---

## Not everything needs to be a social network. :no_good: 

This was the unfortunate evolution that book-logging site Goodreads went through. In order to have a more unbloated way of keeping track of the books I've read, as well as checking in on what my friends might be reading, I created **Greatreads**. 

## Deployment status

### Two ways to play

:white_check_mark: \*As of 4/28/19 an early verion of Goodreads is **live**. I'm currently hosting it on Heroku, so you may need to give it a few seconds to "spin up" on the first visit. You can access it [here](https://tranquil-cove-15629.herokuapp.com/). 

:white_check_mark: You can clone this repo and run the backend server and front end (React) with `npm run dev` in the root directory of the repo. It will run on ports 5000 and 3000 respectively. Doing this won't let you create accounts though. I'm using a web-hosted MongoDB so you'll need to set your own up and configure it using the `keys.js` file in `/config/` (I'm using Heroku environment variables to hide my MongoDB login information from the code...)

## Next Steps

- Right now the books aren't showing when you look at a profile page. They're hitting the backend fine but I just need to fix up the React component responsible for showing them. At this point you can still see your own books though.
- I have a few bits of validation running to check email addresses, text, etc. but need to filter obscenities. I'll probably bring in the npm 'bad-words' library to do this 🤬🤬🤬.
- I need to use an external API to grab book cover photos. This will make the app look more bookshelf-y

---

---

---

# Captain's Logs :microphone:


## **4/29/2019**

Unfortunately I missed a file in my gitignore that resulted in showing some sensitive information :see_no_evil:. Because of this I had to copy everything to a dummy branch, delete the master branch and force push all of the files back to the master branch. I had about 55 commits before this point... bummer, but better than having sensitive info in my commit history.

---

## **4/15/19**

### This is a prototype social network I am working on.

I am working to create a very simple social network website using the MERN stack. I have a good deal of experience with React and Node, but haven't used Express or MongoDB much as of the beginning of this project.

Once I have the network up and running, I will fork this repository and begin to modify it into a social media network where users can log books they've read. The concept is kind of like Goodreads but without all of the bloat.

### Creating this project solves a massive pain-point for me:

I am a **voracious** reader, and like to keep track of what I've read. I average between 50-100 books per year depending on what I'm researching and working on. I used to keep track of these books on Goodreads, but the side is extremely slow, and I don't care to review my books, I just want to log them by date read and share the information with others. Maybe it will be helpful for more people than just me.

Eventually I plan to deploy it on its own domain using Heroku. Stay tuned.

\- Josh
