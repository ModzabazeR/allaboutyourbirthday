FROM mongo:7.0.2-jammy

COPY init.json /init.json
CMD mongoimport --host mongodb --db allaboutyourbirthday --collection floridaman --username admin --password '1234' --authenticationDatabase admin --drop --type json --file /init.json --jsonArray