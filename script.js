// NAVBAR
window.onload = function(){
    var btnContainer = document.getElementById("navbar");
    var btns = btnContainer.getElementsByClassName("btn");
    
    for(var i = 0; i < btns.length; i++){
        btns[i].addEventListener("click", function(){
            for (var j = 0; j < btns.length; j++) {
                btns[j].className = btns[j].className.replace(" active", "");
            }
            this.className += " active";
        });
    }
}
// SIDEBAR
function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// BACK TO TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("moveToTopBtn").style.display = "block";
    } else {
        document.getElementById("moveToTopBtn").style.display = "none";
    }
}

// MODAL
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = 'none';
}

function openModal(title, year, description, imageURL) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modal-image");
    var modalTitle = document.getElementById("modal-title");
    var modalYear = document.getElementById("modal-year");
    var modalDescription = document.getElementById("modal-description");

    modal.style.display = 'block';
    modalImg.src = imageURL;
    modalTitle.textContent = title;
    modalYear.textContent = year;
    modalDescription.textContent = description;

    if (title === "Impression, Sunrise") {
        modalDescription.innerHTML =  "Oil on canvas<br>" +
        "48 cm × 63 cm (19 in × 24.8 in)<br>" +
        "<br>Musée Marmottan Monet, Paris, France" +
        "<br><br>Impression, Sunrise is a famous oil painting by Claude Monet, created in 1872. It is considered one of the earliest examples of Impressionism, a movement characterized by its emphasis on capturing the fleeting effects of light and atmosphere. The painting depicts the port of Le Havre at sunrise, with boats floating on the water and the sun breaking through the mist, casting a hazy glow over the scene. Monet's loose brushwork and use of vibrant colors evoke a sense of movement and immediacy, capturing the essence of the moment rather than precise details. Impression, Sunrise is widely regarded as a seminal work in the development of modern art and continues to inspire artists and art lovers around the world.";
    } else if (title === "The Houses of Parliament") {
        modalDescription.innerHTML =  "Oil on canvas<br>" +
        "81.3 cm × 92.4 cm (32 in × 36.3 in)<br>" +
        "<br>Musée Marmottan Monet, Paris, France" +
        "<br><br>Claude Monet's Houses of Parliament series encapsulates the essence of Impressionism with its masterful portrayal of light and atmosphere. In these paintings, including the iconic The Houses of Parliament, Sunset, Monet captures the timeless elegance of London's architectural landmark against the backdrop of the River Thames. Through loose brushstrokes and vibrant colors, he conveys the fleeting effects of sunset, with the warm hues of the descending sun casting an ethereal glow upon the majestic facade of the Parliament building. The play of light and shadow creates a dynamic interplay between the structure and its surroundings, evoking a sense of movement and vitality. Monet's ability to translate the transient beauty of nature onto canvas immortalizes the scene, inviting viewers to immerse themselves in the timeless charm of this iconic urban landscape.";
    } else if (title === "Bridge over a Pond of Water Lilies") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "130.2 cm × 89.5 cm (51.3 in × 35.2 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Bridge over a Pond of Water Lilies is a masterpiece by Claude Monet painted in 1899. This painting is part of Monet's famous Water Lilies series, which depicts his garden at Giverny. In this particular work, Monet captures the tranquility of his Japanese-style bridge over a pond adorned with water lilies and surrounded by lush vegetation. The play of light and reflection on the water's surface, combined with Monet's signature brushwork, creates a mesmerizing and immersive experience for the viewer, inviting them into the serene beauty of the artist's garden.";
    } else if (title === "Camille Monet on a Garden Bench") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "60 cm × 100 cm (23.6 in × 39.4 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Camille Monet on a Garden Bench is a captivating portrait painted by Claude Monet in 1873. The painting features Monet's wife, Camille, seated on a garden bench surrounded by lush greenery. The soft, dappled light filtering through the foliage creates a gentle atmosphere, while Camille's contemplative gaze adds a sense of intimacy to the scene. Monet's fluid brushwork and subtle color harmonies capture the fleeting moment with remarkable sensitivity, imbuing the portrait with a sense of quiet elegance and emotional depth.";
    } else if (title === "The Frog Pond") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "72 cm × 54 cm (28.3 in × 21.3 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>The Frog Pond is a charming painting by Claude Monet, created in 1869. It depicts a tranquil scene of a pond with water lilies and lush vegetation, teeming with life, including frogs and insects. The play of light on the water's surface and the vibrant colors of the foliage create a sense of serenity and natural beauty. With his loose brushwork and keen observation of nature, Monet captures the essence of a peaceful moment in the countryside, inviting viewers to immerse themselves in the idyllic setting.";
    } else if (title === "Parasol") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "180 cm × 130 cm (70.9 in × 51.2 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Parasol is an enchanting painting by Claude Monet completed in 1886. The artwork portrays a sunny day in the countryside, with a woman holding a parasol as she strolls through a field of vibrant flowers. The parasol casts a shadow over the woman, shielding her from the bright sunlight, while the surrounding landscape is bathed in warm, dappled light. Monet's expressive brushwork and vibrant color palette capture the fleeting effects of light and movement, evoking a sense of joy and vitality.";
    } else if (title === "Saint-Lazare Station") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "75 cm × 104 cm (29.5 in × 40.9 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Saint-Lazare Station is a notable painting by Claude Monet completed in 1877. It is part of Monet's series depicting the bustling atmosphere of the train station in Paris. In this artwork, Monet captures the steam and smoke billowing from the locomotives, as well as the hustle and bustle of travelers on the platform. The play of light filtering through the station's glass roof adds depth and dynamism to the scene, while Monet's loose brushwork conveys the energy and movement of urban life.";
    } else if (title === "San Giorgio Maggiore at Dusk") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "81 cm × 92 cm (31.9 in × 36.2 in)<br>" +
        "<br>Private Collection" +
        "<br><br>San Giorgio Maggiore at Dusk is a captivating painting by Claude Monet completed in 1908. It depicts the iconic church of San Giorgio Maggiore in Venice bathed in the soft light of dusk. The tranquil waters of the Venetian lagoon reflect the warm glow of the setting sun, creating a sense of serenity and timeless beauty. Monet's masterful use of color and light captures the ethereal atmosphere of the scene, transporting viewers to the magical city of Venice.";
    } else if (title === "Water Lilies") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "200 cm × 180 cm (78.7 in × 70.9 in)<br>" +
        "<br>Musée de l'Orangerie, Paris, France" +
        "<br><br>Water Lilies is a series of paintings by Claude Monet, created between 1914 and 1926. These monumental artworks, which adorn the walls of the Musée de l'Orangerie in Paris, depict Monet's beloved water garden at his home in Giverny. The paintings capture the ever-changing reflections of light and color on the surface of the water, as well as the delicate beauty of the water lilies in bloom. With their large scale and immersive quality, the Water Lilies series offers viewers a contemplative and meditative experience, inviting them to lose themselves in the tranquility of nature.";
    } else if (title === "The Bodmer Oak, Fontainebleau Forest") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "53 cm × 64 cm (20.9 in × 25.2 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>The Bodmer oak, Fontainebleau Forest is a captivating painting by Claude Monet completed in 1865. It portrays a majestic oak tree in the Fontainebleau Forest, bathed in dappled sunlight filtering through the foliage. The play of light and shadow, combined with Monet's expressive brushwork, imbues the scene with a sense of vitality and movement. The towering oak tree stands as a symbol of resilience and strength, while the surrounding forest evokes a sense of mystery and enchantment.";
    } else if (title === "Garden at Sainte-Adresse") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "98 cm × 129 cm (38.6 in × 50.8 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Garden at Sainte-Adresse is a delightful painting by Claude Monet completed in 1867. It depicts a sun-drenched garden overlooking the sea at the resort town of Sainte-Adresse in Normandy, France. The vibrant colors of the flowers and foliage, combined with the shimmering blue of the sea and sky, create a sense of joy and vitality. Monet's loose brushwork and keen observation of light and color capture the essence of a sunny day by the seaside, inviting viewers to bask in the beauty of nature.";
    } else if (title === "Regatta at Sainte-Adresse") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "75 cm × 104 cm (29.5 in × 40.9 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>Regatta at Sainte-Adresse is a vibrant painting by Claude Monet completed in 1867. It portrays a regatta, or boat race, taking place off the coast of the resort town of Sainte-Adresse in Normandy, France. The sailboats glide gracefully across the shimmering blue waters of the sea, while spectators line the shore to watch the spectacle. Monet's dynamic composition and lively brushwork capture the excitement and energy of the regatta, transporting viewers to a sun-drenched day by the seaside.";
    } else if (title === "The Parc Monceau") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "81 cm × 65 cm (31.9 in × 25.6 in)<br>" +
        "<br>Musée d'Orsay, Paris, France" +
        "<br><br>The Parc Monceau is a charming painting by Claude Monet completed in 1878. It depicts the Parc Monceau, a picturesque park located in the heart of Paris. The painting showcases the lush greenery, winding pathways, and elegant statues that populate the park, as well as the vibrant colors of flowers in bloom. Monet's loose brushwork and skillful use of light and shadow capture the park's tranquil atmosphere, inviting viewers to take a leisurely stroll through its enchanting landscapes.";
    } else if (title === "View of Vétheuil") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "60 cm × 73 cm (23.6 in × 28.7 in)<br>" +
        "<br>Private Collection" +
        "<br><br>View of Vétheuil is a captivating painting by Claude Monet completed in 1880. It portrays a scenic view of the village of Vétheuil, situated along the banks of the Seine River. The painting captures the tranquility of the rural landscape, with charming houses nestled among lush trees and rolling hills. Monet's use of vibrant colors and expressive brushwork imbues the scene with a sense of life and movement, while the play of light and shadow adds depth and dimension to the composition.";
    } else if (title === "The Manneporte near Étretat") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "65.4cm × 92.1 cm (25.7 in × 36.2 in)<br>" +
        "<br>Private Collection" +
        "<br><br>The Manneporte near Étretat is a striking painting by Claude Monet completed in 1886. It depicts the Manneporte, a natural rock formation near the coastal town of Étretat in Normandy, France. The painting captures the dramatic cliffs and arches of the Manneporte, towering over the turbulent waters of the English Channel. Monet's bold brushwork and dynamic composition convey the raw power and beauty of the natural landscape, while the subtle variations in color and light evoke the ever-changing moods of the sea.";
    } else if (title === "Haystacks (Effect of Snow and Sun)") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "81 cm × 92 cm (31.9 in × 36.2 in)<br>" +
        "<br>The Met Fifth Avenue in Gallery 819" +
        "<br><br>Haystacks (Effect of Snow and Sun) is one of a series of paintings by Claude Monet depicting haystacks in various weather conditions and times of day. Completed in 1891, this particular work captures the haystacks under the effects of snow and sunlight. Monet's meticulous observation of light and atmosphere is evident in the subtle shifts of color and tone across the snow-covered landscape. The warm hues of sunlight contrast with the cool shadows, creating a dynamic interplay of light and shadow. Through his loose brushwork and emphasis on capturing the fleeting effects of light, Monet transforms a simple rural scene into a study of the ephemeral beauty of nature.";
    } else if (title === "The Four Trees") {
        modalDescription.innerHTML = "Oil on canvas<br>" +
        "81.9 cm ×  81.6cm (32.2 in × 32.1 in)<br>" +
        "<br>The Met Fifth Avenue in Gallery 819" +
        "<br><br>The Four Trees is a masterpiece by Claude Monet painted in 1891. In this painting, Monet depicts four slender poplar trees standing tall against the backdrop of a tranquil landscape. The delicate branches of the trees sway gently in the breeze, their leaves rustling softly in the wind. Monet's use of vibrant colors and bold brushstrokes captures the essence of the moment, conveying a sense of serenity and harmony with nature. Through his mastery of light and color, Monet infuses the scene with a timeless beauty, inviting viewers to immerse themselves in the tranquility of the countryside.";
    } else{   
        modalDescription.innerHTML = "Description not available";
    }
}

// ABOUT TABS
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("biography").style.display = "block";
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    
    // Deactivate all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    
    // Activate the button that opened the tab
    evt.currentTarget.classList.add("active");
}
