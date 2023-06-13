import { getStaticDate } from "./datetime.js"

export const formatUserRouteSearch = (routes) => {
    let formated = '';

    routes.forEach(route => {
        formated += `
            <ul class="table__body__row table__body__row--route" data-routeid="${route.id}">
                <li class="table__body__row__item">${route.starting_address}</li>
                <li class="table__body__row__item">${route.dest_address}</li>
                <li class="table__body__row__item">${route.distance}</li>
                <li class="table__body__row__item">R${Math.floor(route.fare)}</li>
            </ul>
        `    
    });

    return formated;
}

export const formatDriverRouteSearch = (routes) => {
    let formated = '';

    routes.forEach(route => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${route.starting_address}</li>
                <li class="table__body__row__item">${route.dest_address}</li>
                <li class="table__body__row__item">${route.distance}</li>
                <li class="table__body__row__item">R${Math.floor(route.fare)}</li>
                <li class="table__body__row__item table__body__row--new-trip" data-routeid="${route.id}">Start trip</li>
            </ul>
        `
    });

    return formated;
}

export const formatUsers = (users) => {
    let formated = '', index = 0;

    users.forEach(user => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${++index}</li>
                <li class="table__body__row__item">${user.firstname}</li>
                <li class="table__body__row__item">${user.lastname}</li>
                <li class="table__body__row__item">${user.email}</li>
            </ul>
        `
    });

    return formated;
}

export const formatAssPassangers = (passangers) => {
    let formated = '', index = 0;

    passangers.forEach(passanger => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${passanger.firstname} ${passanger.lastname}</li>
                <li class="table__body__row__item">${passanger.make} ${passanger.model}</li>
                <li class="table__body__row__item">${passanger.licence}</li>
                <li class="table__body__row__item">${passanger.starting_address}</li>
                <li class="table__body__row__item">${passanger.dest_address}</li>
                <li class="table__body__row__item">${getStaticDate(passanger.booked_on)}</li>
            </ul>
        `
    });

    return formated;
}

export const formatTaxiAssociationAdmins = (admnis) => {
    let formated = '', index = 0;

    admnis.forEach(admin => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${++index}</li>
                <li class="table__body__row__item">${admin.firstname}</li>
                <li class="table__body__row__item">${admin.lastname}</li>
                <li class="table__body__row__item">${admin.email}</li>
                <li class="table__body__row__item">${admin.association_name}</li>
            </ul>
        `
    });

    return formated;
}

export const formatTrips = (trips) => {
    let formated = '';

    trips.forEach(trip => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${trip.starting_address}</li>
                <li class="table__body__row__item">${trip.dest_address}</li>
                <li class="table__body__row__item">${trip.firstname} ${trip.lastname}</li>
                <li class="table__body__row__item">${trip.make}, ${trip.model}, ${trip.licence}</li>
            </ul>
        `
    });

    return formated;
}

export const formatTripHistory = (trips) => {
    let formated = '';

    trips.forEach(trip => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${trip.licence}</li>
                <li class="table__body__row__item">${trip.starting_address}</li>
                <li class="table__body__row__item">${trip.dest_address}</li>
                <li class="table__body__row__item">R${Math.floor(trip.fare)}</li>
                <li class="table__body__row__item">${getStaticDate(trip.booked_on)}</li>
            </ul>
        `
    });

    return formated;
}

export const formatRoutes = (routes) => {
    let formated = '';

    routes.forEach(route => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${route.firstname + ' ' + route.lastname}</li>
                <li class="table__body__row__item">${route.starting_address}</li>
                <li class="table__body__row__item">${route.dest_address}</li>
                <li class="table__body__row__item">${route.association_name}</li>
            </ul>
        `
    });

    return formated;
}

export const formatRoutesForAssociation = (routes) => {
    let formated = '', index = 0;

    routes.forEach(route => {
        formated += `
            <ul class="table__body__row">
                <li class="table__body__row__item">${++index}</li>
                <li class="table__body__row__item">${route.starting_address}</li>
                <li class="table__body__row__item">${route.dest_address}</li>
                <li class="table__body__row__item">Remove</li>
            </ul>
        `
    });

    return formated;
}