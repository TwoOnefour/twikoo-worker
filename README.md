# Description
使用`cloudflare worker` + `cloudflare r2`对接`twikoo`评论上传图床接口，作为自建免费方案图床的一种

# Quick-setup
## command-line setup
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

## cloudflare dashboard setup
你也可以复制`src/index.js`中的内容，创建worker以后复制进去，添加变量`BUCKET_URL`，再添加secret 变量`AUTH_KEY_SECRET`, 然后保存即可


经过上面的步骤后，将得到的worker url添加到twikoo配置，并填入刚才设置的secret token应用

![配置](https://bucket.voidval.com/upload/2024/12/dc36f9695739e80255f8a99569c97e34.png)

![展示成果](https://bucket.voidval.com/upload/2024/12/88ae048bc443c0f409b57cb85e568e0f.png)
