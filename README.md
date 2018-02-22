# scaleTextarea

**scaleTextarea** is a new event that retrieves the dimensions of a textarea by scaling it in real time

An Example:

```code
<script src="jquery.scaletextarea.js" type="text/javascript"></script>
<script>
$(document).ready(function(){

    $(".field").bind('scaleTextarea', function(){
        $(".container").html("Width:" + $(this).outerWidth() + " x Height:" + $(this).outerHeight() + "<br />");
    });

});
</script>
```

## jQuery Compatibility

Works with jQuery 1.4.2 and newer.

It is known to be working with all the major browsers on all available platforms (Win/Mac/Linux)

 * IE 6/7/8+
 * FF 1.5/2/3+
 * Opera-9+
 * Safari-3+
 * Chrome-0.2+