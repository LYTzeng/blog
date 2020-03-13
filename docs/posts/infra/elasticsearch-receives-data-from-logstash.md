---
lang: zh-Hant-TW
description: 本系列文章介紹 Pfsense 與 ELK Stack (7.6 版) 的整合，藉此分析與收集阻擋的連接紀錄。
sidebar: auto
tags: ["ELK", "pfSense"]
category: Infra
---
# ELK Stack 整合 Pfsense (二)：Elasticsearch 
<PageEdit/>
<div><TagLinks/></div>

本系列文章介紹 Pfsense 與 ELK Stack (7.6 版) 的整合，藉此分析與收集阻擋的連接紀錄。

## 安裝 Elasticsearch
依照[文件](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html#deb-repo)步驟安裝，一樣要先裝 Java，再裝 Elasticsearch。

```bash
sudo apt-get update && sudo apt-get install default-jre -y
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
sudo apt-get install -y apt-transport-https
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt-get update && sudo apt-get install -y elasticsearch
```

Elasticsearch 的設定檔放在`/etc/elasticsearch/elasticsearch.yml`，`elasticsearch.yml`有幾個地方需要特別注意。
#### `elasticsearch.yml`
```yaml
# 因為我另外掛載大容量的 NFS 來當作儲存空間，所以需要修改預設的路徑。
# 儲存 data 的地放
path.data: /boot/lib/elasticsearch
# 儲存 log 的地方
path.log: /boot/log/elasticserch

# 如果 Kibana 和 Elasticsearch 不在同一台，一定要修改 IP。
# 預設是 Listen 127.0.0.1 的，不修改的話無法讓其他主機連接
network.host: 172.30.0.5
# 由於 network.host 非 loopback address
# Elasticsearch 會認為這是 Production 環境
# 所以必須修改 discovery.seed_hosts
discovery.seed_hosts: ["172.30.0.5"]
```

接著就可以啟動 Elasticsearch，Elasticsearch 會透過 <mark>Port 9200</mark> 接收 Logstash 的資料和接收查詢指令，然後透過 <mark>Port 9300</mark> 和 Kibana 進行 Keepalive。

```bash
sudo systemctl start elasticsearch.service
```

然後檢查 Port 狀態：
```bash
netstat -nlt
```
注意 9200 與 9300：
```
tcp        0      0 127.0.0.53:53           0.0.0.0:*               LISTEN
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN
tcp6       0      0 172.30.0.5:9200         :::*                    LISTEN
tcp6       0      0 172.30.0.5:9300         :::*                    LISTEN
tcp6       0      0 :::22                   :::*                    LISTEN
```

如果 Logstash 已經在運作，我們會看得到 Elasticsearch 和 Logstash 建立的 connection：
```
root@elasticsearch:/etc/elasticsearch# netstat -net | grep 9200
tcp6       0      0 172.30.0.5:9200         172.30.0.4:51242        ESTABLISHED 111        253749
```
接著等待 Logstash 傳送一些資料之後，可以透過 API 查詢看看是否收到資料。之前在 Logstash 的 output config 有定義 **index** 名稱為 `logstash-pfsense-%{+YYYY.MM.dd}`，所以查詢所有資料可以在 URL 用`logstash-pfsense-\*`，`_search`就是查詢所有資料，`?pretty=true`是為了讓輸出結果方便人類閱讀。

```bash
curl http://172.30.0.5:9200/logstash-pfsense-\*/_search\?pretty=true
```

如果有看到一堆 JSON 格式的資料，就代表成功了，接下來的工作就是讓 Kibana 查詢並製作視覺化 Dashboard。

![](https://i.imgur.com/Mj39JDh.png)

## References
- [Install Elasticsearch with Debian Package | Elasticsearch Reference [7.6] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html)
- [URI Search | Elasticsearch Reference [7.6] | Elastic](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-uri-request.html)

<Disqus/>