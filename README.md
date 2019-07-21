[![Build Status](https://travis-ci.org/FDC3/FDC3.svg?branch=master)](https://travis-ci.org/FDC3/FDC3)
[![FINOS - Incubating](https://cdn.jsdelivr.net/gh/finos/contrib-toolbox@master/images/badge-incubating.svg)](https://finosfoundation.atlassian.net/wiki/display/FINOS/Incubating)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

<img align="right" width="40%" src="https://www.finos.org/hubfs/FINOS/finos-logo/FINOS_Icon_Wordmark_Name_RGB_horizontal.png">

# Voice Metadata Standard

This is a project from [FINOS Voice program](https://finosfoundation.atlassian.net/wiki/spaces/VOICE/overview) to define a standard for call metadata. 

This includes call details, voice recordings, and transcribed voice for all types of calls. The goal being that consumers can design to one interface and always be able to consume data from any voice provider. The ultimate goal is that this standard is adopted for all producers and consumers of call metadata.

The project uses [JSON Schema](https://json-schema.org/) to describe and validate call metadata.

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Read our [contribution guidelines](CONTRIBUTING.md) and [Community Code of Conduct](https://www.finos.org/code-of-conduct)
4. Commit your changes (`git commit -am 'Add some fooBar'`)
5. Push to the branch (`git push origin feature/fooBar`)
6. Create a new Pull Request

Checkout [FINOS Voice program](https://finosfoundation.atlassian.net/wiki/spaces/VOICE/overview) to start contributing.

The standard definition is on `callmetadata.schema.json`, all comments and PR's should be made against this file. 

You must validate your contributions against JSON Schema draft version defined in `$schema` field.

Follow guidelines described on [CONTRIBUTING](CONTRIBUTING.md) file.

_NOTE:_ Commits and pull requests to FINOS repositories will only be accepted from those contributors with an active, executed Individual Contributor License Agreement (ICLA) with FINOS OR who are covered under an existing and active Corporate Contribution License Agreement (CCLA) executed with FINOS. Commits from individuals not covered under an ICLA or CCLA will be flagged and blocked by the FINOS Clabot tool. Please note that some CCLAs require individuals/employees to be explicitly named on the CCLA.

*Need an ICLA? Unsure if you are covered under an existing CCLA? Email [help@finos.org](mailto:help@finos.org)*

## Directories

* `examples/vendors` - holds examples from different vendors for reference.

## License
Copyright 2019 - FINOS

Distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

SPDX-License-Identifier: [Apache-2.0](https://spdx.org/licenses/Apache-2.0)
