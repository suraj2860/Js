require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT

const gitHubData = {
    "login": "suraj2860",
    "id": 58070045,
    "node_id": "MDQ6VXNlcjU4MDcwMDQ1",
    "avatar_url": "https://avatars.githubusercontent.com/u/58070045?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/suraj2860",
    "html_url": "https://github.com/suraj2860",
    "followers_url": "https://api.github.com/users/suraj2860/followers",
    "following_url": "https://api.github.com/users/suraj2860/following{/other_user}",
    "gists_url": "https://api.github.com/users/suraj2860/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/suraj2860/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/suraj2860/subscriptions",
    "organizations_url": "https://api.github.com/users/suraj2860/orgs",
    "repos_url": "https://api.github.com/users/suraj2860/repos",
    "events_url": "https://api.github.com/users/suraj2860/events{/privacy}",
    "received_events_url": "https://api.github.com/users/suraj2860/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Suraj Kumar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Software Engineer | Currently working as a .NET developer | .NET Web APIs | C# |  MSSQL | JavaScript | React ",
    "twitter_username": "let_name_suraj",
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2019-11-22T09:26:04Z",
    "updated_at": "2024-01-29T02:31:04Z"
  };

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send("let_name_suraj")
})

app.get('/github', (req, res) => {
    res.json(gitHubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})