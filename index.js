var $paragraph = document.querySelector('p')

$paragraph.textContent = 'Conteúdo inserido via javascript'

src="https://unpkg.com/blip-chat-widget" type="text/javascript"

    (function () {
        window.onload = function () {
            new BlipChat()
            .withAppKey('Y2FsbGNlbnRlcmludGVsYnJhczo4NjY2YmVlNS04Y2FkLTQ3NTgtODc4NS1jNDNmZGJjNTQ4NzM=')
            .withButton({"color":"#00a335","icon":""})
            .withCustomCommonUrl('https://chat.blip.ai/')
            .build();
        }
    })();


