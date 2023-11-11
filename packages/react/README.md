<div align="center"><strong>@linkzy/react</strong></div>
<div align="center">Collection of components that will help you create your very own links page</div>
<br />
<div align="center">
<a href="https://github.com/coderdiaz/linkzy">GitHub</a> 
<!-- <span> · </span>
<a href="#">Discord</a> -->
</div>

## Install

Install library from your command line

#### With yarn

```sh
yarn add @linkzy/react -E
```

#### With npm

```sh
npm install @linkzy/react -E
```

## Getting started

Add the component to your template. Include styles where needed.

```jsx
import * as Linkzy from '@linkzy/react';

const LinksPage = () => {
  return (
    <Linkzy.Root>
      <Linkzy.Head>
        <Linkzy.Avatar>
          <img src="..." />
        </Linkzy.Avatar>
        <Linkzy.Content>
          <Linkzy.Title label="Javier Diaz" />
          <Linkzy.Bio>A software engineer who designs</Linkzy.Bio>
        </Linkzy.Content>
      </Linkzy.Head>
      <Linkzy.Group>
        <Linkzy.Link
          href="https://youtube.com/@coderdiaz"
          label="Visita mi canal de Youtube"
        />
        <Linkzy.Link
          href="https://twitch.tv/coderdiaz"
          label="Visita mi canal de Twitch"
        />
        <Linkzy.Link
          href="https://coderdiaz.dev/contacto"
          label="Ponte en contacton conmigo"
        />
      </Linkzy.Group>
    </Linkzy.Root>
  );
};
```

## License

MIT License
