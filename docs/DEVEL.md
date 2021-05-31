# Development

For development you may need to register and get a free account on [Nimbella](https://www.nimbella.com/), or  setup your own [OpenWhisk](https://openwhisk.apache.org/) deployment.


Please refer to the [nimbella training](https://github.com/nimbella/nimbella-training) for more informations. 


# Installation

- Install [`nvm`](https://github.com/nvm-sh/nvm)  
- Install node v14 with `nvm install v14 --lts`.
- Install web dependencies `cd web ; npm install`
- Install [`nim`](https://docs.nimbella.com/install/)
- Login in Nimbella with `nim auth login`
- Install web dependencies `cd web ; npm install`

# Development

```
$ cd web
$ npm run dev
```

Now open `https://localhost:8080/`

If everything is fine then you can now change backend code and frontend code and see immediately the result.

# Deploy

`nim project deploy .`

Deploy on Nimbella
