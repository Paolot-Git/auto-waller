Hooks.on('getSceneControlButtons', (buttons) => {
    if (!canvas) return;
    let group = buttons.find((b) => b.name === 'walls');
    group.tools.push({
        button: true,
        icon: 'fas fa-adjust',
        name: 'pain',
        title: 'paaiin',
        onClick: () => {
            thing()
        },
    });
});

function thing() {
    const backgroundImage = game.scenes.current.background.src

    // Create a new image object
    const img = new Image();
    img.crossOrigin = "Anonymous"; // This is important to avoid CORS issues
    img.src = backgroundImage;

    // Wait for the image to load
    img.onload = function() {
        // Create a temporary canvas to draw the image
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = img.width;
        tempCanvas.height = img.height;
        const ctx = tempCanvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Get pixel data from the temporary canvas
        const imageData = ctx.getImageData(0, 0, img.width, img.height);
        const data = imageData.data;

        // Access specific pixel data (e.g., at position (x, y))
//        const x = 100; // Replace with your x coordinate
//        const y = 100; // Replace with your y coordinate
//        const pixelIndex = (y * img.width + x) * 4;
        var pixels = []
        for (let i = 0; i < img.width * img.height; i++) {
            let pixelIndex = i * 4
            //red,green,blue,alpha
            let pixel = [data[pixelIndex], data[pixelIndex + 1], data[pixelIndex + 2], data[pixelIndex + 3]];
            pixels.push(pixel)
        }
        console.log(pixels);
    };
}
