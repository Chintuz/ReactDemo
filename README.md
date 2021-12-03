## React Demo app

This is a demo app to fetch data from url and show in the UI

Below are the features involed in the app
- it will try to fetch data once component is mounted
- if cache is available data will be returned to component 
- and also api call will made
- once data will come from api, it will compare with the cache data
- here I have taken img as a unique key to compare the list
- if both the data is same, it will ignore the response
- if data is different, it will update storage and store both

## New changes
- Created a custom image compoenent that saves image to local cache
- display image if already available in local
- else download and display it