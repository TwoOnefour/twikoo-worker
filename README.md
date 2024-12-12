# Description
使用`cloudflare worker` + `cloudflare r2`对接`twikoo`评论上传图床接口，作为自建免费方案图床的一种

# Quick-setup
下载源码
```
git clone https://github.com/TwoOnefour/twikoo-worker.git
cd twikoo-worker
```


设置secret token
```
wrangler secret put AUTH_KEY_SECRET
```

在`wrangler.toml`根据提示修改存储桶名称及存储桶url

最后
```
wrangler deploy
```


