export const openModal = (parent) => {
    $(`#${parent}-modal`).removeClass('modal--closed');
}

export const closeModal = (parent) => {
    $(`#${parent}-modal`).addClass('modal--closed');
}