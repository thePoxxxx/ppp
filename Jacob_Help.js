//Original. Not sure why strings are enclosed in < and >??? Not standard for JS ES5 or ES6. Maybe something to do with the Altspace SDK? Maybe something to do with Shane's editor?
<a-assets>
	<script type="text/javascript">
    //Check if user is on mobile, save platform type string to variable
    let is_mobile = (navigator.userAgent||navigator.vendor||window.opera).indexOf("mobile")>-1;

    //Create variable for model URL
    let modelUrl = </Obj/Hallway.obj>;

    //Check if device is mobile, if so use the mobile URL for the model
    if(is_mobile)modelUrl = </Obj/Hallway-mobile.obj>;

    //Write HTML to document with the model URL incorporated
    document.write('<a-asset-item id="model-obj" src="' + modelUrl + '"></a-asset-item>');
  </script>
</a-assets>

//If that doesn't work, try this.
<a-assets>
	<script type="text/javascript">
    //Check if user is on mobile, save platform type string to variable and create variable for model URL
    let is_mobile = (navigator.userAgent||navigator.vendor||window.opera).indexOf("mobile") !== -1,
    modelUrl = "/Obj/Hallway.obj";

    //Check if device is mobile, if so use the mobile URL for the model
    if (is_mobile)
   		modelUrl = "/Obj/Hallway-mobile.obj";

    //Write HTML to document with the model URL incorporated
    document.write('<a-asset-item id="model-obj" src="' + modelUrl + '"></a-asset-item>');
  </script>
</a-assets>

//The way I like doing this, think it's a bit better and cleaner/more organized if you have multiple models, audio, and things to deal with. 2 lines of code, yay!
//Simply drop models into seperate folders called 'mobile' and 'desktop' for mobile and desktop. My typical folder structure looks like /assets/(desktop or mobile)/models/modelname.modelextension
//I also like to use single quotes because they cause less issues when working with HTML, which 90% of the time is or should (in my opinion) be using double quotes

<a-assets>
	<script type="text/javascript">
    //Check if user is on mobile, save platform type string to variable
    let platform = (navigator.userAgent||navigator.vendor||window.opera).indexOf("mobile") !== -1 ? 'mobile' : 'desktop';

    //Write HTML to document with the platform incorporated into the src path
    document.write('<a-asset-item id="hallway-obj" src="assets/' + platform + '/models/Hallway.obj"></a-asset-item>');

    //Multiple just for example purposes
    document.write('<a-asset-item id="kitchen-obj" src="assets/' + platform + '/models/Kitchen.obj"></a-asset-item>');
    document.write('<a-asset-item id="living-room-obj" src="assets/' + platform + '/models/Living-Room.obj"></a-asset-item>');
    document.write('<a-asset-item id="dining-room-obj" src="assets/' + platform + '/models/Dining-Room.obj"></a-asset-item>');
    document.write('<a-asset-item id="bed-room-obj" src="assets/' + platform + '/models/Bed-Room.obj"></a-asset-item>');

    //MTLs, or you can put the MTL files right next to their associated OBJ file. Either way will work, more a matter of how you want to organize.
    document.write('<a-asset-item id="kitchen-mtl" src="assets/' + platform + '/models/Kitchen.mtl"></a-asset-item>');
    document.write('<a-asset-item id="living-room-mtl" src="assets/' + platform + '/models/Living-Room.mtl"></a-asset-item>');
    document.write('<a-asset-item id="dining-room-mtl" src="assets/' + platform + '/models/Dining-Room.mtl"></a-asset-item>');
    document.write('<a-asset-item id="bed-room-mtl" src="assets/' + platform + '/models/Bed-Room.mtl"></a-asset-item>');

    //Audio funsies
    //Checks user platofrm and assigns proper extension value to variable
    let audio_ext = platform === 'mobile' ? 'mp3' : 'ogg';
    //Incorporates proper audio extension into src path
    document.write('<a-asset-item id="atmosphere-audio" src="assets/' + platform + '/audio/atmosphere.' + audio_ext + '"></a-asset-item>');

  </script>
</a-assets>
