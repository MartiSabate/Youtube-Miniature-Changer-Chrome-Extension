let catImage = "https://www.wfla.com/wp-content/uploads/sites/71/2023/05/GettyImages-1389862392.jpg?w=2560&h=1440&crop=1";

const imgs = document.getElementsByTagName("img"); //grab all the images from the site.

for (image of imgs){ //replace the grabbed images with the cat image
    image.src = catImage;
}