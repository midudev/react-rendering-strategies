# ⚛︎ React rendering strategies

Different strategies to render React applications in order to get the best performance while keeping SEO, Developer Experience and User Experience.

[Slides](https://slides.com/miguelangeldurangarcia/react-rendering-strategies#)

## Dynamic Rendering 
If your visitor is a bot, like GoogleBot or Yandex, use Server Side Rendering and Client Side Rendering.
If your visitor is a real user, use Client Side Rendering.

## Static Content
Server Side Rendering for a component and skip the hydration step on the client. Useful for components that don't need to use interactivity (like SEO links).

## Progressive Rendering
Server Side Rendering for a component and skip the hydration step on the client but, as soon as it appears on the viewport, then hydrate it. Useful for list of items.
