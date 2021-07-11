---
sidebar_position: 3
---

# 从 Discord 开始连接

请确认您将要从 Discord 进行连接，请注意，Discord 和开黑啦只能二者选其一。

我们建议非中国玩家选择从 Discord 进行连接。

- 在 Discord 中拥有 `Twitch Subscriber` 或 `Pogtreon` 角色的用户将在服务器中获取 `Energy` 玩家权限组
- 在 开黑啦 中拥有 `金弹幕兽（舰长）` 或 `提督弹幕兽` 或 `总督弹幕兽` 角色的用户将在服务器中获取 `Energy` 玩家权限组

## 第一步（也是最后一步）

从 Discord 进行连接十分简单，只有一步。

您可以前往任意一个频道（建议在 `#🤖bot-commands` 频道）输入指令 `/account reg <Element>` 即可。`Element` 参数有四个选项，Discord 会自动补全指令，并且显示可供选择的4个选项。

`<Element>` 可以是以下值：

- `Wind` : 草弹幕兽
- `Aqua` : 海弹幕兽
- `Fire` : 火弹幕兽
- `Earth` : 土弹幕兽

每一种元素对应了服务器中的一个主城。

第五种属性，`Energy` 是 `Twitch Subscriber` 和 Bilibili 大航海用户专有的。

:::caution
请注意，如果 Discord 没有自动补全指令，那么代表您没有在这个频道使用 Slash Command 的权限，建议前往 `#🤖bot-commands` 频道使用指令
:::

![discord-reg-command](../../static/img/join-minecraft/discord-reg-command.png)

指令发出后，服务器将会接收到请求并开始处理。

![discord-command-pending](../../static/img/join-minecraft/discord-command-pending.png)

如果出现和下图类似的错误，导致指令执行失败，请等待约 1 分钟，然后重试。该问题多为 Discord 服务器与 Microsoft Azure 数据中心之间的连接出现波动导致的，虽然返回数据失败，但是很有可能指令已经进入队列，如果在执行注册指令时遇到错误，请在等待一分钟后尝试执行 `/account query`，或许注册已经完成。

![discord-failed](../../static/img/join-minecraft/discord-failed.png)

稍等片刻，等待指令执行完成，执行成功的回复如下，其中包含了您的 UID 和 所选择的 Element 字符串。

:::info
由于一些未知的原因，有些时候指令执行完成的消息返回速度较慢，请稍等片刻，并且不要刷新页面或者离开频道，一般最长不会超过 2 分钟。

根据后台的日志记录，我们初步认为这是 Discord 处理 HTTP PATCH 请求较慢而导致的。
:::

![discord-reg-command-finish](../../static/img/join-minecraft/discord-reg-command-finish.png)

您可以使用 `/account query` 指令来获取账户信息，其中包含了您的 Discord 用户名，Discord UID，弹幕兽属性，Minecraft UUID，Minecraft 玩家名以及 Minecraft 账号类型（正版/离线模式）的信息。

![discord-query-command](../../static/img/join-minecraft/discord-query-command.png)

