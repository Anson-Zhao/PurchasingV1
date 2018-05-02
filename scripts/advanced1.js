var table;
$(document).ready(function () {
    table = $('#example').DataTable();
    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputCss":'my-input-class',
        "columns": [0,1,2,3,4,5,6,7,8,9],
        "allowNulls": {
            "columns": [9],
            "errorClass": 'error'
        },
        "confirmationButton": { // could also be true
            "confirmCss": 'my-confirm-class',
            "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
            {
                "column": 0,
                "type": "checkbox",
                "options": null
            },
            {
                "column": 1,
                "type": "text",
                "options": null
            },
            {
                "column": 2,
                "type": "text",
                "options": null
            },
            {
                "column": 3,
                "type": "text",
                "options": null
            },
            {
                "column": 4,
                "type": "text",
                "options": null
            },
            {
                "column": 5,
                "type": "text",
                "options": null
            },
            {
                "column":6,
                "type": "list",
                "options":[
                    { "value": "----Optional----", "display": "----Optional----" },
                    { "value": "Credit", "display": "Credit" },
                    { "value": "Debit", "display": "Debit" },
                    { "value": "Bitcoin", "display": "Bitcoin" },
                    { "value": "Check", "display": "Check" },
                    { "value": "PayPal", "display": "PayPal" }
                ]
            },
            {
                "column": 9,
                "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
                "options": {
                    "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
                }
            }
            // Nothing specified for column 9 so it will default to text

        ]
    });

});

function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " + updatedRow.data());
}
