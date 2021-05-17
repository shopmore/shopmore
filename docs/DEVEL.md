# Development

For development you may need to register and get a free account on [Nimbella](https://www.nimbella.com/), or  setup your own [OpenWhisk](https://openwhisk.apache.org/) deployment.

Install `nim` then deploy it with `nim project deploy .`

# Learning about Nimbella

Please refer to the [nimbella training](https://github.com/nimbella/nimbella-training) for more informations. 

# Development setup

You need multiple terminals! Three (yes...)!

1. From the project root start `nim project:web-serve web` to serve local changes and proxy to the backed in cloud 
1. From the project root also start watch mode: `nim project watch --exclude=web .`
1. From the `web` folder start `npm run dev`

Now open `https://localhost:8080/`

If everything is fine then you can now change backend code and frontend code and see immediately the result (yes, you have to reload the the page, unfortunately the livereload does not work (yet) in the proxyified frontend)

# Deploy

`nim project deploy .`

Then watch your 
