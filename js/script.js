$(document).ready(function () {
  $('.mt-popover').popover();

  var startdate = moment().format('DD/MM/YYYY');
  var enddate = moment().add(1, 'day').format('DD/MM/YYYY');

  $('#booking-date-vn').dateRangePicker(
    {
      startDate: new Date(),
      selectForward: true,
      minDays: 2,
      language: "vi",
      container:'body',
      autoClose: true,
      startOfWeek: 'monday',
      format: 'DD/MM/YYYY'
    }
  );
  $('#booking-date-inter').dateRangePicker(
    {
      startDate: new Date(),
      selectForward: true,
      minDays: 2,
      language: "vi",
      container:'body',
      autoClose: true,
      startOfWeek: 'monday',
      format: 'DD/MM/YYYY'    
    }
  );
});

