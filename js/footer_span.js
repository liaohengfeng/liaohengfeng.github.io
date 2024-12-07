if (window.matchMedia("only screen and (max-width: 760px)").matches)
{	
	fetch('https://v1.jinrishici.com/all?.josn').then(function (res){return res.json();}).then(
		function (data) {
			var jinrishici_all = document.getElementById('jinrishici_all');
			jinrishici_all.innerText =  data.content;
		}
	).catch(function (err) {console.error(err);})
} else 
{	
	fetch('https://v1.jinrishici.com/all?.josn').then(function (res){return res.json();}).then(
		function (data) {
			var jinrishici_all = document.getElementById('jinrishici_all');
			jinrishici_all.innerText =  data.content + "  —— " + data.author +"《" + data.origin + "》";
		}
	).catch(function (err) {console.error(err);})
}
