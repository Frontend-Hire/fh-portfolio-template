---
title: Can you commit nothing (or empty)?
publishDate: 2024-09-18
tags: ["git", "lesson"]
---

> This is a sample learning post to give you an idea on how a simple learning post would look like

Yes, there are various reasons to do so. One of the most common ones is to trigger a build or deployment.

Just use the flag "--allow-empty" and it will allow you to create an empty commit.

```sh
git commit --allow-empty -m "fix: empty commit for deployment"
→ No staged files found.

[main 9869338] fix: empty commit for deployment
```
