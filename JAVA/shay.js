function changeImage() {
   
    const photo = document.querySelector('.photo');
    const newImage ="C:/Users/chani/OneDrive/Desktop/DM/ChickyShickyShay/JAVA/celebration.jpg"; 
    photo.src = newImage;

    const info = document.querySelector('.info');
    info.textContent = "Name: Matthew Sturniolo (FOUND)";
    
    const reward = document.querySelector('.reward');
    reward.innerHTML = "REWARD<br> $1,000,000 (RECEIVED!)";
}

