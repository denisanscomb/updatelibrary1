function myUpdates() {
  
 var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('AI:AI').activate();
  spreadsheet.getActiveSheet().insertColumnsBefore(spreadsheet.getActiveRange().getColumn(), 10);
  
  spreadsheet.getRange('AI2').setValue("Last bMail");
  spreadsheet.getRange('Aj2').setValue("Label");
  spreadsheet.getRange('Ak2').setValue("Note");
  spreadsheet.getRange('Al2').setValue("URL");
  spreadsheet.getRange('Am2').setValue("Last Event");
  spreadsheet.getRange('An2').setValue("Label");
  spreadsheet.getRange('Ao2').setValue("Note");
  spreadsheet.getRange('Ap2').setValue("URL");
  
  
}
