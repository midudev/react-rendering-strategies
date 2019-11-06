# Progressive Hydration 🏁

Server Side Rendering for a component and skip the hydration step on the client but, as soon as it appears on the viewport, hydrate it. Useful for list of items or components that are not visible on the viewport but yet you need to render them for SEO.

## Results of using it

### Benefits... 👍

- 👀 Only re-hydrate what's visible
- 🤳 Thus could greatly improve TTI
- 🔛 Activate interactivity on demand

### Downsides... 👎
- 🏋️‍ Hydration data still there
- 🥪 Element wrapper needed (ex. <div>)

### Keep in mind... 🧠
- 📸 Kind of lazy loading experience
- 🤖 GoogleBot will get the rendered static html (not hydrated)

## How to use 👨‍🏫
Just wrap the components you want to be hydrated progressively.

Use `force` prop in order to hydrate the component no matter if it's below the fold.

```javascript
import ProgressiveHydration from '@midudev/react-progressive-hydration'

export default function ProgressiveHydrationPage({articles}) {
  return (
    <Grid>
      {articles.map((article, idx) => (
        <ProgressiveHydration key={idx} force={idx < 3}>
          <Card {...article} />
        </ProgressiveHydration>
      ))}
    </Grid>
  )
}
```


## Resources 🔗
[The case of partial hydration (with Next and Preact)](https://medium.com/spring-media-techblog/how-we-achieved-the-best-web-performance-with-partial-hydration-20fab9c808d5)
[Rendering on the Web: Performance Implications of Application Architecture](https://www.youtube.com/watch?v=k-A2VfuUROg)
[Hack for avoiding hydration](https://github.com/facebook/react/issues/10923#issuecomment-338715787)
