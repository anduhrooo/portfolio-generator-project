const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs')

inquirer
    .prompt([
        {
            type: "input",
            message: colors.magenta("What is your name?"),
            name: "userName",
        },
        {
            type: "input",
            message: colors.magenta("what is your location?"),
            name: "location",
        },
        {
            type: "input",
            message: colors.magenta("please input a bio"),
            name: "bio",  
        },
        {
            type: "input",
            message: colors.magenta("What is your github username?"),
            name: "github",  
        },
        {
            type: "input",
            message: colors.magenta("What is your email address?"),
            name: "email",  
        }
    ])
    .then((response) => {
        fs.writeFile(`${response.userName}.html`,`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
        *{
            padding: 0px;
            margin: 0px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }

        body {
            background-color: antiquewhite;
        }

        header {
            background-color: pink;
        }
        
    </style>
            <title id="title">${response.userName}</title>
        </head>
        <body>
            <header>
                <h1 id="name">${response.userName}</h1>
                <h2 id="location">${response.location}</h2>
            </header>
            <main>
                <section>
                    <p id="bio">${response.bio}</p>
                </section>
                <section>
                <a href="http://github.com/${response.github}">${response.github}</a>
                    <p id="email">${response.email}</p>
                </section>
            </main>
        </body>
        </html>`,
        (err) => {
            err ? console.error(err) : console.log('HTML created!');
        })

    })