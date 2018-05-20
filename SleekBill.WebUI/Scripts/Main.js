/*
 * 
 */
$(document).ready(function () {
    $('#divnewclient').hide();
    $('#divalternateshippingaddress').hide();

    $('#selectclient').change(function () {
        var selectedOption = $('#selectclient option:selected');
        
        if (selectedOption.val() == 'addnewclient') {
            $('#selectclient').val([]);
            
            $('#divnewclient').dialog({
                modal: true,
                width:600
            });
        } else {
            return false;
        }       
    });

    
});