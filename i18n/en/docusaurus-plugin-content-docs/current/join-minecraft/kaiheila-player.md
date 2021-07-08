---
sidebar_position: 2
---

# Connect from Kaiheila

Please make sure you want to connect from Kaiheila. You can choose only one between Kaiheila and Discord.

We recommend that players in China choose to connect from Kaiheila.

- Users with the `Twitch Subscriber` role in Discord will get the `Gold` player access group in the server
- Users with the `金弹幕兽（舰长）` or `提督弹幕兽` or `总督弹幕兽` role in Kaiheila will get the `Gold` player access group in the server

:::caution
The Kaiheila bot is not stable, and there may be a problem with duplicate bot return messages. If you receive two messages at the same time, please refer to the latter one.
:::

:::caution
The Kaiheila bot is not stable. Please make sure that the user `机械弹幕兽` is online when performing the following actions.
:::

## Step 1 - Bind Bilibili

We require you to have a Bilibili account to confirm your identity and information related to the Bilibili Live Guard (Supporter).

Please go to `#帐号绑定频道` and send the command `/account bind bili`, you will get a QR code, which will be valid for 2 minutes. Please use your Bilibili mobile client to scan the QR code to login. After this operation, the bot will use your login cookie to get your UID and will delete the cookie afterwards, so please don't worry about your account security. The bot is running on a Tencent Cloud Server in Shanghai, China. The bot program is open source and you can view the source code for this feature.

After successful login, you will be notified of the login operation on Bilibili by the official Bilibili account "哔哩哔哩智能姬". "设备/平台" is "未知设备"，"登录方式" is "扫码登录"，"参考登录地" is "中国上海". Click "查看详情" and you can get the IP of the "参考登录地点" which is "81.69.\*\*\*. \*\*\*" in Shanghai, China.

:::caution
The Kaiheila bot is not stable. When this operation is performed, it is possible that the QR code haven't returned for 30 seconds. If this happens, please wait 10 minutes (slow mode limit) and try again. If the second attempt still fails, please contact the administrator.
:::

![kaiheila-bind-bili](../../static/img/join-minecraft/kaiheila-bind-bili.png)

After successful binding, you will get the "BILIBILI已绑定" role. If you are a Bilibili Live Guard subscriber, you will receive the corresponding role. Please note that there may be a delay of up to 2 hours in obtaining the role.

You can execute command `/account query` to get your information.

![kaiheila-query](../../static/img/join-minecraft/kaiheila-query.png)


## Step 2 - Get Element Role

Please go to `#弹幕兽身份申请` and send the command `/account element <Element>` to get your element role. Please note that this property will not be able to be changed in the future.

`<Element>` can be the following values:
- `herba` : Grass
- `aqua` : Water
- `flame` : Fire
- `earth` : Dirt

After successful acquisition, you will get the corresponding role.

![kaiheila-element](../../static/img/join-minecraft/kaiheila-element.png)
