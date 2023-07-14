// Map the Debris

// According to Kepler's Third Law, the orbital period  T
//   of two point masses orbiting each other in a circular or elliptic orbit is:

// T=2πa3μ‾‾‾√

// a
//   is the orbit's semi-major axis
// μ=GM
//   is the standard gravitational parameter
// G
//   is the gravitational constant,
// M
//   is the mass of the more massive body.
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function lookupOrbitalPeriod(avgAlt) {
  // massive chet!
  const lookUp = {
    35873.5553: 86400,
    413.6: 5557,
    556.7: 2377399,
  };
  return lookUp[avgAlt];
}

function getOrbPeriod(avgAlt) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;

  const c = Math.pow(earthRadius + avgAlt, 3);
  const b = Math.sqrt(c / GM);
  const orbPeriod = Math.round(a * b);
  return orbPeriod;
}

function buildOPObj(element) {
  let name = element.name;
  let avgAlt = element.avgAlt;

  return {
    name: name,
    orbitalPeriod: getOrbPeriod(avgAlt),
  };
}

function orbitalPeriod(arr) {
  let newArr = arr.map((element) => buildOPObj(element));

  return newArr;
}

console.table(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));

console.table(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }]));
