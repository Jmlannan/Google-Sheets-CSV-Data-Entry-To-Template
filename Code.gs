function onOpen(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var template = ss.getSheets()[0];
  
    //create a menu Item to add data
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Scripts')
      .addItem('Add Data', 'addData')
      .addToUi();

}


function addData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var template = ss.getSheets()[0];
  var fileParents = DriveApp.getFileById(ss.getId()).getParents();
    while ( fileParents.hasNext() ) {
      var parentfolder = fileParents.next();
    }
  //edit this variable if your files arent being found
  var searchTerm = "mimeType = 'text/csv'";
  //looking for files with .txt or .csv
  
  // read more about searching for files at 
  // https://developers.google.com/apps-script/reference/drive/drive-app#searchFiles(String)
   
  // search for our files
  var files = parentfolder.getFilesByType('text/plain'); 
  //stores the files in variable that match search

   
  // Loop through the results for each txt file
  while (files.hasNext()) {
      //copy template to new sheet
    template.copyTo(ss);
      //get the sheet we just copied
    var lastSheet = ss.getSheets()[ss.getNumSheets()-1];
      //iterate through files
    var file = files.next();
      //rename the sheet the file name
    lastSheet.setName(file.getName());
      // get file as a string
    csvFile = file.getBlob().getDataAsString();
      // parse data as csv w/ tab deliminators
      // parseCsv will return a [][] array we can write to a sheet
      // edit the \t if you do not want 
    var csvData = Utilities.parseCsv(csvFile);
      //use the folowing line for TSV data
      //var csvData = Utilities.parseCsv(csvFile, '\t');
    lastSheet.getRange(1, 1, csvData.length, csvData[0].length).setValues(csvData); 
  }
}
