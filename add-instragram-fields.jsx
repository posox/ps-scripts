// Script to resize images for Instagram

/*

// BEGIN__HARVEST_EXCEPTION_ZSTRING

<javascriptresource>
<name>Copyright</name>
<about>Sample script for adding a copyright note.</about>
<menu>filter</menu>
<category>Tutorial</category>
<enableinfo>true</enableinfo>
</javascriptresource>

// END__HARVEST_EXCEPTION_ZSTRING

*/

const OUTPUT_WIDTH = 1800;
const OUTPUT_HEIGTH = 2250;

function add4x5Fields() {
    app.preferences.rulerUnits = Units.PIXELS;
    app.preferences.typeUnits = TypeUnits.PIXELS;

    var doc = app.activeDocument;

    //doc.mergeVisibleLayers();

    var newWidth, newHeigth;
    if (doc.width * 5 / 4 > doc.height) { 
        newWidth = doc.width;
        newHeigth = doc.width * 5 / 4;
    } else {
        newWidth = doc.height * 4 / 5;
        newHeigth = doc.height;
    }
    
    doc.resizeCanvas(newWidth, newHeigth, AnchorPosition.MIDDLECENTER);

    doc.resizeImage(
        OUTPUT_WIDTH,
        OUTPUT_HEIGTH,
        OUTPUT_WIDTH * OUTPUT_HEIGTH,
        resampleMethod=ResampleMethod.BICUBICSMOOTHER,    
    );
}

add4x5Fields()