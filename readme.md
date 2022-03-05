**Dockerized email sending application, developed in nodeJS, using Redis with scalable workers.**

How to use:

Go to the backen folder and run:

    npm install

go to emailworker folder and run:

    npm install

configure your smtp server credentials in the emailworker environment in docker-compose.yml:

       - EMAIL_SENDER=emailsender@domain.com
       - EMAIL_SENDER_PASSWORD=password

replace **emailsender@domain.com** and **password** with your smtp email and password, which will send the emails

In the project root folder run:
        
        docker-compose up -d

make a post request to the url http://localhost:8080/email/sendList with the following body:

    {
    
        "emails":[
                    {"email":"email@email.com", "name":"name",  "message":"text", "subject":"subject"}
        ]

    }

Keep track of the emails being sent in the logs :

    docker logs -f backend          
    docker logs -f mail-sender_emailworker_1

To scale emailworkers to 3 containers, just run the command:

    docker-compose scale emailworker=3

To stop the application run the command:

    docker-compose down
