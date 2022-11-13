function isNumericKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 64 && charCode > 32 && (charCode < 91 || charCode > 96))
    return true;
  return false;
}
