# voice-metadata-standard

Call metadata examples from the comchain alliance. 

The ComChain Alliance was set up in order to deliver three key services
1. Define a process for configuring the services responsible capturing and storing communication data in accordance to regulatory requirements
2. Define a mechanism for sharing and consuming the data
3. Ensuring that the data captured is both immutable, secure and yet accessible

The solution looked at two key components in order to deliver this capability
1. An agreed meta data standard. This is essential such that different solutions can deliver their elements of the communication workflow. 
2. A decentralised service - in itially built upon ethereum but which can be ported if so required. The benefit of the blockchain technology enabled the components within the eco system to be able to notify one another when data was available. This is dont through the anchoring of hashes to the chain linked to specific resources and users. Any system permissioned with an interesed with an interest in the  "contract" is able to request the data from the source data. Re hashing the data will enable the immutabilityto be checked and the data consumed. 

In building the standard the requirement was to use create something that was extesible to allow for different forms of communication. Schema.org was leveraged so as to not re invent the wheel. A number of the fields required are already defined in the JSON schema so ComChain looked to use the same. In addition the schema leverages Extra Data - enabling platform specific fields to also be captured as required. 
The solution links the users, groups and lines to the required data for the regulatory requirements defined in templates. the same fields are used and mapped to service provder populating the specifc data. As allocated the systems know the data they need to capture and or store, durations and so forth. Any update can be defined once and all participants will be notified together. 

As a working example the following proof of concept has been built:

A set up with PBX phones and Trader Voice turrets as well as a cloud based voice record mobile 

As calls are made the CTI and VR data is captured form the PBX and TV each system creating the required MEta Data files, hashes are taken and the hashes anchored into a Quorom Block Chain. Any call made through the mobile is again captured for both CTI and VR. Hashes taken of teh meta data and CTI and these too are anchored in the chain. 
An organsiation has an analytical tool monitoring its resources. As hashes are added to the chain it can request the data form the different sources and consume it into an analytical tool. Other down stream services such as Voice Transcription can do the same. 
the outcome is that with no speicifc development the analytic tool can handle data from different sources. As the sources are acting in isolation they can be used to verify one another. Finally immutability can be checked to ensure that the storage solution has the same data as created by the different source providers. All records are in situ and none have been edited. 

A few links are defined below outlining some of the concepts fo the ComChain intiative. 

http://www.comchainalliance.org/

The Schema can be viewed here
http://www.comchainalliance.org/docs/

An initial concept video was created here
vimeo.com/242918977

Other PPTs can be found here
https://vimeo.com/channels/1295510

And Medium here
https://medium.com/comchain-alliance


https://schema.org/
https://json-ld.org/





