function openSearch() {
	document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
	document.getElementById("myOverlay").style.display = "none";
}
$(function(){
    var data = [
			{  
				"id":"1",
				"name":"ด้านบริการพิมพ์แบบออฟเซ็ท",
				"url_name":"print-services-offset.html",
			},
			{  
				"id":"2",
				"name":"ด้านบริการพิมพ์แบบดิจิตอล",
				"url_name":"print-services-digital.html",
			},
			{  
				"id":"3",
				"name":"บริการออกแบบกราฟฟิก",
				"url_name":"print-services-graphic.html",
			},
			{  
				"id":"4",
				"name":"ด้านบริการพิมพ์เปลี่ยนข้อมูลทุกแผ่น",
				"url_name":"print-services-personalization.html",
			},
			{  
				"id":"5",
				"name":"การจัดส่งสินค้า",
				"url_name":"print-services-logistic.html",
			},
			{  
				"id":"6",
				"name":"บริการการพิมพ์",
				"url_name":"print-services.html",
			},
			{  
				"id":"7",
				"name":"ผลงานสิ่งพิมพ์",
				"url_name":"workshop.html",
			},
			{  
				"id":"8",
				"name":"ด้านการพิมพ์นามบัตร",
				"url_name":"workshop-cardname.html",
			},
			{  
				"id":"9",
				"name":"ด้านการพิมพ์แคตตาล็อก",
				"url_name":"workshop-catalog.html",
			},
			{  
				"id":"10",
				"name":"ด้านการพิมพ์โปสเตอร์",
				"url_name":"workshop-poster.html",
			},
			{  
				"id":"11",
				"name":"ด้านการพิมพ์โบว์ชัวร์",
				"url_name":"workshop-brochure.html",
			},
			{  
				"id":"12",
				"name":"ด้านการพิมพ์โปสการ์ด และ การ์ดเชิญ",
				"url_name":"workshop-postcard.html",
			},
			{  
				"id":"13",
				"name":"ด้านการพิมพ์แผ่นพับใบปลิว",
				"url_name":"workshop-leaflet.html",
			},
			{  
				"id":"14",
				"name":"ด้านการพิมพ์ปฎิทิน",
				"url_name":"workshop-calendar.html",
			},
			{  
				"id":"15",
				"name":"ด้านการพิมพ์ที่คั่นหนังสือ",
				"url_name":"workshop-bookmark.html",
			},
			{  
				"id":"16",
				"name":"ด้านการพิมพ์หนังสือ",
				"url_name":"workshop-book.html",
			},
			{  
				"id":"17",
				"name":"ด้านการพิมพ์เอกสาร",
				"url_name":"workshop-document.html",
			},
			{  
				"id":"18",
				"name":"ด้านงานพิมพ์ฉลาก สติ๊กเกอร์",
				"url_name":"workshop-sticker.html",
			},
			{  
				"id":"19",
				"name":"ด้านการพิมพ์นิตยสาร",
				"url_name":"workshop-magazine.html",
			},
			{  
				"id":"20",
				"name":"ด้านการพิมพ์เมนู",
				"url_name":"workshop-menu.html",
			},
			{  
				"id":"21",
				"name":"ด้านการพิมพ์แฟ้มกระดาษ",
				"url_name":"workshop-file.html",
			},
			{  
				"id":"22",
				"name":"เกี่ยวกับเรา",
				"url_name":"about.html",
			},
			{  
				"id":"23",
				"name":"ติดต่อเรา",
				"url_name":"contact.html",
			}
		];
$('#txt-search').keyup(function(){
			var searchField = $(this).val();
				if(searchField === '')  {
					$('#filter-records').html('');
					return;
				}
            var regex = new RegExp(searchField, "i");
            var output = '<div class="row maxh-search">';
            var count = 1;
			  $.each(data, function(key, val){
				if ( (val.name.search(regex) != -1)) {

				  output += '<div class="col-md-12 text-left p-3 bd-bt-list-search " >';
				  output += '<a href="../'+ val.url_name + '" class="custom-link">' + val.name + '</a>';
				  // output += '<a href="../a.html">' + val.url_name + '</a>'
				  output += '</div>';

				  // if(count%2 == 0){
					// output += '<div class="row">'
				  // }
				  count++;
				}
			  });
			  // output += '</div>';
			  $('#filter-records').html(output);
        });
  });