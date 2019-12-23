# Video-Game-Database

Danh Nguyen, Meagan Olsen, Jonathan Rohr, Joshua Bell

Instructions to visit the live version at any time:
- Open your browser and use the web app at http://access.engr.oregonstate.edu:5955/

Instructions to run on OSU servers:
- Open a terminal that has an SSH connection to Flip or Flop and navigate to /vgdb_web_app
- In /vgdb_web_app run `npm install`
- Then run `node main.js [some random port number]`
- You can then use the web app at http://access.engr.oregonstate.edu:[same_random_port_number]/

Instructions to run on Local Server:
- Open a terminal and navigate to /vgdb_web_app
- In /vgdb_web_app run `npm install`
- Then run `node main.js [some random port number]`
- You can then use the web app at http://localhost:[same_random_port_number]/

Navigate to the individual pages using the navigation bar at the top of the screen.

Each page has a table that can be searched through via the search bar. Enter the desired search and select what columns you want to search through via the drop down menu. (Loading times may occur given the size of the database).

You can use the games.sql to view the database. (Can be imported into phpMyAdmin to view on there).

The database credientials can be changed in the dbcon.js file. This is so you can import the games.sql file to your personal phpMyAdmin account and change the credientials so that the site still functions once our accounts close at the end of the term.

The web app is currently connected to Jonathan's phpMyAdmin database.

