# HH.KZ Rest API with NodeJS + PostgreSQL

## About hh.kz
This project is a prominent online job search and recruitment platform dedicated to connecting job seekers and employers. 
hh.kz serves as the go-to destination for individuals seeking new career opportunities and organizations looking to hire top talent in the job market.

## Key Features
- **Comprehensive Job Search:** Job seekers can explore a diverse range of job listings spanning various industries and locations across Kazakhstan. Advanced search filters help users find job openings that match their skills, qualifications, and preferences.

- **Professional Resume Builder:** hh.kz offers an integrated resume builder tool, allowing users to create and maintain polished resumes that can be easily shared with potential employers.

- **Company Insights:** Users can delve into detailed company profiles to gain insights into a company's culture, values, and available job positions. This feature empowers job seekers to make informed decisions about potential employers.

- **Application Tracking:** Job applicants can effortlessly monitor the status of their job applications and engage in direct communication with employers through the platform.

- **Employer Services:** For employers, hh.kz offers a robust suite of tools for posting job openings, managing applicant submissions, and accessing a pool of qualified candidates. These tools facilitate efficient recruitment and candidate management.


---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

Install sequelize globally:

    $ npm install -g sequelize-cli

Run migration files: 

    $ sequelize db:migrate

Run all seeders:

    $ sequelize db:seed:all

To launch the server on development environment, run following command: 

    $ NODE_ENV=development node server.js

To launch the server on development environment, run following command: 

    $ NODE_ENV=production node server.js