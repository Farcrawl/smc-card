// html2canvas <- https://html2canvas.hertzen.com/dist/html2canvas.min.js

// code reference: https://stackoverflow.com/questions/31656689/how-to-save-img-to-users-local-computer-using-html2canvas

setUpDownloadPageAsImage();

function setUpDownloadPageAsImage() {
	document.getElementById("printCard").addEventListener("click", function() {
    html2canvas(document.getElementById('StaffCard'),{
		width: 1075   ,
		height: 1521  
	}).then(function(canvas) {
		const dataURL = canvas.toDataURL();
		var nWindow = window.open('');
        nWindow.document.body.appendChild(canvas);
		nWindow.focus();
		nWindow.print();
		nWindow.close();
		console.log(canvas);		
    });
		
  });
}

function simulateDownloadImageClick(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download !== 'string') {
    window.open(uri);
  } else {
    link.href = uri;
    link.download = filename;
    accountForFirefox(clickLink, link);
  }
}

function clickLink(link) {
  link.click();
}

function accountForFirefox(click) { // wrapper function
  let link = arguments[1];
  document.body.appendChild(link);
  click(link);
  document.body.removeChild(link);
}


