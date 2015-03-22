#Locations Endpoint

Enpoint returns:

```
{
    derivedLocation: {
        name: 'ABC',
        id: 123
    },
    possibleLocations: [
        ...,
        {
            name: 'ABC',
            id: 123
        },
        ...
    ]
}
```

###By location
Accepts a coordinates object and a UUID to sort the response by proximity and fequency/preference of the user
/locations/?location={coordinates object}&user=UUID

i.e.:
```
coords: {
    Coordinatesaccuracy: 20,
    altitude: null,
    altitudeAccuracy: null,
    heading: nulll,
    atitude: 40.6644954,
    longitude: -73.96065709999999,
    speed: null
}
```

###By user
Accepts a UUID to sort the response by fequency/preference of the user
/locations/?user=UUID

#Beverages endpoint

Endpoint returns:

```
{
    beverages: [
        ...,
        {
            name: 'ABC',
            price: 123,
            id: 123
        },
        ...
    ]
}
```

###By location
Accepts a location ID and a user ID
/beverages/?location=ID&user=UUID

#Rounds enpoint

Endpoint returns:

```
{
    rounds: [
        ...,
        {
            date: timestamp,
            total: 123,
            location_id: 123,
            round_id: 123,
            beverages: [
                ...,
                {
                    name: 'ABC',
                    price: 123,
                    id: 123
                },
                ...
            ]
        },
        ...
    ]
}
```

###By user
Accepts user ID to return orders sorted by most recent. Also accepts paging data for reduced request size.
/rounds/?user=UUID&page_count=10&page=0

###By location
Accepts user ID and location ID to return orders sorted by most recent. Also accepts paging data for reduced request size.
/rounds/?user=UUID&location=ID&page_count=10&page=0

#Round endpoint

Endpoint accepts:

```
{
    beverages: [
        ...,
        {
            id: 123
        },
        ...
    ]
}
```

###By user and location
Posting an array of beverages triggers an order by the user at the agent ID.
/round/?user=UUID&location=id
