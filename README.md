# graphql-server-tutorial
GitHubのAPI v4を使ったサーバサイドのチュートリアル

## Get Started
```.sh
yarn
```

### Hello World
```.sh
# シェル1
yarn start

# シェル2
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"query": "{ hello }"}' \
  http://localhost:4000/graphql
```
