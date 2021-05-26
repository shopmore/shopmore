# Development

For development you may need to register and get a free account on [Nimbella](https://www.nimbella.com/), or  setup your own [OpenWhisk](https://openwhisk.apache.org/) deployment.

Install `nim` then deploy it with `nim project deploy .`

# Learning about Nimbella

Please refer to the [nimbella training](https://github.com/nimbella/nimbella-training) for more informations. 

# Development setup

```
$ cd web
$ npm run dev

```
Now open `https://localhost:8080/`

If everything is fine then you can now change backend code and frontend code and see immediately the result.

Unfortunately because of [this bug](https://github.com/nimbella/nimbella-cli/issues/110) currently the front end does not update with live reload. You need to refresh manually

# Deploy

`nim project deploy .`

deploy on Nimbella