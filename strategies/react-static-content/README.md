## Static Content 📸

Server Side Rendering for a component and skip the hydration step on the client. Useful for components that don't need to use interactivity (like SEO links).

## Results of using it

### Benefits... 👍

- ⚡ Avoid re-hydrate for static components
- 🤳 Thus could greatly improve TTI

### Downsides... 👎
- ⚠️ Lose interactivity
- 🏋️‍ Hydration data still there
- 🥪 Element wrapper (ex. <div>)

### Keep in mind... 🧠
- 📸 For expensive rendering lists or static content (SEO Footers)
- 🤖 GoogleBot is definitely going to detect it

## How to use 👨‍🏫
Just wrap the components you want to be static on the client.

```javascript
import StaticContent from '@midudev/react-static-content'

export default function SeoFooter({listOfLinks}) {
  return (
    <footer>
      <StaticContent>
        {listOfLinks.map((link, idx) => (
            <a key={idx} href={link.href} title={link.literal} />
                <span>{link.literal}</span>
            </a>
        ))}
      </StaticContent>
    </footer>
  )
}
```


## Resources 🔗
[Tweet about suppressHydrationWarning](https://twitter.com/reactjs/status/928650326701494273?lang=es)
[suppressHydrationWarning Pull Request](https://github.com/facebook/react/pull/11126)
[Hack for avoiding hydration](https://github.com/facebook/react/issues/10923#issuecomment-338715787)
