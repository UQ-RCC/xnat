## 1. Once logged in, the "Start new experiment" is greyed out. Is it normal ?

It means there is a mitmatch between your email address in RIMS and AAF (many IMB users face this problem).
View your [RIMS profile](https://rims.uq.edu.au/userprofile/)
to check your **Email** in RIMS. Use the [AAF Validator](https://validator.aaf.edu.au/)
to check your **mail** attribute in AAF. Contact Pitschi support (pitschi at
uq.edu.au) for advice on fixing different emails, or to check your email
setting in Pitschi datamover.

## 2. I have dropped few folders inside X:\pitschi\\_my_username_, but they are not all synced. 

Assuming you have created an experiment called "firstexperiment", Pitschi only syncs the data inside X:\pitschi\\_my_username_\firstexperiment. 

## 3. My experiment is paused, what do I do ?

The experiment is paused most likely due to the fact that the X drive is full. Before pausing the experiment, Pitschi has notified admin. If you still worry, please contact Lou.


## 4. When should I start the experiment ?

You should start the experiment right before you start collecting data.

## 5. Do I have to stop my experiment ? 

Yes

## 6. What if I forgot to stop my experiment ? 

The next user cannot start another experiment if the previous one forgot to stop it. Only admins (Lou, Matthias and myself) could stop other people's experiments.

## 7. Why doesn't my project appear in the selection list when I try to start a new experiment ?

Ask the Pitschi support team to check that your project collection is mounted
in the required institute access cache, and that the required cache is
configured in the Pitschi datamover and the Pitschi XAPI server.
Action required by Admin: 
- Access the Pitschi dashboard by logging in.
- Employ the 'search by Title' field to locate the desired project. Upon locating the project, its title and associated RDM collection will be displayed.
- Proceed to select the 'collection ID' to view caches linked to it, which are useful for utilizing datamover.
- If the imb cache is not visible, include it by clicking the 'add/edit cache' button. Opt for the imb cache from the provided dropdown menu.
- Assign it a priority of '1' and confirm by clicking the 'submit' button.

## 8. What are the filter criteria for the project selection list when I start a new experiment ?

The datamover has a configuration setting for the RDM cache to use to sync
data. The Pitschi server has an assigned collection and a list of RDM caches
for each project. When you start an experiment you get a list of the projects
that include you as a participant, and have the datamover RDM cache in the
project's list of caches.
