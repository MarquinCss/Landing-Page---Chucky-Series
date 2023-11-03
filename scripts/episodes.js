document.addEventListener('DOMContentLoaded', function() {
    var episodes = [
        { season: "Season 1", description: "A vintage Good Guy is found at a sale, and the inevitable murdering that ensues terrorizes an idyllic American town while exposing its hypocrisies and secrets. Several characters from Chucky's past, friends and foes alike, show up to expose the truth of the killings, as well as the demon doll's untold origins as a seemingly ordinary child who somehow became this  monster.", image: "img-chucky/s1.png", video: "img-chucky/s1.mp4" },
        { season: "Season 2", description: "Chucky crosses paths with archenemies old allies and new prey, as he seeks to inspire fear and mayhem wherever he goes. After his diabolical plan to invade America's children's hospitals was foiled in season one, Chucky now seeks revenge on those he holds responsible: surviving teens and nuns, along with his ex Tiffany, now his sworn enemy.", image: "img-chucky/s2.png", video: "img-chucky/s2.mp4" },
        { season: "Season 3", description: "Chucky's endless thirst for power leads him to infiltrate the White House, targeting America's First Family. teens face a daunting challenge: reaching Chucky within the heavily guarded house. Amid growing up and romantic entanglements, they must find a way. Meanwhile, Tiffany confronts her own crisis as the police close in on her for Jennifer prior murders.", image: "img-chucky/s3.png", video: "img-chucky/s3.mp4" }
    ];

    var currentEpisode = 0;

    var seasonElement = document.getElementById("season");
    var descriptionElement = document.getElementById("descricao");
    var imageElement = document.querySelector(".imagem");
    var videoElement = document.querySelector("#video");

    function updateEpisode() {
        seasonElement.style.transition = "transform 0.5s, opacity 0.5s"; // Define a transição para o elemento season
        descriptionElement.style.transition = "opacity 0.5s"; // Define a transição para o elemento descrição
        imageElement.classList.add('image-transition');
        imageElement.style.transform = "translateY(20px)";

        setTimeout(function () {
            // Desloca os elementos para baixo
            seasonElement.style.transform = "translateY(20px)";
            descriptionElement.style.opacity = 0;
        }, 100);

        setTimeout(function () {
            seasonElement.textContent = episodes[currentEpisode].season;
            descriptionElement.textContent = episodes[currentEpisode].description;
            imageElement.src = episodes[currentEpisode].image;
            changeVideo();
        }, 500);

        setTimeout(function () {
            // Retorna os elementos à posição original e aplica o efeito de opacidade
            seasonElement.style.transform = "translateY(0)";
            seasonElement.style.opacity = 1;
            descriptionElement.style.opacity = 1;
            imageElement.style.transform = "translateY(0)";
        }, 1000);
    }

    function changeVideo() {
        videoElement.src = episodes[currentEpisode].video;
        videoElement.load();
    }

    function nextEpisode() {
        if (currentEpisode < episodes.length - 1) {
            currentEpisode++;
        } else {
            currentEpisode = 0;
        }
        updateEpisode();
    }

    var nextButton = document.querySelector('.next');
    nextButton.addEventListener('click', nextEpisode);

    updateEpisode();
});