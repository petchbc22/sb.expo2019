$.getJSON('data.json',function(data){
console.log(data);
var output = '<div class="row list pt-3">'; 

$.each(data, function(key,val){
  output += '<div class="item col-md-6 col-lg-3" data_local="'+ val.data_local + '">'; 
  output += '<div class="thumbnail card">';
  output += '<div class="img-event">';
  output += ' <img src="'+ val.imagespath+ '" class="image">';
  output += '</div>'; //img-event
  output += '<div class="caption mh-240 card-body pl-3 pr-3 pb-3">'
  output += '<h5 class="name">'+ val.namecompany + '</h1>';
  output += '<div class="d-flex pb-2 justify-content-center "><div class="p-2"><a href="#"><img src="../images/icon-world-color.svg" alt="" class="ico-social-hv" width="27"></a></div><div class="p-2"><a href="#"><img src="../images/facebook.svg" alt="" class="ico-social-hv" width="27"></a></div><div class="p-2"><a href="#"><img src="../images/icon-line-color.png" alt="" class="ico-social-hv" width="27"></a></div><div class="p-2"><a href="#"><img src="../images/ico-tel-color.svg" alt="" class="ico-social-hv" width="27"></a></div></div>';
  output += '<p class="address mb-0">'+ val.location+ '</p>';
  output += '</div>'; // caption mh-240 card-body pl-3 pr-3 pb-3
  output += '<div class="caption card-body custom-caption text-center">';
  output += '<a href="' + val.link + '">';
  output += '<button class="btn btn-primary">แสดงเพิ่มเติม</button>';
  output += '<a/>';
  output += '</div>'; // caption card-body custom-caption text-center
  output += '</div>'; // thumbnail card
  output += '</div>'; //item col-md-6 col-lg-3
});

output += '</div>'; //row
$('#update').html(output);
});