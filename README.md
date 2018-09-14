[!["Titanium"](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/)
[!["Alloy"](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# ti.youtube
#### Titanium Alloy Widget - YouTube
Simply drop in this Widget and instantly access all the methods within the 'YoutTube IFrame Player API' inside your Android and iOS Applications.

Then add your own ListView, TableView, or any other Component and access any of the Methods (listed below).

<table><tr>
<td><img src="iphone_screenshot.png" alt='iPhone' width="200" style="float: left;"></td>
<td><img src="android_screenshot.jpg" alt='Android' width="200"></td>
</tr></table>
  

### Requirement
- [x] Titanium SDK
  
#
  
### Usage
* Download the latest release of the widget.
* Unzip the folder to your project under app/widgets/ti.appraise
* Add the widget as a dependency to your app/config.json
* Add the Widget to your .xml (View)  
```javascript
<Widget src="ti.youtube" id="tiYouTube" defaultVideoId="wgg5Tch0-Hs" />
```
> **NOTE**: The Widget sample code (above) includes a value for the property 'defaultVideoId'.  This allows you to define the deafult video to load.  You can also include the Widget without this property and a Pre-Loader will be added for you automatically, like this:
```javascript
<Widget src="ti.youtube" id="tiYouTube" />
```

#
  
### Methods
> **NOTE**: This utilizes the built-in YouTube Player Object API.

## *cueVideoById*
Loads the specified video's thumbnail and prepares the player to play the video  
{Object}  

    videoId       (*required*)  
    startSeconds  (optional)  
    endSeconds    (optional)  

## *loadVideoById*
Loads and plays the specified video  
{Object}  

    videoId       (*required*)  
    startSeconds  (optional)  
    endSeconds    (optional)  

## *playVideo*
Plays the video (already loaded)  

#

### Examples
#### cueVideoById
```javascript
$.tiYouTube.cueVideoById({videoId: "F7KHyH2TuhE"});
```

#### loadVideoById
```javascript
$.tiYouTube.loadVideoById({videoId: "F7KHyH2TuhE"});
```

#### playVideo
```javascript
$.tiYouTube.playVideo();
```

#### config.json
```javascript
"dependencies": {
        "ti.youtube": "1.0"
    }
```

#

More Information: [YouTube API Documentation](https://developers.google.com/youtube/iframe_api_reference)

#
  
### Author
* Adam Armstrong ([@adamtarmstrong](https://twitter.com/adamtarmstrong))
  
#
  
### License
MIT
