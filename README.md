# GoogleSheetsCSVDataEntryToTemplate
This code takes multiple CSV or TSV Data files and create new pages based on your first sheet as a template. Perfect for doing large amounts of data analysis in google drive.


To use:
  1. Create a new spreadsheet with a template on the first page. Your csv data will populate from the top left, deleting anything that would overlap so plan your template accordingly.
  2. Copy the contents of Code.gs into Tools>Script Editor of your template
    You may want to make a copy of your template w/ script if you plan to reuse it with other data.
  3. Place your CSV data into the folder with the spread sheet.
  4. On the top menu of the spread sheet go to Script>Add Data
   this may take a while depending on how large your files are, you should see your spread sheet update as it goes through each file.
