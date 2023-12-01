# Chat APP
Diese Chat App wurde mit nodeJS im Backend ReactJS im Frontend erstellt. Zur Hilfe für das Aktualisieren der Chats wurde Socket.io verwendet. Im order "Dokumentation" befindet sich eine kurze Dokumentation über die WebApp.
## Beschreibung
In dieser WebApp ist es möglich sich mit einem Benutzernamen anzumelden und mit anderen Benutzern zu chatten. Die Benutzer können sich gegenseitig Nachrichten in Channels mit mehreren benutzern schicken und diese werden in Echtzeit aktualisiert. Um diese Nachrichten sehen zu können, ist es möglich dem Channel mit einer ID beizutreten. Ausserdem ist es möglich einen neuen Channel zu erstellen. Die Nachrichten werden in der Datenbank gespeichert und können somit auch nach dem Neustart der App wieder angezeigt werden.
## Setup
### Installation
Um dieses Projekt zu starten, muss Docker installiert sein.
Falls Docker noch nicht installiert ist, können Sie [hier](https://docs.docker.com/get-docker/) und [hier](https://docs.docker.com/compose/install/) die Anleitung zu Installation durchlesen.
### Starten
Um das Projekt zu starten, müssen Sie in der Konsole folgenden Befehl ausführen:
```bash
docker-compose up --build
```
### Benutzung
Nachdem das Projekt gestartet wurde, können Sie die WebApp unter [http://localhost:3000](http://localhost:3000) aufrufen.