window.onload = function() {
    const background = document.getElementById('.background');
    const planets = document.querySelectorAll('.planet');

    function positionPlanets() {
        planets.forEach(planet => {
            let overlap = false;
            let left, top;

            do {
                overlap = false;
                left = Math.random() * (background.offsetWidth - planet.offsetWidth);
                top = Math.random() * (background.offsetHeight - planet.offsetHeight);

                planets.forEach(otherPlanet => {
                    if (planet !== otherPlanet) {
                        const rect1 = planet.getBoundingClientRect();
                        const rect2 = otherPlanet.getBoundingClientRect();
                        if (!(rect1.right < rect2.left || 
                              rect1.left > rect2.right || 
                              rect1.bottom < rect2.top || 
                              rect1.top > rect2.bottom)) {
                            overlap = true;
                        }
                    }
                });
            } while (overlap);

            planet.style.left = `${left}px`;
            planet.style.top = `${top}px`;
        });
    }

    positionPlanets();
    window.addEventListener('resize', positionPlanets);
};
