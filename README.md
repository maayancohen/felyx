# Felyx assessment - reservation data pipeline, storage and retrieval

The leading line behind the concept is to collect CSV data (assignment_reservations.csv) and to perform serveal tasks over it, using Google Cloud Platform and Colab, built on my personal GCP project (project_id: sodium-inverter) and using Python. A node.js script is used for uploading the data to Cloud Firestore from a local machine, using the firestore_admin SDK. 
As of the flexibility of the tooling available on Google, it was enough to use the following components:

Storage in a SQL database:
I have chosen Cloud SQL (PostregSQL) for a relational data store.

NoSQL database:
I have chosen Cloud Firestore (Firebase) as a NoSQL document store; MongoDB was a natural choice as well for accomplishing the same tasks, but since I had no previous experience with Firestore, I decided to check out its APIs and ease of use.


Google Cloud Functions :
were used as endpoints for the reservations data retrieval endpoint. 
A first function is usedin this specific implementation to show 10 random rows from the dataset.
A second cloud function is used to retrieve the data structure.

WIP: Expose the enpoints also on flask-ngrok instead of Cloud Functions.

Detailed steps can be found on felyx.ipynb notebook.

