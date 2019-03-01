# Call metadata standard

This is a project from [FINOS Voice program](https://finosfoundation.atlassian.net/wiki/spaces/VOICE/overview) to define a standard for call metadata. 

This includes call details, voice recordings, and transcribed voice for all types of calls. The goal being that consumers can design to one interface and always be able to consume data from any voice provider. The ultimate goal is that this standard is adopted for all producers and consumers of call metadata.

The project uses [JSON Schema](https://json-schema.org/) to describe and validate call metadata.

## Contributing

Checkout [FINOS Voice program](https://finosfoundation.atlassian.net/wiki/spaces/VOICE/overview) to start contributing.

The standard definition is on `callmedata.schema.json`, all comments and PR's should be made against this file. 

You must validate your contributions against JSON Schema draft version defined in `$schema` field.

## Directories

* `examples/vendors` - holds examples from different vendors for reference.

## License
[Apache 2.0](LICENSE)
