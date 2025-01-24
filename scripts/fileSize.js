document.addEventListener("DOMContentLoaded", async () => {
    const fileUrl = 'https://raw.githubusercontent.com/DmitrievPlays/MyFirstGodotGame/refs/heads/master/textures/clear_sky.png';

    try {
        const response = await fetch(fileUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const blob = await response.blob();
        const fileSize = blob.size; // Size in bytes

        document.getElementById('fileSize').innerHTML = `${(fileSize / 1024 / 1024).toFixed(2)} Mb`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('fileSize').innerHTML = 'Error fetching file size';
    }
});