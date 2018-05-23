var table;
var $table;
var $chkbox_checked;
var scoutingrowselected;
var $row;
var data;


$(document).ready(function(){
    table = $('#example').DataTable();
    $table             = table.table().node();
    $chkbox_checked    = $('tbody input[type="checkbox"]:checked', $table);
    $('#example tbody').on('click', 'input[type="checkbox"]:checked','tr', function(e){
        // $('#example tbody').on('click', 'input[type="checkbox"] tr', function(e){
        $row = $(this).closest('tr');
        //
        //     // Get row data

        // $('#example tbody').on( 'click', 'tr', function () {
        if(this.checked){
            $row.addClass('selected');
            console.log("You selected something.");
        } else {
            $row.removeClass('selected');
        }

        console.log (table.rows('.selected').data())
    });


    /*$('#submit').on('click', function () {

        scoutingrowselected= table.rows('.selected').data;
        console.log(scoutingrowselected);
    });*/
});

$(document).ready(function(){
    table = $('#example').DataTable();
    $table             = table.table().node();
    $chkbox_checked    = $('tbody input[type="checkbox"]:checked', $table);
    $('#example tbody').on('click', 'input[type="checkbox"]:checked','tr', function(e){
        $row = $(this).closest('tr');
        if (this.checked === true){
            document.getElementById( 'thetext' ).style.display = 'none';
        }
    });


    /*$('#submit').on('click', function () {

        scoutingrowselected= table.rows('.selected').data;
        console.log(scoutingrowselected);
    });*/
});