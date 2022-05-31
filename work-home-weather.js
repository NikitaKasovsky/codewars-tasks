const rainy = ["rainy", "thunderstorms"];

function minUmbrellas(weathers) {
    let umbrellasWork = 0;
    let umbrellasHome = 0;

    weathers.forEach((weather, index) => {
        if (!!rainy.find(item => item === weather)) {
            if (!((index + 1) % 2)) {
                if (!umbrellasWork) {
                    umbrellasHome++;
                    return;
                }

                if (umbrellasWork > 0) {
                    umbrellasWork--;
                    umbrellasHome++;
                };
            }
            if (!!((index + 1) % 2)) {
                if (umbrellasHome > 0) {
                    umbrellasWork++;
                    umbrellasHome--;
                    return;
                }

                umbrellasWork++;
            }
        }
    })

    return umbrellasWork + umbrellasHome;
}

console.log(minUmbrellas(["windy", "rainy", "cloudy", "windy", "windy", "thunderstorms", "rainy", "windy", "thunderstorms", "windy" ]));
console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]));
console.log(minUmbrellas(["sunny", "windy", "sunny", "clear"]));
console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]));
console.log(minUmbrellas(["rainy", "windy", "thunderstorms", "clear", "rainy", "rainy", "windy", "rainy", "clear", "clear"]));

