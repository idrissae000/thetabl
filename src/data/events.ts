// Upcoming dinner events.
// To connect a CMS later, replace this array with an API fetch.

export type EventStatus = 'invite-only' | 'open' | 'sold-out'

export type DinnerEvent = {
  id: string
  city: string        // Short city label shown on card header, e.g. "NYC"
  cityFull: string    // Full city name, e.g. "New York City"
  date: string        // Display date string, e.g. "April 18"
  status: EventStatus
}

export const upcomingEvents: DinnerEvent[] = [
  {
    id: 'nyc-apr',
    city: 'NYC',
    cityFull: 'New York City',
    date: 'April 18',
    status: 'invite-only',
  },
  {
    id: 'houston-apr',
    city: 'Houston',
    cityFull: 'Houston',
    date: 'April 22',
    status: 'invite-only',
  },
  {
    id: 'chicago-may',
    city: 'Chicago',
    cityFull: 'Chicago',
    date: 'May 2',
    status: 'invite-only',
  },
  {
    id: 'austin-may',
    city: 'Austin',
    cityFull: 'Austin',
    date: 'May 10',
    status: 'invite-only',
  },
]

// Calendar page events (more detail, multiple dates per city)
export type CalendarEvent = {
  id: string
  cityCode: string   // Short code shown prominently, e.g. "NYC"
  cityName: string   // e.g. "New York City"
  dates: string[]    // One or more date strings
  image?: string     // Optional city background image path
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: 'nyc-510',
    cityCode: 'NYC',
    cityName: 'New York City',
    dates: ['5.10'],
    image: '/images/cities/nyc.jpg',
  },
  {
    id: 'htx-517',
    cityCode: 'HTX',
    cityName: 'Houston',
    dates: ['5.17'],
    image: '/images/cities/houston.jpg',
  },
  {
    id: 'chi-523',
    cityCode: 'CHI',
    cityName: 'Chicago',
    dates: ['5.23'],
    image: '/images/cities/chicago.jpg',
  },
  {
    id: 'austin-606',
    cityCode: 'Austin',
    cityName: 'Austin',
    dates: ['6.06', '6.28'],
    image: '/images/cities/austin.jpg',
  },
  {
    id: 'dallas-613',
    cityCode: 'Dallas',
    cityName: 'Dallas',
    dates: ['6.13', '7.19'],
    image: '/images/cities/dallas.jpg',
  },
  {
    id: 'dtx-613',
    cityCode: 'DTX',
    cityName: 'Dallas',
    dates: ['6.13', '7.19'],
    image: '/images/cities/dallas.jpg',
  },
]
