Glimpse Function Message Notification
=====================================

This function listen for messages in the PubSub message_sent and send a push notification


Install
-------
```
firebase use --add
cd functions
npm install
```

Deploy
------
```
firebase deploy
```

Test
```
gcloud alpha pubsub topics publish message-sent '{"test":Hello"}'
```






