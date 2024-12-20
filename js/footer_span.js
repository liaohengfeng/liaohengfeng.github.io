if (window.matchMedia("only screen and (max-width: 760px)").matches)
{
	fetch('https://v1.jinrishici.com/all?.josn').then(function (res){return res.json();}).then(
		function (data) {
			var jinrishici_all = document.getElementById('jinrishici_all');
			jinrishici_all.innerText =  data.content;
		}
	).catch(function (err) {})
} else
{
	fetch('https://v1.jinrishici.com/all?.josn').then(function (res){return res.json();}).then(
		function (data) {
			var jinrishici_all = document.getElementById('jinrishici_all');
			jinrishici_all.innerText =  data.content + "  —— " + data.author +"《" + data.origin + "》";
		}
	).catch(function (err) {})
}

const urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('pwd'))
{

	document.write('<link rel="stylesheet" href="/js/pwd.css">');
	document.getElementById('hbePass').value = urlParams.get('pwd');
	// document.getElementById('pwd').innerHTML  = '　';
} else {

}
