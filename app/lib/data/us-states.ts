/**
 * US States Data
 * All 50 states for generating state-specific ESTA content
 */

export interface USState {
  name: string;
  slug: string;
  code: string; // 2-letter state code
  population?: number;
  capital?: string;
  region: 'Northeast' | 'Southeast' | 'Midwest' | 'Southwest' | 'West';
  topCities?: string[]; // Top 3-5 cities in the state
}

export const US_STATES: USState[] = [
  // Northeast
  { name: 'Connecticut', slug: 'connecticut', code: 'CT', capital: 'Hartford', region: 'Northeast', population: 3600000, topCities: ['Bridgeport', 'New Haven', 'Hartford'] },
  { name: 'Maine', slug: 'maine', code: 'ME', capital: 'Augusta', region: 'Northeast', population: 1360000, topCities: ['Portland', 'Lewiston', 'Bangor'] },
  { name: 'Massachusetts', slug: 'massachusetts', code: 'MA', capital: 'Boston', region: 'Northeast', population: 7000000, topCities: ['Boston', 'Worcester', 'Cambridge'] },
  { name: 'New Hampshire', slug: 'new-hampshire', code: 'NH', capital: 'Concord', region: 'Northeast', population: 1380000, topCities: ['Manchester', 'Nashua', 'Concord'] },
  { name: 'New Jersey', slug: 'new-jersey', code: 'NJ', capital: 'Trenton', region: 'Northeast', population: 9300000, topCities: ['Newark', 'Jersey City', 'Paterson'] },
  { name: 'New York', slug: 'new-york', code: 'NY', capital: 'Albany', region: 'Northeast', population: 20000000, topCities: ['New York City', 'Buffalo', 'Rochester'] },
  { name: 'Pennsylvania', slug: 'pennsylvania', code: 'PA', capital: 'Harrisburg', region: 'Northeast', population: 13000000, topCities: ['Philadelphia', 'Pittsburgh', 'Allentown'] },
  { name: 'Rhode Island', slug: 'rhode-island', code: 'RI', capital: 'Providence', region: 'Northeast', population: 1100000, topCities: ['Providence', 'Warwick', 'Cranston'] },
  { name: 'Vermont', slug: 'vermont', code: 'VT', capital: 'Montpelier', region: 'Northeast', population: 650000, topCities: ['Burlington', 'South Burlington', 'Rutland'] },

  // Southeast
  { name: 'Alabama', slug: 'alabama', code: 'AL', capital: 'Montgomery', region: 'Southeast', population: 5000000, topCities: ['Birmingham', 'Montgomery', 'Mobile'] },
  { name: 'Arkansas', slug: 'arkansas', code: 'AR', capital: 'Little Rock', region: 'Southeast', population: 3000000, topCities: ['Little Rock', 'Fort Smith', 'Fayetteville'] },
  { name: 'Delaware', slug: 'delaware', code: 'DE', capital: 'Dover', region: 'Southeast', population: 1000000, topCities: ['Wilmington', 'Dover', 'Newark'] },
  { name: 'Florida', slug: 'florida', code: 'FL', capital: 'Tallahassee', region: 'Southeast', population: 22000000, topCities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando'] },
  { name: 'Georgia', slug: 'georgia', code: 'GA', capital: 'Atlanta', region: 'Southeast', population: 11000000, topCities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah'] },
  { name: 'Kentucky', slug: 'kentucky', code: 'KY', capital: 'Frankfort', region: 'Southeast', population: 4500000, topCities: ['Louisville', 'Lexington', 'Bowling Green'] },
  { name: 'Louisiana', slug: 'louisiana', code: 'LA', capital: 'Baton Rouge', region: 'Southeast', population: 4600000, topCities: ['New Orleans', 'Baton Rouge', 'Shreveport'] },
  { name: 'Maryland', slug: 'maryland', code: 'MD', capital: 'Annapolis', region: 'Southeast', population: 6200000, topCities: ['Baltimore', 'Columbia', 'Germantown'] },
  { name: 'Mississippi', slug: 'mississippi', code: 'MS', capital: 'Jackson', region: 'Southeast', population: 3000000, topCities: ['Jackson', 'Gulfport', 'Southaven'] },
  { name: 'North Carolina', slug: 'north-carolina', code: 'NC', capital: 'Raleigh', region: 'Southeast', population: 10700000, topCities: ['Charlotte', 'Raleigh', 'Greensboro'] },
  { name: 'South Carolina', slug: 'south-carolina', code: 'SC', capital: 'Columbia', region: 'Southeast', population: 5300000, topCities: ['Charleston', 'Columbia', 'North Charleston'] },
  { name: 'Tennessee', slug: 'tennessee', code: 'TN', capital: 'Nashville', region: 'Southeast', population: 7000000, topCities: ['Nashville', 'Memphis', 'Knoxville'] },
  { name: 'Virginia', slug: 'virginia', code: 'VA', capital: 'Richmond', region: 'Southeast', population: 8700000, topCities: ['Virginia Beach', 'Norfolk', 'Richmond'] },
  { name: 'West Virginia', slug: 'west-virginia', code: 'WV', capital: 'Charleston', region: 'Southeast', population: 1800000, topCities: ['Charleston', 'Huntington', 'Morgantown'] },

  // Midwest
  { name: 'Illinois', slug: 'illinois', code: 'IL', capital: 'Springfield', region: 'Midwest', population: 12700000, topCities: ['Chicago', 'Aurora', 'Naperville'] },
  { name: 'Indiana', slug: 'indiana', code: 'IN', capital: 'Indianapolis', region: 'Midwest', population: 6800000, topCities: ['Indianapolis', 'Fort Wayne', 'Evansville'] },
  { name: 'Iowa', slug: 'iowa', code: 'IA', capital: 'Des Moines', region: 'Midwest', population: 3200000, topCities: ['Des Moines', 'Cedar Rapids', 'Davenport'] },
  { name: 'Kansas', slug: 'kansas', code: 'KS', capital: 'Topeka', region: 'Midwest', population: 2900000, topCities: ['Wichita', 'Overland Park', 'Kansas City'] },
  { name: 'Michigan', slug: 'michigan', code: 'MI', capital: 'Lansing', region: 'Midwest', population: 10100000, topCities: ['Detroit', 'Grand Rapids', 'Warren'] },
  { name: 'Minnesota', slug: 'minnesota', code: 'MN', capital: 'Saint Paul', region: 'Midwest', population: 5700000, topCities: ['Minneapolis', 'Saint Paul', 'Rochester'] },
  { name: 'Missouri', slug: 'missouri', code: 'MO', capital: 'Jefferson City', region: 'Midwest', population: 6200000, topCities: ['Kansas City', 'St. Louis', 'Springfield'] },
  { name: 'Nebraska', slug: 'nebraska', code: 'NE', capital: 'Lincoln', region: 'Midwest', population: 2000000, topCities: ['Omaha', 'Lincoln', 'Bellevue'] },
  { name: 'North Dakota', slug: 'north-dakota', code: 'ND', capital: 'Bismarck', region: 'Midwest', population: 780000, topCities: ['Fargo', 'Bismarck', 'Grand Forks'] },
  { name: 'Ohio', slug: 'ohio', code: 'OH', capital: 'Columbus', region: 'Midwest', population: 11800000, topCities: ['Columbus', 'Cleveland', 'Cincinnati'] },
  { name: 'South Dakota', slug: 'south-dakota', code: 'SD', capital: 'Pierre', region: 'Midwest', population: 900000, topCities: ['Sioux Falls', 'Rapid City', 'Aberdeen'] },
  { name: 'Wisconsin', slug: 'wisconsin', code: 'WI', capital: 'Madison', region: 'Midwest', population: 5900000, topCities: ['Milwaukee', 'Madison', 'Green Bay'] },

  // Southwest
  { name: 'Arizona', slug: 'arizona', code: 'AZ', capital: 'Phoenix', region: 'Southwest', population: 7400000, topCities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale'] },
  { name: 'New Mexico', slug: 'new-mexico', code: 'NM', capital: 'Santa Fe', region: 'Southwest', population: 2100000, topCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho'] },
  { name: 'Oklahoma', slug: 'oklahoma', code: 'OK', capital: 'Oklahoma City', region: 'Southwest', population: 4000000, topCities: ['Oklahoma City', 'Tulsa', 'Norman'] },
  { name: 'Texas', slug: 'texas', code: 'TX', capital: 'Austin', region: 'Southwest', population: 30000000, topCities: ['Houston', 'San Antonio', 'Dallas', 'Austin'] },

  // West
  { name: 'Alaska', slug: 'alaska', code: 'AK', capital: 'Juneau', region: 'West', population: 730000, topCities: ['Anchorage', 'Fairbanks', 'Juneau'] },
  { name: 'California', slug: 'california', code: 'CA', capital: 'Sacramento', region: 'West', population: 39000000, topCities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose'] },
  { name: 'Colorado', slug: 'colorado', code: 'CO', capital: 'Denver', region: 'West', population: 5800000, topCities: ['Denver', 'Colorado Springs', 'Aurora'] },
  { name: 'Hawaii', slug: 'hawaii', code: 'HI', capital: 'Honolulu', region: 'West', population: 1400000, topCities: ['Honolulu', 'Pearl City', 'Hilo'] },
  { name: 'Idaho', slug: 'idaho', code: 'ID', capital: 'Boise', region: 'West', population: 1900000, topCities: ['Boise', 'Meridian', 'Nampa'] },
  { name: 'Montana', slug: 'montana', code: 'MT', capital: 'Helena', region: 'West', population: 1100000, topCities: ['Billings', 'Missoula', 'Great Falls'] },
  { name: 'Nevada', slug: 'nevada', code: 'NV', capital: 'Carson City', region: 'West', population: 3200000, topCities: ['Las Vegas', 'Henderson', 'Reno'] },
  { name: 'Oregon', slug: 'oregon', code: 'OR', capital: 'Salem', region: 'West', population: 4200000, topCities: ['Portland', 'Eugene', 'Salem'] },
  { name: 'Utah', slug: 'utah', code: 'UT', capital: 'Salt Lake City', region: 'West', population: 3400000, topCities: ['Salt Lake City', 'West Valley City', 'Provo'] },
  { name: 'Washington', slug: 'washington', code: 'WA', capital: 'Olympia', region: 'West', population: 7700000, topCities: ['Seattle', 'Spokane', 'Tacoma'] },
  { name: 'Wyoming', slug: 'wyoming', code: 'WY', capital: 'Cheyenne', region: 'West', population: 580000, topCities: ['Cheyenne', 'Casper', 'Laramie'] },
];

export function getStateBySlug(slug: string): USState | undefined {
  return US_STATES.find(state => state.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return US_STATES.map(state => state.slug);
}

export function getStatesByRegion(region: USState['region']): USState[] {
  return US_STATES.filter(state => state.region === region);
}
