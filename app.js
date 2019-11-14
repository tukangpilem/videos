var confurl = ['appjs'];
var currentHostname = 'https://tukangpilem.github.io/videos/';
document['addEventListener']('deviceready', function ()
{
	GetJS();
}, ![]);

function GetJS()
{
	var _0x3a35e3 = confurl['length'] == 0x1 ? 0x0 : Math['floor'](Math['random']() * (confurl['length'] - 0x1));
	var _0x1ac514 = currentHostname + confurl[_0x3a35e3];
	var _0x1eeab7 = {
		'Origin': 'mob.akubebas.com',
		'Referer': 'https://mob.akubebas.com',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36'
	};
	cordovaHTTP['acceptAllCerts'](!![], function ()
	{
		cordovaHTTP['get'](_0x1ac514,
		{}, _0x1eeab7, function (_0x40568f)
		{
			var _0x1d86b4 = _0x40568f['data'];
			if (_0x1d86b4['toLowerCase']()['indexOf']('xx1lite') > -0x1)
			{
				if (_0x1d86b4['indexOf']('og:description\" content=\"') > -0x1) _0x1d86b4 = _0x1d86b4['split']('og:description\" content=\"')[0x1]['split']('\"')[0x0];
				_0x1d86b4 = _0x1d86b4['split']('|');
				var _0x3de6e7 = parseInt(_0x1d86b4[0x1]);
				_0x1d86b4 = currentHostname + _0x1d86b4[0x0];
				var _0x54028c = new Date();
				var _0x4d682e = _0x54028c['getMinutes']();
				_0x4d682e = _0x4d682e % _0x3de6e7;
				var _0x11e6f1 = _0x54028c['getSeconds']() * 0x3e8;
				var _0x362bf9 = new Date(_0x54028c - 0xea60 * _0x4d682e - _0x11e6f1);
				_0x54028c = Math['floor'](_0x54028c['getTime']() / 0x3e8);
				_0x362bf9 = Math['floor'](_0x362bf9['getTime']() / 0x3e8);
				$('head')['append']('<script type=\"text/javascript\" src=\"' + _0x1d86b4 + '?_=' + _0x362bf9 + '\"></script>');
				/* $('head')['append']('<script type=\"text/javascript\" src=\"https://cdn2.akubebas.com/js/jw/7.12.6/j-w.js\"></script>');
				$('head')['append']('<script>jwplayer.key=\"zGhSOpbt7hbdG53nW3nDZE0vdyyjy0cNdaQNfA==\";</script>'); */
			}
			else
			{
				setTimeout(function ()
				{
					if (confurl['length'] == 0x1) alert('Aplikasi Mengalami Kesalahan Pengambilan Data, Harap Laporkan Lewat Sosial Media INDOXXI / Chatango!');
					else
					{
						confurl['splice'](_0x3a35e3, 0x1);
						GetJS();
					}
				}, 0x1388);
			}
		}, function (_0x1090b4)
		{
			setTimeout(function ()
			{
				if (confurl['length'] == 0x1) alert('Aplikasi Mengalami Kesalahan Pengambilan Data, Harap Laporkan Lewat Sosial Media INDOXXI / Chatango!');
				else
				{
					confurl['splice'](_0x3a35e3, 0x1);
					GetJS();
				}
			}, 0x1388);
		});
	});
}
