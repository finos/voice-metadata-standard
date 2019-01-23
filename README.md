# voice-metadata-standard
* This is a FINOS Voice Program project. See: https://finosfoundation.atlassian.net/wiki/spaces/VOICE/overview
* The purpose of the working group is to define a JSON standard for call metadata.
* This JSON is intended to be sent as a the body of a webservice to a consumer of call metadata.
* The intent is that the define JSON standard works for all types of calls.
* The ultimate goal is that this standard is adopted for all producers and consumers of call metadata.

# Directories (See more details below)
* ActiveStandard =  this directory will hold the present working standard.
* Cloud9-Examples = this directory holds the present cloud9 JSON format that has been integrated with several vendors.
* ComChain-CallMetadata-Examples = this directory contains the present work of the ComChain Alliance for call metadata and will be considered as a possible path for this working group.

# ActiveStandard Directory
* The master file is callExample.yml. All comments and PR's should be made against this file.
* A YAML(.yml) file is used because it allows for comments whereas JSON does not.
* The converted JSON is for reference. An online tool can be used to convert the YAML to JSON one example is: https://codebeautify.org/yaml-to-json-xml-csv
* Final call metadata and the metadata standard will be JSON. We are using YAML for now to more easily document the creation of this JSON standard.
