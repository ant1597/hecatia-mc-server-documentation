---
sidebar_position: 3
---

# Connect from Discord

Please make sure you want to connect from Discord. You can choose only one between Kaiheila and Discord.

We recommend that players outside of China choose to connect from Discord.

- Users with the `Twitch Subscriber` role in Discord will get the `Gold` player access group in the server
- Users with the `金弹幕兽（舰长）` or `提督弹幕兽` or `总督弹幕兽` role in Kaiheila will get the `Gold` player access group in the server

## The first step (and also the final step)

Connecting from Discord is a simple, one-step process.

You can go to any channel (`#🤖bot-commands` channel is recommended) and enter the command `/account reg <Element>` to do so. The `Element` parameter has four options, and Discord will automatically complete the command and display the four options available.

`<Element>` can be the following values:
- `Herba` : Grass
- `Aqua` : Water
- `Flame` : Fire
- `Earth` : Dirt

Each element corresponds to one of the main cities in the server.

The fifth element, `Gold` is exclusive to `Twitch Subscriber` and Bilibili Live Guards.

:::caution
Please note that if Discord does not auto-complete commands, then you do not have permission to use Slash Command on this channel, so it is recommended to go to the `#🤖bot-commands` channel to use the commands.
:::

![discord-reg-command](../../static/img/join-minecraft/discord-reg-command.png)

After the command is issued, the server will receive the request and start processing it.

![discord-command-pending](../../static/img/join-minecraft/discord-command-pending.png)

Wait a moment for the command process to complete, and the successful response will be as follows, with your UID and the selected Element string.

:::info
For some unknown reasons, sometimes the command completion message is slow to return, please wait for a while and do not refresh the page or leave the channel, usually no more than 2 minute.

Based on the logs in the backend, we initially believe that this is caused by Discord's slow processing of HTTP PATCH requests.
:::

![discord-reg-command-finish](../../static/img/join-minecraft/discord-reg-command-finish.png)

You can use the `/account query` command to get account information, which contains information about your Discord username, Discord UID, Element, Minecraft UUID, Minecraft player name, and Minecraft account type (premium/cracked).

![discord-query-command](../../static/img/join-minecraft/discord-query-command.png)

