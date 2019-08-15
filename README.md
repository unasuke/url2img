# url2img

## Usage
```shell
$ curl -v -X POST --header "Content-Type: application/json" --data '{"url": "https://example.com, "size": {"width": 2400, "height": 1260 }}' http://function-url --output ogp.png
```

## References
- [Introducing headless Chrome support in Cloud Functions and App Engine | Google Cloud Blog](https://cloud.google.com/blog/products/gcp/introducing-headless-chrome-support-in-cloud-functions-and-app-engine)
- [HTTP Functions  |  Cloud Functions Documentation  |  Google Cloud](https://cloud.google.com/functions/docs/writing/http)
- [GoogleCloudPlatform/functions-framework-nodejs: FaaS (Function as a service) framework for writing portable Node.js functions](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)
