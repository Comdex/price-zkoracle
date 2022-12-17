# price-zkoracle

oracle: /server

api: /api/price/{coin}, coin: eth/mina
If successful, oracle will output a json:
```
{
  data: { coin: 'mina', price: '550000' },
  signature: {
    r: '10730636476519697698154927189829493176097313486848153044125254446884371113696',
    s: '20496522453702113028369392861557436939263437256616941983181581063576564914031'
  },
  publicKey: 'B62qm1uQcaZ9Ck8qXuNt46u3K5SQrZ8x7dDfurUFv4VuV8HVMBv6g6r'
}
```

Note: Since the source price has decimals, special processing has been done, and the actual price needs to be divided by 1,000,000 on the result

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
