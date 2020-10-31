# Dynamic Rendering 🔀

If your visitor is a bot, like GoogleBot or Yandex, use Server Side Rendering and Client Side Rendering.

If your visitor is a real user, use Client Side Rendering.

## Results of using it

### Benefits... 👍

- ✅ Improve TTI
- 😴 Lazy Load for the user

### Downsides... 👎
- 🚩 Keep Hydration data
- 👩‍🔬 Need universal User Agent data
- 🤖 Bot still gets full cost

### Keep in mind... 🧠
- 🏋️‍ Perfect for stuff below the fold
- 🆓 Free resources from your server
- ⏳ Help GoogleBot to index your content faster

## How to use 👨‍🏫
Just wrap the components you want to be static on the client.

```javascript
import DynamicRendering from '@midudev/react-dynamic-rendering'

export default function DynamicRenderingPage({articles, isBot}) {
  return (
    <Grid>
      {articles.map((article, idx) => (
        <DynamicRendering key={idx} force={idx < 3} isBot={isBot}>
          <Card {...article} />
        </ProgressiveHydration>
      ))}
    </Grid>
  )
}
```