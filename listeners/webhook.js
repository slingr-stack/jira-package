/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookJira = {
    label: 'Catch HTTP jira events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/jira',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Jira webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('jira:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
